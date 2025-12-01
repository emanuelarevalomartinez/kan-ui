import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { APP_ROUTES } from "../../routes";
import { useAppContext } from "../../context";
import { HiOutlinePuzzle } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { textNavBar } from "./translate";
import type { JSX } from "react";

interface NavItems {
  title: string;
  path: string;
  icon: JSX.Element;
}

const navItems: NavItems[] = [
  { title: "Catálogo", path: APP_ROUTES.CATALOG, icon: <HiOutlinePuzzle /> },
  { title: "Demo", path: APP_ROUTES.DEMO, icon: <HiOutlineLightBulb /> },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, changeLanguage, toggleSidebar, isSidebarOpen } =
    useAppContext();

  const text = textNavBar[language];

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

        <div className="flex gap-6 items-center">
          {location.pathname !== APP_ROUTES.HOME &&
            navItems.map((item) => {
              const title =
                item.path === APP_ROUTES.CATALOG
                  ? text.catalog
                  : item.path === APP_ROUTES.DEMO
                  ? text.demo
                  : item.title;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-colors flex items-center ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-700 hover:text-indigo-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="lg:hidden text-2xl">{item.icon}</span>
                      <span className="hidden lg:inline">{title}</span>
                      <span
                        className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-indigo-600 w-full"
                            : "bg-transparent w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          <div>
            <span
              onClick={() => {
                if (language === "es") {
                  changeLanguage("en");
                } else if (language === "en") {
                  changeLanguage("es");
                }
              }}
              className="cursor-pointer rounded-lg border border-gray-300 p-1 transition-colors duration-300 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              {language === "es" ? (
                <span className="fi fi-us"></span>
              ) : (
                <span className="fi fi-es"></span>
              )}
            </span>
          </div>

          <div className="flex lg:hidden items-center">
            {location.pathname !== APP_ROUTES.HOME &&
            location.pathname !== APP_ROUTES.DEMO ? (
              <button
                onClick={toggleSidebar}
                className="transition-transform duration-300 ease-in-out"
              >
                {isSidebarOpen ? (
                  <RxCross2 className="text-2xl transform rotate-90 transition duration-300" />
                ) : (
                  <RiMenuFill className="text-2xl transform transition duration-300" />
                )}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
