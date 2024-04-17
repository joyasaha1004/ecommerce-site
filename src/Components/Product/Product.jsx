import React from 'react';

import "./Product.css";
import women2 from "../Assets/women2.jpg";
import women3 from "../Assets/women3.jpg";
import women4 from "../Assets/women4.jpg";
import women7 from "../Assets/women7.jpg";

const Product = () => {
    return (
        <div className="popular-in-women ">
            
            <div className="popular-heading">
                <h3>POPULAR IN WOMEN</h3>
                <hr></hr>
            </div>
            <div className="popular-item">
                <div className="row ">
                    <div className="col-md-3">
                        <img src={women2} alt="" style={{width:"200px", height:"300px"}}></img>
                        <p>Striped Flutter Sleeve Overloap Coffar Peplum Hem Blouse</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$80</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <img src={women3} alt="" style={{width:"200px", height:"300px"}}></img>
                        <p>Striped Flutter Sleeve Overloap Coffar Peplum Hem Blouse</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$70</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <img src={women4} alt="" style={{width:"200px", height:"300px"}}></img>
                        <p>Striped Flutter Sleeve Overloap Coffar Peplum Hem Blouse</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$90</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>

                    </div>

                      <div className="col-md-3">
                        <img src={women7} alt=""style={{width:"200px", height:"300px"}} ></img>
                        <p>Striped Flutter Sleeve Overloap Coffar Peplum Hem Blouse</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$65</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;