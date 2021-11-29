import React, { useContext, createContext, useState, useEffect } from "react";
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || undefined;

interface AppContext {
  appState: any;
  setAppState: any;
  openProject: () => void;
}

const appDataContext = createContext({
  appState: {},
  setAppState: () => {},
} as AppContext);

const { Provider } = appDataContext;

const useAppDataProvider = () => {
  const [appState, setAppState] = useState();

  const openProject = () => {
    ipcRenderer?.send("open-project");

    console.log("open project called");
  };

  useEffect(() => {
    ipcRenderer.on("open-project", (event, projectDetails) => {
      setAppState(projectDetails);
    });

    return () => {
      ipcRenderer.removeAllListeners("open-project");
    };
  }, []);
  return { appState, setAppState, openProject };
};

export const AppDataProvider = ({ children }) => {
  const data = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
