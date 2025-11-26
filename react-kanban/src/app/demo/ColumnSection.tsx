import { RxTrash } from "react-icons/rx";
import { HiPlusSmall } from "react-icons/hi2";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { ItemCard } from "./components/ItemCard";
import { ModalDelete } from "./components/ModalDelete";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../context";
import type { Card } from "../../interfaces";

interface ColumnSectionProps {
  name: string;
  children: React.ReactNode;
  columnIndex: string;
}

export function ColumnSection({
  children,
  name,
  columnIndex,
}: ColumnSectionProps) {
  const { handleAddNewCardOnColumn, handleDeleteColumn, columns, setShowErrorMessage, 
    setErrorMessage, doesCardTitleExist, } = useAppContext();
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [newCard, setNewCard] = useState<Card>({
    id: "",
    title: "",
    description: "",
  });

   const { isOver, setNodeRef } = useDroppable({
    id: columnIndex,
  });
  
  const column = columns.find(col => col.id === columnIndex);
  const cardIds = column ? column.cards.map(card => card.id) : [];

  function HandleDeleteColumn() {
    handleDeleteColumn(columnIndex);
    setOpen(false);
  }

  function HandleClosseModal() {
    setOpen(false);
    setShowErrorMessage(false);
    setErrorMessage("");
    setNewCard({ id: "", title: "", description: "" });
  }

  function handleAddCard() {
    if (!newCard.title.trim() && !newCard.description.trim()) {
      setShowErrorMessage(true);
      setErrorMessage("El título y texto son obligatorio");
      return;
    }

    if (!newCard.title.trim()) {
      setShowErrorMessage(true);
      setErrorMessage("El título es obligatorio");
      return;
    }

    if (!newCard.description.trim()) {
      setShowErrorMessage(true);
      setErrorMessage("La descripción es obligatoria");
      return;
    }

    if(doesCardTitleExist(newCard.title)){
      setShowErrorMessage(true);
      setErrorMessage("Ya existe una nota con ese nombre");
      return;
    }

    handleAddNewCardOnColumn(columnIndex, newCard);
    setNewCard({ id: uuidv4(), title: "", description: "" });
    setShowErrorMessage(false);
    setErrorMessage("");
    setOpen(false);
  }

  return (
    <>
      <ModalDelete
        isOpen={open && deleting}
        text="Esta Sección"
        onDelete={() => HandleDeleteColumn()}
        onClose={() => HandleClosseModal() }
      ></ModalDelete>
      <Modal
        isOpen={open && !deleting}
        onClose={() => HandleClosseModal() }
        title="Nueva Nota"
      >
        <ItemCard
          newCard={newCard}
          setNewCard={setNewCard}
          handleAddCard={handleAddCard}
        />
      </Modal>
      <div
        ref={setNodeRef}
        className={`
          ${
            isOver ? 'border-indigo-400 bg-indigo-50' : 
            'border-transparent hover:border-gray-300'
          }
         bg-gray-300 flex flex-col w-full p-4 rounded-2xl shadow-inner select-none
         `}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <div className="flex space-x-2">
            <p
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
                setDeleting(false);
              }}
            >
              <HiPlusSmall />
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
                setDeleting(true);
              }}
            >
              <RxTrash />
            </p>
          </div>
        </div>
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-2 rounded-2xl">
            {children}
          </div>
        </SortableContext>
      </div>
    </>
  );
}
