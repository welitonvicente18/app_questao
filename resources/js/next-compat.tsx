import { Link as InertiaLink, router } from '@inertiajs/react';
import React from 'react';

export const Link = ({ href, children, ...props }: any) => {
    return (
        <InertiaLink href={href} {...props}>
            {children}
        </InertiaLink>
    );
};

export const useRouter = () => {
    return {
        push: (url: string) => router.visit(url),
        replace: (url: string) => router.replace(url),
        back: () => window.history.back(),
        prefetch: () => {}, // Inertia doesn't have a direct prefetch like Next.js
    };
};

export const usePathname = () => {
    return window.location.pathname;
};

export const redirect = (url: string) => {
    router.visit(url);
};

export default Link;
