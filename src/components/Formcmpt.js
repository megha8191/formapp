import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Formcmpt =()=>{
    const navigate=useNavigate();
    const [formdata,setFormdata] =useState({
        fname:"",
        age:"",
        comment:"",
        check:true,
        mode:"offline",
        car:""
      })
    
      const handleChange=(e)=>{
        const {name , value,type,checked} =e.target
          setFormdata((prev)=>({
            ...prev,
            [name]: (type==="checkbox")? checked : value
          }))
          // setFormdata({
          //       ...formdata,
          //  })     
      }
      const handleform=(event)=>{
        event.preventDefault();
        console.log(formdata)
        navigate('/result', { state: { formdata: formdata } });
      }
     
      return (
        <div className="w-[450px] mx-auto py-8 text-white" >
           <form onSubmit={handleform}>
            <div className='px-4'>
             <br/><input className='my-2 border-1 p-2 border-gray-300 w-full text-black' type='text' placeholder='name' name='fname' onChange={handleChange}/>
             <br/><input className='my-2 border-1 p-2 border-gray-300 w-full text-black' type='number' placeholder='Age' name='age' onChange={handleChange}/>
             <br/><textarea name='comment'className='my-2 border-1 p-2 border-gray-300 w-full text-black' onChange={handleChange} placeholder='comment'/>
             <br/><input className='my-2 border-1 p-2 border-gray-300  text-black' type='checkbox' checked={formdata.check} name='check' onChange={handleChange}/>check
             <fieldset>
              <input className='my-2 border-1 p-2 border-gray-300 ' type='radio' name='mode' value="offline" onChange={handleChange} checked={(formdata.mode==="offline")}/>offline
              <input className='my-2 border-1 p-2 border-gray-300 ml-4' type='radio' name='mode' value="online" onChange={handleChange} checked={(formdata.mode==="online")}/>online
             </fieldset>
             <select value={formdata.car} name='car' className='my-2 border-1 p-2 border-gray-300 w-full text-black'  onChange={handleChange}>
              <option name="scorpio">scorpio</option>
              <option name="thar">thar</option>
              <option name="fortuner">fortuner</option>
             </select>
             <br/><br/><button  className='bg-green-700 text-black py-2 px-4 rounded mr-5 '  type='submit'>Submit</button>
             <button className='bg-white text-black py-2 px-4 rounded ' onClick={()=>{
              navigate(-1);
             }}>Go back</button>
            </div>
           </form>
        </div>
      );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

export default Formcmpt