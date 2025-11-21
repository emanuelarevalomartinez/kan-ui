import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  currentLanguage: string;
  setCurrentLanguage: (newCurrentLanguage: string) => void;
  newColumn: Column;
  setNewColumn: React.Dispatch<React.SetStateAction<Column>>;
  columns: Column[];
  setColumns: (e: Column[]) => void;
  handleAddNewColumn: (e: string) => void;
  openModalBoardContainer: boolean;
  setOpenModalBoardContainer: (e: boolean) => void;
  handleAddNewCardOnColumn: ( e: number, f: Card) => void;
  openModalColumnContainer: boolean,
  setOpenModalColumnContainer: (e: boolean) => void;
  handleDeleteCard: (e: number, f: number)=> void;
  handleUpdateCardDescription: (e: number, f: number, g: string) => void;
  handleDeleteColumn: ( e: number) => void;
};

export interface Column {
  name: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [openModalBoardContainer, setOpenModalBoardContainer] = useState(false);
  const [openModalColumnContainer, setOpenModalColumnContainer] = useState(false);

  const [newColumn, setNewColumn] = useState<Column>({
    name: "",
    cards: [],
  });

  const [columns, setColumns] = useState<Column[]>([
    {
      name: "Por hacer",
      cards: [],
    },
    {
      name: "Haciendo",
      cards: [
        {
          title: "Nota uno",
          description: "Descripción de la tarea 1",
        },
      ],
    },
    {
      name: "Hechas",
      cards: [
        {
          title: "Nota uno",
          description:
            "Ya iniciada Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eaque sapiente nemo soluta reiciendis ipsum natus? Nihil necessitatibus dolor, odit debitis iusto, sequi minima reiciendis fugit voluptate voluptatem facilis quae. 2 Ya iniciada Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eaque sapiente nemo soluta reiciendis ipsum natus? Nihil necessitatibus dolor, odit debitis iusto, sequi minima reiciendis fugit voluptate voluptatem facilis quae. 3 Ya iniciada Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eaque sapiente nemo soluta reiciendis ipsum natus? Nihil necessitatibus dolor, odit debitis iusto, sequi minima reiciendis fugit voluptate voluptatem facilis quae. 4 Ya iniciada Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eaque sapiente nemo soluta reiciendis ipsum natus? Nihil necessitatibus dolor, odit debitis iusto, sequi minima reiciendis fugit voluptate voluptatem facilis quae.",
        },
      ],
    },
  ]);

  function handleAddNewColumn(name: string) {
    if (name === "") {
      alert("Nueva sección no puede estar vacia");
      return;
    }

    if (name.length > 20) {
      alert("Nueva sección tener un nombre superior a 20 caractéres");
      return;
    }

    const exists = columns.some(
      (column) => column.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (exists) {
      alert("Ya existe una sección con ese nombre");
      return;
    }

    const newColumn: Column = {
      name: name.trim(),
      cards: [],
    };

    setColumns((prev) => [...prev, newColumn]);
    setNewColumn({ name: "", cards: [] });
    setOpenModalBoardContainer(false);
  }

  function handleAddNewCardOnColumn(columnIndex: number, card: Card) {
  setColumns((prev) =>
    prev.map((col, index) =>
      index === columnIndex
        ? { ...col, cards: [...col.cards, card] }
        : col
    )
  );
}

function handleDeleteCard(columnIndex: number, cardIndex: number) {
  setColumns((prev) =>
    prev.map((col, i) =>
      i === columnIndex
        ? { ...col, cards: col.cards.filter((_, j) => j !== cardIndex) }
        : col
    )
  );
}

function handleUpdateCardDescription(
  columnIndex: number,
  cardIndex: number,
  description: string
) {
  setColumns((prev) =>
    prev.map((col, i) =>
      i === columnIndex
        ? {
            ...col,
            cards: col.cards.map((card, j) =>
              j === cardIndex ? { ...card, description } : card
            ),
          }
        : col
    )
  );
}

function handleDeleteColumn(columnIndex: number) {
  setColumns((prevColumns) =>
    prevColumns.filter((_, index) => index !== columnIndex)
  );
}



  return (
    <AppContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        newColumn,
        setNewColumn,
        columns,
        setColumns,
        handleAddNewColumn,
        openModalBoardContainer,
        setOpenModalBoardContainer,
        handleAddNewCardOnColumn,
        openModalColumnContainer,
        setOpenModalColumnContainer,
        handleDeleteCard,
        handleUpdateCardDescription,
        handleDeleteColumn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext should be inside the AppProvider");
  }
  return context;
}
