import React from 'react';

import kid1 from "../Assets/kid1.jpg";
import kid2 from "../Assets/kid2.jpg";
import kid3 from "../Assets/kid3.jpg";
import kid4 from "../Assets/kid4.jpg";
import girl_kid1 from "../Assets/girl_kid1.jpg";
import girl_kid2 from "../Assets/girl_kid2.jpg";
import girl_kid3 from "../Assets/girl_kid3.jpg";
import girl_kid4 from "../Assets/girl_kid4.jpg";
import "./New_collection.css";

const New_collection = () => {
    return (
        <div>
            <div className="new-collection">
                <div className="new-collection-heading">
                    <h3>NEW COLLECTIONS</h3>
                    <hr></hr>
                </div>
                <div className="collection-item">
                    <div className="row">
                        <div className="col-md-3">
                        <img src={kid1} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3">
                        <img src={kid2} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <img src={kid3} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <img src={kid4} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <img src={girl_kid1} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div> 
                        <div className="col-md-3">
                        <img src={girl_kid2} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div> 

                        <div className="col-md-3">
                        <img src={girl_kid3} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div> 
                        <div className="col-md-3">
                        <img src={girl_kid4} alt="" style={{width:"220px",
                    height:"300px"}}></img>
                        <p>Kids Organge Colourblocked Hooded Sweatshirt</p>
                        <div className="price-section">
                            <div className="new-price">
                                <p>$77</p>
                            </div>
                            <div className="old-price">
                                <p><del>$120</del></p>
                            </div>
                        </div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New_collection;