import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Add from './components/Pages/Add'
import Orders from './components/Pages/Orders'
import List from './components/Pages/List'
import { ToastContainer } from 'react-toastify'
const App = () => {

  const url="http://localhost:8000"
  return (
    <div className=''>
      <ToastContainer/>
      <Navbar/>
      <hr className='border-2'/>
      <div className=''>
        <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element ={<Add url={url}/>} />
          <Route path="/list" element ={<List url={url}/>} />
          <Route path="/orders" element ={<Orders url={url}/>} />
        </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default App
