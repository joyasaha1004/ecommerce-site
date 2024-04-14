import React from 'react';
import "./Create_Account.css";
import {useState} from "react";
import { Link } from 'react-router-dom';

const Create_Account = () => {

    let[FormObj,SetFormObj]= useState({
        Name:"",
        Email:"",
        Password:"",
    })
    const InputChange =(property,value)=>{
        SetFormObj(preObj=>({
            ...preObj,
            [property]:value
        }))}
        const Formsubmit= (e)=>{
            e.preventDefault();
            alert(JSON.stringify(FormObj))
        }
        
    
    return (
       
       <div className="sign-section">
           <form onSubmit={Formsubmit}>
            <div className="signup-section">
            <div className="sign-up">
                <h3>Sign Up</h3>
            </div>
            <div className="information-box">
            <input className="form-control" type="text" placeholder="Your Name" onChange={(e)=>{InputChange("Name",e.target.value)}} value={FormObj.Name}></input>
                <input className="form-control" type="email" placeholder="Email Address" onChange={(e)=>{InputChange("Email",e.target.value)}} value={FormObj.Email}></input>
                <input className="form-control" type="password" placeholder="Password" onChange={(e)=>{InputChange("Password",e.target.value)}} value={FormObj.Password}></input>
                <button className="btn" type="submit">Continue</button>
                  <p>Already have an account?<span><Link to="/login" className="click">Click here</Link></span></p>
            </div>
          
            <div className="checkbox">
                <input className="form-check-input"type="checkbox" id="gridcheck"></input>
                <label className="form-check-label" id="gridcheck">By coutinuing, i agree to the terms of use & Privacy policy</label>
            </div>
            </div>
            </form>
        </div>
            
      
    );
};

export default Create_Account;