import React from 'react'
import {IndividualProduct} from './IndividualProduct'

export const Products = ({products,addToCart,productDetails}) => {

    // console.log(products);
    
    return products.map((individualProduct)=>(
        <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct}
           addToCart={addToCart}
           productDetails={productDetails}
        />
    ))
}