import { useEffect } from "react";
import { useAppContext, useVoice } from "../../../context";
import type { Column } from "../../../interfaces";
import { Actions } from "devosaurus";
import { textItemColumn } from "../translate";


interface ItemColumnProperties{
  newColumn: Column,
  setNewColumn: React.Dispatch<React.SetStateAction<Column>>;
  handleAddNewColumn: (e: string)=> void;
  handleCloseColumnModal: ()=> void;
}


export function ItemColumn( { newColumn, setNewColumn, handleAddNewColumn, handleCloseColumnModal }: ItemColumnProperties) {

  const { language } = useAppContext();
  const text = textItemColumn[language];

  const devo = useVoice();

  useEffect(() => {
    if (!devo) return;
  
    devo.addCommand(
      "set section modal info",
      ["set section", "set column"],
      () => {
        const value = "Pendientes";

        Actions.type("#column-input", value)();

        setNewColumn(prev => ({ ...prev, name: value }));
      }
    );

    devo.addCommand(
      "confirm create new section",
      ["create section", "create column"],
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
        {text.titleLabel}
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
        placeholder={text.titlePlaceholder}
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />
      <button
        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
        onClick={ ()=> { handleAddNewColumn(newColumn.name) } }
      >
        {text.buttonCreate}
      </button>
    </div>
  );
}
