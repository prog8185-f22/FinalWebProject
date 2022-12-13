import React from 'react'
import {useNavigate} from 'react-router-dom'


export const IndividualProduct = ({individualProduct, addToCart}) => {

    const productId = individualProduct.ID;
    const history = useNavigate();

 
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }  
    
    const productDetailClick=()=>
    {
         console.log(individualProduct.ID);
         history('/productDetail', {state : {productId : productId}});
    }

    return (
        <div className='product' >
            <div className='product-img' onClick={productDetailClick}>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
        </div>   
    )
}