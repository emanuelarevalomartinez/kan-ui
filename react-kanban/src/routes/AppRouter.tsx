import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home";
import { AboutUs, ComponentsGallery, KanbanBoard, KanbanCard, KanbanColumn } from "../components";
import { DemoView } from "../demo";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "components",
          element: <ComponentsGallery />,
          children: [
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
          ]
        },
        {
            path: "demo",
            element: <DemoView />,
        },
      ],
    } 
]
);

export default router;