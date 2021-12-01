import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { useAppData } from "../hooks/useAppData";

const Header = () => {
  const { appState,setAppState, openProject, handlePublish } = useAppData();

  const handleProjectNameChange = (name: string) => {
    setAppState({ ...appState, name });
  }

  return (
    <Box px="10" py="5" background="orange.50">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">Static Site Generator</Heading>
        <HStack>
          <Heading size="sm" color="orange.500">
            <Editable
              value={
                appState?.name
                  ? appState.name
                  : "New project click to change name"
              }
              onChange={handleProjectNameChange}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
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
