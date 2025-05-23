import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import { Route,Routes } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContextProvider'
import Footer from './Components/Footer'
import LoginPopup from './Components/LoginPopup'
function App() {
  const [count, setCount] = useState(0)
  const [showLogin , setShowLogin] = useState(false);
  return (
   <StoreContextProvider>
    <>
    <div className='border-3 border-black h-screen'>
    {
      showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>
    }
   <div className='w-screen flex justify-center  overflow-x-hidden'>
    <div className='w-4/5 mt-10'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </div>
      </div>
      <Footer/>
      </div>
      </>
   </StoreContextProvider>
  )
}

export default App
