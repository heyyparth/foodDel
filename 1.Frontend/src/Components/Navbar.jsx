import React, { useContext } from 'react';
import {assets} from '../assets/assets.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../Context/StoreContext.js';
function Navbar({setShowLogin}) {

    const [menu , setMenu] = useState("home");
    const {cartItem , getTotalCartAmt} = useContext(StoreContext);
  
  return (
    <div className='flex justify-between'>
      <div className="logo w-1/4 min-w-36">
        <Link to='/'><img src={assets.logo} alt="" className="size-28" /></Link>
      </div>
      <div className="list mx-3 w-1/2 max-w-96 max-lg:hidden ">
        <ul className='mx-3  flex justify-between'>
            <Link onClick={()=>{setMenu("home")}} className={menu=='home' ? 'border-b-2 text-blue-400':""}>home</Link>
            <li onClick={()=>{setMenu("menu")}} className={menu=='menu' ? 'border-b-2 text-blue-400':""}><a href="#explore-menu">menu</a></li>
            <li onClick={()=>{setMenu("mobile app")}} className={menu=='mobile app' ? 'border-b-2 text-blue-400':""}><a href="#footer">mobile app</a></li>
            <li onClick={()=>{setMenu("contact us")}} className={menu=='contact us' ? 'border-b-2 text-blue-400':""}><a href="#footer">contact us</a></li>
        </ul>
      </div>
      <div className="right flex justify-between w-52 min-w-44  ml-2">
        <img src={assets.search_icon} alt="" className='w-5 h-5 m-2'/>
        <div className='display-flex'>
       <Link to='/cart'><img src={assets.basket_icon} alt="" className='w-5 h-5 m-2' /></Link> 
       {
        getTotalCartAmt() ? <div className="dot w-2 h-2 bg-red-600 rounded-full relative bottom-8 left-4"></div>:<></>
       }
        
        </div>
        <button className='w-24 h-9 border-2 rounded-full hover:bg-blue-50 hover:border-blue-200 ease-in duration-300' onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
