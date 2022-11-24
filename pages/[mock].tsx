import React, { use, useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { Product } from "../product/types";
import api from "../product/api";
import StoreScreen from "../product/screens/store";
import { ParsedUrlQuery } from "querystring";

interface Props {
  products: Product[];
}

interface Params extends ParsedUrlQuery {
    mock: string;
}

const IndexRoute: React.FC<Props> = ({products}) => {
  return <StoreScreen products={products} />;
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({params}) => {
    console.log(params?.mock)
  const products = await api.mock.list(params.mock);

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
}; 

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: process.env.NODE_ENV === "production" ? false : "blocking"
    }
}

export default IndexRoute;