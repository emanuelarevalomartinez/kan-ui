import { initDevosaurus } from "devosaurus";
import { createContext, useContext, useEffect, useState } from "react";

type DevosaurusInstance = ReturnType<typeof initDevosaurus> | null;

const VoiceContext = createContext<DevosaurusInstance>(null);

export const useVoice = () => useContext(VoiceContext);

export function VoiceProvider({ children }: { children: React.ReactNode }) {

  const [devo, setDevo] = useState<DevosaurusInstance>(null);

  useEffect(() => {
    const instance = initDevosaurus({
      language: "en-US",
      showUI: true,
    });

    setDevo(instance);

    return () => {
      instance?.toggleListening(false);
    };
  }, []);

  return (
    <VoiceContext.Provider value={devo}>
      {children}
    </VoiceContext.Provider>
  );
}
