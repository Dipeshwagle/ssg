import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppDataProvider } from "../hooks/useAppData";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppDataProvider>
        <Component {...pageProps} />
      </AppDataProvider>
    </ChakraProvider>
  );
}
export default MyApp;
