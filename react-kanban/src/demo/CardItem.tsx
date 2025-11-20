import { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { Modal } from "./components/Modal";
import { ModalDelete } from "./components/ModalDelete";
import { ItemWritingOnCard } from "./components/ItemWritingOnCard";

interface CardItemProps {
  title: string;
  description?: string;
}

export function CardItem({ title, description }: CardItemProps) {
  const [open, setOpen] = useState(false);
  const [writing, setWriting] = useState(false);

  function HandleDeletecardItem() {
    console.log("Delete carditem");
    setOpen(false);
  }

  function handleWriteOnCard() {
    console.log("Writing carditem");
    setOpen(true);
    setWriting(true);
  }

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
          setOpen(false);
          setWriting(false);
        }}
        title="Nota"
      >
        <ItemWritingOnCard description={description !== undefined ? description : ""} />
      </Modal>

      <div className="relative bg-[#FEFEFE] p-4 rounded-2xl shadow hover:shadow-md transition-shadow">
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
      </div>
    </>
  );
}
