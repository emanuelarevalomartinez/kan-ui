import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { APP_ROUTES } from "../../routes";
import { useAppContext } from "../../context";
import { textStart } from "./translate";

export function Start() {

  const { language } = useAppContext();
  const text = textStart[language];

  return (
    <div className="mt-16 w-screen">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:py-24 md:px-10">
        <div className="mx-auto mb-4 w-full max-w-3xl text-center lg:mb-20">
          <h1 className="mb-4 text-2xl font-semibold lg:text-6xl leading-tight">
          {text.title}
            <TypeAnimation
              key={language}
              sequence={[text.typingWords, 4000, "", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-white bg-blue-600 px-4 rounded-lg"
            />
          </h1>
          <p className="mx-auto mb-5 text-base lg:text-xl text-[#636262] lg:mb-8">
          {text.description}
          </p>
          <div className="flex w-2/3 lg:w-full mx-auto flex-col gap-2 lg:gap-0 lg:flex-row justify-center">
            <NavLink to={APP_ROUTES.CATALOG}>
              <div className="mr-0 lg:mr-5 flex justify-center items-center rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">
                <span>{text.catalog}</span>
              </div>
            </NavLink>

            <NavLink to={APP_ROUTES.DEMO}>
              <div className="mr-0 lg:mr-5 flex justify-center items-center space-x-2 rounded-xl px-8 py-4 text-center font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] border border-solid border-[#1353fe]">
                <FaPlay />
                <span className="text-black">{text.demo}</span>
              </div>
            </NavLink>
          </div>
        </div>

        <section className="container mx-auto pl-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2 lg:mb-0 py-4 pl-0 lg:pl-12 lg:py-0 items-center lg:items-start">
              <div className="inline-block terminal-box px-4 py-2 rounded-md">
                <span className="text-cosmic-DEFAULT font-mono text-black">
                  v0.1.0
                </span>
                <span className="text-gray-600 font-mono ml-3">
                  {text.latestRelease}
                </span>
              </div>

            <div>
            <div className="mt-0 lg:mt-12 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-void-DEFAULT"
                    src="/icons/logo.png"
                    alt="User"
                  />
                </div>
                <div>
                  <p className="text-black text-sm">{text.member1Name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="font-mono">{text.member1Role}</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-void-DEFAULT"
                    src="/icons/logo_2.png"
                    alt="User"
                  />
                </div>
                <div>
                  <p className="text-black text-sm">{text.member2Name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="font-mono">{text.member2Role}</span>
                  </div>
                </div>
              </div>
            </div>
              
            </div>

            <div className="lg:w-1/2 relative bg-[#181E31] rounded-xl border border-purple-800">
              <div className="relative animation-float">
                <div className="terminal-box rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-gray-800 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 font-mono text-sm bg-black text-gray-200 rounded-lg">
                    <div className="flex">
                      <span className="text-cyan-400">$</span>
                      <span className="ml-2 text-gray-300">
                        npm install react tailwindcss @dnd-kit/core
                        @dnd-kit/sortable @dnd-kit/modifiers
                      </span>
                    </div>

                    <div className="mt-2 text-gray-500">
                      <p>added 286 packages, and audited 287 packages in 56s</p>
                      <p>72 packages are looking for funding</p>
                      <p>
                        run <span className="text-amber-400">npm fund</span> for
                        details
                      </p>
                      <p>
                        found <span className="text-green-400">0</span>{" "}
                        vulnerabilities
                      </p>
                    </div>

                    <div className="flex mt-4">
                      <span className="text-cyan-400">$</span>
                    </div>

                    <p className="text-green-400 mt-4">
                      {text.completeSetup}
                    </p>
                  </div>
                </div>

                <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-cosmic-DEFAULT to-nebula rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img
        src="/svgs/lines_1.svg"
        alt=""
        className="absolute bottom-0 left-0 right-auto top-auto -z-10 opacity-25 lg:opacity-100 inline-block"
      />
      <img
        src="/svgs/lines_2.svg"
        alt=""
        className="absolute bottom-auto left-auto right-0 top-[10%] -z-10 opacity-25 lg:opacity-100 inline-block"
      />
    </div>
  );
}
