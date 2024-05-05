
import Formcmpt from './components/Formcmpt';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Result from './components/Result';
import React from 'react';
import {Routes,Route, Outlet} from "react-router-dom"
import Header from './components/Header';


function App() {
  return(
  <div className='App'>
     <Routes>
        <Route path="/" element={<div> <Header/><Outlet/> </div>}>
          <Route index element={<div>default element for "/" route and "/" outlet.</div>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/about' element={<Aboutus/>}/>
        </Route>
        <Route path='/form' element={<Formcmpt/>}/>
        <Route path='/result' element={<Result />}/>
        <Route path='*' element={<div>Error not found</div>}></Route>
     </Routes>
  </div>
  )
}

export default App;
