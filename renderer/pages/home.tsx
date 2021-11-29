import React, { useState } from "react";
import Layout from "../components/Layout";
import electron from "electron";
import { Button, Link } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { useAppData } from "../hooks/useAppData";

const defaultValue = `function sayHi() {
  console.log("hello world");
}`;


const ipcRenderer = electron.ipcRenderer || undefined;

const AceEdit = dynamic(() => import("../components/AceEditor"), {
  ssr: false,
});

const Home = () => {
  const { appState, setAppState } = useAppData();

  const [lang, setLang] = useState('html');
  const [theme, setTheme] = useState('github');
  const [readOnly, setReadOnly] = useState(false);



  return (
    <Layout>
      <>
        <Link href="/code">Code</Link>
        <AceEdit
          mode={lang}
          theme={theme}
          defaultValue={defaultValue}
          readOnly={readOnly}
          height="400px"
          width="400px"
        />
      </>
    </Layout>
  );
};

export default Home;
