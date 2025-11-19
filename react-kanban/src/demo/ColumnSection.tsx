import { FiMoreVertical } from "react-icons/fi";
import { HiPlusSmall } from "react-icons/hi2";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { ItemCard } from "./components/ItemCard";

interface ColumnSectionProps {
  name: string;
  children: React.ReactNode;
}

export function ColumnSection({ children, name }: ColumnSectionProps) {

    const [open, setOpen] = useState(false);

  function HandleColumnAction() {
    console.log("Some ColumnAction");
  }

  function HandleAddTask(){
    console.log("Add new Task");
    setOpen(true);
  }

  return (
    <>
     <Modal 
            isOpen={open} 
            onClose={() => setOpen(false)} 
            title="Nuevo Item"
          >
           <ItemCard/>
          </Modal>
          <div className={`bg-[#F6F8FA] flex flex-col w-full p-4 rounded-2xl`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex space-x-2">
           <p
           className="cursor-pointer"
           onClick={ ()=> { HandleAddTask();}}
           >  <HiPlusSmall/> </p>
           <p
           className="cursor-pointer"
          onClick={() => { HandleColumnAction();}}
        > <FiMoreVertical /> </p>
        </div>
       
      </div>
      <div className="flex flex-col gap-2 rounded-2xl">
        {children}
      </div>
    </div>
    </>
    
  );
}
