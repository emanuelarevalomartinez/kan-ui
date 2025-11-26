export const kanbanColumnCodeExample = `
import { useDroppable } from "@dnd-kit/core";
import { RxTrash } from "react-icons/rx";
import { HiPlusSmall } from "react-icons/hi2";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

interface Props {
  name: string;
  children: React.ReactNode;
  columnIndex: string;
  cardIds: string[];
}

export function KanbanColumn({ children, name, columnIndex, cardIds }: Props) {

  // Track if the column is being hovered by a draggable item
  const { isOver, setNodeRef } = useDroppable({
    id: columnIndex,
  });

  function handleAddCard() {
     // your logic to add a KanbanCard
   }

   function handleDeleteColumn() {
     // your logic to delete this KanbanColumn
   }

  return (
    <div
      ref={setNodeRef}
      className={\\\`
        \\\${isOver ? "border-indigo-400 bg-indigo-50" :
        "border-transparent hover:border-gray-300"}
        border-2 transition-colors duration-200
        bg-gray-100 flex flex-col w-full p-4 rounded-2xl shadow-sm select-none
      \\\`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-semibold text-gray-800">{name}</h2>

        <div className="flex gap-2 text-gray-600">
          <button
            title="Add new card"
            className="hover:text-indigo-600 transition-colors"
            onClick={() => {
              handleAddCard();
            }}
          >
            <HiPlusSmall />
          </button>

          <button
            title="Delete column"
            className="hover:text-red-600 transition-colors"
            onClick={() => {
              handleDeleteColumn();
            }}
          >
            <RxTrash />
          </button>
        </div>
      </div>

      {/* Wrap draggable cards inside SortableContext */}
      <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </SortableContext>
    </div>
  );
}`;
