
import {useDroppable} from '@dnd-kit/core';

export function Droppable({ id, children }) {
  /* const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  }); */

   const { isOver, setNodeRef } = useDroppable({ id });


  const style = {
    color: isOver ? 'green' : undefined,
    padding: 30,
    width: 150,
    height: 150,
    border: "2px dashed black",
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}