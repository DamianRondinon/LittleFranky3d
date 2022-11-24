import axios from "axios";
import { result } from "lodash";
import Papa from "papaparse";

import {Product} from "./types";

export default {
    list: async (): Promise<Product[]> => {
      return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQu1QBAVIxJVb9CWTNIionlW6X2GE9ODxFnSexEYyQ2tbBWPD6DKb2QlMx0i7zWaspmBjsBspqViRnX/pub?output=csv`,
        {
            responseType: 'blob',
        },
        )
        .then(
            (response) =>
              new Promise<Product[]>((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: (results) => {
                        const products = results.data as Product[]
                        return resolve(products.map(product => ({
                            ...product,
                            price: Number(product.price),
                        })))
                    },
                    error: (error) => reject(error.message),
                });
            }),
        );
   },
   mock: {
    list: (mock: string): Promise<Product[]> => import(`./mocks/${mock}.json`).then((result) => result.default),
   }
};





