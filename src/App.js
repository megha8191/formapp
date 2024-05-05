import { useState } from 'react';
import './App.css';

function App() {
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
      [name]: (type=="checkbox")? checked : value
    }))
      //   setFormdata({
      //     ...formdata,
      //     [name]: (type=="checkbox")? checked : value
      //   }) 
  }
  const handleform=(event)=>{
    event.preventDefault();
    console.log('printing values........')
    console.log(formdata)
  }
 
  return (
    <div className="App">
       <form onSubmit={handleform}>
        <div>
         <br/><input type='text' placeholder='name' name='fname' onChange={handleChange}/>
         <br/><input type='number' placeholder='Age' name='age' onChange={handleChange}/>
         <br/><textarea name='comment' onChange={handleChange}/>
         <br/><input type='checkbox' checked={formdata.check} name='check' onChange={handleChange}/>
         <fieldset>
          <input type='radio' name='mode' value="offline" onChange={handleChange} checked={(formdata.mode=="offline")}/>
          <input type='radio' name='mode' value="online" onChange={handleChange} checked={(formdata.mode=="online")}/>
         </fieldset>
         <br/>
         <select value={formdata.car} name='car' onChange={handleChange}>
          <option name="scorpio">scorpio</option>
          <option name="thar">thar</option>
          <option name="fortuner">fortuner</option>
         </select>
         <br/><button type='submit'>Submit</button>
        </div>
       </form>
    </div>
  );
}

export default App;
