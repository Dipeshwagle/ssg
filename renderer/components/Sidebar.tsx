import React from "react";
import { Box, VStack, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Sidebar = () => {
  return (
    <Box width="200px" height="100vw" bg="orange.50">
      <VStack mt="10">
      <NextLink href="/home" passHref>
          <Button as="a" colorScheme="blue">Preview</Button>
        </NextLink>
        <NextLink href="/add/header-code" passHref>
          <Button as="a" colorScheme="blue"> Header Code</Button>
        </NextLink>
        <NextLink href="/add/footer-code" passHref>
          <Button as="a" colorScheme="blue"> Footer Code</Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
