import { useSortable } from "@dnd-kit/sortable";
import { IoIosKeypad } from "react-icons/io";
import { RxTrash } from "react-icons/rx";
import { CSS } from "@dnd-kit/utilities";
import { useAppContext } from "../../../../context";
import { textKanbanCardGuide } from "../translate";

export function KanbanCardGuide() {

  const { language } = useAppContext();
  const text = textKanbanCardGuide[language];

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
              {text.title}
            </h3>
            <p className="text-sm text-gray-600">
              {text.cardDescription}
            </p>
          </div>

          <button
            className="absolute right-2 bottom-2 cursor-pointer text-gray-600 hover:text-red-600 transition"
            onClick={() => {
              /* handleDeleteCard(); */
            }}
            title={text.deleteCardButton}
          >
            <RxTrash />
          </button>

          <span
            {...listeners}
            className="absolute right-2 top-2 cursor-grab text-gray-600 hover:text-indigo-600"
            title={text.moveCardButton}
          >
            <IoIosKeypad />
          </span>
        </div>
      </div>

      <div className="mt-10 space-y-6 border-t pt-6">
        <h2 className="text-2xl font-bold text-indigo-700">
          {text.howToUse}
        </h2>

        <p className="text-gray-700">
          <strong>KanbanCard</strong> {text.description}
        </p>

        <ul className="text-gray-700 list-disc pl-6">
          <li>
            <strong>title</strong>: {text.propTitle}
          </li>
          <li>
            <strong>description</strong>: {text.propDescription}
          </li>
          <li>
            <strong>columnIndex</strong>: {text.propColumnIndex}
          </li>
          <li>
            <strong>cardIndex</strong>: {text.propCardIndex}
          </li>
        </ul>

        <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
          <p className="text-indigo-300 mb-2">{text.example}</p>
          <pre className="overflow-x-auto whitespace-pre">
{`
<KanbanCard
  title="Pending work"
  description="Finish the login page"
  columnIndex="column-index-0"
  cardIndex="card-index-0"
/>
`}
          </pre>
        </div>
      </div>

      <div className="mt-10 space-y-4 border-t pt-6">
        <h2 className="text-2xl font-bold text-indigo-700">{text.actionsAvailable}</h2>

        <p className="text-gray-700">
          {text.actionsDescription}
        </p>

        <ul className="text-gray-700 list-disc pl-6">
          <li>
            {text.actionEdit}
          </li>
          <li>
            {text.actionDelete} <RxTrash className="inline" />
          </li>
          <li>
            {text.actionReorder} <IoIosKeypad className="inline" />
          </li>
        </ul>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
          <p className="text-indigo-300 mb-2">{text.logicExample}</p>
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
          {text.extraNote}
        </p>
      </div>
    </div>
  );
}
