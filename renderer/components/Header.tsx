import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box px="10" py="5" background="orange.50">
      <Flex justifyContent="space-between">
        <Heading size="md">Static Site Generator</Heading>
        <Button colorScheme='orange'>Publish</Button>
      </Flex>
    </Box>
  );
};

export default Header;
