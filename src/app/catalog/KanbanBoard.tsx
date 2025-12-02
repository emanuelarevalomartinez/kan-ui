import { useState } from "react";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { KanbanBoardGuide } from "./components/kanbanBoard/KanbanBoardGuide";
import { kanbanBoardCodeExample } from "./components/kanbanBoard/kanbanBoardCodeExample";
import { useAppContext } from "../../context";
import { textKanbanBoard } from "./translate";

export function KanbanBoard() {

  const { language } = useAppContext();
  const text = textKanbanBoard[language];

  const [showCode, setShowCode] = useState(false);

  return (
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
            titleFile="KanbanBoard.tsx"
            codeExample={kanbanBoardCodeExample}
          />
        ) : (
          <KanbanBoardGuide />
        )
        }
      </div>
    </div>
  );
}
