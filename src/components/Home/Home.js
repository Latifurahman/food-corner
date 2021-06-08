import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://dry-badlands-49428.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="product-container container">
            {
                products.length === 0 && 
                    <div className="spinner-border spinner">
                    </div>
                
            }
            
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }


        </div>
        
    );
};

export default Home;