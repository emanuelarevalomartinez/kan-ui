import { TbNewSection } from "react-icons/tb";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { ItemColumn } from "./components/ItemColumn";
interface BoardContainerProps {
  title: string;
  children: React.ReactNode;
}

export function BoardContainer({ children, title }: BoardContainerProps) {

  const [open, setOpen] = useState(false);

  function handleAddNewSection(){
    console.log("Add a new Section");
    setOpen(true);
    
  }


  return (
    <>
    <Modal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title="Nuevo Item"
      >
       <ItemColumn/>
      </Modal>

 <div className=" bg-white p-6 rounded-2xl text-black w-full ">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p
        className="cursor-pointer"
        onClick={ ()=> { handleAddNewSection(); } }
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
    </>
   
  );
}
