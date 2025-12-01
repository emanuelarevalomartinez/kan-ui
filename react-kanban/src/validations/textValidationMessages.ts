
export const textValidationMessages = {
    es: {
      columnNameEmpty: "El nombre de la sección no puede estar vacío",
      columnNameTooLong:"El nombre de la sección debe tener menos de 20 caracteres",
      columnNameExists: "Ya existe una sección con ese nombre",
      cardTitleAndDescriptionRequired:"El título y la descripción son obligatorios",
      cardTitleRequired: "El título es obligatorio",
      cardDescriptionRequired: "La descripción es obligatoria",
      cardNameExists: "Ya existe una nota con ese nombre",
      descriptionEmpty: "La nueva descripción no puede estar vacía",
    },
  
    en: {
      columnNameEmpty: "Section name cannot be empty",
      columnNameTooLong:"Section name must be less than 20 characters",
      columnNameExists: "A section with that name already exists",
      cardTitleAndDescriptionRequired:"Title and description are required",
      cardTitleRequired: "Title is required",
      cardDescriptionRequired: "Description is required",
      cardNameExists: "A note with that name already exists",
      descriptionEmpty: "New description cannot be empty",
    },
  } as const;
  