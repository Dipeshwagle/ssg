import React from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";

import Header from "./Header";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      <Flex mt="2">
        <Box width="200px" height="100vw" bg="orange.50"></Box>
        <Box py="4">{children}</Box>
      </Flex>
    </Box>
  );
};

export default Layout;
