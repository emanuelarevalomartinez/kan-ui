


export function BoardContainer({ children, title }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}