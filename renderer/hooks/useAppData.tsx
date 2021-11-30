import React, { useContext, createContext, useState, useEffect } from "react";
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || undefined;

interface AppState {
  name: string;
  codes: {
    header: string;
    footer: string;
  };
}

interface AppContext {
  appState: AppState;
  setAppState: any;
  openProject: () => void;
  handlePublish: () => void;
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
  };

  const handlePublish = () => {
    ipcRenderer?.send("publish-project", JSON.stringify(appState));
  };

  const syncAppState = () => {
    ipcRenderer?.send("sync-project", appState);
  };

  useEffect(() => {
    if (appState) {
      syncAppState();
    }
  }, [appState]);

  useEffect(() => {
    ipcRenderer.on("open-project", (event, projectDetails) => {
      console.log("projectDetails", projectDetails);
      setAppState(projectDetails);
    });

    ipcRenderer.on("publish-project", (event, projectDetails) => {
      console.log({ event, projectDetails });
    });

    return () => {
      ipcRenderer.removeAllListeners("open-project");
    };
  }, []);
  return { appState, setAppState, openProject, handlePublish };
};

export const AppDataProvider = ({ children }) => {
  const data = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
