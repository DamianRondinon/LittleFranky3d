import React, { use, useState } from "react";
import { Button, Grid, Stack, Text, Link, Flex, Image } from "@chakra-ui/react";

import { Product } from "../types";
import { parseCurrency } from "../../utils/currency";
import ProductCard from "../components/ProductCard";


interface Props {
  products: Product[];
}

const StoreScreen: React.FC<Props> = ({products}) => {
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
    <Stack spacing={6}>
    {Boolean (products.length) ? (
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
    {products.map((product) => (
        <ProductCard product={product} key={product.id} onAdd={(product) => setCart((cart) => cart.concat(product))} />
      ))}
  </Grid> 
  ):(
   <Text fontSize="xl" color="red.600" textAlign="center">No hay productos</Text>
  )}
  

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
  );
};

export default StoreScreen;