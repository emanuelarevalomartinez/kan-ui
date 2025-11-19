export function ItemCard() {
  return (
    <form className="space-y-3">
      <label className="text-sm font-medium text-gray-700">
        Título del Item
      </label>
      <input
        /* value={title}
        onChange={(e) => setTitle(e.target.value)} */
        placeholder="Ej. Terminar UI"
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />

      <label className="text-sm font-medium text-gray-700">Descripción</label>
      <textarea
        /* value={description}
        onChange={(e) => setDescription(e.target.value)} */
        placeholder="Detalles opcionales…"
        className="w-full border border-indigo-300 rounded-lg p-2 h-24 text-gray-800 focus:outline-none focus:border-indigo-500"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Crear Item
      </button>
    </form>
  );
}
