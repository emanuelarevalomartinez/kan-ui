import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { useVoice } from "../../context";
import { useEffect } from "react";
import { Actions } from "devosaurus";
import { APP_ROUTES } from "../../routes";

export function HomeView() {

  const devo = useVoice();
  
    useEffect(() => {
      if (!devo) return;
  
      devo.addCommand(
        "go to catalog",
        ["open catalog", "catalog"],
        () => {
          Actions.goTo(APP_ROUTES.CATALOG)();
        }
      );
  
      devo.addCommand(
        "go to demo",
        ["open demo", "demo"],
        () => {
          Actions.goTo(APP_ROUTES.DEMO)();
        }
      );

    }, [devo]);
  
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
