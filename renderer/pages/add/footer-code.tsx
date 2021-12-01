import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import AceEdit from "../../components/AceEditor";
import Layout from "../../components/Layout";

import { useAppData } from "../../hooks/useAppData";

const FooterCode = () => {
  const [code, setCode] = useState("");
  const { appState, setAppState } = useAppData();

  const handleFooterCodeChange = (code) => {
    setCode(code);
    setAppState({
      ...appState,
      codes: {
        ...appState.codes,
        footer: code,
      },
    });
  };
  return (
    <Layout>
      <Box p="4"  w="full">
        <AceEdit
          mode="html"
          theme="solarized_dark"
          defaultValue={appState?.codes?.footer}
          value={code}
          height="100%"
          onChange={(value) => {
            handleFooterCodeChange(value);
          }}
          width="100%"
        />
      </Box>
    </Layout>
  );
};

export default FooterCode;
