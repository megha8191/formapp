import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import toast, { Toaster } from 'react-hot-toast';

const Header = ({ islogin, setIslogin }) => {
  return (
    <header className='w-full  bg-richblack-900 flex flex-col font-inter'>
      <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto'>
        <Link to="/"><img src={logo} alt='logo'></img></Link>
        <ul className='flex gap-x-6 text-slate-50'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <div className="md:flex items-center gap-x-4 hidden">
          {(islogin) ? <>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Link to="/" >
              <button className="bg-slate-900 text-slate-500 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
               onClick={()=>{setIslogin(false); toast.success('Logged out succesfully');  }} >Log out</button>
            </Link>
          </> :
          <><Link to="/login">
               <button  
               className="bg-slate-900 text-slate-500 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
            </Link>
            <Link to="/signup">
                <button className="bg-slate-900 text-slate-500 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
            </Link>
            </>}
          {islogin && "Hi user"}
        </div>
        <Toaster />
      
      </div>
    </header>
    



  )
}

export default Header