import React, { use, useState } from "react";
import { GetStaticProps } from "next";
import { Button, Grid, Stack, Text, Link, Flex, Image } from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { Product } from "../product/types";
import api from "../product/api";

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return value.toLocaleString('es-AR',{
    style: 'currency',
    currency: 'ARS',
  });
}

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(
    () =>
    cart
    .reduce(
      (message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
    ``,
    )
    .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`),
  [cart],
  );

  return (
    <AnimateSharedLayout>
    <Stack spacing={6}>
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
    {products.map((product) => (
    <Stack spacing={3} borderRadius="md" padding={4} backgroundColor="#b5e48c" key={product.id}>
      <Image alt={product.title} cursor="pointer" maxHeight={128} objectFit="cover" src={product.image} />
      <Stack spacing={1}>
      <Text>{product.title}</Text>
      <Text fontSize="sm" fontWeight="500"  color="pink.500">{parseCurrency(product.price)}</Text>
      </Stack>
      <Button colorScheme="green" size="sm" onClick={() => setCart((cart) => cart.concat(product))}>
        Agregar
      </Button>
      </Stack>
      ))}
  </Grid>
  {Boolean(cart.length) && (
      <Flex bottom={4} position="sticky" alignItems="center" justifyContent="center">
        <Button
      width="fit-content"
      isExternal  
      as={Link}
      colorScheme="whatsapp"
      href={`https://wa.me/541125531991?text=${encodeURIComponent(text)}`} 
      >
        Completar pedido ({cart.length} productos)
      </Button>
      </Flex>
  )}
  </Stack>
  </AnimateSharedLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    revalidate: 10,
    props: {
      products,
    },
  };
}; 

export default IndexRoute;