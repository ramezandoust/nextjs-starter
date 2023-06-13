export enum ActionType {
  SET_THEME = "SET_THEME",
}

export interface IState {
  theme: string;
}
export type IAction = {
  type: ActionType | string;
  payload: any;
};
export interface IContext {
  appState: IState;
  appDispatch: React.Dispatch<IAction>;
}

export const initialState: IState = {
  theme: "light",
};
export const initialContext: IContext = {
  appState: {
    theme: "",
  },
  appDispatch: () => {},
};
