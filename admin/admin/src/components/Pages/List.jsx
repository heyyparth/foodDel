import React, { useEffect , useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
const List = ({url}) => {

  
  const [list , setList] = useState([]);
  const fetchList = async() =>{
    const response = await axios.get(`${url}/api/food/list`)
    //Check if data is loaded in response variable
    if(response.data.success){
      setList(response.data.data)
      console.log(response.data);
    }
    else{
      toast.error("Error");
      // console.log(error);
      // console.log(response.data);
      
    }
  }
  const removeHandler = async(itemId)=>{
    const response = await axios.post(`${url}/api/food/remove` , {id:itemId})
    if(response.data.success){
      toast.success("Food Removed Successfully");
      await fetchList()
    }
      
  else
    toast.error("Error in removing")
}
  useEffect(()=>{
      fetchList();
  },[])

  
  return (
    <div className='w-4/5 m-10'>
      <div className='grid-list gap-6 light-border h-14 p-5 text-gray-500 font-bold bg-gray-50 max-sm:hidden'>
        <p className="o">Image</p>
        <p className="o">Name</p>
        <p className="o">Category</p>
        <p className="o">Price</p>
        <p className="o">Remove</p>
      </div>
      <div>
        {
          list.map((item , index) =>{
            return(
              <div key ={index} className='grid-list gap-6  p-5 light-border text-gray-500 font-semibold'>
                <img src={`${url}/images/`+item.image} alt="" srcset="" className='max-w-12' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className="cursor-pointer" onClick={() => removeHandler(item._id)}>X</p>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default List
