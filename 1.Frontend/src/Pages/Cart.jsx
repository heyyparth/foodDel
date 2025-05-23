import React from 'react'
import { useContext } from 'react'
import StoreContext from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import CartTotal from '../Components/CartTotal';
function Cart() {
  const {food_list , cartItem ,setCartItem , removeFromCart , addToCart , getTotalCartAmt}=useContext(StoreContext);
  const delivery_fee=5;
  const navigate = useNavigate(); 
  return (
    
    <div className='mt-14'>
      {
        getTotalCartAmt()!=0 ? 
        <>
        <div className='grid grid-cols-15 items-center gap-5'>
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p className='max-sm:hidden'>Add</p>
      <p>Remove</p>
      </div> 
      <div className="">
      {
        food_list.map((item)=>{
          if(cartItem[item.id])
          { 
          return(
        <div className='my-2'>
          <hr className='mb-2'/>
        <div className='grid grid-cols-15 items-center gap-5'>
            <img src={item.image} alt="" className='w-14 h-10'/>
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <p>{cartItem[item.id]}</p>
            <p>₹{item.price * cartItem[item.id]}</p>
            <p className='text-3xl hover:cursor-pointer  max-sm:hidden' onClick={() => addToCart(item.id)}>+</p>
            <p className='text-3xl hover:cursor-pointer' onClick={() => removeFromCart(item.id)}>-</p>
            </div>
            <hr className='my-2'/>
            </div>
          )
        }
        })
      }
      <CartTotal btn_text="Proceed To Checkout"/>
      </div>
     
        </>
        :
        <>
        <div className=' flex flex-col justify-center items-center'>
          <img src="./empty-cart.png" alt="" className='max-w-xl max-h-96 grayscale'/>
          <h1 className='text-5xl font-extrabold'>Your Cart is Empty</h1>
        </div>
        
        </>

      }
    
     
    </div>
  )
}

export default Cart
