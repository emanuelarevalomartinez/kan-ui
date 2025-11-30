export const textKanbanBoardGuide = {
    es: {
      title: "Título del Tablero",
      howToUse: "Como usar este componente",
      whatIs: "es el contenedor principal del tablero Kanban. Recibe:",
      propTitle: "Texto que se muestra en el encabezado del tablero.",
      propChildren:
        "Representa las columnas (KanbanColumn) que serán parte del tablero.",
      minimalExample: "Ejemplo mínimo:",
      fullExample: "Ejemplo completo:",
      boardActions: "Acciones dentro del tablero",
      actionsDescription:
        "Puedes añadir nuevas columnas usando handleAddNewSection() dentro del componente.",
      logicExample: "Ejemplo de lógica:",
      extraNote:
        "También puedes añadir funcionalidad como animaciones o guardar el estado en una base de datos.",
    },
  
    en: {
      title: "Board Title",
      howToUse: "How to use this component",
      whatIs: "is the main container of the Kanban board. It receives:",
      propTitle: "Text displayed in the board header.",
      propChildren:
        "Represents the columns (KanbanColumn) that belong to the board.",
      minimalExample: "Minimum example:",
      fullExample: "Full example:",
      boardActions: "Actions within the board",
      actionsDescription:
        "You can add new columns using handleAddNewSection() inside the component.",
      logicExample: "Logic example:",
      extraNote:
        "You can also add functionality such as animations or saving state in a database.",
    },
  } as const;
  