import { TbNewSection } from "react-icons/tb";
import { Modal } from "./components/Modal";
import { ItemColumn } from "./components/ItemColumn";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { ItemTrash } from "./components/ItemTrash";
import { useAppContext } from "../../context";
import type { Column } from "../../interfaces";


interface Props {
  title: string;
  children: React.ReactNode;
  columns: Column[];
}

export function KanbanBoard({ children, title, columns }: Props) {
  const {
    newColumn,
    setNewColumn,
    handleAddNewColumn,
    openModalBoardContainer,
    setOpenModalBoardContainer,
    isDragging,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    activeCard,
    setShowErrorMessage, 
    setErrorMessage,
  } = useAppContext();

  function handleAddNewSection() {
    setOpenModalBoardContainer(true);
  }

  function handleCloseColumnModal() {
    setOpenModalBoardContainer(false);
    setShowErrorMessage(false);
    setErrorMessage("");
    setNewColumn({ id: "", name: "", cards: [] });
  }

  const columnCount = columns.length;
  const gridCols = columnCount >= 4 ? "md:grid-cols-4" : columnCount == 3 ? "md:grid-cols-3" : columnCount == 2 ? "md:grid-cols-2" : `md:grid-cols-1`;

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

      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className=" bg-white p-6 rounded-2xl text-black w-full select-none">
          <div className="flex justify-between items-center px-2">
            <h1 className="text-2xl font-bold py-2">{title}</h1>
            <button
              className="hover:bg-indigo-100 transition p-2 rounded-lg"
              onClick={() => {
                handleAddNewSection();
              }}
            >
              <TbNewSection className="w-6 h-6 " />
            </button>
          </div>

          <div className="space-x-4 overflow-x-auto">
            <div className={`grid w-full grid-cols-1 ${gridCols} gap-2 rounded-2xl`}>
              {children}
            </div>
          </div>
        </div>

        <ItemTrash isDragging={isDragging} />

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
