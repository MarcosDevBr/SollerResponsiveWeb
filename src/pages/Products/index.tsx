import React from "react";
import { IProducts } from "./model";
import { ProductsContainer } from "./style";

export default function Products(_props: IProducts) {
    return (
        <ProductsContainer>
           <h2>
            Products page
           </h2>
        </ProductsContainer>
    )
}