import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {
    const navigate = useNavigate();
    function GotoContact(){
        navigate('/contact');
    }
  return (
    <div>Aboutus <br/><br/><br/>
        <button onClick={GotoContact}>Go to Contact page</button>
    </div>
  
  )
}

export default Aboutus