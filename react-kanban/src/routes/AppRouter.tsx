import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomeView, Start } from "../app";
import {
  AboutUs,
  CatalogView,
  KanbanBoard,
  KanbanCard,
  KanbanColumn,
  Requirements,
} from "../app";
import { DemoView } from "../app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    children: [
      {
        index: true,
        element: <Start/>,
      },
      {
        path: "catalog",
        element: <CatalogView />,
        children: [
          {
            index: true,
            element: <Navigate to="requirements" replace />,
          },
          {
            path: "requirements",
            element: <Requirements />,
          },
          {
            path: "kanban-board",
            element: <KanbanBoard />,
          },
          {
            path: "kanban-column",
            element: <KanbanColumn />,
          },
          {
            path: "kanban-card",
            element: <KanbanCard />,
          },
          {
            path: "about-us",
            element: <AboutUs />,
          },
        ],
      },
      {
        path: "demo",
        element: <DemoView />,
      },
    ],
  },
]);

export default router;
