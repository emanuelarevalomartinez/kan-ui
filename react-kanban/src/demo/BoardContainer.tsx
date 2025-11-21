import { TbNewSection } from "react-icons/tb";
import { Modal } from "./components/Modal";
import { ItemColumn } from "./components/ItemColumn";
import { useAppContext, type Column } from "../context";
import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useState } from "react";
interface BoardContainerProps {
  title: string;
  children: React.ReactNode;
}

export function BoardContainer({ children, title }: BoardContainerProps) {
  const {
    newColumn,
    setNewColumn,
    setColumns,
    handleAddNewColumn,
    openModalBoardContainer,
    setOpenModalBoardContainer,
    columns,
  } = useAppContext();

  function handleAddNewSection() {
    setOpenModalBoardContainer(true);
  }

  function handleCloseColumnModal() {
    setOpenModalBoardContainer(false);
    setNewColumn({ name: "", cards: [] });
  }

  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) {
      setActiveId(null);
      return;
    }

    const activeParts = activeId.split("-");
    const overParts = overId.split("-");

    setColumns((prevColumns: Column[]) => {
      const newColumns: Column[] = prevColumns.map((column) => ({
        ...column,
        cards: [...column.cards],
      }));

      const fromColumnIndex = parseInt(activeParts[1]);
      const fromCardIndex = parseInt(activeParts[2]);

      if (activeParts[0] === "card" && overParts[0] === "card") {
        const toColumnIndex = parseInt(overParts[1]);
        const toCardIndex = parseInt(overParts[2]);

        const movedCard = newColumns[fromColumnIndex].cards[fromCardIndex];

        newColumns[fromColumnIndex].cards.splice(fromCardIndex, 1);

        newColumns[toColumnIndex].cards.splice(toCardIndex, 0, movedCard);
      }

      else if (activeParts[0] === "card" && overParts[0] === "column") {
        const toColumnIndex = parseInt(overParts[1]);

        const movedCard = newColumns[fromColumnIndex].cards[fromCardIndex];

        newColumns[fromColumnIndex].cards.splice(fromCardIndex, 1);

        newColumns[toColumnIndex].cards.push(movedCard);
      }

      return newColumns;
    });
    setActiveId(null);
  }

  const activeCard = (() => {
    if (!activeId) return null;

    const parts = activeId.split("-");
    if (parts[0] !== "card") return null;

    const columnIndex = parseInt(parts[1]);
    const cardIndex = parseInt(parts[2]);

    if (columns[columnIndex]?.cards[cardIndex]) {
      return {
        ...columns[columnIndex].cards[cardIndex],
        columnIndex,
        cardIndex,
      };
    }
    return null;
  })();

  return (
    <>
      <Modal
        isOpen={openModalBoardContainer}
        onClose={() => handleCloseColumnModal()}
        title="Nueva Sección"
      >
        <ItemColumn
          newColumnName={newColumn.name}
          setNewColumn={setNewColumn}
          handleAddNewColumn={handleAddNewColumn}
        />
      </Modal>

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className=" bg-white p-6 rounded-2xl text-black w-full ">
          <div className="flex justify-between items-center px-2">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p
              className="cursor-pointer"
              onClick={() => {
                handleAddNewSection();
              }}
            >
              <TbNewSection className="w-6 h-6" />
            </p>
          </div>

          <div className="flex space-x-4 overflow-x-auto">
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl">
              {children}
            </div>
          </div>
        </div>

        <DragOverlay>
          {activeCard ? (
            <div className="bg-white p-4 rounded-2xl shadow-xl border-2 border-indigo-400 rotate-3 opacity-60 transform scale-105">
              <h3 className="font-medium text-md mb-1 text-black">
                {activeCard.title}
              </h3>
              {activeCard.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {activeCard.description}
                </p>
              )}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
