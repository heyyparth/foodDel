import React from 'react'

function Header() {
  return (
    <div style={{background: "url(/header_img.png) no-repeat ", height:"34vw", backgroundSize:"contain"}} className='mt-7 my-auto flex flex-col justify-end gap-20' >
        <div className="w-full flex flex-col gap-8 m-5 " style={{animation:"fadeIn 3s"}}>
        <h1 className='text-white max-w-2xl lg:text-7xl md:text-5xl sm:text-3xl  font-medium' >Order Your Favourite Food Here</h1>

        <p className='text-white max-w-4xl max-xl:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod doloremque provident nulla facere expedita est ut, sit fuga. Distinctio architecto numquam eligendi at dolore eveniet, culpa harum ad! Fugit quod atque provident quos saepe.</p>
        <button className='bg-slate-100 rounded-full p-3 border-2 max-w-28 hover:'>View Menu</button>
        </div>
    </div>
  )
}

export default Header
