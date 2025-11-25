import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import { useAppContext } from "../context";
import { RiMenuFill } from "react-icons/ri";

const navItems = [
  { title: "Catálogo", path: APP_ROUTES.COMPONENTS },
  { title: "Demo", path: APP_ROUTES.DEMO },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { toggleSidebar } = useAppContext();

  function HandleNavigateToHome() {
    navigate(APP_ROUTES.HOME);
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        <h1
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={HandleNavigateToHome}
        >
          Kan-UI
        </h1>

        <div className="flex gap-10">
          {location.pathname !== APP_ROUTES.HOME &&
            navItems.length !== 0 &&
            navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.title}
                    <span
                      className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                        isActive ? "bg-indigo-600 w-full" : "bg-transparent w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

          <div className="flex lg:hidden items-center">
            {location.pathname !== APP_ROUTES.HOME ? (
              <RiMenuFill className="cursor-pointer" onClick={toggleSidebar} />
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
