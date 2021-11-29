import React from "react";
import Layout from "../components/Layout";
import electron from "electron";
import { Button } from "@chakra-ui/react";
import { useAppData } from "../hooks/useAppData";

const ipcRenderer = electron.ipcRenderer || undefined;

const Home = () => {
  const { appState, setAppState } = useAppData();

  if (ipcRenderer) {
    // In this scope, the webpack process is the client
  }


  React.useEffect(() => {
    ipcRenderer.on("open-project", (event, data) => {
      setAppState(data);
    });

    return () => {
      ipcRenderer.removeAllListeners("open-project");
    };
  }, []);

  return (
    <Layout>
      <>
        <Button
          onClick={() => {
            ipcRenderer?.send("open-project");
          }}
        >
          Open Project
        </Button>
        {appState}
      </>
    </Layout>
  );
};

export default Home;
