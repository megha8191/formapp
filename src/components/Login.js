import React, { useState } from 'react'
import loginimage from '../assets/login.png'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = ({ islogin, setIslogin }) => {
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState(false);

    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    })
    const changeHandle = (e) => {
        const {name,value} = e.target;
        setLogindata((prev) => (
            {
                ...prev,    
               [name]: value
            }
        ))
    }
    const loginsubmit=(e)=>{
        e.preventDefault();
        setIslogin(true);
        toast.success('Login successfully');
        navigate('/dashboard')
    }

    return (
    <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row">
        <div className="w-11/12 max-w-[450px] mx-auto md:mx-0">
            <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]"> Welcome Back</h1>
            <p className="text-[1.125rem] leading-[1.625rem] mt-4"> 
                <span className="text-slate-400"> Build skills for today, tomorrow, and beyond. </span>{" "}
                <span className="text-blue-100 italic">  Education to future-proof your career. </span>
            </p>
            <form className="w-full flex flex-col gap-y-4 mt-6" onSubmit={loginsubmit}>
                <label className="w-full">
                    <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1"> Email Address <sup className="text-red-300">*</sup> </p>
                    <input   required  type="email"
                        name="email"
                        placeholder="Enter email address"
                        onChange={changeHandle}
                        value={logindata.email}
                        className="p-[12px] bg-gray-800 rounded-[0.5rem] text-white w-full"
                        style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                    />
                </label>
                <label className="relative">
                    <p className="text-[0.875rem] leading-[1.375rem] text-white mb-1">Password <sup className="text-red-300">*</sup> </p>
                    <input required
                        onChange={changeHandle}
                        type={showpass ? "text" : "password"}
                        name="password"
                        value={logindata.password}
                        placeholder="Enter Password"
                        className="w-full p-[12px] bg-gray-800 rounded-[0.5rem] text-white pr-12"
                        style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                    />
                    <span className="absolute right-3 top-[38px] z-[10] cursor-pointer" onClick={() => { setShowpass(!showpass); }}  >
                        <svg stroke="currentColor" fill="#AFB2BF" strokeWidth={0} viewBox="0 0 1024 1024" fontSize={24} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                            {showpass ? (
                            <>
                                <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path>
                                <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path>
                            </> ) : 
                            (
                            <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                            )}
                        </svg>
                    </span>
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password </p>
                </label>
                <button  type="submit" className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-gray-900" >Sign In</button>
            </form>
            <div className="w-full flex items-center gap-x-2 my-4">
                <div className="flex-1 h-[1px] bg-gray-700" />
                    <p className="text-gray-700 font-medium text-[0.875rem] leading-[1.375rem]"> OR </p>
                <div className="flex-1 h-[1px] bg-gray-700" />
            </div>
            <button className="w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-400 border border-gray-700">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    fontSize={22}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                </svg>
                <p>Sign in with Google</p> 
            </button>
        </div>
        <div className="relative w-11/12 max-w-[450px] mx-auto md:mx-0">
            <img src={loginimage}   alt="Students" width={558} height={504} className="absolute z-10 -top-4 right-4" />
        </div>
    </div>
    )
}

export default Login