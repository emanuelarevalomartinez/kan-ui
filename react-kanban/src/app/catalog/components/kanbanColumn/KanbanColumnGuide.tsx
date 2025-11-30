import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { HiPlusSmall } from "react-icons/hi2";
import { IoIosKeypad } from "react-icons/io";
import { RxTrash } from "react-icons/rx";
import { useAppContext } from "../../../../context";
import { textKanbanColumnGuide } from "../translate";
   
   export function KanbanColumnGuide() {
   
     const { language } = useAppContext();
     const text = textKanbanColumnGuide[language];

     const cardIds: string[] = [];
   
     const { isOver, setNodeRef } = useDroppable({
       id: "columnIndex",
     });
   
     return (
       <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
         <div
           ref={setNodeRef}
           className={`
             ${
               isOver
                 ? "border-indigo-400 bg-indigo-50"
                 : "border-transparent hover:border-gray-300"
             }
             bg-gray-200 flex flex-col w-full p-4 rounded-2xl shadow-inner select-none transition
           `}
         >
           <div className="flex justify-between items-center mb-2">
             <h2 className="text-lg font-semibold text-gray-800">
               {text.title}
             </h2>
   
             <div className="flex gap-2 text-gray-700">
               <button
                 title={text.addCardButton}
                 onClick={() => {}}
               >
                 <HiPlusSmall />
               </button>
   
               <button
                 title={text.deleteColumnButton}
                 onClick={() => {}}
               >
                 <RxTrash />
               </button>
             </div>
           </div>
   
           <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
             <div className="flex flex-col gap-2 rounded-2xl">
               <div className="relative bg-white rounded-xl shadow p-4">
                 <h3 className="font-medium text-black mb-1">{text.cardTitle}</h3>
                 <p className="text-gray-600 text-sm">{text.cardContent}</p>
   
                 <button className="absolute right-2 bottom-2 text-sm">
                   <RxTrash />
                 </button>
   
                 <span className="absolute right-2 top-2 cursor-grab">
                   <IoIosKeypad />
                 </span>
               </div>
             </div>
           </SortableContext>
         </div>

         <div className="mt-10 space-y-6 border-t pt-6">
           <h2 className="text-2xl font-bold text-indigo-700">
             {text.howToUse}
           </h2>
   
           <p className="text-gray-700">
             <strong>KanbanColumn</strong> {text.description}
           </p>
   
           <ul className="text-gray-700 list-disc pl-6">
             <li>
               <strong>name</strong>: {text.propName}
             </li>
             <li>
               <strong>children</strong>: {text.propChildren}
             </li>
             <li>
               <strong>columnIndex</strong>: {text.propColumnIndex}
             </li>
           </ul>
   
           <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
             <p className="text-indigo-300 mb-2">{text.minimalExample}</p>
             <pre className="overflow-x-auto whitespace-pre">
   {`<KanbanColumn name="Done" columnIndex="index-0">{children}</KanbanColumn>`}
             </pre>
           </div>
   
           <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
             <p className="text-indigo-300 mb-2">{text.fullExample}</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
<KanbanColumn name="Pending" columnIndex="column-index-0">
  <KanbanCard
    title="Task 1"
    description="Task description 1"
    columnIndex="column-index-0"
    cardIndex="card-index-0"
  />
  <KanbanCard
    title="Task 2"
    description="Task description 2"
    columnIndex="column-index-0"
    cardIndex="card-index-1"
  />
</KanbanColumn>
`}
             </pre>
           </div>
         </div>
   
         <div className="mt-10 space-y-4 border-t pt-6">
           <h2 className="text-2xl font-bold text-indigo-700">
             {text.actionsAvailable}
           </h2>
   
           <p className="text-gray-700">
             {text.actionsDescription}
           </p>
   
           <ul className="text-gray-700 list-disc pl-6">
             <li>
               {text.actionAddCard} <HiPlusSmall className="inline" />
             </li>
             <li>
               {text.actionDeleteColumn} <RxTrash className="inline" />
             </li>
           </ul>
   
           <div className="bg-black/90 text-gray-200 rounded-lg p-4 text-sm">
             <p className="text-indigo-300 mb-2">{text.logicExample}</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
function handleAddCard() {
     // tyour logic to add a KanbanCard
}
   
function handleDeleteColumn() {
     // your logic to delete this KanbanColumn
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
   