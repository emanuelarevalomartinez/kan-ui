/* import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { HiPlusSmall } from "react-icons/hi2";
import { IoIosKeypad } from "react-icons/io";
import { RxTrash } from "react-icons/rx";


export function KanbanColumnGuide(){

    const cardIds: string[] = [];

    const { isOver, setNodeRef } = useDroppable({
        id: "columnIndex",
      });
    
   return(
    <>
      <div className="flex gap-2">
      <div
              ref={setNodeRef}
              className={`
                ${
                  isOver ? 'border-indigo-400 bg-indigo-50' : 
                  'border-transparent hover:border-gray-300'
                }
               bg-gray-300 flex flex-col w-2/3 m-auto p-4 rounded-2xl shadow-inner select-none
               `}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold mb-2">Nombre de la Sección</h2>
                <div className="flex space-x-2">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                    }}
                  >
                    <HiPlusSmall />
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {

                    }}
                  >
                    <RxTrash />
                  </p>
                </div>
              </div>
              <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-2 rounded-2xl">
                <div 
                        className={`relative bg-[#FEFEFE] rounded-2xl shadow hover:shadow-md 
                          transition-all p-4 select-none`}
                      >
                        <div
                        className="cursor-pointer"
                          onClick={() => {
                          }}
                        >
                          <h3 className="font-medium text-md mb-1 text-black">Título de la nota</h3>
                            <p className="text-sm text-gray-600">Texto de la nota</p>
                        </div>
                
                        <p
                          onClick={() => {
                          }}
                          className="absolute right-2 bottom-2 cursor-pointer"
                        >
                          <RxTrash />
                        </p>
                
                        <p
                        className="absolute top-2 right-2 cursor-grab">
                          <IoIosKeypad />
                        </p>
                      </div>
                </div>
              </SortableContext>
            </div>

            
      </div>
    </>
   )

} */

   import { useDroppable } from "@dnd-kit/core";
   import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
   import { HiPlusSmall } from "react-icons/hi2";
   import { IoIosKeypad } from "react-icons/io";
   import { RxTrash } from "react-icons/rx";
   
   export function KanbanColumnGuide() {
   
     const cardIds: string[] = [];
   
     const { isOver, setNodeRef } = useDroppable({
       id: "columnIndex",
     });
   
     return (
       <div className="bg-indigo-50 rounded-2xl p-6 shadow-lg">
         {/* DEMO VISUAL */}
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
           {/* Encabezado */}
           <div className="flex justify-between items-center mb-2">
             <h2 className="text-lg font-semibold text-gray-800">
               Nombre de la Sección
             </h2>
   
             <div className="flex gap-2 text-gray-700">
               <button
                 title="Agregar tarjeta"
                 onClick={() => {}}
               >
                 <HiPlusSmall />
               </button>
   
               <button
                 title="Eliminar columna"
                 onClick={() => {}}
               >
                 <RxTrash />
               </button>
             </div>
           </div>
   
           {/* Cards */}
           <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
             <div className="flex flex-col gap-2 rounded-2xl">
               <div className="relative bg-white rounded-xl shadow p-4">
                 <h3 className="font-medium text-black mb-1">Título de la tarjeta</h3>
                 <p className="text-gray-600 text-sm">Contenido de la tarjeta</p>
   
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
             Cómo usar este componente
           </h2>
   
           <p className="text-gray-700">
             <strong>KanbanColumn</strong> representa una columna de tareas dentro
             del tablero Kanban. Recibe:
           </p>
   
           <ul className="text-gray-700 list-disc pl-6">
             <li>
               <strong>name</strong>: texto que se mostrará como título de la columna
             </li>
             <li>
               <strong>children</strong>: tarjetas (KanbanCards) dentro de esta columna
             </li>
             <li>
               <strong>columnIndex</strong>: identificador único para soportar drag &amp; drop
             </li>
           </ul>
   
           <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
             <p className="text-indigo-300 mb-2">Ejemplo mínimo:</p>
             <pre className="overflow-x-auto whitespace-pre">
   {`<KanbanColumn name="Pendiente" columnIndex="1">{children}</KanbanColumn>`}
             </pre>
           </div>
   
           <div className="bg-black/90 text-gray-200 p-4 rounded-lg text-sm">
             <p className="text-indigo-300 mb-2">Ejemplo completo:</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
<KanbanColumn name="Pendiente" columnIndex="1">
  <KanbanCard
    title="Tarea 1"
    description="Descripción de la tarea 1"
    columnIndex="1"
    cardIndex="0"
  />
  <KanbanCard
    title="Tarea 2"
    description="Descripción de la tarea 2"
    columnIndex="1"
    cardIndex="1"
  />
</KanbanColumn>
`}
             </pre>
           </div>
         </div>
   
         <div className="mt-10 space-y-4 border-t pt-6">
           <h2 className="text-2xl font-bold text-indigo-700">
             Acciones disponibles
           </h2>
   
           <p className="text-gray-700">
             Puedes implementar lógica para:
           </p>
   
           <ul className="text-gray-700 list-disc pl-6">
             <li>
               <strong>Agregar tarjetas</strong> al hacer clic en <HiPlusSmall className="inline" />
             </li>
             <li>
               <strong>Eliminar esta columna</strong> al hacer clic en <RxTrash className="inline" />
             </li>
           </ul>
   
           <div className="bg-black/90 text-gray-200 rounded-lg p-4 text-sm">
             <p className="text-indigo-300 mb-2">Ejemplo de lógica:</p>
             <pre className="overflow-x-auto whitespace-pre">
{`
function handleAddCard() {
     // tu lógica para crear una KanbanCard
}
   
function handleDeleteColumn() {
     // tu lógica para eliminar esta KanbanColumn
}
`}
             </pre>
           </div>
   
           <p className="text-gray-500 text-sm italic">
             Puedes conectar esta columna con estado global o API para mayor control.
           </p>
         </div>
       </div>
     );
   }
   