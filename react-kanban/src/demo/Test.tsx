import { BoardContainer } from "./BoardContainer";
import { ColumnSection } from "./ColumnSection";
import { CardItem } from "./CardItem";
import { useAppContext, type Column } from "../context";



export function Test() {
  /*     const [droppedZone, setDroppedZone] = useState("box-1");

  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

     function handleDragEnd(event) {
    if (event.over) {
      setDroppedZone(event.over.id);
    }
} */

    const { columns } = useAppContext();

  return (
    <>
      <div className="mt-4 w-full pb-4">

        <BoardContainer title="Mi Tablero Kanban">
          {columns.map((column, columnIndex) => (
            <ColumnSection key={columnIndex} name={column.name}>
              {column.cards.map((card, cardIndex) => (
                <CardItem
                  key={cardIndex}
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
