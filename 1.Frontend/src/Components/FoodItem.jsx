import React, { useState , useContext } from 'react'
import {add_icon_white} from "../assets/assets.js"
import {add_icon_green} from "../assets/assets.js"
import { remove_icon_red } from '../assets/assets.js';
import StoreContext from '../Context/StoreContext.js';

function FoodItem({id, name ,price , description , image}) {

  // const [itemCount , setItemCount] = useState(0);
  const {cartItem ,addToCart , removeFromCart} = useContext(StoreContext)
  return (
    <div className='w-1/5 min-w-56 shadow-lg rounded-lg m-3 hover:shadow-2xl '>
        <div className="relative cursor-pointer">
      <img src={image} alt="" className='w-full rounded-t-xl' />
       { 
          !cartItem[id]?  
          <img src={add_icon_white} onClick={()=>addToCart(id)} alt="add item" className='w-9 absolute bottom-1 left-2 cursor-pointer' /> 
          : 
          <div className='flex gap-1 justify-center absolute bottom-1 left-2  bg-white rounded-full p-1 item-center'>
            
          <img src={add_icon_green} onClick={()=>addToCart(id)} alt="add item"  /> 
          <p className='font-medium  mx-1'>{cartItem[id]}</p> 
          <img src={remove_icon_red} onClick={()=>removeFromCart(id)} alt="remove item"   />
          
          </div>
       }
       </div>
      <div className='p-5'>
      <h1 className='text-lg font-medium'>{name}</h1>
      <p className='font-light text-sm'>{description}</p>
      <p className='text-red-500 font-semibold text-2xl my-2'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
