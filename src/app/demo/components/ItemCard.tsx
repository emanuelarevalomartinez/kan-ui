import { useEffect } from "react";
import { useAppContext, useVoice } from "../../../context";
import type { Card } from "../../../interfaces";
import { textItemCard } from "../translate";
import { Actions } from "devosaurus";


interface ItemCardProps {
  newCard: Card;
  setNewCard: React.Dispatch<React.SetStateAction<Card>>;
  handleAddCard: ()=> void;
  HandleClosseModal: ()=> void;
}

export function ItemCard({ newCard, setNewCard, handleAddCard, HandleClosseModal }: ItemCardProps) {

  const { language } = useAppContext();
  const text = textItemCard[language];

  const devo = useVoice();
  
    useEffect(() => {
      if (!devo) return;
    
      devo.addCommand(
        "set card name and description",
        ["set note"],
        () => {
          const valueName = "Nueva nota";
          const valueDescription = "descripción de la nueva nota";
  
          Actions.type("#card-name", valueName)();
          Actions.type("#card-description", valueDescription)();
  
          setNewCard(prev => ({
             ...prev, 
             title: valueName,
             description: valueDescription, 
            }));
        }
      );

      devo.addCommand(
        "confirm card",
        ["create note"],
        () => {
          //!  // FIXME esto no esta creando correctamente y cerrando el modal por un problema con la libreria devosaurus, solucionarlo lo antes posible
          handleAddCard();
          HandleClosseModal();
        }
      );
    
    }, [devo, setNewCard, handleAddCard]);
  

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">{text.titleSection}</label>
      <input
      id="card-name"
        value={newCard.title}
        onChange={(e) =>
          setNewCard((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
        placeholder={text.titlePlaceholder}
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />

      <label className="text-sm font-medium text-gray-700">{text.descriptionLabel}</label>
      <textarea
      id="card-description"
        value={newCard.description}
        onChange={(e) =>
          setNewCard((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        placeholder={text.descriptionPlaceholder}
        className="w-full border border-indigo-300 rounded-lg p-2 h-24 text-gray-800 focus:outline-none focus:border-indigo-500"
      />

      <button className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
      onClick={ ()=> { handleAddCard() } }
      >
        {text.buttonCreate}
      </button>
    </div>
  );
}
