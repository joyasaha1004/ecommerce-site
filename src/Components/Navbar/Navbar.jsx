
import React from 'react';
import "./Navbar.css";

import logo from "../Assets/shop-logo2.jpg";
import cart from "../Assets/cart.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar shadow-sm navbar-expand-md">
            <div className="nav-item">
                <img src={logo} alt=""></img>
                <p>SHOPPER</p>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavId">
                <span className="navbar-toggler-icon"></span></button>
            </div>
            <div className="item-list collapse navbar-collapse" id="NavId">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item" ><Link to="/" className="menus nav-link">Shop</Link></li>
                     <li className="nav-item"><Link to="/mens" className="menus nav-link">Men</Link></li>
                       <li className="nav-item"><Link to="/womens" className="menus nav-link">Women</Link></li>
                    <li className="nav-item"><Link  to="/kids" className="menus nav-link">Kids</Link></li>
                </ul>
            </div>
            <div className="button">
                <Link to="/login">
                <button className="btn text-secondary rounded-pill btn1">Login</button></Link>
                <Link to="/cart">
                <img src={cart}></img><span className="rounded-circle badge position-absolute top-1 end-0">1</span></Link>
                
            </div>
            
        </div>
    );
};

export default Navbar;