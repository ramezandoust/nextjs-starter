import { initialState, IState, IAction } from "@/interfaces/i-app";

export const AppReducer = (appState: IState, action: IAction): typeof initialState => {
  switch (action.type) {
    case "SET_THEME":
      if (action.payload === "auto") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.setAttribute("data-bs-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-bs-theme", "light");
        }
      } else {
        document.documentElement.setAttribute("data-bs-theme", action.payload);
      }

      localStorage.setItem("theme", action.payload);
      return { ...appState, theme: action.payload };
    default:
      throw new Error();
  }
};
