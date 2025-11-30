export type LANGUAGE = "es" | "en";

export const LOCAL_STORAGE = {
  LANGUAGE: "language",
} as const;

export const getLanguageLocalStore = () => {
  return localStorage.getItem(LOCAL_STORAGE.LANGUAGE);
};

export const setLanguageLocalStore = (newLanguage: string) => {
  localStorage.setItem(LOCAL_STORAGE.LANGUAGE, newLanguage);
};

export const deleteLanguageLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE.LANGUAGE);
};
