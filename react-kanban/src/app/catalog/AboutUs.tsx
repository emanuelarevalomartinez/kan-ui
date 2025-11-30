import { BsStar } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { useAppContext } from "../../context";
import { textAboutUs } from "./translate";

export function AboutUs() {

  const { language } = useAppContext();
  const text = textAboutUs[language];

  return (
    <section className="w-full flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-xl lg:text-4xl font-bold text-indigo-700 mb-6">
          {text.title}
        </h1>

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <TbTargetArrow className="text-red-500" />
              <span>{text.missionTitle}</span>
            </h3>
            <p className="text-gray-600">
              {text.missionContent}
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <BsStar className="text-yellow-500" />
              <span>{text.visionTitle}</span>
            </h3>
            <p className="text-gray-600">
              {text.visionContent}
            </p>
          </div>

          <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 border border-indigo-100">
            <h3 className="flex items-center space-x-1 justify-center text-base lg:text-xl font-semibold text-indigo-600 mb-2">
              <LuHandshake className="text-blue-500" />
              <span>{text.valuesTitle}</span>
            </h3>
            <p className="text-gray-600">
              {text.valuesContent}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-lg lg:text-2xl font-semibold text-indigo-700 mb-6">
            {text.teamTitle}
          </h2>

          <div className="flex flex-col md:flex-row w-full justify-center gap-6">
            <div className="flex w-4/6 md:w-auto m-auto md:m-0 items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/icons/logo.png"
                alt="Emanuel"
              />
              <div className="text-left">
                <p className="text-black text-sm font-medium">
                  {text.member1Name}
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  {text.member1Role}
                </p>
              </div>
            </div>

            <div className="flex w-4/6 md:w-auto m-auto md:m-0 items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/icons/logo_2.png"
                alt="Daniel"
              />
              <div className="text-left">
                <p className="text-black text-sm font-medium">
                  {text.member2Name}
                </p>
                <p className="text-gray-600 text-sm font-mono">
                  {text.member2Role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-gray-500 italic">
          {text.footerNote}
        </footer>
      </div>
    </section>
  );
}
