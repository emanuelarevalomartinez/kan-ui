import { GoLink } from "react-icons/go";

interface ItemCodeExampleProps{
    titleFile: string;
    codeExample: string;
}

export function ItemCodeExample({ titleFile, codeExample }: ItemCodeExampleProps){
    
    return(
        <>
           <div className="relative bg-indigo-50 rounded-xl shadow-lg overflow-hidden border border-indigo-200">
            <div className="flex justify-between items-center px-4 py-3 bg-indigo-100 border-b border-indigo-200">
              <span className="text-sm text-indigo-700 font-medium">
                {titleFile}
              </span>
              <button
                className="text-xs bg-white hover:bg-gray-200 text-indigo-600 border border-indigo-200 px-3 py-1 rounded-md transition"
                onClick={() => navigator.clipboard.writeText(codeExample)}
              >
                <GoLink />
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
        </>
    )

}