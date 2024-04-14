import React from 'react';
import "./Offer.css";

import offer_img2 from "../Assets/offer_img2.jpg"
const Offer = () => {
    return (
        <div className="offer-section">
            
            <div className="offer-img">
                <img src={offer_img2} alt=""></img>
            </div>
            <div className="offer-heading">
                <h1>Exclusive<br></br>Offer For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
  <button className="btn btn2">Check Now</button>
            </div>
        </div>
    );
};

export default Offer;