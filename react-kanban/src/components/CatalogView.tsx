import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import { Requirements } from "./Requirements";

export function CatalogView() {
  
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Requerimientos", path: APP_ROUTES.COMPONENTS },
  ];

  const componentItems = [
    { label: "KanbanBoard", path: APP_ROUTES.KANBAN_BOARD },
    { label: "KanbanColumn", path: APP_ROUTES.KANBAN_COLUMN },
    { label: "KanbanCard", path: APP_ROUTES.KANBAN_CARD },
  ];

  const aboutItems = [
    { label: "Sobre Nosotros", path: APP_ROUTES.ABOUT_US },
  ];

  function getItemClass(path: string) {
    const isActive = location.pathname === path;

    return `
      block cursor-pointer px-4 py-3 rounded-lg font-medium transition-all duration-200
      ${isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-gray-700 hover:bg-indigo-600 hover:text-white"}
    `;
  }

  return (
    <div className="mt-16 h-[91vh] bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="max-w-8xl mx-auto flex gap-6 px-2 py-2 lg:px-6 lg:py-6 h-full">

        <aside className="sidebar fixed lg:static w-56 transform -translate-x-[150%] lg:translate-x-0 transition-transform duration-300 rounded-2xl overflow-y-auto bg-white shadow-xl p-6">

          <div>
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">Primeros Pasos</h2>
            <nav className="space-y-2">
              {navItems.map(({ label, path }) => (
                <a key={label} className={getItemClass(path)} onClick={() => navigate(path)}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">Componentes</h2>
            <nav className="space-y-2">
              {componentItems.map(({ label, path }) => (
                <a key={label} className={getItemClass(path)} onClick={() => navigate(path)}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">Acerca de</h2>
            <nav className="space-y-2">
              {aboutItems.map(({ label, path }) => (
                <a key={label} className={getItemClass(path)} onClick={() => navigate(path)}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

        </aside>

        <main className="flex-1 bg-white rounded-3xl shadow-xl p-4 lg:p-10 border overflow-y-auto border-indigo-100">
          {location.pathname === APP_ROUTES.COMPONENTS ||
          location.pathname === APP_ROUTES.REQUIREMENTS ? (
            <Requirements />
          ) : (
            <Outlet />
          )}
        </main>

      </div>
    </div>
  );
}
