import { useState } from "react";
import { ItemBasicComponentInfo } from "./items/ItemBasicComponentInfo";
import { ItemCodeExample } from "./items/ItemCodeExample";
import { kanbanColumnCodeExample } from "./items/kanbanColumn/kanbanColumnCodeExample";
import { KanbanColumnGuide } from "./items/kanbanColumn/KanbanColumnGuide";


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