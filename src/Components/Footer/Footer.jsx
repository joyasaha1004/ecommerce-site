import React from 'react';
import "./Footer.css";
import logo from "../Assets/shop-logo2.jpg";
import instagram from "../Assets/instagram.svg";
import pinterest from "../Assets/pinterest.svg";
import whatsapp from "../Assets/whatsapp.svg";

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-heading">
            <img src={logo} alt=""></img>
            <p>SHOPPER</p>
            </div>   
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Officer</li>
                <li>About</li>
                <li>Contact</li>
                </ul>  
                <ul className="footer-logo">
                    <li><img src={instagram}></img></li>
                    <li><img src={pinterest}></img></li>
                    <li><img src={whatsapp}></img></li>
                    
                    </ul> 
                    <div className="footer-copyright">
                        <hr></hr>
                        <p>Copyright @ 2024-All Right Reserved</p>
                        </div>      
        </div>
    );
};

export default Footer;