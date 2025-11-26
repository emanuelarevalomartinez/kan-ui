import { useEffect, useState } from "react";
import { RxTrash } from "react-icons/rx";
import { Modal } from "./components/Modal";
import { ModalDelete } from "./components/ModalDelete";
import { ItemWritingOnCard } from "./components/ItemWritingOnCard";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { IoIosKeypad } from "react-icons/io";
import { useAppContext } from "../../context";

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
  const { handleDeleteCard, handleUpdateCardDescription } = useAppContext();

  const [open, setOpen] = useState(false);
  const [writing, setWriting] = useState(false);
  const [tempDescription, setTempDescription] = useState(description ?? "");

    const {listeners, transform, setNodeRef} = useSortable(
      { 
        id: cardIndex
      });

      const style = {
    transform: CSS.Transform.toString(transform),
  };

  function HandleDeletecardItem() {
    handleDeleteCard(columnIndex, cardIndex);
    setOpen(false);
  }

  function handleWriteOnCard() {
    setOpen(true);
    setWriting(true);
  }

  function handleModalClose() {
    if (writing) {
      handleUpdateCardDescription(columnIndex, cardIndex, tempDescription);
    }

    setWriting(false);
    setOpen(false);
  }

  function handleModalCancel(){
    setWriting(false);
    setOpen(false);
  }

  useEffect(() => {
  if (open && writing) {
    setTempDescription(description !== undefined ? description : "");
  }
}, [open, writing, description]);

  return (
    <>
      <ModalDelete
        isOpen={open && !writing}
        text="¿ Eliminar Esta Nota ?"
        onDelete={() => HandleDeletecardItem()}
        onClose={() => setOpen(false)}
      ></ModalDelete>

      <Modal
        isOpen={open && writing}
        onCancel={ ()=> { handleModalCancel() } }
        onClose={() => {
          handleModalClose();
        }}
        title="Nota"
      >
        <ItemWritingOnCard
          tempDescription={tempDescription}
          setTempDescription={setTempDescription}
        />
      </Modal>

      <div 
      style={style}
        className={`relative bg-[#FEFEFE] rounded-2xl shadow hover:shadow-md 
          transition-all p-4 select-none`}
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
            setOpen(true);
          }}
          className="absolute right-2 bottom-2 cursor-pointer"
        >
          <RxTrash />
        </p>

        <p
        {...listeners}
        className="absolute top-2 right-2 cursor-grab">
          <IoIosKeypad />
        </p>
      </div>
    </>
  );
}
