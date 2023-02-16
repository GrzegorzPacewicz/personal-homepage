const localStorageKey = "isDarkTheme";

export const saveThemeInLocalStorage = (isDarkTheme) =>
  localStorage.setItem(localStorageKey, isDarkTheme);

export const getThemeFromLocalStorage = (init) =>
  JSON.parse(localStorage.getItem(localStorageKey)) || init;
