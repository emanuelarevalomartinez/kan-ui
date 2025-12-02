import { useState } from "react";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { kanbanColumnCodeExample } from "./components/kanbanColumn/kanbanColumnCodeExample";
import { KanbanColumnGuide } from "./components/kanbanColumn/KanbanColumnGuide";
import { useAppContext } from "../../context";
import { textKanbanColumn } from "./translate";


export function KanbanColumn(){

  const { language } = useAppContext();
  const text = textKanbanColumn[language];

  const [showCode, setShowCode] = useState(false);

  return(
    <div className="space-y-8">
   
         <ItemBasicComponentInfo 
           title={text.title} 
           description={text.description} 
           showCode={showCode} 
           setShowCode={setShowCode} 
         />
   
         <div className="mt-6">
           {showCode ? (
             <ItemCodeExample
               titleFile="KanbanColumn.tsx"
               codeExample={kanbanColumnCodeExample}
             />
           ) : (
             <KanbanColumnGuide />
           )
           }
         </div>
       </div>
  )
    
}