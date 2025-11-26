import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { createContext, useContext, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import type { ActiveCard, Card, Column } from "../interfaces";
import { columns_data } from "./columns_data";

type AppContextType = {
  newColumn: Column;
  setNewColumn: React.Dispatch<React.SetStateAction<Column>>;
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  handleAddNewColumn: (e: string) => void;
  openModalBoardContainer: boolean;
  setOpenModalBoardContainer: (e: boolean) => void;
  handleAddNewCardOnColumn: (e: string, f: Card) => void;
  openModalColumnContainer: boolean;
  setOpenModalColumnContainer: (e: boolean) => void;
  handleDeleteCard: (e: string, f: string) => void;
  handleUpdateCardDescription: (e: string, f: string, g: string) => void;
  handleDeleteColumn: (e: string) => void;
  handleMoveCard: (e: number, f: number, g: number, h: number) => void;
  activeId: string | null;
  isDragging: boolean;
  handleDragStart: (e: DragStartEvent) => void;
  handleDragEnd: (e: DragEndEvent) => void;
  handleDragCancel: ()=> void;
  activeCard: ActiveCard | null;
  isSidebarOpen: boolean;
  toggleSidebar: ()=> void;
  errorMessage: string;
  setErrorMessage: (e: string)=> void;
  showErrorMessage: boolean;
  setShowErrorMessage: (e: boolean)=> void;
  doesCardTitleExist: (e: string)=> boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [openModalBoardContainer, setOpenModalBoardContainer] = useState(false);
  const [openModalColumnContainer, setOpenModalColumnContainer] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [newColumn, setNewColumn] = useState<Column>({
    id: "",
    name: "",
    cards: [],
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

const [columns, setColumns] = useState<Column[]>(columns_data);


  function handleAddNewColumn(name: string) {
    if (name === "") {
     setShowErrorMessage(true);
     setErrorMessage("Nueva sección no puede estar vacia");
    return;
    }

    if (name.length > 20) {
      setShowErrorMessage(true);
      setErrorMessage("Nueva sección tener un nombre inferior a 20 caractéres");
    return;
    }

    const exists = columns.some(
      (column) => column.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (exists) {
      setShowErrorMessage(true);
      setErrorMessage("Ya existe una sección con ese nombre");
      return;
    }

    const newColumn: Column = {
      id: uuidv4(),
      name: name.trim(),
      cards: [],
    };

    setColumns((prev) => [...prev, newColumn]);
    setNewColumn({ id: "", name: "", cards: [] });
    setShowErrorMessage(false);
    setErrorMessage("");
    setOpenModalBoardContainer(false);
  }

  function handleAddNewCardOnColumn(columnId: string, card: Card) {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, cards: [...col.cards, card] } : col
      )
    );
  }

  function handleDeleteCard(columnId: string, cardId: string) {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.filter((card) => card.id !== cardId),
            }
          : col
      )
    );
  }

  function handleUpdateCardDescription(
    columnId: string,
    cardId: string,
    description: string
  ) {
    if (description.length === 0) {
      alert("La nueva descripción no puede estar vacía");
      return;
    }

    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId ? { ...card, description } : card
              ),
            }
          : col
      )
    );
  }

  function handleDeleteColumn(columnId: string) {
    setColumns((prevColumns) =>
      prevColumns.filter((col) => col.id !== columnId)
    );
  }

  function doesCardTitleExist(title: string): boolean {
  return columns.some((column) =>
    column.cards.some(
      (card) =>
        card.title.trim().toLowerCase() === title.trim().toLowerCase()
    )
  );
}

  function handleMoveCard(
    fromColumnIndex: number,
    toColumnIndex: number,
    cardIndex: number,
    newCardIndex: number
  ) {
    setColumns((prev) => {
      const updated = [...prev];
      const card = updated[fromColumnIndex].cards[cardIndex];

      updated[fromColumnIndex].cards.splice(cardIndex, 1);
      updated[toColumnIndex].cards.splice(newCardIndex, 0, card);

      return updated;
    });
  }

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(event:  DragStartEvent) {
    setActiveId(event.active.id as string);
    setIsDragging(true);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over?.id === "trash") {
      const cardId = active.id as string;
      const column = columns.find((col) =>
        col.cards.some((card) => card.id === cardId)
      );

      if (!column) return;

      const columnId = column.id;
      handleDeleteCard(columnId, cardId);
    } else if (over) {

      if (!over) {
        setActiveId(null);
        setIsDragging(false);
        return;
      }

      const activeId = active.id as string;
      const overId = over.id as string;

      if (activeId === over.id) {
        setActiveId(null);
        setIsDragging(false);
        return;
      }

      const fromColumnIndex = columns.findIndex((col) =>
        col.cards.some((card) => card.id === activeId)
      );
      if (fromColumnIndex === -1) return;

      const fromCardIndex = columns[fromColumnIndex].cards.findIndex(
        (card) => card.id === activeId
      );
      if (fromCardIndex === -1) return;

      const toColumnIndex = columns.findIndex((col) =>
        col.cards.some((card) => card.id === overId)
      );

      if (toColumnIndex !== -1) {
        const toCardIndex = columns[toColumnIndex].cards.findIndex(
          (card) => card.id === overId
        );
        if (toCardIndex === -1) return;

        setColumns((prev) => {
          const newColumns = prev.map((col) => ({
            ...col,
            cards: [...col.cards],
          }));
          const movedCard = newColumns[fromColumnIndex].cards.splice(
            fromCardIndex,
            1
          )[0];
          newColumns[toColumnIndex].cards.splice(toCardIndex, 0, movedCard);
          return newColumns;
        });
      } else {
        const toColumnIndexEmpty = columns.findIndex(
          (col) => col.id === overId
        );
        if (toColumnIndexEmpty === -1) return;

        setColumns((prev) => {
          const newColumns = prev.map((col) => ({
            ...col,
            cards: [...col.cards],
          }));
          const movedCard = newColumns[fromColumnIndex].cards.splice(
            fromCardIndex,
            1
          )[0];
          newColumns[toColumnIndexEmpty].cards.push(movedCard);
          return newColumns;
        });
      }
    }

    setActiveId(null);
    setIsDragging(false);
  }

  function handleDragCancel() {
    setActiveId(null);
    setIsDragging(false);
  }

  const activeCard: ActiveCard | null = (() => {
    if (!activeId) return null;

    const column = columns.find((col) =>
      col.cards.some((card) => card.id === activeId)
    );
    if (!column) return null;

    const cardIndex = column.cards.findIndex((card) => card.id === activeId);
    const columnId = column.id;

    return {
      ...column.cards[cardIndex],
      columnId,
      cardIndex,
    };
  })();

  return (
    <AppContext.Provider
      value={{
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
        handleMoveCard,
        activeId,
        isDragging,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        activeCard,
        isSidebarOpen,
        toggleSidebar,
        errorMessage,
        setErrorMessage,
        showErrorMessage, 
        setShowErrorMessage,
        doesCardTitleExist,
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
