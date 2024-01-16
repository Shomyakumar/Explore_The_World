


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";



export default function LoginForm(props){
    const setLoggedIn=props.setLoggedIn;
    const[formData,setFormData]=useState({email:"",password:""})

    const navigate=useNavigate();

    function changeHandler(event){
        let{name,value}=event.target;
        setFormData(prevData=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In ");
        navigate("/");
    }
    const[showPassword,setShowPassword]=useState(false);
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 my-6">
            <label className='flex flex-col  w-full max-w-[400px]'>
                <p className='text-sky-100  font-semibold mb-1'>
                    Email <sup className='text-red-500 '>*</sup></p>
                        <input type="email" name="email" onChange={changeHandler} value={formData.email}
                            required placeholder='Enter email address'
                            className='px-2 py-2 rounded py- w-full text-blue-950 text-lg font-semibold 
                            focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                        />
            </label>
            <label className='flex flex-col  w-full max-w-[400px] relative'>
                <p className='text-sky-100  font-semibold'>Password <sup className='text-red-500 '>*</sup></p>
                <input type={showPassword?"text":"password"} required 
                    name="password"
                    value={formData.password} 
                    onChange={changeHandler} 
                    placeholder="Enter Password"
                    className='p-2 rounded  w-full text-blue-950 text-lg font-semibold 
                            focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                    >
                </input>
                <span className="  absolute top-9 right-2 cursor-pointer"
                    onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?(<AiOutlineEye fontSize={20} fill="rgb(23 37 84)" />):(<AiOutlineEyeInvisible fontSize={20} fill="rgb(23 37 84)" />)}</span>
                <Link to="#">
                    <p className="text-xs mt-1 text-white flex justify-end">Forgot Password</p>
                </Link>
            </label>
            <div className="flex max-w-[400px] justify-center ">
                <button className="px-10 py-3 bg-sky-50   text-lg font-semibold rounded-md hover:outline hover:outline-offset-1 hover:outline-sky-100 transition-all duration-200">Log in</button>
            </div>
            <div className="w-full flex gap-2 items-center max-w-[400px]">
                <div className="w-full h-[1px] bg-slate-400"></div>
                <p className="text-sm text-slate-400">OR</p>
                <div  className="w-full h-[1px] bg-slate-400"></div>
            </div>
            <button className="py-2 text-white  hover:shadow hover:shadow-slate-300 border-2 max-w-[400px] font-semibold flex items-center justify-center gap-2"><span><FcGoogle/></span> Sign in with google</button>
        </form>
    )
}