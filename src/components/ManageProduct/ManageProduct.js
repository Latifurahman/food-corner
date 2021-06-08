import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './ManageProduct.css';


const ManageProduct = ({product}) => {

    const deleteProduct = id => {
        fetch(`http://localhost:5055/deleteProduct/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    }
    
    return (
            <div className="row container-fluid manage-product">
                <div className="col-md-6">
                    <h6>{product.name}</h6>
                </div>
                <div className="col-md-2">
                    <h6>${product.price}</h6>
                </div>
                <div className="col-md-4">
                    <button onClick={() => deleteProduct(product._id)} className="btn btn-danger"><DeleteIcon></DeleteIcon> DELETE</button>
                </div>
            </div>
    );
};

export default ManageProduct;