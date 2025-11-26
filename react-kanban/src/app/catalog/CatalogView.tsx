import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppContext } from "../../context";
import { APP_ROUTES } from "../../routes";

export function CatalogView() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isSidebarOpen, toggleSidebar } = useAppContext();

  const mainRef = useRef<HTMLDivElement>(null);

  function handleNavigate(path: string) {
    navigate(path);
    if (window.innerWidth < 1024) toggleSidebar();
  }

  function getItemClass(path: string) {
    const isActive = location.pathname === path;

    return `
      block cursor-pointer px-4 py-3 rounded-lg font-medium transition-all duration-200
      ${
        isActive
          ? "bg-indigo-600 text-white shadow-md"
          : "text-gray-700 hover:bg-indigo-600 hover:text-white"
      }
    `;
  }

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <div className="mt-16 h-[91vh] bg-gradient-to-br from-indigo-50 to-indigo-100 relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-30 lg:hidden transition-opacity duration-300"
          onClick={() => {
            toggleSidebar();
          }}
        />
      )}

      <div className="max-w-8xl mx-auto flex gap-6 px-2 py-2 lg:px-6 lg:py-6 h-full">
        <aside
          className={`fixed lg:static w-56 transition-transform duration-300 
            rounded-2xl overflow-y-auto bg-white shadow-xl p-6 z-40
            ${
              isSidebarOpen
                ? "h-[88vh] translate-x-0"
                : "h-[84vh] -translate-x-[150%] lg:translate-x-0"
            }
          `}
        >
          <div>
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
              Primeros Pasos
            </h2>
            <nav className="space-y-2">
              <a
                key="requirements"
                onClick={() => handleNavigate(APP_ROUTES.CATALOG_REQUIREMENTS)}
                className={getItemClass(APP_ROUTES.CATALOG_REQUIREMENTS)}
              >
                Requerimientos
              </a>
            </nav>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
              Componentes
            </h2>
            <nav className="space-y-2">
              {[
                { label: "KanbanBoard", path: APP_ROUTES.CATALOG_KANBAN_BOARD },
                { label: "KanbanColumn", path: APP_ROUTES.CATALOG_KANBAN_COLUMN },
                { label: "KanbanCard", path: APP_ROUTES.CATALOG_KANBAN_CARD },
              ].map(({ label, path }) => (
                <a
                  key={path}
                  onClick={() => handleNavigate(path)}
                  className={getItemClass(path)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
              Acerca de
            </h2>
            <nav className="space-y-2">
              <a
                onClick={() => handleNavigate(APP_ROUTES.CATALOG_ABOUT_US)}
                className={getItemClass(APP_ROUTES.CATALOG_ABOUT_US)}
              >
                Sobre Nosotros
              </a>
            </nav>
          </div>
        </aside>

        <main
          ref={mainRef}
          className="flex-1 bg-white rounded-3xl shadow-xl p-4 lg:p-10 border overflow-y-auto border-indigo-100"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
