import React from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      <Flex mt="2" width='full'>
        <Sidebar/>
        <Flex py="4" width='full'>{children}</Flex>
      </Flex>
    </Box>
  );
};

export default Layout;
