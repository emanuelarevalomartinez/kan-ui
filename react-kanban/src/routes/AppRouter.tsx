import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home";
import { ComponentsGallery, KanbanBoard } from "../components";
import { DemoView } from "../demo";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "components-gallery",
          element: <ComponentsGallery />,
          children: [
            {
              path: "kanbanBoard",
              element: <KanbanBoard />,
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