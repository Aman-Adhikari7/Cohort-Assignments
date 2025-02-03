// import { Route, Router, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removefromcart } from "../Features/Cartslice";
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Purchased from "./Purchased";
const Checkout = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  const cartsData= useSelector((state)=>state.cart.items)
  const dispatch= useDispatch()

  const navigate = useNavigate()

  function handelBuy(){
       setPopupOpen(true)
  }

  useEffect(() => {
    if (cartCount === 0) {
        navigate("/");
    }
}, [cartCount, navigate]);
  
  return (
    <div>
    <div className=" grid grid-cols-10 gap-8 w-full  px-6 my-12 ">
        {/* right side div  */}

        <div className="col-span-7 rounded-md border-2 shadow-2xl px-8 py-4">
          <h1 className="font-bold text-2xl pb-2">Shopping Cart</h1>

         { cartsData.map((items)=>(
             <div key={items.id} className="flex justify-between items-center">
             <div className="flex items-center gap-4">
               <img className="w-16 h-16" src={items.img} />
 
               <div>
               <h1 className="font-bold">{items.title}</h1>
               <h2 className={items.quantity >= items.stock ? "text-red-500" : "text-green-400"}>
                 {items.quantity >= items.stock ? "Out of Stock" : "In Stock"}
                 </h2>
               <h3 className=" flex gap-2">
                 <span onClick={()=>dispatch(decreaseQuantity(items.id))} className="border px-2 cursor-pointer hover:border-blue-400 ">-</span>
                  {items.quantity}
                  <span
            onClick={() => dispatch(increaseQuantity(items.id))}
            className={`border px-2 shadow cursor-pointer hover:border-blue-400 ${
              items.quantity >= items.stock ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={items.quantity >= items.stock}
          >
            +
          </span>
                  <span onClick={()=>{dispatch(removefromcart(items.id))}} className="text-blue-400 hover:text-red-700 hover:border cursor-pointer">Delete</span>
               </h3>
               </div>
             </div>
 
             <div className="font-bold">${items.price}</div>
             </div>

         )) 
          }
        </div>

        {/* left side  */}
        <div className=" flex  flex-col col-span-3 shadow-2xl border rounded-md px-4 py-4 ">
          <h1 className="font-bold text-lg">Order Summary</h1>

          <div className="flex justify-between border-b pb-2">
            <h1>items{`(${cartCount})`}:</h1>
            <h2>${cartPrice}</h2>
          </div>

          <div className="flex justify-between">
            <h1 className="font-bold">Order Total:</h1>
            <h2 className="font-bold">${cartPrice}</h2>

          </div>

          <button onClick={handelBuy} className="border py-2 rounded-md bg-[#FACC14] text-black ">Proceed to Buy</button>
        </div>
             <Purchased isOpen={isPopupOpen} onClose={()=>{setPopupOpen(false) 
              
             }}  Price={cartPrice}/>
      </div>
    </div>
  );
};

export default Checkout;
