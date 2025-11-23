interface ItemWritingOnCardProps {
  tempDescription: string;
  setTempDescription: (e: string) => void;
}

export function ItemWritingOnCard({
  tempDescription,
  setTempDescription,
}: ItemWritingOnCardProps) {


  return (
    <textarea
      value={tempDescription}
      onChange={(e) => setTempDescription(e.target.value)}
      className="w-full bg-transparent border border-gray-300 px-2 py-1 rounded-md outline-none text-gray-700 text-sm resize-none overflow-y-auto leading-5"
      style={{ height: "250px" }}
    />
  );
}
