
    export const APP_ROUTES = {
        HOME: "/",
        CATALOG: "/catalog",
        CATALOG_REQUIREMENTS: "/catalog/requirements",
        CATALOG_KANBAN_BOARD: "/catalog/kanban-board",
        CATALOG_KANBAN_COLUMN: "/catalog/kanban-column",
        CATALOG_KANBAN_CARD: "/catalog/kanban-card",
        CATALOG_ABOUT_US: "/catalog/about-us",
        DEMO: "/demo",
    } as const;
    
    export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];