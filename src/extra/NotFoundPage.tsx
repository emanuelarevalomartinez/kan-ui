import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../routes";

export function NotFoundPage() {
    
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <body className="bg-[#f9f9f9] font-inter min-h-screen flex items-center justify-center">
        <section className="py-20 px-4 md:px-12 lg:px-24 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-none shadow-sm p-12 md:p-16 text-center">
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold text-indigo-600 mb-4">
                  404
                </h1>
                <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
                  Page Not Found
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NavLink
                  to={APP_ROUTES.HOME}
                  className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium hover:bg-indigo-800 transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  Go Back Home
                </NavLink>
                <button
                  onClick={() => {
                    handleGoBack();
                  }}
                  className="px-8 py-4 bg-white text-black border border-gray-300 text-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  Go previous page
                </button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
