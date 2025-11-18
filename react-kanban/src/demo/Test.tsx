import { DndContext } from "@dnd-kit/core";

import {Draggable} from './Draggable';
import { Droppable } from "./Droppable";
import { useState } from "react";
import { BoardContainer } from "./BoardContainer";
import { ColumnSection } from "./ColumnSection";
import { CardItem } from "./CardItem";


export function Test(){

     const [droppedZone, setDroppedZone] = useState("box-1");

  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

     function handleDragEnd(event) {
    if (event.over) {
      setDroppedZone(event.over.id);
    }
}

   return (
    <>
      <div className="mt-16">

       {/*   <DndContext onDragEnd={handleDragEnd}>

      {!droppedZone ? draggableMarkup : null}

      <div className="flex gap-20 mt-20">
          <Droppable id="box-1">
            {droppedZone === "box-1" ? draggableMarkup : "Drop here 1"}
          </Droppable>

          <Droppable id="box-2">
            {droppedZone === "box-2" ? draggableMarkup : "Drop here 2"}
          </Droppable>

          <Droppable id="box-3">
            {droppedZone === "box-3" ? draggableMarkup : "Drop here 3"}
          </Droppable>
        </div>
    </DndContext> */}

     <BoardContainer title="Mi Tablero Kanban">
      <ColumnSection name="Por hacer" colorClass="bg-white">
        <CardItem title="Tarea 1" description="Descripción de la tarea 1" />
        <CardItem title="Tarea 2" />
      </ColumnSection>

      <ColumnSection name="En progreso" colorClass="bg-white">
        <CardItem title="Tarea 3" description="Ya iniciada" />
      </ColumnSection>

      <ColumnSection name="Hecho" colorClass="bg-white">
        <CardItem title="Tarea 4" description="Finalizada" />
      </ColumnSection>
    </BoardContainer>

      </div>
    </>
   )

}