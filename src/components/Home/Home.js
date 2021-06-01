import React from 'react';
import milkPowderFoil from '../../Products/image 32.png';
import moushumBayLeaves from '../../Products/image 33.png';
import onion from '../../Products/image 34.png';
import rashidMinicateRice from '../../Products/image 35.png';
import omeraLpg from '../../Products/image 36.png';
import boombaySweets from '../../Products/image 37.png';
import lifebouyShop from '../../Products/image 38.png';
import ruchiBBQ from '../../Products/image 39.png';
import parachuteCoconutOil from '../../Products/image 40.png';
import Product from '../Product/Product';
import './Home.css';

const products = [
    {
        name: 'Marks Full Cream Milk Powder Foil',
        price: 234,
        image: milkPowderFoil
    },
    {
        name: 'Moushum Bay Leaves- 200gm',
        price: 134,
        image: moushumBayLeaves
    },
    {
        name: 'Onion Local - 1 Kg',
        price: 434,
        image: onion
    },
    {
        name: 'Rashid Minicate Rice - 50 Kg',
        price: 334,
        image: rashidMinicateRice
    },
    {
        name: 'Omera LPG Refill 12 KG',
        price: 342,
        image: omeraLpg
    },
    {
        name: 'Bombay Sweets Mr.Twist– 25 gm',
        price: 132,
        image: boombaySweets
    },
    {
        name: 'Lifeboy Soap Bar Tota - 100 gm',
        price: 334,
        image: lifebouyShop
    },
    {
        name: 'Ruchi BBQ Chanachur - 350 gm',
        price: 342,
        image: ruchiBBQ
    },
    {
        name: 'Parachute Coconut Oil - 200ml',
        price: 132,
        image: parachuteCoconutOil
    }
]

const Home = () => {
    return (
        <div className="product-container container">
            
            {
                products.map(product => <Product product={product}></Product>)
            }


        </div>
        
    );
};

export default Home;