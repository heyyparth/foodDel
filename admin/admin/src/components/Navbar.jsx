import React from 'react'
import { assets } from '../assets/admin_assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex justify-between m-3 mx-10'>
      <div className='text-red-500 text-3xl font-extrabold' >Hostel Bites</div>
      <img src={assets.profile_image} className='m-2' alt="" />
    </div>
  )
}

export default Navbar
