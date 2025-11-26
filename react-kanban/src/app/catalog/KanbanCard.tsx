import { useState } from "react";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { kanbanCardCodeExample } from "./components/kanbanCard/kanbanCardCodeExample";
import { KanbanCardGuide } from "./components/kanbanCard/KanbanCardGuide";


export function KanbanCard(){

  const [showCode, setShowCode] = useState(false);
  
    return(
      <div className="space-y-8">
     
           <ItemBasicComponentInfo 
             title="KanbanCard" 
             description="Tarjeta individual que representa una tarea en el tablero" 
             showCode={showCode} 
             setShowCode={setShowCode} 
           />
     
           <div className="mt-6">
             {showCode ? (
               <ItemCodeExample
                 titleFile="KanbanCard.tsx"
                 codeExample={kanbanCardCodeExample}
               />
             ) : (
               <KanbanCardGuide />
             )
             }
           </div>
         </div>
    )
    
}