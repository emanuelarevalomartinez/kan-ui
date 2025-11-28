import { useEffect } from "react";
import { useAppContext } from "../../context";
import { KanbanBoard } from "./KanbanBoard";
import { KanbanCard } from "./KanbanCard";
import { KanbanColumn } from "./KanbanColumn";
import { initDevosaurus } from 'devosaurus';


export function DemoView() {

const { columns } = useAppContext();
const devo = initDevosaurus();

useEffect(() => {
  devo.addCommand('greet', ['hello', 'good morning'], () => {
    alert('Hello there! 👋');
  });
}, [])


  return (
    <>
      <div className="mt-16 min-h-[91vh] bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="flex px-4">
          <div className="mt-4 w-full pb-4">
            <KanbanBoard title="AvanCode Challenge" columns={columns}>
              {columns.map((column) => (
                <KanbanColumn
                  key={column.id}
                  name={column.name}
                  columnIndex={column.id}
                >
                  {column.cards.map((card) => (
                    <KanbanCard
                      key={card.id}
                      columnIndex={column.id}
                      cardIndex={card.id}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </KanbanColumn>
              ))}
            </KanbanBoard>
          </div>
        </div>
      </div>
    </>
  );
}
