import { FiMoreVertical } from "react-icons/fi";
import { HiPlusSmall } from "react-icons/hi2";

interface ColumnSectionProps {
  name: string;
  children: React.ReactNode;
}

export function ColumnSection({ children, name }: ColumnSectionProps) {

  function HandleColumnAction() {
    console.log("Some ColumnAction");
  }

  function HandleAddTask(){
    console.log("Add new Task");
  }

  return (
    <div className={`bg-[#F6F8FA] flex flex-col w-full p-4 rounded-2xl`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        
        <div className="flex space-x-2">
           <p
           onClick={ ()=> { HandleAddTask();}}
           >  <HiPlusSmall/> </p>
           <p
          onClick={() => { HandleColumnAction();}}
        > <FiMoreVertical /> </p>
        </div>
       
      </div>
      <div className="flex flex-col gap-2 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
