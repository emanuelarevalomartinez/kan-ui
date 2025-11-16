

    export const APP_ROUTES = {
        HOME: "/",
        COMPONENTS: "/components",
        DEMO: "/demo",
    } as const;
    
    export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];