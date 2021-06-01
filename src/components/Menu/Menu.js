import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/home">FOOD-CORNER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orders">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Admin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deals">Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
};

export default Menu;