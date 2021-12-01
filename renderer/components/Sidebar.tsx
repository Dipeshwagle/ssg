import React from "react";
import { Box, VStack, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Sidebar = () => {
  return (
    <Box width="200px" height="100vw" bg="orange.50">
      <VStack mt="10" px="5" spacing="5">
        <NextLink href="/home" passHref>
          <Button as="a" colorScheme="blue" w="full">
            Preview
          </Button>
        </NextLink>
        <NextLink href="/add/header-code" passHref>
          <Button as="a" colorScheme="blue" w="full">
            {" "}
            Header Code
          </Button>
        </NextLink>
        <NextLink href="/add/footer-code" passHref>
          <Button as="a" colorScheme="blue" w="full">
            {" "}
            Footer Code
          </Button>
        </NextLink>
        <NextLink href="/add/home-page" passHref>
          <Button as="a" colorScheme="blue" w="full">
            Home Page
          </Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
