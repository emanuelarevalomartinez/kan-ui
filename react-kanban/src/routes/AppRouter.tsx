import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home";
import { ComponentsGallery } from "../components";
import { DemoView } from "../demo";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "components-gallery",
          element: <ComponentsGallery />,
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