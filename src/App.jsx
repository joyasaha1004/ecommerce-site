import React from 'react';

import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from 'react-router-dom';
import Shop from "./Components/Pages/Shop";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import Kids from "./Components/Pages/Kids";
 import Product from "./Components/Pages/Product";
 import Create_Account from "./Components/Create_Account_Section/Create_Account"
 import Cart from "./Components/Pages/Cart";
 import Login from "./Components/Pages/Login";
 import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
   
    <Navbar/>
  
    <Routes>
      <Route path ="/" element={<Shop/>}/>
      <Route path ="/mens" element={<Men/>}/>
      <Route path ="/womens" element={<Women/>}/>
      <Route path ="/kids" element={<Kids/>}/>
      <Route path="/product" element={<Product/>}>
    {/* <Route path="/:productId" element={<Product/>}/>  */}
        </Route>
       <Route path="/cart" element={<Cart/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/createaccount" element={<Create_Account/>}/>
    </Routes>
  <Footer/> 
    </div>
  );
};

export default App;