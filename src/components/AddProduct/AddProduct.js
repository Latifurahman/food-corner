import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleUploadImage = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '81651e35087eb2b11931d1d5e6599967');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container mt-1 form-container">
            <h1 className="add-product-title">Add Product</h1>
            <h5>Product Name</h5>
            <input defaultValue="test" className="" />
            <br /> <br />
            <h5>Add Price</h5>
            <input defaultValue="test"  />
            <br /> <br />
            <h5>Add Photo</h5>
            <input type="file" onChange={handleUploadImage} />
            <br />
            <br />
            <input type="submit" value="Save" className="btn btn-danger"/>
        </form>
    );
};

export default AddProduct;