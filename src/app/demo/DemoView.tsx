import { useEffect } from "react";
import { useAppContext, useVoice } from "../../context";
import { KanbanBoard } from "./KanbanBoard";
import { KanbanCard } from "./KanbanCard";
import { KanbanColumn } from "./KanbanColumn";
import { Actions } from "devosaurus";
import { APP_ROUTES } from "../../routes";
import { NavLink } from "react-router-dom";
import { textDemoView } from "./translate";

export function DemoView() {
  const { language, columns } = useAppContext();

  const text = textDemoView[language];

  const devo = useVoice();

  useEffect(() => {
    if (!devo) return;

    devo.addCommand("go to catalog", ["open catalog", "catalog"], () => {
      Actions.goTo(APP_ROUTES.CATALOG)();
    });

    devo.addCommand("go home", ["home", "go to home", "start"], () => {
      Actions.goTo(APP_ROUTES.HOME)();
    });
  }, [devo]);

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
        <div className="flex justify-center mt-4 mb-4 pb-16">
          <NavLink
            to={APP_ROUTES.UNIPASS_VALIDADOR}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition active:scale-95"
          >
            {text.buttonUnipassValidator}
          </NavLink>
        </div>
      </div>
    </>
  );
}
