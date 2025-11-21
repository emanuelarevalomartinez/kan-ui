import { RxTrash } from "react-icons/rx";
import { HiPlusSmall } from "react-icons/hi2";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { ItemCard } from "./components/ItemCard";
import { useAppContext, type Card } from "../context";
import { ModalDelete } from "./components/ModalDelete";

interface ColumnSectionProps {
  name: string;
  children: React.ReactNode;
  columnIndex: number;
}

export function ColumnSection({
  children,
  name,
  columnIndex,
}: ColumnSectionProps) {
  const { handleAddNewCardOnColumn, handleDeleteColumn } = useAppContext();
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [newCard, setNewCard] = useState<Card>({
    title: "",
    description: "",
  });

  function HandleDeleteColumn() {
    handleDeleteColumn(columnIndex);
  }

  function handleAddCard() {
    if (!newCard.title.trim() && !newCard.description.trim()) {
      alert("El título y texto es obligatorio");
      return;
    }

    if (!newCard.title.trim()) {
      alert("El título es obligatorio");
      return;
    }

    if (!newCard.description.trim()) {
      alert("La descripción es obligatoria");
      return;
    }

    handleAddNewCardOnColumn(columnIndex, newCard);
    setNewCard({ title: "", description: "" });
    setOpen(false);
  }

  return (
    <>
      <ModalDelete
        isOpen={open && deleting}
        onDelete={() => HandleDeleteColumn()}
        onClose={() => setOpen(false)}
      ></ModalDelete>
      <Modal
        isOpen={open && !deleting}
        onClose={() => setOpen(false)}
        title="Nueva Nota"
      >
        <ItemCard
          newCard={newCard}
          setNewCard={setNewCard}
          handleAddCard={handleAddCard}
        />
      </Modal>
      <div
        className={`bg-gray-300 flex flex-col w-full p-4 rounded-2xl shadow-inner`}
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
        <div className="flex flex-col gap-2 rounded-2xl">{children}</div>
      </div>
    </>
  );
}
