
import StoreContext from "./StoreContext";
import React, { useEffect } from "react";
import { useState } from "react";
import {food_list} from "../assets/assets.js"

const StoreContextProvider=({children}) => {

    const [cartItem , setCartItem] = useState({});
    const url = "http://localhost:8000"
    const[token ,setToken] = useState("")
    const addToCart = (itemId) => {
        if(!cartItem[itemId]) {
            setCartItem((prev)=>({...prev , [itemId]:1}))
    
        }
        else{
            setCartItem((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev , [itemId]:prev[itemId]-1})) 
       
    }
    const getTotalCartAmt=()=>{
        let amt=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
            let itemInfo=food_list.find((product)=>product.id === item)
            amt+=itemInfo.price*cartItem[item]
            }
        }
        return amt;
    }

    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    const contextValue={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmt,
        url,
        setToken
    }
    return (
     <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider