import { useEffect } from "react";
import { useVoice } from "../../../context";
import type { Column } from "../../../interfaces";
import { Actions } from "devosaurus";


interface ItemColumnProperties{
  newColumn: Column,
  setNewColumn: React.Dispatch<React.SetStateAction<Column>>;
  handleAddNewColumn: (e: string)=> void;
  handleCloseColumnModal: ()=> void;
}


export function ItemColumn( { newColumn, setNewColumn, handleAddNewColumn, handleCloseColumnModal }: ItemColumnProperties) {

  const devo = useVoice();

  const input = document.querySelector<HTMLInputElement>('#column-input');

  let input2: string = "";

  useEffect(() => {
    if (!devo) return;
  
    devo.addCommand(
      "set section name revisar",
      ["set name"],
      () => {
        const value = "Tareas";

        Actions.type("#column-input", value)();

        setNewColumn(prev => ({ ...prev, name: value }));
      }
    );

    devo.addCommand(
      "confirm column",
      ["create section"],
      () => {
        handleAddNewColumn("Tareas");
        handleCloseColumnModal();
      }
    );
  
  }, [devo, setNewColumn, handleAddNewColumn]);

  return (
    <div
      className="space-y-3"
    >
      <label className="text-sm font-medium text-gray-700">
        Nombre
      </label>
      <input
      id="column-input"
      value={newColumn.name}
        onChange={(e) =>
          setNewColumn(prev => ({
            ...prev,
            name: e.target.value
          }))
        }
        placeholder="Nombre"
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />
      <button
        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
        onClick={ ()=> { handleAddNewColumn(newColumn.name) } }
      >
        Crear Sección
      </button>
    </div>
  );
}
