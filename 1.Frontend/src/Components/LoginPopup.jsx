import React , {useContext, useEffect, useState} from 'react'
import { assets } from '../assets/assets'
import StoreContext from '../Context/StoreContext';
import axios from "axios"
function LoginPopup({setShowLogin}) {
    const [currState , setCurrState] = useState("Sign Up");
    const [data , setData] = useState({
      name:"",
      email:"",
      password:""
    })  
    const {url , setToken} = useContext(StoreContext)
    const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data => ({...data , [name]:value}))
    }
    const onLogin = (event)=>{
      event.preventDefault();
      let newUrl = url;
      if(currState === "Login")
        newUrl+= "/api/user/login"
    else{
      newUrl+="/api/user/register"
    }
    const response = axios.post(newUrl , data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token" , response.data.token)
      setShowLogin(false);
    }
    else{
      alert()
    }
  }

  return (
    <div className='absolute z-1 w-full h-full flex justify-center items-center' style={{backgroundColor:"#00000090"}}>
      <div className="container max-w-96 bg-white rounded-xl" style={{animation:"fadeIn 0.5s"}} >
        
      <form onSubmit={onLogin}>
        <div className='flex flex-col gap-5 p-8 '>
        <div className="top flex justify-between ">
        <h1 className='text-2xl font-bold'>{currState}</h1>
        <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} className='w-4 h-4 cursor-pointer'/>
        </div>
        {currState==="Sign Up" ?
        <><input type="text" name="name" onChange={onChangeHandler} id="" value = {data.name} placeholder='Name' required className='border-2 p-2 rounded-md'/></>
        :
        <></>
      }
        <input type="email" name="email" id="" onChange={onChangeHandler} value={data.email} placeholder='Email' required className='border-2 p-2 rounded-md'/>
        <input type="text" name="password" id="" placeholder='Password' onChange={onChangeHandler} value={data.password} required className='border-2 p-2 rounded-md'/>
        <button type='submit' className=' bg-orange-700 p-2 text-white rounded-md'>{currState}</button>
        <div className='flex gap-5'>
        <input type="checkbox" name="" id="" required className=''/>
        <p className='text-slate-600'>I agree to the terms of Use and privacy policy</p>
        </div>
        
        {currState==="Sign Up"?
        <p className='font-normal text-slate-500'>Already a User?<span onClick={()=>setCurrState("Login")} className='cursor-pointer text-red-600 font-normal'>Click here to Login</span></p> 
        :
        <p className='font-normal text-slate-500'>New User?<span onClick={()=>setCurrState("Sign Up")} className='cursor-pointer text-red-600 font-normal'>Click here to Sign up</span></p>
        }
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginPopup
