

export function ColumnSection({ children, name, colorClass = "bg-white" }) {
  return (
    <div className={`${colorClass} flex-shrink-0 w-80 p-4 rounded-lg shadow`}>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}