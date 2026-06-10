import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        console.log('Resolving page:', name);
        const pages = import.meta.glob('./pages/**/*.tsx');
        const pageResolver = pages[`./pages/${name}.tsx`] || pages[`./pages/${name}/page.tsx`];
        
        if (!pageResolver) {
            console.error(`Page not found: ./pages/${name}.tsx or ./pages/${name}/page.tsx`);
            throw new Error(`Page not found: ./pages/${name}.tsx or ./pages/${name}/page.tsx`);
        }

        const module: any = await pageResolver();
        console.log('Module loaded for:', name, module);
        const OriginalComponent = module.default;
        
        if (!OriginalComponent) {
            throw new Error(`Component not found as default export in ${name}`);
        }

        // Bridge Next.js expected props (params, searchParams)
        const BridgedComponent = (props: any) => {
            const bridgedProps = {
                ...props,
                // Next.js 15+ expects params and searchParams to be promises
                params: Promise.resolve(props),
                searchParams: Promise.resolve(props.query || {}),
            };
            return <OriginalComponent {...bridgedProps} />;
        };

        // Transfer layout if explicitly defined on the original component
        if (OriginalComponent.layout) {
            BridgedComponent.layout = OriginalComponent.layout;
        }

        // Automatic layout application based on folder structure
        if (!BridgedComponent.layout) {
            if (name.startsWith('admin/')) {
                const AdminLayout = (await (import('./pages/admin/layout') as any)).default;
                BridgedComponent.layout = (children: any) => <AdminLayout>{children}</AdminLayout>;
            } else if (name.startsWith('user/')) {
                const UserLayout = (await (import('./pages/user/layout') as any)).default;
                BridgedComponent.layout = (children: any) => <UserLayout>{children}</UserLayout>;
            }
        }

        return { default: BridgedComponent };
    },
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
