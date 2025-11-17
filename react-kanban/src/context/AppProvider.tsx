import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  currentLanguage: string;
  setCurrentLanguage: (newCurrentLanguage: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {


  const [currentLanguage, setCurrentLanguage] = useState("");

  return (
    <AppContext.Provider 
    value={{ 
        currentLanguage,
        setCurrentLanguage
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook opcional (mejor DX)
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext should be inside the AppProvider");
  }
  return context;
}
