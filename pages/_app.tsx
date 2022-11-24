import React from 'react';
import { ChakraProvider, Container, VStack, Image, Stack, Text, Heading, Box, Divider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Container borderRadius="xl" backgroundColor="#ffffff" marginY={4} maxWidth="container.xl" padding={8}>
        <Stack direction='row'>
        <VStack marginBottom={9}>
          <Image borderRadius="1rem" src="https://i.ibb.co/QPz2pTB/logo-Franky.png" height="14rem" background="#dee2e6"></Image>
        <Heading>Little Franky 3D</Heading>
        <Text>Nuestra tienda</Text>
        </VStack>
        </Stack>
        <Divider marginY={3} />
      <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default App;