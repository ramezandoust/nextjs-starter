"use client";

import React, { useLayoutEffect, useReducer, ReactNode } from "react";
import { initialState, IState, ActionType } from "@/interfaces/i-app";
import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [appState, appDispatch] = useReducer(AppReducer, initialState as IState);

  useLayoutEffect(() => {
    appDispatch({
      type: ActionType.SET_THEME, //or "SET_THEME"
      payload: localStorage.getItem("theme") || "light",
    });
  }, []);

  return <AppContext.Provider value={{ appState, appDispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
