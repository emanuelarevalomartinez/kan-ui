import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./NavBar";
import { APP_ROUTES } from "../routes";
import { Start } from "./Start";

export function Home() {

  const location = useLocation();

  return (
    <>

      <Navbar />
      
      <div>
        {location.pathname === APP_ROUTES.HOME ? 
        <Start /> : <Outlet />
        }
        </div>
    </>
  );
}
