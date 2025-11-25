import { useSortable } from "@dnd-kit/sortable";
import { IoIosKeypad } from "react-icons/io";
import { RxTrash } from "react-icons/rx";
import { CSS } from "@dnd-kit/utilities";

export function KanbanCardGuide() {
  const { listeners, setNodeRef, transform, transition } = useSortable({
    id: "cardIndex",
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
      <div className="bg-gray-200 p-4 rounded-2xl shadow-inner select-none">
        <div
          ref={setNodeRef}
          style={style}
          className="relative bg-white rounded-xl shadow p-4 transition hover:shadow-md"
        >
          <div
            className="cursor-pointer"
            onClick={() => {
              /* handleWriteOnCard(); */
            }}
          >
            <h3 className="font-medium text-md mb-1 text-gray-800">
              Título de la tarjeta
            </h3>
            <p className="text-sm text-gray-600">
              Descripción de la tarjeta
            </p>
          </div>

          <button
            className="absolute right-2 bottom-2 cursor-pointer text-gray-600 hover:text-red-600 transition"
            onClick={() => {
              /* handleDeleteCard(); */
            }}
            title="Eliminar tarjeta"
          >
            <RxTrash />
          </button>

          <span
            {...listeners}
            className="absolute right-2 top-2 cursor-grab text-gray-600 hover:text-indigo-600"
            title="Mover tarjeta"
          >
            <IoIosKeypad />
          </span>
        </div>
      </div>

      <div className="mt-10 space-y-6 border-t pt-6">
        <h2 className="text-2xl font-bold text-indigo-700">
          Cómo usar este componente
        </h2>

        <p className="text-gray-700">
          <strong>KanbanCard</strong> representa una tarjeta dentro de una columna.
          Generalmente incluye: título, descripción y acciones.
        </p>

        <ul className="text-gray-700 list-disc pl-6">
          <li>
            <strong>title</strong>: título visible
          </li>
          <li>
            <strong>description</strong>: texto breve debajo del título
          </li>
          <li>
            <strong>columnIndex</strong>: id de columna (para drag & drop)
          </li>
          <li>
            <strong>cardIndex</strong>: id de tarjeta (para ordenar drag & drop)
          </li>
        </ul>

        <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
          <p className="text-indigo-300 mb-2">Ejemplo mínimo:</p>
          <pre className="overflow-x-auto whitespace-pre">
{`<KanbanCard title="Nota" cardIndex="1" columnIndex="1" />`}
          </pre>
        </div>

        <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
          <p className="text-indigo-300 mb-2">Ejemplo completo:</p>
          <pre className="overflow-x-auto whitespace-pre">
{`
<KanbanCard
  title="Tarea general"
  description="Contenido adicional"
  columnIndex="1"
  cardIndex="0"
/>
`}
          </pre>
        </div>
      </div>

      <div className="mt-10 space-y-4 border-t pt-6">
        <h2 className="text-2xl font-bold text-indigo-700">Acciones disponibles</h2>

        <p className="text-gray-700">
          Puedes implementar lógica para:
        </p>

        <ul className="text-gray-700 list-disc pl-6">
          <li>
            <strong>Editar contenido</strong> al hacer clic en el texto
          </li>
          <li>
            <strong>Eliminar la tarjeta</strong> clic en{" "}
            <RxTrash className="inline" />
          </li>
          <li>
            <strong>Reordenar</strong> clic y arrastre en{" "}
            <IoIosKeypad className="inline" />
          </li>
        </ul>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
          <p className="text-indigo-300 mb-2">Ejemplo de lógica:</p>
          <pre className="overflow-x-auto whitespace-pre">
{`
function handleWriteOnCard() {
  // implement your logic to write on KanbanCard
}

function HandleDeleteCard() {
  // implement your logic to delete a KanbanCard
}
`}
          </pre>
        </div>

         <p className="text-gray-500 text-sm italic">
          Puedes conectar esta Tarjeta con un estado global o API para mayor control.
        </p>
      </div>
    </div>
  );
}
