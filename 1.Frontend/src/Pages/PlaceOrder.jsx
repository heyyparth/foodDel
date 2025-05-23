import React from 'react'
import CartTotal from '../Components/CartTotal'

function PlaceOrder() {
  return (
    <div className='flex flex-wrap justify-around'>
      <form >
        <h1 className='text-4xl font-bold my-8'>Delivery Information</h1>

        <div className='flex flex-col gap-5 max-w-xl'>
        <div className='flex gap-5' >
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='First name' />
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='Last name' />
        </div>
        <input className='border-2 h-10 rounded-md p-5' type="email" name="" id="" placeholder='Email Address' />
        <input className='border-2 h-10 rounded-md p-5' type="text" name="" id="" placeholder='Street' />
        <div className='flex gap-5' >
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='City' />
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='State' />
        </div>
        <div className='flex gap-5' >
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='Country' />
        <input className='border-2 h-10 rounded-md p-5 w-1/2' type="text" name="" id="" placeholder='Zip code' />
        </div>
        <input className='border-2 h-10 rounded-md p-5' type="text" name="" id="" placeholder='Phone' />
        </div>
      </form>
      <CartTotal btn_text="Proceed To Payment"  />
    </div>
  )
}

export default PlaceOrder
