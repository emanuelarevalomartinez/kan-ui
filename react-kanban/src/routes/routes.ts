
/* flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] */

    export const APP_ROUTES = {
        HOME: "/",
        COMPONENTS: "/components",
        REQUIREMENTS: "/components/requirements",
        KANBAN_BOARD: "/components/kanban-board",
        KANBAN_COLUMN: "/components/kanban-column",
        KANBAN_CARD: "/components/kanban-card",
        ABOUT_US: "/components/about-us",
        DEMO: "/demo",
    } as const;
    
    export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];