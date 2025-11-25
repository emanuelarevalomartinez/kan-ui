import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import { Requirements } from "./Requirements";


      export function ComponentsGallery() {

        const location = useLocation();
        const navigate = useNavigate();

       function handleNavigateTo(path: string){
          if(path === "requirements"){
            navigate(APP_ROUTES.COMPONENTS);
          } else if(path === "KanbanBoard"){
            navigate(APP_ROUTES.KANBAN_BOARD);
          } else if(path === "KanbanColumn"){
            navigate(APP_ROUTES.KANBAN_COLUMN);
          } else if(path === "KanbanCard"){
            navigate(APP_ROUTES.KANBAN_CARD);
          } else if(path === "aboutUs"){
            navigate(APP_ROUTES.ABOUT_US);
          }
        
       }


        return (
          <div className="mt-16 h-[91vh] bg-gradient-to-br from-indigo-50 to-indigo-100">
            <div className="max-w-8xl mx-auto flex gap-6 px-6 py-6 h-full">
      
              <aside className="sidebar fixed lg:static w-56 transform -translate-x-[150%] lg:translate-x-0 transition-transform duration-300 rounded-2xl overflow-y-auto bg-white shadow-xl p-6">
      
                <div>
                  <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
                    Primeros Pasos
                  </h2>
                  <nav className="space-y-2">
                    <a
                      className="block cursor-pointer px-4 py-3 rounded-lg text-gray-700 hover:text-white hover:bg-indigo-600 transition-all duration-200 font-medium"
                      onClick={ ()=> { handleNavigateTo("requirements") } }
                    >
                      Requerimientos
                    </a>
                  </nav>
                </div>
      
                <div>
                  <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
                    Componentes
                  </h2>
                  <nav className="space-y-2">
                    {[
                      "KanbanBoard",
                      "KanbanColumn",
                      "KanbanCard",
                    ].map((item) => (
                      <a
                        key={item}
                        className="block cursor-pointer px-4 py-3 rounded-lg text-gray-700 hover:text-white hover:bg-indigo-600 transition-all duration-200 font-medium"
                        onClick={ ()=> { handleNavigateTo(item) } }
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
      
                <div>
                  <h2 className="text-lg font-semibold text-indigo-700 mb-3 uppercase tracking-wide">
                    Acerca de
                  </h2>
                  <nav className="space-y-2">
                    <a
                      className="block cursor-pointer px-4 py-3 rounded-lg text-gray-700 hover:text-white hover:bg-indigo-600 transition-all duration-200 font-medium"
                      onClick={ ()=> { handleNavigateTo("aboutUs") } }
                    >
                      Sobre Nosotros
                    </a>
                  </nav>
                </div>
      
              </aside>
      
              <main className="flex-1 bg-white rounded-3xl shadow-xl p-10 border overflow-y-auto border-indigo-100">
                {location.pathname === APP_ROUTES.COMPONENTS || location.pathname === APP_ROUTES.REQUIREMENTS ? 
                        <Requirements /> : <Outlet />
                }
              </main>
            </div>
          </div>
        );
      }
      
    