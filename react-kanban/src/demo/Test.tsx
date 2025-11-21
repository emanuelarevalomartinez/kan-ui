import { BoardContainer } from "./BoardContainer";
import { ColumnSection } from "./ColumnSection";
import { CardItem } from "./CardItem";
import { useAppContext } from "../context";
import { useDroppable } from "@dnd-kit/core";



export function Test() {

    const { columns } = useAppContext();

     const {setNodeRef: setFirstDroppableRef} = useDroppable({
    id: "",
  });


  return (
    <>
      <div className="mt-4 w-full pb-4">

        <BoardContainer title="Mi Tablero Kanban">
          {columns.map((column, columnIndex) => (
            <ColumnSection key={columnIndex} name={column.name} columnIndex={columnIndex}>
              {column.cards.map((card, cardIndex) => (
                <CardItem
                  key={`${columnIndex}-${cardIndex}`}
                  columnIndex={columnIndex}
                  cardIndex={cardIndex}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </ColumnSection>
          ))}
        </BoardContainer>
      </div>
    </>
  );
}
