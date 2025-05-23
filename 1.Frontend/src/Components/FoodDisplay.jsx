import React, { useContext } from 'react'
import StoreContext from '../Context/StoreContext'
import FoodItem from './FoodItem'
import StoreContextProvider from '../Context/StoreContextProvider'

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)
  return (
    <div >
        <h1 className='text-3xl font-semibold'>Explore Our Wide Variety of Menu Items</h1>
     <div className='flex flex-wrap mt-12 lg:justify-between md:justify-center sm:justify-center gap-y-20 gap-x-10 '>
      {food_list.map((item,index)=>{
        if(category==="All" || category==item.category)
        return <FoodItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
      })}
      </div>
    </div>
  )
}

export default FoodDisplay
