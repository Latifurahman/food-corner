import React, { useState } from 'react';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Admin.css';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';

const Admin = () => {
    

    return (

            <Router>
                <div className="row container-fluid">
                    <div className="col-md-3 sidebar">

                        <div className="sidebar-title">
                            <Link className="sidebar-title-style" to="/addProduct">Food Corner</Link>
                        </div>

                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/manageProduct"> <ListIcon></ListIcon> Manage Product</Link></li>
                            <li className="nav-item"><Link to="/addProduct"><AddIcon></AddIcon> Add Product</Link></li>
                            <li className="nav-item"><Link to="/editProduct"><EditIcon></EditIcon> Edit Product</Link></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path="/manageProduct">
                                <ManageProduct></ManageProduct>
                            </Route>
                        </Switch>
                    <Switch>
                        <Route path="/addProduct">
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/editProduct">
                            <EditProduct></EditProduct>
                        </Route>
                    </Switch>
                    </div>

                </div>
                
            </Router>
        
        
    );
};

export default Admin;