import { RxTrash } from "react-icons/rx";


interface CardItemProps {
  title: string;
  description?: string;
}

export function CardItem({ title, description }: CardItemProps) {

  function HandleDeletecardItem(){
    console.log("Delete carditem");
    
  }


  return (
    <div className=" relative bg-[#FEFEFE] p-4 rounded-2xl shadow hover:shadow-md transition-shadow">
      <h3 className="font-medium text-md mb-1 text-black">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}   
      <p 
      onClick={ ()=> { HandleDeletecardItem(); } }
      className="absolute right-2 bottom-2 cursor-pointer"> <RxTrash /> </p>
    </div>
  );
}