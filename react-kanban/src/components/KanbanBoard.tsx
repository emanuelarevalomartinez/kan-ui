import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { TbNewSection } from "react-icons/tb";
import { ItemCodeExample } from "./items/ItemCodeExample";

export function KanbanBoard() {
  const [showCode, setShowCode] = useState(false);

  const codeExample = `
import { DndContext } from "@dnd-kit/core";
import { TbNewSection } from "react-icons/tb";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function KanbanBoard({ children, title }: Props) {

function handleAddNewSection() {
    // implement your logic to add a new KanbanColumn
  }


  return (
    <DndContext>
      <div className="bg-white p-6 rounded-2xl text-black w-full select-none">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-2xl font-bold py-2">{title}</h1>
          <button onClick={() => { handleAddNewSection() }}>
            <TbNewSection className="w-6 h-6" />
          </button>
        </div>

        <div className="space-x-4 overflow-x-auto">
          <div className="grid flex-shrink-0 w-full grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </DndContext>
  );
}`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">KanbanBoard</h1>
        <p className="text-gray-600">El contenedor del tablero Kanban</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowCode(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            !showCode
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          👀 Vista
        </button>

        <button
          onClick={() => setShowCode(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            showCode
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          💻 Código
        </button>
      </div>

      <div className="mt-8">
        {showCode ? (
          <ItemCodeExample
            titleFile="KanbanBoard.tsx"
            codeExample={codeExample}
          />
        ) : (
          /* Codigo real del componente */

          <div>
            <div className="flex bg-indigo-200 rounded-xl p-2 ">
              <DndContext
              /* logica para efectuar mientras se inici la animacion, mientras se cancela y cuando se suelta */
              /*  onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragCancel={handleDragCancel} */
              >
                <div className="bg-white p-6 rounded-2xl text-black w-full select-none">
                  <div className="flex justify-between items-center px-2">
                    <h1 className="text-2xl font-bold py-2">
                      Título del Tablero
                    </h1>
                    <p
                      className="cursor-pointer"
                      onClick={() => {
                        // add new KanbanColumn
                      }}
                    >
                      <TbNewSection className="w-6 h-6" />
                    </p>
                  </div>

                  <div className=" space-x-4 overflow-x-auto">
                    <div
                      className={`grid flex-shrink-0 w-full grid-cols-1 md:grid-cols-2 gap-2 rounded-2xl`}
                    >
                      {/*  {children} */}
                    </div>
                  </div>
                </div>

                {/* Este componente opciónal sirve para animar los elementos mientras se estan arrastrando */}

                {/*  <DragOverlay>
                      {activeCard ? (
                        <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-indigo-400 rotate-3 opacity-60 transform scale-105">
                          <h3 className="font-medium text-md mb-1 text-black">
                            {activeCard.title}
                          </h3>
                          {activeCard.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {activeCard.description}
                            </p>
                          )}
                        </div>
                      ) : null}
                    </DragOverlay> */}
              </DndContext>
            </div>

            <div className="mt-10 border-t pt-6 space-y-4">
              <h2 className="text-xl font-bold text-indigo-700">
                Cómo usar este componente
              </h2>

              <p className="text-gray-700">
                El componente <strong>KanbanBoard</strong> actúa como contenedor
                del tablero. Dentro de él colocas tus columnas del sistema
                Kanban.
              </p>

              <p className="text-gray-700">
                El componente recibe dos parametros donde el primero es el{" "}
                <strong>titulo</strong> del tablero y el segundo es el{" "}
                <strong>hijo</strong> el cual debe ser un KanbanColumn
              </p>

              <div className="bg-black text-gray-200 p-4 rounded-lg text-xs">
                <p className="text-gray-400 mb-2">Ejemplo de implementación:</p>
                <pre className="overflow-x-auto whitespace-pre">
                  {`<KanbanBoard title="Mi tablero Kanban">{children}</KanbanBoard>`}
                </pre>
              </div>

              <div className="bg-black text-gray-200 p-4 rounded-lg text-xs">
                <p className="text-gray-400 mb-2">Ejemplo concreto:</p>
                <pre className="overflow-x-auto whitespace-pre">
                  {`<KanbanBoard title="Mi tablero Kanban">
                    <KanbanColumn title="Pendiente" cards={cardsPending} />
                    <KanbanColumn title="En Progreso" cards={cardsProgress} />
                    <KanbanColumn title="Completado" cards={cardsDone} />
                    </KanbanBoard>`}
                </pre>
              </div>
            </div>

            <div className="mt-10 border-t pt-6 space-y-4">
              <h2 className="text-xl font-bold text-indigo-700">
                Acciónes con el componente
              </h2>

              <p className="text-gray-700">
                Puedes ejecutar cierta lógica dentro del componente{" "}
                <strong>KanbanBoard</strong> actúa como contenedor del tablero.
                Dentro de él colocas tus columnas del sistema Kanban.
              </p>

              <div className="bg-black text-gray-200 p-4 rounded-lg text-xs">
                <p className="text-gray-400 mb-2">Ejemplo de implementación:</p>
                <pre className="overflow-x-auto whitespace-pre">
                  {`<KanbanBoard title="Mi tablero Kanban">
                    <KanbanColumn title="Pendiente" cards={cardsPending} />
                    <KanbanColumn title="En Progreso" cards={cardsProgress} />
                    <KanbanColumn title="Completado" cards={cardsDone} />
                    </KanbanBoard>`}
                </pre>
              </div>

              <p className="text-gray-600 text-sm italic">
                Puedes añadir lógica extra como creación de nuevas columnas,
                eliminar notas o activar animaciones mientras arrastras.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
