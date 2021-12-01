import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

import { useAppData } from "../hooks/useAppData";

export const returnEmptyIfUndefined = (
  value: string | undefined | null
): string => {
  return value ? value : "";
};

const Home = () => {
  const { appState } = useAppData();

  const formattedContent = `${returnEmptyIfUndefined(
    appState?.codes?.header
  )}${returnEmptyIfUndefined(appState?.pages?.index.code)}${returnEmptyIfUndefined(
    appState?.codes?.footer
  )}`;

  useEffect(() => {
    if (typeof window !== "undefined" && formattedContent) {
      const iframe = document.querySelector("iframe");
      iframe.src = "data:text/html," + encodeURIComponent(formattedContent);
    }
  }, [appState]);

  return (
    <Layout>
      <Box
        m={10}
        border="2px solid"
        borderColor="blue.100"
        padding="2"
        w="full"
        h="full"
      >
        {formattedContent ? (
          <iframe width="100%" height="100%" />
        ) : (
          <Center h="full">
            <Heading size="md" color="blue.500">
              Add some code to see the preview
            </Heading>
          </Center>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
