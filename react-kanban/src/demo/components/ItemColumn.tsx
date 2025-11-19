export function ItemColumn() {
  return (
    <div
      className="space-y-3"
    >
      <label className="text-sm font-medium text-gray-700">
        Nombre de la Sección
      </label>
      <input
       /*  value={title}
        onChange={(e) => setTitle(e.target.value)} */
        placeholder="Ej. Pendientes"
        className="w-full border border-indigo-300 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-indigo-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Crear Sección
      </button>
    </div>
  );
}
