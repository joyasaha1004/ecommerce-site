import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="emailId">
            <div className="email-heading">
    <h3>Get Exclusive Offers On Your Email</h3>
    <p>Subscribe to our newletter and stay updated</p>
            </div>
            <div className="email-box">
                <input type="email" placeholder="Your Email Id"></input>
                <button className="btn">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;