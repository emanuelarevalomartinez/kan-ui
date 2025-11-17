import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export function Start() {
  return (
    <div className="mt-16 w-screen ">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-10">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl leading-tight">
            Tableros Kanban para React,
            <TypeAnimation
              sequence={["Fácil", 4000, "", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-white bg-blue-600 px-4 rounded-lg"
            />
          </h1>
          <p className="mx-auto mb-5  text-xl text-[#636262] lg:mb-8">
            Componentes modulares y listos para usar con soporte para archivos,
            etiquetas, estados y mucho más. Integración rápida en cualquier app
            React.
          </p>
          <div className="flex justify-center">
            <NavLink to={APP_ROUTES.COMPONENTS}>
              <div className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">
                <span>Ver Componentes</span>
              </div>
            </NavLink>

            <NavLink to={APP_ROUTES.DEMO}>
              <div className="mr-5 flex items-center space-x-2 rounded-xl px-8 py-4 text-center font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] border border-solid border-[#1353fe]">
                <FaPlay />
                <span className="text-black">Iniciar Demo</span>
              </div>
            </NavLink>
          </div>
        </div>

        <section className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <div className="mb-8 inline-block terminal-box px-4 py-2 rounded-md">
                <span className="text-cosmic-DEFAULT font-mono text-black">
                  v0.1.0
                </span>
                <span className="text-gray-600 font-mono ml-3">
                  // Latest release
                </span>
              </div>

              <p className="text-lg text-black mb-10 max-w-lg">
                Diseñado para ser fácil de entender y reutilizar en cualquier
                proyecto de React.js y otros frameworks similares.
              </p>

              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-void-DEFAULT"
                    src="../../public/logo/logo.png"
                    alt="User"
                  />
                </div>
                <div>
                  <p className="text-black text-sm">Emanuel Arévalo Martínez</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="font-mono">Ingeniero de Software</span>
                    <span className="font-mono">FullStack Web Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-16 relative bg-[#181E31] rounded-xl border border-purple-800">
              <div className="relative animation-float">
                <div className="terminal-box rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-gray-800 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-cosmic-DEFAULT">
                      ${" "}
                      <span className="text-gray-300">
                        npm install @dnd-kit/core @dnd-kit/modifiers
                        @dnd-kit/sortable
                      </span>
                    </div>
                    <div className="text-gray-500 mt-2">
                      {" "}
                      Downloading dnd dependencies...
                    </div>
                    <div className="text-green-400">
                      ✓ Success! Dependencies donwloaded{" "}
                    </div>
                    <div className="mt-4 text-cosmic-DEFAULT">
                      $ <span className="text-gray-300">cd stellar-app</span>
                    </div>
                    <div className="text-cosmic-DEFAULT">
                      ${" "}
                      <span className="text-gray-300">
                        nebula deploy --prod
                      </span>
                    </div>
                    <div className="text-gray-500 mt-2">
                      {" "}
                      Deploying to cosmic cluster...
                    </div>
                    <div className="text-green-400 mt-4">
                      🚀 Configuration Finish!{" "}
                    </div>
                  </div>
                </div>

                <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-cosmic-DEFAULT to-nebula rounded-2xl opacity-20 blur-xl"></div>
              </div>

              <div className="absolute -right-20 top-1/4 hidden xl:block">
                <div className="relative animation-float">
                  <div className="w-48 h-48 bg-gradient-to-br from-cosmic-DEFAULT to-nebula rounded-2xl opacity-80"></div>
                  <div className="absolute inset-0 border border-cosmic-light rounded-2xl opacity-30 m-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt=""
        className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block"
      />
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt=""
        className="absolute bottom-auto left-auto right-0 top-[10%] -z-10 inline-block"
      />
    </div>
  );
}
