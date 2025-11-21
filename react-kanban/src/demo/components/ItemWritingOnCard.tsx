import { useRef, useEffect } from "react";

interface ItemWritingOnCardprops {
  tempDescription: string;
  setTempDescription: (e: string) => void;
}

export function ItemWritingOnCard({ tempDescription, setTempDescription }: ItemWritingOnCardprops) {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    adjustHeight();
    textarea.focus();
    const length = textarea.value.length;
    textarea.setSelectionRange(length, length);
  }, []);

  function adjustHeight() {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  return (
    <textarea
      ref={textAreaRef}
      defaultValue={tempDescription}
      onChange={(e) => setTempDescription(e.target.value)}
      onInput={adjustHeight}
      className="w-full bg-transparent border-none outline-none text-gray-700 text-sm resize-none overflow-hidden leading-5 "
      rows={1}
      autoFocus
    />
  );
}
