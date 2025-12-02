import { useState } from "react";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { kanbanCardCodeExample } from "./components/kanbanCard/kanbanCardCodeExample";
import { KanbanCardGuide } from "./components/kanbanCard/KanbanCardGuide";
import { useAppContext } from "../../context";
import { textKanbanCard } from "./translate";


export function KanbanCard(){

  const { language } = useAppContext();
  const text = textKanbanCard[language];

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