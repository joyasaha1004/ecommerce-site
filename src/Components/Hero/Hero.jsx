import React from 'react';

import hifi_emoji from "../Assets/hifi_emoji.jpg";
import arrow_right from "../Assets/arrow_right.svg";
import dp from "../Assets/dp.jpg";
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={dp} alt=""></img>
            </div>
            <div className="hero-text">
                <h3>NEW ARRIVALS ONLY</h3>
                <h1>new <img src={hifi_emoji} alt=""/>
                collections for everyone</h1>
                <button className="btn btn2 w-50">Latest Collection<img src={arrow_right}></img></button>
            </div>
            
        </div>
    );
};

export default Hero;