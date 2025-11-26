import type { Card } from "../../context";

interface ItemCardProps {
  newCard: Card;
  setNewCard: React.Dispatch<React.SetStateAction<Card>>;
  handleAddCard: ()=> void;
}

export function ItemCard({ newCard, setNewCard, handleAddCard }: ItemCardProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Título</label>
      <input
        value={newCard.title}
        onChange={(e) =>
          setNewCard((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
        placeholder="Título"
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />

      <label className="text-sm font-medium text-gray-700">Texto</label>
      <textarea
        value={newCard.description}
        onChange={(e) =>
          setNewCard((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        placeholder="Añade el texto de la nota… "
        className="w-full border border-indigo-300 rounded-lg p-2 h-24 text-gray-800 focus:outline-none focus:border-indigo-500"
      />

      <button className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
      onClick={ ()=> { handleAddCard() } }
      >
        Crear Nota
      </button>
    </div>
  );
}
