import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='border-r-2 border-gray-200 w-1/3 max-w-80 min-h-screen px-3 p-5'>
      <NavLink to='/add' className='border-2 flex gap-4 my-5 p-5 hover:bg-slate-100 hover:cursor-pointer max-sm:flex max-md:justify-center'>
        <img src={assets.add_icon} alt="" />
        <p className='max-md:hidden '>Add Items</p>
      </NavLink>
      <NavLink to='/list' className='border-2 flex gap-4 my-5 p-5 hover:bg-slate-100 hover:cursor-pointer max-sm:flex max-md:justify-center'>
        <img src={assets.order_icon} alt="" />
        <p className='max-md:hidden '>List Items</p>
      </NavLink>
      <NavLink to='/orders' className='border-2 flex gap-4 my-5 p-5 hover:bg-slate-100 hover:cursor-pointer max-sm:flex max-md:justify-center'>
        <img src={assets.order_icon} alt="" />
        <p className='max-md:hidden '>Orders</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
