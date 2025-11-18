

export function CardItem({ title, description }) {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow">
      <h3 className="font-medium text-md mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}   
    </div>
  );
}