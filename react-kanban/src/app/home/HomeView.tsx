import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";

export function HomeView() {
  
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
