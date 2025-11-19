import { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { Modal } from "./components/Modal";
import { ModalDelete } from "./components/ModalDelete";


interface CardItemProps {
  title: string;
  description?: string;
}

export function CardItem({ title, description }: CardItemProps) {

  const [open, setOpen] = useState(false);

  function HandleDeletecardItem(){
    console.log("Delete carditem");
    setOpen(false);
  }


  return (
    <>
    <ModalDelete 
        isOpen={open} 
        onDelete={ () => setOpen(false) }
        onClose={() => setOpen(false)} 
      >
      </ModalDelete>

       <div className=" relative bg-[#FEFEFE] p-4 rounded-2xl shadow hover:shadow-md transition-shadow">
      <h3 className="font-medium text-md mb-1 text-black">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}   
      <p 
      onClick={ ()=> { setOpen(true) } }
      className="absolute right-2 bottom-2 cursor-pointer"> <RxTrash /> </p>
    </div>
    </>
  );
}