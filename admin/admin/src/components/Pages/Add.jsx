import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
const Add = ({url}) => {

  const [image , setImage] = useState(false);
  const [data , setData] = useState({
    name : "",
    description: "",
    price:"",
    category:"Salad"
  })
  
  // useEffect(()=>{
  //   console.log(data);
  // },[data]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data , [name] : value}))
  }
  const onSubmitHandler = async (e) =>{
    e.preventDefault();   // to prevent webpage from reloading on submit
    const fd = new FormData();
    fd.append("name" , data.name)
    fd.append("description" , data.description)
    fd.append("price" , data.price)
    fd.append("category" , data.category)
    fd.append("image" , image)
    const response = await axios.post(`${url}/api/food/add` , fd)
    if(response.data.success){
      //if form submit is success then reset all field values
      setData({ name : "",
        description: "",
        price:"",
        category:"Salad"
    })
    setImage(false);
    toast.success(response.data.message);
    }
    else{
       toast.error(response.data.message)
    }
  }
  return (
    <div className='text-gray-500 m-4 p-2 min-w-80 w-1/2'>
      <form className=' flex-col' onSubmit={onSubmitHandler}>
        <div className='m-4'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image):assets.upload_area} alt="" className='w-1/2 max-w-40 my-2' />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="image" className='hidden'/>
          </div>
          <div className="m-4">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Enter Product Name here...' className='border-2 border-gray-400 rounded w-2/3 p-2 my-2' />
          </div>
          <div className="m-4">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Enter Product description here' id="" className='border-2 border-gray-400 rounded w-2/3  p-2 my-2' ></textarea>
          </div>
          <div className="m-4">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id="" className='border-2 border-gray-400 rounded w-2/3  p-2 my-2' >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="m-4">
            <p>Product Price </p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='Enter Product Price in (INR)' className='border-2 border-gray-400 rounded w-2/3  p-2 my-2'  />
          </div>
          <div className='m-4'>
          <button type="submit" className='border-gray-400 w-1/3  p-2 my-2 bg-black text-white'  >ADD</button>
          </div>
      </form>
    </div>
  )
}

export default Add
