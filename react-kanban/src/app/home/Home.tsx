import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";

export function Home() {
  
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
