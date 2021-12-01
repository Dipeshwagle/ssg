import React, { useState } from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import AceEdit from "../../components/AceEditor";
import Layout from "../../components/Layout";

import { useAppData } from "../../hooks/useAppData";

const HomePageCode = () => {
  const { appState, setAppState } = useAppData();

  const handleHeaderCodeChange = (code) => {
    setAppState({
      ...appState,
      pages: {
        ...appState.pages,
        index: {
          ...appState.pages.index,
          code,
        },
      },
    });
  };

  const handleHeaderHeadCodeChange = (code) => {
    setAppState({
      ...appState,
      pages: {
        ...appState.pages,
        index: {
          ...appState.pages.index,
          head:code,
        },
      },
    });
  };
  return (
    <Layout>
      <Flex p="4" w="full" flexDir="column">
        <Text mb="5">Head Code</Text>
        <AceEdit
          mode="html"
          theme="solarized_dark"
          defaultValue={appState?.pages?.index.head}
          value={appState?.pages?.index.head}
          height="40%"
          onChange={(value) => {
            handleHeaderHeadCodeChange(value);
          }}
          width="100%"
        />
        <Text my="5">Page Code</Text>
        <AceEdit
          mode="html"
          theme="solarized_dark"
          defaultValue={appState?.pages?.index.code}
          value={appState?.pages?.index.code}
          height="40%"
          onChange={(value) => {
            handleHeaderCodeChange(value);
          }}
          width="100%"
        />
      </Flex>
    </Layout>
  );
};

export default HomePageCode;
