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
      <div className="mt-4 w-full pb-4">

     <BoardContainer title="Mi Tablero Kanban">
      <ColumnSection name="Por hacer">
        <CardItem title="Tarea 1" description="Descripción de la tarea 1" />
        <CardItem title="Tarea 2" />
      </ColumnSection>

      <ColumnSection name="En progreso">
        <CardItem title="Tarea 3" description="Ya iniciada" />
      </ColumnSection>

      <ColumnSection name="Hecho">
        <CardItem title="Tarea 4" description="Finalizada" />
      </ColumnSection>
    </BoardContainer>

      </div>
    </>
   )

}