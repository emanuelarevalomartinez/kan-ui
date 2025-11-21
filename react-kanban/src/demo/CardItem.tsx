import { useEffect, useState } from "react";
import { RxTrash } from "react-icons/rx";
import { Modal } from "./components/Modal";
import { ModalDelete } from "./components/ModalDelete";
import { ItemWritingOnCard } from "./components/ItemWritingOnCard";
import { useAppContext } from "../context";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { IoIosKeypad } from "react-icons/io";

interface CardItemProps {
  title: string;
  description?: string;
  columnIndex: number;
  cardIndex: number;
}

export function CardItem({
  title,
  description,
  columnIndex,
  cardIndex,
}: CardItemProps) {
  const { handleDeleteCard, handleUpdateCardDescription } = useAppContext();

  const [open, setOpen] = useState(false);
  const [writing, setWriting] = useState(false);
  const [tempDescription, setTempDescription] = useState(description ?? "");

    const {attributes, listeners, transform, setNodeRef} = useSortable(
      { 
        id: `card-${columnIndex}-${cardIndex}` 
      });

      const style = {
    transform: CSS.Transform.toString(transform),
  };

  function HandleDeletecardItem() {
    console.log("Delete carditem");
    handleDeleteCard(columnIndex, cardIndex);
    setOpen(false);
  }

  function handleWriteOnCard() {
    console.log("Writing carditem");
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

  useEffect(() => {
  if (open && writing) {
    setTempDescription(description !== undefined ? description : "");
  }
}, [open, writing, description]);

  return (
    <>
      <ModalDelete
        isOpen={open && !writing}
        onDelete={() => HandleDeletecardItem()}
        onClose={() => setOpen(false)}
      ></ModalDelete>

      <Modal
        isOpen={open && writing}
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
      {...attributes}
        className={`relative bg-[#FEFEFE] rounded-2xl shadow hover:shadow-md 
          transition-all p-4 cursor-pointer`}
      ref={setNodeRef}
      >
        <div
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
