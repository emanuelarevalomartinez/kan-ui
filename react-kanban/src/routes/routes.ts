
    export const APP_ROUTES = {
        HOME: "/",
        COMPONENTS: "/catalog",
        REQUIREMENTS: "/catalog/requirements",
        KANBAN_BOARD: "/catalog/kanban-board",
        KANBAN_COLUMN: "/catalog/kanban-column",
        KANBAN_CARD: "/catalog/kanban-card",
        ABOUT_US: "/catalog/about-us",
        DEMO: "/demo",
    } as const;
    
    export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];