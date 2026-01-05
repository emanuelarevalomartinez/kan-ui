import { DndContext } from "@dnd-kit/core";
import { TbNewSection } from "react-icons/tb";
import { useAppContext } from "../../../../context";
import { textKanbanBoardGuide } from "../translate";

export function KanbanBoardGuide() {

const { language } = useAppContext();
const text = textKanbanBoardGuide[language];

  return (
    <>
      <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
        <DndContext>
          <div className="bg-white p-6 rounded-2xl text-black w-full select-none">
            <div className="flex justify-between items-center px-2">
              <h1 className="text-2xl font-bold py-2">{text.title}</h1>

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
            {text.howToUse}
          </h2>

          <p className="text-gray-700">
            <strong>KanbanBoard</strong> {text.whatIs}
          </p>

          <ul className="text-gray-700 space-y-2 text-sm">
            <li>
              <strong>title</strong>: {text.propTitle}
            </li>
            <li>
              <strong>children</strong>: {text.propChildren}
            </li>
          </ul>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
            <p className="text-indigo-300 mb-2 font-semibold">
              {text.minimalExample}
            </p>
            <pre className="overflow-x-auto whitespace-pre">
              {`<KanbanBoard title="Mi Kanban">{children}</KanbanBoard>`}
            </pre>
          </div>

          <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
            <p className="text-indigo-300 mb-2 font-semibold">
              {text.fullExample}
            </p>
            <pre className="overflow-x-auto whitespace-pre">
              {`
<KanbanBoard title="Mi Board">
  <KanbanColumn name="Pending" columnIndex="column-index-0" />
  <KanbanColumn name="Progress" columnIndex="column-index-1" />
  <KanbanColumn name="Done" columnIndex="column-index-2" />
</KanbanBoard>
`}
            </pre>
          </div>
        </div>

        <div className="mt-10 space-y-6 border-t pt-6">
          <h2 className="text-2xl font-bold text-indigo-700">
            {text.boardActions}
          </h2>

          <p className="text-gray-700">
            {text.actionsDescription}
          </p>

           <div className="bg-black/90 text-gray-200 rounded-lg p-4 text-sm">
             <p className="text-indigo-300 mb-2">{text.logicExample}</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
function handleAddNewSection() {
  // your logic to add a KanbanColumn
}
`}
             </pre>
           </div>

          <p className="text-gray-500 text-sm italic">
            {text.extraNote}
          </p>
        </div>
      </div>
    </>
  );
}
