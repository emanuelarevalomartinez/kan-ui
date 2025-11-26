import { FaExpandArrowsAlt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";

export function Requirements() {
  const dependencies = `npm install react tailwindcss @dnd-kit/core @dnd-kit/sortable @dnd-kit/modifiers`;

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

          <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-2xl lg:flex lg:justify-around">
            <FaReact className="w-14 h-14 text-[#58C4DC] mx-auto" />
            <RiTailwindCssFill className="w-14 h-14 text-[#00BCFF] mx-auto" />
            <FaExpandArrowsAlt className="w-14 h-14 text-gray-900 mx-auto" />
          </div>

          <div className="bg-blue-100 flex gap-3 items-center justify-between py-3 px-4 rounded-xl mt-4">
            <code className="text-blue-900 text-sm sm:text-base block overflow-x-auto whitespace-nowrap">
              {dependencies}
            </code>
            <button
              onClick={() => navigator.clipboard.writeText(dependencies)}
              className="text-blue-900 hover:scale-110 transition-transform duration-200"
            >
              <TbCopy size={20} />
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-sm italic">
          Copia el componente que necesites y añade tu lógica en las secciones
          comentadas. ¡Así de simple!
        </p>
      </div>
    </>
  );
}
