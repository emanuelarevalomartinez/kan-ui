/* import { BsStar } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";


  export function AboutUs() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-xl lg:text-4xl font-bold text-indigo-700 mb-6">
          Sobre Nosotros
        </h1>

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
          Somos un equipo apasionado por el diseño de software, la experiencia de usuario
          y la creación de herramientas que impulsen la productividad. Este proyecto es
          una galería interactiva donde podrás explorar los componentes que hemos creado 
          para aplicaciones de gestión como tableros Kanban.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <p> <TbTargetArrow className="text-red-500" /> </p>
               <p> Misión </p>
               </h3>
            <p className="text-gray-600">
              Inspirar soluciones intuitivas con interfaces claras y efectivas.
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
           <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <p> <BsStar className="text-yellow-500" /> </p>
               <p> Visión </p>
               </h3>
            <p className="text-gray-600">
              Ser una referencia de calidad y facilidad de uso en el desarrollo frontend.
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
          <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <p> <LuHandshake className="text-blue-500" /> </p>
               <p> Valores </p>
               </h3>
            <p className="text-gray-600">
              Trabajo en equipo, creatividad, innovación y mejora continua.
            </p>
          </div>
        </div>

        <footer className="mt-12 text-gray-500 italic">
          Construido con ❤️ y React + TailwindCSS
        </footer>
      </div>
    </section>
  );
}
 */

import { BsStar } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

export function AboutUs() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-xl lg:text-4xl font-bold text-indigo-700 mb-6">
          Sobre Nosotros
        </h1>

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
          Somos un equipo apasionado por el diseño de software, la experiencia de usuario
          y la creación de herramientas que impulsen la productividad. Este proyecto es
          una galería interactiva donde podrás explorar los componentes que hemos creado 
          para aplicaciones de gestión como tableros Kanban.
        </p>

        {/* Cards Misión, Visión, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <TbTargetArrow className="text-red-500" />
              <span>Misión</span>
            </h3>
            <p className="text-gray-600">
              Inspirar soluciones intuitivas con interfaces claras y efectivas.
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <BsStar className="text-yellow-500" />
              <span>Visión</span>
            </h3>
            <p className="text-gray-600">
              Ser una referencia de calidad y facilidad de uso en el desarrollo frontend.
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <LuHandshake className="text-blue-500" />
              <span>Valores</span>
            </h3>
            <p className="text-gray-600">
              Trabajo en equipo, creatividad, innovación y mejora continua.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="mt-14">
          <h2 className="text-lg lg:text-2xl font-semibold text-indigo-700 mb-6">
            Nuestro Equipo
          </h2>

          <div className="flex flex-col items-center gap-6">
            {/* Emanuel */}
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/icons/logo.png"
                alt="Emanuel"
              />
              <div className="text-left">
                <p className="text-black text-sm font-medium">
                  Emanuel Arévalo Martínez
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  Ingeniero de Software
                </p>
              </div>
            </div>

            {/* Daniel */}
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/icons/logo_2.png"
                alt="Daniel"
              />
              <div className="text-left">
                <p className="text-black text-sm font-medium">
                  Daniel Arró Moreno
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  Ingeniero de Software
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-gray-500 italic">
          Construido con ❤️ y React + TailwindCSS
        </footer>
      </div>
    </section>
  );
}
