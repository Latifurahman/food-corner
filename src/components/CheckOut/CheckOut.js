import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css';



const CheckOut = () => {
    const {productId} = useParams();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5055/product/' + productId)
        .then(res => res.json())
        .then(data => setProductData(data[0]))
    },[productId])
    

    return (
        <div className="container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="checkout-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{productData.name}</td>
                            <td>1</td>
                            <td>${productData.price}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>${productData.price}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button className="btn btn-success float-right">Checkout</button>
        </div>
    );
};

export default CheckOut;