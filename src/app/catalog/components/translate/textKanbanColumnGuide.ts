export const textKanbanColumnGuide = {
    es: {
      title: "Nombre de la Sección",
      addCardButton: "Agregar tarjeta",
      deleteColumnButton: "Eliminar columna",
      cardTitle: "Título de la tarjeta",
      cardContent: "Contenido de la tarjeta",
      howToUse: "Cómo usar este componente",
      description:
        "representa una columna de tareas dentro del tablero Kanban. Recibe:",
      propName: "texto que se mostrará como título de la columna",
      propChildren: "tarjetas (KanbanCards) dentro de esta columna",
      propColumnIndex:
        "identificador único para soportar drag & drop",
      minimalExample: "Ejemplo mínimo:",
      fullExample: "Ejemplo completo:",
      actionsAvailable: "Acciones disponibles",
      actionsDescription: "Puedes implementar lógica para:",
      actionAddCard: "Agregar tarjetas al hacer clic en el botón",
      actionDeleteColumn: "Eliminar esta columna al hacer clic en el botón de basura",
      logicExample: "Ejemplo de lógica:",
      extraNote:
        "Puedes conectar esta columna con estado global o API para mayor control.",
    },
  
    en: {
      title: "Section Name",
      addCardButton: "Add card",
      deleteColumnButton: "Delete column",
      cardTitle: "Card title",
      cardContent: "Card content",
      howToUse: "How to use this component",
      description:
        "represents a task column inside the Kanban board. It receives:",
      propName: "text to be shown as the column title",
      propChildren: "cards (KanbanCards) inside this column",
      propColumnIndex: "unique identifier to support drag & drop",
      minimalExample: "Minimum example:",
      fullExample: "Full example:",
      actionsAvailable: "Available actions",
      actionsDescription: "You can implement logic for:",
      actionAddCard: "Add cards by clicking the button",
      actionDeleteColumn: "Delete this column by clicking the trash button",
      logicExample: "Logic example:",
      extraNote:
        "You can connect this column to global state or an API for better control.",
    },
  } as const;
  