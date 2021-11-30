import React from "react";
import { Box, Flex, HStack, Heading, Button } from "@chakra-ui/react";
import { useAppData } from "../hooks/useAppData";

const Header = () => {
  const { appState, openProject, handlePublish } = useAppData();

  return (
    <Box px="10" py="5" background="orange.50">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Static Site Generator</Heading>
        <HStack>
          <Heading size="sm" color="orange.500">
            {appState?.name}
          </Heading>
          <Button colorScheme="orange" onClick={openProject}>
            Open Project
          </Button>
          <Button
            colorScheme="orange"
            disabled={!appState}
            onClick={handlePublish}
          >
            Publish
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
