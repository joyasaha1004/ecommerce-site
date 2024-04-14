import React, { useState } from 'react';
import "./LogIn_section.css";
import { Link } from 'react-router-dom';



const LogIn_section = () => {
    let[FormObj,SetFormObj]= useState({
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
        <div className="login-section">
            <form onSubmit= {Formsubmit}>
            <div className="signup-section">
            <div className="sign-up-login">
                <h3>LogIn</h3>
            </div>
            <div className="information-box-login">
               
                <input onChange={(e)=>{InputChange("Email",e.target.value) }} className="form-control" type="email" value={FormObj.Email}placeholder="Email Address"></input>

                <input className="form-control" type="password" onChange={(e)=>{InputChange("Password",e.target.value) }}value={FormObj.Password} placeholder="Password"></input>

                <button  type="submit" className="btn">Continue</button>
                  <p>Create an account?<span><Link to="/createaccount" className="click">Click here</Link></span></p>
            </div>
          
            <div className="checkbox">
                <input className="form-check-input" type="checkbox" ></input>
                <label className="form-check-label">By coutinuing, i agree to the terms of use & Privacy policy</label>
            </div>
            </div>
            </form>
        </div>
    );
};

export default LogIn_section;