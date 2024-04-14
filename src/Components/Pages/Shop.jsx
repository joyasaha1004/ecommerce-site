import React from 'react';

import Hero from "../Hero/Hero";
import Product from "../Product/Product";
import Offer from "../Offer/Offer";
import New_collection from "../NewCollection/New_collection";
import NewsLetter from "../NewsLetter/NewsLetter";
const Shop = () => {
    return (
        <div>
         <Hero/> 
         <Product/>
         <Offer/>
         <New_collection/>
         <NewsLetter/>
        </div>
    );
};

export default Shop;