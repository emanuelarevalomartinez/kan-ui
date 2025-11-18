/* 

export function KanbanBoard(){
    return(
        <>
         <div>
         <div>
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
      KanbanBoard
                </h1>
                <p className="text-gray-600">
                  El contenedor del tablero Kanban
                </p>
      </div>


<div>
<div className="relative max-w-2xl mx-auto mt-24">
  <div className="bg-gray-900 text-white p-4 rounded-md">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400 flex gap-2"
        ><div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div></span><button
        className="bg-gray-800 code hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
        data-clipboard-target="#code">
        Copy
      </button>
    </div>
    <div className="overflow-x-auto">
      <pre id="code" className="text-gray-300 bg-gray-800 code p-4 rounded-md whitespace-pre overflow-x-auto"><code>
&lt;div classNameName=&quot;flex justify-center items-center bg-blue-500 text-white p-4&quot;&gt;
   &lt;h1 classNameName=&quot;text-2xl&quot;&gt;Hello, World!&lt;/h1&gt;
   &lt;a&gt;Hello Reactjs&lt;/a&gt;
&lt;/div&gt;
</code></pre>
    </div>
  </div>
</div>
</div>


         </div>
        </>
    )
} */

    import { useState } from "react";

    export function KanbanBoard() {
      const [showCode, setShowCode] = useState(false);
    
      const codeExample = `
    <div className="flex justify-center items-center bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Hello, World!</h1>
      <a>Hello Reactjs</a>
    </div>`;
    
      return (
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-indigo-800 mb-2">KanbanBoard</h1>
            <p className="text-gray-600">El contenedor del tablero Kanban</p>
          </div>
    
          {/* Toggle Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowCode(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !showCode
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              👀 Vista
            </button>
    
            <button
              onClick={() => setShowCode(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                showCode
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              💻 Código
            </button>
          </div>
    
          {/* Content area */}
          <div className="mt-8">
            {showCode ? (
              // 🌟 LIGHT CODE VIEW WITH INDIGO THEME
              <div className="relative bg-indigo-50 rounded-xl shadow-lg overflow-hidden border border-indigo-200">
                <div className="flex justify-between items-center px-4 py-3 bg-indigo-100 border-b border-indigo-200">
                  <span className="text-sm text-indigo-700 font-medium">
                    KanbanBoard.tsx
                  </span>
                  <button
                    className="text-xs bg-white hover:bg-gray-200 text-indigo-600 border border-indigo-200 px-3 py-1 rounded-md transition"
                    onClick={() => navigator.clipboard.writeText(codeExample)}
                  >
                    🔗 Copiar
                  </button>
                </div>
    
                <pre className="p-4 overflow-x-auto whitespace-pre text-sm leading-relaxed">
                  <code>
                    {codeExample
                      .replace(/</g, "‹")
                      .replace(/>/g, "›")
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>
                          <span className="text-indigo-700">{line}</span>
                          {"\n"}
                        </span>
                      ))}
                  </code>
                </pre>
              </div>
            ) : (
              // 🌈 COMPONENT PREVIEW
              <div className="flex justify-center items-center bg-indigo-200 rounded-xl p-10 shadow-inner">
                <p className="text-indigo-800 font-semibold">
                  Aquí se verá el <strong>KanbanBoard real</strong> 🧩
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }
    