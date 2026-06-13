import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx');
        const pageResolver =
            pages[`./pages/${name}.tsx`] || pages[`./pages/${name}/page.tsx`];

        if (!pageResolver) {
            throw new Error(`Page not found: ${name}`);
        }

        const module: any = await pageResolver();
        const page = module.default;

        if (!page) {
            throw new Error(`Component not found in ${name}`);
        }

        // Automatic layout application based on folder structure
        if (page.layout === undefined) {
            if (name.startsWith('admin/')) {
                const AdminLayout = (
                    await (import('./pages/admin/layout') as any)
                ).default;
                page.layout = (children: any) => (
                    <AdminLayout>{children}</AdminLayout>
                );
            } else if (name.startsWith('user/')) {
                const UserLayout = (await (import('./pages/user/layout') as any))
                    .default;
                page.layout = (children: any) => (
                    <UserLayout>{children}</UserLayout>
                );
            }
        }

        return module;
    },
    setup({ el, App, props }) {
        // Bridge Next.js expected props (params, searchParams) in a stable way
        const bridgedProps = {
            ...props,
            initialPage: {
                ...props.initialPage,
                props: {
                    ...props.initialPage.props,
                    params: Promise.resolve(props.initialPage.props),
                    searchParams: Promise.resolve(
                        props.initialPage.props.query || {}
                    ),
                },
            },
        };

        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...bridgedProps} />);
            return;
        }

        createRoot(el).render(<App {...bridgedProps} />);
    },
    progress: {
        color: '#4B5563',
    },
});
