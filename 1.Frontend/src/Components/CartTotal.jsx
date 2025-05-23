import React from 'react'
import { useContext } from 'react'
import StoreContext from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function CartTotal({btn_text}) {
    const {food_list , cartItem ,setCartItem , removeFromCart , addToCart , getTotalCartAmt}=useContext(StoreContext);
    const delivery_fee=5;
    const navigate = useNavigate(); 
  return (
    <div className='w-lg'>
       <div className="cart-total mt-20 max-w-lg min-w-96 p-5 flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>Cart Total</h1>
        <div className='flex justify-between mt-5'>
          <p>Subtotal</p>
          <p>₹{
            getTotalCartAmt()
            }
            </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>
            Delivery Fee
          </p>
          <p>₹{delivery_fee}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p className='text-slate-800 font-semibold'>Total</p>
          <p className='text-slate-800 font-semibold'>₹{
            getTotalCartAmt() + delivery_fee
            }</p>
        </div>
        <div className=''>
          <button className='bg-red-500 w-full text-white h-11 mt-5 hover:bg-red-600 text-lg rounded-md' onClick={()=>navigate('/order')}>{btn_text}</button>
        </div>
    
        </div>
    </div>
  )
}

export default CartTotal
