import React from 'react';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import './Admin.css';

const Admin = () => {
    return (
        
            <nav className="navbar-admin navbar-expand fixed d-flex flex-column align-items-start" id="sidebar">
                <a href="/addProduct" className="navbar-brand text-light mt-5 admin-title">
                    <div className="display-5 font-weight-bold">Food Corner</div>

                </a>
                <ul className="navbar-nav d-flex flex-column mt-5 w-100">
                    <li className="nav-item w-100">
                        <a href="/manageProduct" className="nav-link text-light pl-4"><ListIcon></ListIcon> Manage Product</a>
                    </li>
                    <li className="nav-item w-100">
                        <a href="/addProduct" className="nav-link text-light pl-4"><AddIcon></AddIcon> Add Product</a>
                    </li>
                    <li className="nav-item w-100">
                        <a href="/editProduct" className="nav-link text-light pl-4"><EditIcon></EditIcon> Edit Product</a>
                    </li>
                </ul>
            </nav>
        
        
        
    );
};

export default Admin;