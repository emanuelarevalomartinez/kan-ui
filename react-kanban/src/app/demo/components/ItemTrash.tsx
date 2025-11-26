import { useDroppable } from "@dnd-kit/core";
import { RxTrash } from "react-icons/rx";

interface ItemTrashProps {
  isDragging: boolean;
}

export function ItemTrash({ isDragging }: ItemTrashProps){

     const { isOver, setNodeRef } = useDroppable({
    id: 'trash',
  });

  if (!isDragging) return null;

    return(
        <div
      ref={setNodeRef}
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2
        z-50 transition-all duration-300
        ${isOver ? 'scale-110' : 'scale-100'}
      `}
    >
      <div
        className={`
          flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl
          border-2 border-dashed transition-all duration-300
          ${isOver 
            ? 'bg-red-500 border-red-600 text-white' 
            : 'bg-white border-red-400 text-red-500'
          }
        `}
      >
        <RxTrash className="w-6 h-6" />
        <span className="font-semibold">
          {isOver ? 'Eliminar' : 'Arrastra para Eliminar'}
        </span>
      </div>
    </div>
    )
}