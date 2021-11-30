import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import AceEdit from "../../components/AceEditor";
import Layout from "../../components/Layout";

import { useAppData } from "../../hooks/useAppData";


const HeaderCode = () => {
  const [code, setCode] = useState("");
  const { appState, setAppState } = useAppData();
  console.log({appState})

  const handleHeaderCodeChange = (code) => {
    setCode(code);
    setAppState({
      ...appState,
      codes: {
        ...appState.codes,
        header: code,
      },
    });
  };
  return (
    <Layout>
      <Box p="4">
        <AceEdit
          mode="html"
          theme="solarized_dark"
          defaultValue={appState?.codes?.header}
          value={code}
          height="800px"
          onChange={(value) => {
            handleHeaderCodeChange(value);
          }}
          width="800px"
        />
      </Box>
    </Layout>
  );
};

export default HeaderCode;
