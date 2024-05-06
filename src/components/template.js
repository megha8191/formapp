import React from 'react'

const Template = () => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row">
            <div className="w-11/12 max-w-[450px] mx-auto md:mx-0">
                <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
                    Welcome Back
                </h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-slate-400">
                        Build skills for today, tomorrow, and beyond.
                    </span>{" "}
                    <span className="text-blue-100 italic">
                        Education to future-proof your career.
                    </span>
                </p>

                <div className="w-full flex items-center gap-x-2 my-4">
                    <div className="flex-1 h-[1px] bg-gray-700" />
                    <p className="text-gray-700 font-medium text-[0.875rem] leading-[1.375rem]">
                        OR
                    </p>
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
                <img
                    src={loginimage}
                    alt="Students"
                    width={558}
                    height={504}

                    className="absolute z-10 -top-4 right-4"
                />
            </div>
        </div>
    )
}

export default Template