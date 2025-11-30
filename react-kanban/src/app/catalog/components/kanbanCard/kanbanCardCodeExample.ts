export const kanbanCardCodeExample = `
import { RxTrash } from "react-icons/rx";
import { useSortable } from "@dnd-kit/sortable";
import { IoIosKeypad } from "react-icons/io";

interface Props {
  title: string;
  description?: string;
  columnIndex: string;
  cardIndex: string;
}

export function KanbanCard({
  title,
  description,
  columnIndex,
  cardIndex,
}: Props) {


  const { listeners, setNodeRef } = useSortable({
    id: cardIndex,
  });

  function handleWriteOnCard() {
    // implement your logic to write on KanbanCard
  }

  function HandleDeleteCard() {
    // implement your logic to delete a KanbanCard
  }

  return (
    <>
      <div
        style={\${"style"}}
        className="relative bg-[#FEFEFE] rounded-2xl shadow hover:shadow-md transition-all p-4 select-none"
          className={"relative bg-[#FEFEFE] rounded-2xl shadow hover:shadow-md 
          transition-all p-4 select-none w-full md:min-w-[180px]"}
        ref={setNodeRef}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            handleWriteOnCard();
          }}
        >
          <h3 className="font-medium text-md mb-1 text-black">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>

        <p
          onClick={() => {
            HandleDeleteCard();
          }}
          className="absolute right-2 bottom-2 cursor-pointer"
        >
          <RxTrash />
        </p>

        <p {...listeners} className="absolute top-2 right-2 cursor-grab">
          <IoIosKeypad />
        </p>
      </div>
    </>
  );
}
`;

