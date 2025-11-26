import { DndContext } from "@dnd-kit/core";
import { TbNewSection } from "react-icons/tb";

export function KanbanBoardGuide() {
  return (
    <>
      <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
        <DndContext>
          <div className="bg-white p-6 rounded-2xl text-black w-full select-none">
            <div className="flex justify-between items-center px-2">
              <h1 className="text-2xl font-bold py-2">Título del Tablero</h1>

              <button
                className="hover:bg-indigo-100 transition p-2 rounded-lg"
                onClick={() => {}}
              >
                <TbNewSection className="w-6 h-6" />
              </button>
            </div>

            <div className="space-x-4 overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4"></div>
            </div>
          </div>
        </DndContext>

        <div className="mt-10 space-y-6 border-t pt-6">
          <h2 className="text-2xl font-bold text-indigo-700">
            Como usar este componente
          </h2>

          <p className="text-gray-700">
            <strong>KanbanBoard</strong> es el contenedor principal del tablero
            Kanban. Recibe:
          </p>

          <ul className="text-gray-700 space-y-2 text-sm">
            <li>
              🔹 <strong>title</strong>: Texto que se muestra en el encabezado
              del tablero.
            </li>
            <li>
              🔹 <strong>children</strong>: Representa las columnas (
              <strong>KanbanColumn</strong>) que serán parte del tablero.
            </li>
          </ul>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
            <p className="text-indigo-300 mb-2 font-semibold">
              Ejemplo mínimo:
            </p>
            <pre className="overflow-x-auto whitespace-pre">
              {`<KanbanBoard title="Mi Kanban">{children}</KanbanBoard>`}
            </pre>
          </div>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
            <p className="text-indigo-300 mb-2 font-semibold">
              Ejemplo completo:
            </p>
            <pre className="overflow-x-auto whitespace-pre">
              {`
<KanbanBoard title="Mi tablero">
  <KanbanColumn name="Pendiente" columnIndex="pending" />
  <KanbanColumn name="En Progreso" columnIndex="progress" />
  <KanbanColumn name="Completado" columnIndex="done" />
</KanbanBoard>
`}
            </pre>
          </div>
        </div>

        <div className="mt-10 space-y-6 border-t pt-6">
          <h2 className="text-2xl font-bold text-indigo-700">
            Acciones dentro del tablero
          </h2>

          <p className="text-gray-700">
            Puedes añadir nuevas columnas usando{" "}
            <strong>handleAddNewSection()</strong> dentro del componente.
          </p>

           <div className="bg-black/90 text-gray-200 rounded-lg p-4 text-sm">
             <p className="text-indigo-300 mb-2">Ejemplo de lógica:</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
function handleAddNewSection() {
  // tu lógica para añadir una KanbanColumn
}
`}
             </pre>
           </div>

          <p className="text-gray-500 text-sm italic">
            También puedes añadir funcionalidad como animaciones o guardar el
            estado en una base de datos.
          </p>
        </div>
      </div>
    </>
  );
}
