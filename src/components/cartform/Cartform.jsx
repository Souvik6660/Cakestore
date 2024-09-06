import React from "react";

import { useState } from "react";
// import Shopcart from "./Cartcomponents/shopcart";
import Cart from "../CartComponent/Cart";
import "./Cartform.css";

import Navbar from '../CartComponent/Navbar'
import Amazon from "../CartComponent/amazon";

const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) ispresent = true;
    });
    if (ispresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handlechange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      <h1 className="heading_content">
        Tastiest Cakes Ever You have 
      </h1>
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handlechange={handlechange} />
      )}
      {warning && (
        <div className="Warning">Item is laready added to your cart</div>
      )}
    </div>
  );
};

export default Cartform;
