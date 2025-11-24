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
          <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </DndContext>
  );
}`;

  return (
    <div className="space-y-8">

      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 shadow-md">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          KanbanBoard
        </h1>
        <p className="text-gray-600 mt-1">
          Contenedor principal del tablero Kanban
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-4 bg-white shadow-lg p-2 rounded-full w-fit border border-gray-200">
        <button
          onClick={() => setShowCode(false)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            !showCode
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          👀 Vista
        </button>

        <button
          onClick={() => setShowCode(true)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            showCode
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          💻 Código
        </button>
      </div>

      <div className="mt-6">
        {showCode ? (
          <ItemCodeExample
            titleFile="KanbanBoard.tsx"
            codeExample={codeExample}
          />
        ) : (
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
            <DndContext>
              <div className="bg-white p-6 rounded-2xl text-black w-full select-none">
                <div className="flex justify-between items-center px-2">
                  <h1 className="text-2xl font-bold py-2">
                    Título del Tablero
                  </h1>
                  <button
                    className="hover:bg-indigo-100 transition p-2 rounded-lg"
                    onClick={() => {}}
                  >
                    <TbNewSection className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-x-4 overflow-x-auto">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* {children} */}
                  </div>
                </div>
              </div>
            </DndContext>

            <div className="mt-10 space-y-6 border-t pt-6">
              <h2 className="text-2xl font-bold text-indigo-700">
                Cómo usar este componente
              </h2>

              <p className="text-gray-700">
                <strong>KanbanBoard</strong> envuelve columnas del sistema
                Kanban. Se le pasan <strong>children</strong> y un{" "}
                <strong>título</strong>.
              </p>

              <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
                <p className="text-indigo-300 mb-2">Ejemplo mínimo:</p>
                <pre className="overflow-x-auto whitespace-pre">
                  {`<KanbanBoard title="Mi Kanban">{children}</KanbanBoard>`}
                </pre>
              </div>

              <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
                <p className="text-indigo-300 mb-2">Ejemplo completo:</p>
                <pre className="overflow-x-auto whitespace-pre">
{`
<KanbanBoard title="Mi tablero">
  <KanbanColumn title="Pendiente" cards={cardsPending} />
  <KanbanColumn title="En Progreso" cards={cardsProgress} />
  <KanbanColumn title="Completado" cards={cardsDone} />
</KanbanBoard>
`}
                </pre>
              </div>
            </div>

            <div className="mt-10 space-y-4 border-t pt-6">
              <h2 className="text-2xl font-bold text-indigo-700">
                Acciones del componente
              </h2>

              <p className="text-gray-700">
                Puedes crear nuevas columnas usando{" "}
                <strong>handleAddNewSection()</strong>
              </p>

              <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
                <pre>
{`function handleAddNewSection() {
  // tu lógica para añadir una KanbanColumn
}`}
                </pre>
              </div>

              <p className="text-gray-500 text-sm italic">
                Agrega lógica extra como animaciones o eliminación de tarjetas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
