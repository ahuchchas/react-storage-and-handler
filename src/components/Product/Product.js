import React from 'react';
import './Product.css';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Product = (props) => {
    const {name, price, id} = props.product;
    
    function addToCart(id){
        addToDb(id);
    }

    function removeFromCart(id) {
        removeFromDb(id);
    }

    return (
        <div className='product-container'>
            <h3>Product name: {name}</h3>
            <h4>Product price: ${price}</h4>
            <p>Product id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Product;