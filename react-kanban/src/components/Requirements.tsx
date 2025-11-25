import { FaExpandArrowsAlt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";

export function Requirements() {

  const dependencies = `npm install react tailwindcss @dnd-kit/core @dnd-kit/sortable
              @dnd-kit/modifiers`;

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-indigo-800 mb-3">
            Kan-UI: Librería de Componentes Reutilizables
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Kan-UI es una pequeña librería de componentes reutilizables para
            React. Simplemente copia y pega el código del componente que quieras
            usar, añade tu propia lógica donde se indica y disfruta de
            interfaces visualmente atractivas, modernas e intuitivas. Cada
            sección incluye una explicación detallada de cómo implementarlo paso
            a paso.
          </p>
        </div>

        <div>
          <h2 className="text-lg lg:text-2xl font-semibold text-indigo-700 mb-4">
            Requisitos de instalación
          </h2>

            <div className="flex items-center px-4 py-16 justify-around">
             <FaReact className="w-12 h-12 lg:w-24 lg:h-24 text-[#58C4DC]" />
             <RiTailwindCssFill className="w-12 h-12 lg:w-24 lg:h-24 text-[#00BCFF]" />
             <FaExpandArrowsAlt className="w-12 h-12 lg:w-24 lg:h-24 text-[#000000]" />
            </div>

          <span className="bg-blue-100 flex gap-5 items-center justify-between py-3 px-5 rounded-full">
            <code className="text-blue-900 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
              {dependencies}
            </code>
            <span className="text-blue-900 cursor-pointer">
              <TbCopy onClick={ ()=> { navigator.clipboard.writeText(dependencies) } } />
            </span>
          </span>
        </div>

        <p className="text-gray-600 text-sm italic">
          Copia el componente que necesites y añade tu lógica en las secciones
          comentadas. ¡Así de simple!
        </p>
      </div>
    </>
  );
}


