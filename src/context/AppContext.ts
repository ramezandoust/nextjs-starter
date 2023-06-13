import { createContext, useContext } from "react";
import { initialContext, IContext } from "@/interfaces/i-app";

export const AppContext = createContext<IContext>(initialContext);

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("useAppContext has to be used within <AppContext.Provider>");
  }
  return appContext;
};
