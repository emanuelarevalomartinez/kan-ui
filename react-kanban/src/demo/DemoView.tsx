import { useAppContext } from "../context";
import { BoardContainer } from "./BoardContainer";
import { CardItem } from "./CardItem";
import { ColumnSection } from "./ColumnSection";


export function DemoView() {

const { columns } = useAppContext();

  return (
    <>
      <div className="mt-16 min-h-[91vh] bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="flex px-4">
          <div className="mt-4 w-full pb-4">
            <BoardContainer title="AvanCode Challenge" columns={columns}>
              {columns.map((column) => (
                <ColumnSection
                  key={column.id}
                  name={column.name}
                  columnIndex={column.id}
                >
                  {column.cards.map((card) => (
                    <CardItem
                      key={card.id}
                      columnIndex={column.id}
                      cardIndex={card.id}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </ColumnSection>
              ))}
            </BoardContainer>
          </div>
        </div>
      </div>
    </>
  );
}
