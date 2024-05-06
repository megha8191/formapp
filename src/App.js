import React from 'react';
import {Routes,Route, Outlet} from "react-router-dom"

import Formcmpt from './components/Formcmpt';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Result from './components/Result';
import Header from './components/Header';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { useState } from 'react';


function App() {
  const [islogin,setIslogin] = useState(false);
  return(
  <div className='App'>
    <div className='max-w-full min-h-screen bg-black flex flex-col font-inter'>
     <Routes>
        <Route path="/" element={<div className='text-white'> <Header islogin={islogin} setIslogin={setIslogin}/><Outlet/> </div>}>
          <Route index element={<div className='text-center py-10'>HOME<br/><br/>default element for "/" route and "/" outlet.</div>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/login'  element={<Login setIslogin={setIslogin} islogin={islogin}/>}/>
          <Route path='/signup'  element={<Signup setIslogin={setIslogin}/>}/>
          {islogin && <Route path='/dashboard' element={<Dashboard/>}/>}
        </Route>
        <Route path='/form' element={<Formcmpt/>}/>
        <Route path='/result' element={<Result />}/>
        <Route path='*' element={<div className='text-white text-center py-5'>Error not found</div>}></Route>
     </Routes>
     
  </div>
  </div>
  )
}

export default App;
