
interface ModalDeleteProps {
  isOpen: boolean;
  text: string;
  onClose: () => void;
  onDelete: () => void;
}

export function ModalDelete({
  isOpen,
  text,
  onClose,
  onDelete
}: ModalDeleteProps) {
  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 
      ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className="absolute w-screen h-screen -z-10 bg-black/40"
      ></div>

      <div
        className={`bg-white rounded-2xl shadow-xl w-full max-w-sm transform transition-all duration-300
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <div className="flex items-center justify-center border-b p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            ¿Estás seguro de eliminar {text} ?
          </h2>
        </div>

        <div className="flex gap-3 justify-center p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancelar
          </button>

          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
