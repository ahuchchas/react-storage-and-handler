import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';
import { getTotal } from '../../utilities/fakedb';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className='products-container'>
            <h2>Welcome. Buy products from here.</h2>
            <p>Total price of all items(1 each): {getTotal(products)}</p>
            {products.map((product) => <Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;