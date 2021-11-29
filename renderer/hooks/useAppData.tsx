import React, { useContext, createContext, useState } from "react";

interface AppContext {
  appState: any;
  setAppState: any;
}

const appDataContext = createContext({
  appState: {},
  setAppState: () => {},
} as AppContext);

const { Provider } = appDataContext;

const useAppDataProvider = () => {
  const [appState, setAppState] = useState();
  return { appState, setAppState };
};

export const AppDataProvider = ({ children }) => {
  const data = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
