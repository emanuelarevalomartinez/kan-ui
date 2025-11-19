
interface BoardContainerProps {
  title: string;
  children: React.ReactNode;
}

export function BoardContainer({ children, title }: BoardContainerProps) {

  return (
    <div className=" bg-white p-6 rounded-2xl text-black w-full ">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex space-x-4 overflow-x-auto">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl">
        {children}
        </div>
      </div>
    </div>
  );
}