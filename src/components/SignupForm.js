




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";



export default function SignupForm(props){
    const setLoggedIn=props.setLoggedIn;
    const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",createPassword:"",confirmPassword:""})

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
        toast.success("Account Created");
        console.log(formData);
        navigate("/");
    }
    const[showPassword1,setShowPassword1]=useState(false);
    const[showPassword2,setShowPassword2]=useState(false);
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 my-6">
            <div className="flex flex-col sm:flex-row gap-3 max-w-[400px]">
                <label className='flex flex-col  w-full '>
                    <p className='text-sky-100  font-semibold mb-1'>
                        First Name <sup className='text-red-500 '>*</sup></p>
                            <input type="text" name="firstName" onChange={changeHandler} value={formData.firstName}
                                required placeholder='Enter first Name'
                                className='px-2 py-2 rounded py- w-full text-blue-950 text-lg font-semibold 
                                focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                            />
                </label>
                <label className='flex flex-col  w-full max-w-[400px]'>
                    <p className='text-sky-100  font-semibold mb-1'>
                        Last Name <sup className='text-red-500 '>*</sup></p>
                            <input type="text" name="lastName" onChange={changeHandler} value={formData.lastName}
                                required placeholder='Enter Last Name'
                                className='px-2 py-2 rounded py- w-full text-blue-950 text-lg font-semibold 
                                focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                            />
                </label>
               
            </div>
            <label className='flex flex-col  w-full max-w-[400px]'>
                <p className='text-sky-100  font-semibold mb-1'>
                    Email <sup className='text-red-500 '>*</sup></p>
                        <input type="email" name="email" onChange={changeHandler} value={formData.email}
                            required placeholder='Enter email address'
                            className='px-2 py-2 rounded py- w-full text-blue-950 text-lg font-semibold 
                            focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                        />
            </label>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[400px]">
                <label className='flex flex-col  w-full max-w-[400px] relative'>
                    <p className='text-sky-100  font-semibold'>Create Password <sup className='text-red-500 '>*</sup></p>
                    <input type={showPassword1?"text":"password"} required 
                        name="createPassword"
                        value={formData.createPassword} 
                        onChange={changeHandler} 
                        placeholder="Create Password"
                        className='p-2 rounded  w-full text-blue-950 text-lg font-semibold 
                                focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                        >
                    </input>
                    <span className="  absolute top-9 right-2 cursor-pointer"
                        onClick={()=>{setShowPassword1(!showPassword1)}}>{showPassword1?(<AiOutlineEye fontSize={20} fill="rgb(23 37 84)" />):(<AiOutlineEyeInvisible fontSize={20} fill="rgb(23 37 84)" />)}</span>
                </label>
                <label className='flex flex-col  w-full max-w-[400px] relative'>
                    <p className='text-sky-100  font-semibold'>Confirm Password <sup className='text-red-500 '>*</sup></p>
                    <input type={showPassword2?"text":"password"} required 
                        name="confirmPassword"
                        value={formData.confirmPassword} 
                        onChange={changeHandler} 
                        placeholder="Confirm Password"
                        className='p-2 rounded  w-full text-blue-950 text-lg font-semibold 
                                focus:outline-offset-1 focus:outline focus:outline-slate-300 '
                        >
                    </input>
                    <span className="  absolute top-9 right-2 cursor-pointer"
                        onClick={()=>{setShowPassword2(!showPassword2)}}>{showPassword2?(<AiOutlineEye fontSize={20} fill="rgb(23 37 84)" />):(<AiOutlineEyeInvisible fontSize={20} fill="rgb(23 37 84)" />)}</span>
                </label>
            </div>
            <div className="flex my-3 max-w-[400px] justify-center ">
                <button className="px-10 py-3 bg-sky-50  text-lg font-semibold rounded-md hover:outline hover:outline-offset-1 hover:outline-sky-100 hover:bg-sky-1`00 transition-all duration-200">Sign up</button>
            </div>
            <div className="w-full mb-2 flex gap-2 items-center max-w-[400px]">
                <div className="w-full h-[1px] bg-slate-400"></div>
                <p className="text-sm text-slate-400">OR</p>
                <div  className="w-full h-[1px] bg-slate-400"></div>
            </div>
            <button className="py-2 text-white  hover:shadow hover:shadow-slate-300 border-2 max-w-[400px] font-semibold flex items-center justify-center gap-2"><span><FcGoogle/></span> Sign in with google</button>
        </form>
    )
}