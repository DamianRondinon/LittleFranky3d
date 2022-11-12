import React from 'react';
import { ChakraProvider, Container, VStack, Image, Stack, Text, Heading, Box, Divider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
      <Container borderRadius="xl" backgroundColor="#f8f9fa" boxShadow="md" marginY={4} maxWidth="constainer.xl" padding={6}>
        <Stack direction='row'>
        <VStack marginBottom={9}>
          <Image borderRadius="1rem" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEXg4OD////j4+Pb29v7+/vi4uLx8fHs7Oz39/f09PTa2tru7u7m5ubX19cF3ejnAAABRElEQVR4nO3Z27JDMBiAURFVVN//dXfp+ZC6Y0//tS4zphPflARVBQAAAAAAAAAAAAAAAAAAAAAAAADAj6i/23p6G+jSkn7rKa6tXUyS0mHrSa4rp9QuHNKlJq8yl//i1GS/cEgbtsm4Kx0StEme7ipd4ZCgTQ7zrbT7fOoxm+TL+vL58ondZLwPd/2tQ+wm99HTRu4WJWaTapyTtNdTz/Pe9holaJNcnxrsh+vYZbt/iRK0SVUdj8fnf8k9StgmDyMPD4VzlNBN5qU4Pz0nT1EiN2mmdSe/vDroQzdppsX4NUlKOXCT5ry9f3t3ErhJU3qfFLdJMUncJuUkYZvkchJNNJlo8u58P6l3JXXoPVtRxCZ9PX5Tx/u+4zvgu2H5e3E7LP/MbxmWLowhXBIAAAAAAAAAAAAAAAAAAAAAAAAAgF/1BxZSCIBLTls7AAAAAElFTkSuQmCC"></Image>
        <Heading>Little Franky 3D</Heading>
        <Text>Nuestra tienda</Text>
        </VStack>
        </Stack>
        <Divider marginY={3} />
      <Component {...pageProps} />
      </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;