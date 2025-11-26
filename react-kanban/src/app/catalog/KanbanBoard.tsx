import { useState } from "react";
import { ItemCodeExample } from "./components/ItemCodeExample";
import { ItemBasicComponentInfo } from "./components/ItemBasicComponentInfo";
import { KanbanBoardGuide } from "./components/kanbanBoard/KanbanBoardGuide";
import { kanbanBoardCodeExample } from "./components/kanbanBoard/kanbanBoardCodeExample";

export function KanbanBoard() {

  const [showCode, setShowCode] = useState(false);

  return (
    <div className="space-y-8">

      <ItemBasicComponentInfo 
        title="KanbanBoard" 
        description="Contenedor principal del tablero Kanban" 
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
