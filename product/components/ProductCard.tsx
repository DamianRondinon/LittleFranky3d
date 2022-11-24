import React from "react";
import { Stack, Button, Text, Image } from "@chakra-ui/react";

import { parseCurrency } from "../../utils/currency";
import { Product } from "../types";

interface Props {
    product: Product;
    onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, onAdd}) => {

    return (
        <Stack spacing={3} padding={4} key={product.id}>
      <Image alt={product.title} marginLeft="4rem" cursor="pointer" maxHeight={188} objectFit="contain" src={product.image} />
      <Stack spacing={1}>
      <Text textAlign="center">{product.title}</Text>
      <Text textAlign="center" fontSize="bold" fontWeight="700" color="#25a244">{parseCurrency(product.price)}</Text>
      </Stack>
      <Button background="#343a40" colorScheme="blackAlpha" color="white" variant="solid" size="md" onClick={() => onAdd(product)}>
        Agregar
      </Button>
      </Stack>
    );
};

export default ProductCard;