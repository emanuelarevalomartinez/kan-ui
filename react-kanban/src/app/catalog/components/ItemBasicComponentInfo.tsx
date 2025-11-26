import { FaRegEye } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

interface ItemBasicCommponentInfo {
    title: string;
    description: string;
    showCode: boolean;
    setShowCode: (e: boolean) => void;
}

export function ItemBasicComponentInfo({ title, description, showCode, setShowCode }: ItemBasicCommponentInfo){

  return(
    <>
       <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 shadow-md">
              <h1 className="text-xl lg:text-4xl font-extrabold text-indigo-700">
                {title}
              </h1>
              <p className="text-gray-600 mt-1">
                {description}
              </p>
            </div>
  
            <div className="flex gap-2 lg:gap-4 bg-white shadow-lg p-2 rounded-full w-fit border border-gray-200">
              <button
                onClick={() => setShowCode(false)}
                className={`flex items-center space-x-1 px-2 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  !showCode
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <p> <FaRegEye className="w-6 h-6" /> </p>
                <p> Vista </p>
                
              </button>
      
              <button
                onClick={() => setShowCode(true)}
                className={`flex items-center space-x-1 px-2 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  showCode
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <p> <GrPersonalComputer className="w-6 h-6" /> </p>
                <p> Código </p>
      
              </button>
            </div>
    </>
  )

}