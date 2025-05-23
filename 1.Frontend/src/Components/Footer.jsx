import React from 'react'
import {assets} from "../assets/assets.js"
function Footer() {
  return (
    <>
    <div className='bg-stone-800 text-zinc-300 flex flex-wrap mt-48 justify-around' id="footer">

        <div className="left w-auto min-w-80 max-w-2xl  mt-5 p-5">
            <img src={assets.logo} alt=""/>
            <p className='my-3 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ex vel quas, quidem repellendus omnis itaque, libero velit est expedita cumque. Labore, eius illo modi illum delectus quae, ipsum praesentium nam iste quis amet esse!</p>

            <div className='flex gap-3'>
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            </div>
        </div>

        <div className="center mt-5 p-5 w-auto">
            <h1 className='text-2xl font-bold'>COMPANY</h1>
            <ul className='mt-1 p-5 flex flex-col gap-3 font-light'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>

        <div className="right w-auto mt-5 p-5">
            <h1 className='text-2xl font-bold'>Get in Touch</h1>
            <ul className='mt-1 p-5 flex flex-col gap-3 font-light'>
                <li>+1-123-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Footer
