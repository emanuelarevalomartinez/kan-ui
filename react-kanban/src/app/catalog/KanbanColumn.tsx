import { useState } from "react";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { kanbanColumnCodeExample } from "./components/kanbanColumn/kanbanColumnCodeExample";
import { KanbanColumnGuide } from "./components/kanbanColumn/KanbanColumnGuide";


export function KanbanColumn(){

  const [showCode, setShowCode] = useState(false);

  return(
    <div className="space-y-8">
   
         <ItemBasicComponentInfo 
           title="KanbanColumn" 
           description="Columna individual dentro del tablero Kanban" 
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