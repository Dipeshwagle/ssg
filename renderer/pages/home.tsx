import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { useAppData } from "../hooks/useAppData";

const Home = () => {
  const { appState } = useAppData();

  useEffect(() => {
    if( typeof window !== "undefined" ) {
    const formattedContent = `${appState?.codes?.header}${appState?.codes?.footer}`;
    const iframe = document.querySelector("iframe");
    iframe.src = "data:text/html," + encodeURIComponent(formattedContent);
    }
  }, [appState]);

  return (
    <Layout>
      <iframe width="450px" height="450px" />
    </Layout>
  );
};

export default Home;
