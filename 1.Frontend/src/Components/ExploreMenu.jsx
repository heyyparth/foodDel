import React from 'react'
import { menu_list } from '../assets/assets'
import { useState } from 'react'
function ExploreMenu({category , setCategory}) {
   
  return (
    <div id="explore-menu">
      <h1 className="my-8 text-3xl font-semibold">Explore Our Menu</h1>
      <p className='max-w-4xl font-light text-lg'>Choose from a diverse menu Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit molestiae illum iusto provident molestias.
      </p>
      <div className="menu-list my-8 flex gap-2 overflow-x-scroll no-scrollbar">
        {
          menu_list.map((item , index)=>{
            return(
              <div className='min-w-44 flex flex-col items-center font-light' key={index}>
                
              <h3 className='text-lg my-2 text-slate-800'>{item.menu_name}</h3>
              
              <img className={category==item.menu_name?' cursor-pointer border-2 border-red-500 rounded-full p-1.5 w-28':' cursor-pointer w-28 hover:p-1.5'} src={item.menu_image}  alt="" onClick={()=>{category==item.menu_name?setCategory("All"):setCategory(item.menu_name)}} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreMenu
