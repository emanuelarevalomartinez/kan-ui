import type { Column } from "../../context";

interface ItemColumnProperties{
  newColumnName: string,
  setNewColumn: React.Dispatch<React.SetStateAction<Column>>;
  handleAddNewColumn: (e: string)=> void;
}


export function ItemColumn( { newColumnName, setNewColumn, handleAddNewColumn }: ItemColumnProperties) {



  return (
    <div
      className="space-y-3"
    >
      <label className="text-sm font-medium text-gray-700">
        Nombre
      </label>
      <input
      value={newColumnName}
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
        onClick={ ()=> { handleAddNewColumn(newColumnName) } }
      >
        Crear Sección
      </button>
    </div>
  );
}
