

export const kanbanBoardCodeExample = `
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