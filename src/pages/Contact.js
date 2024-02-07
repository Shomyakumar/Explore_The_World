

import toast from 'react-hot-toast'
import React from 'react'
import contact from "../assets/contact.png"
import { useState } from 'react'

function Contact() {

    const[formData,setFormData]=useState({Name:"",email:"",contact:"",query:""})
    function changeHandler(event){
        const {name,value}=event.target;
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(formData);
        toast.success("Submitted Successfully")
        setFormData({Name:"",email:"",contact:"",query:""});
    }
    return (
        <div className=' bg-gradient-to-r from-blue-900 to-sky-600 pt-[60px]'>
            <div className='flex-col items-center md:flex-row flex justify-between  max-w-[1200px] mx-auto px-8 sm:px-12 py-16'>
                <div className='flex flex-col flex-1 '>
                    <div className='flex flex-col items-start '>
                        <p className='text-white text-[3rem] sm:text-[4rem] font-semibold'>Contact Us</p>
                        <p className='text-lg font-semibold text-sky-100'>You could mail me at</p>
                        <p className='italic text-sky-400'>kumarshomya1@gmail.com</p>
                    </div>
                    <div className='my-4'>
                        <p className='text-2xl text-sky-100 font-semibold mb-4'>Ask your query</p>
                        <form onSubmit={submitHandler} className='flex gap-3 flex-col items-start'>
                           <label className='flex flex-col  w-full max-w-[400px]'>
                            <p className='text-sky-400 italic font-semibold'>
                                Name <sup className='text-red-500 text-[0.5rem]'>*</sup>
                            </p>
                                <input type="text" name="Name" onChange={changeHandler} value={formData.Name}
                                    required placeholder='Enter name'
                                    className='px-2 py-1 rounded py- w-full text-blue-950 text-lg font-semibold 
                                    focus:outline-offset-1 focus:outline focus:outline-sky-400'
                                />
                           </label> 
                           <label className='flex flex-col  w-full max-w-[400px]'><p className='text-sky-400 italic font-semibold'>
                            Email <sup className='text-red-500 text-[0.5rem]'>*</sup></p>
                                <input type="email" name="email" onChange={changeHandler} value={formData.email}
                                    required placeholder='Enter email address'
                                    className='px-2 py-1 rounded py- w-full text-blue-950 text-lg font-semibold 
                                    focus:outline-offset-1 focus:outline focus:outline-sky-400'
                                />
                           </label> 
                           <label className='flex flex-col  w-full max-w-[400px]'><p className='text-sky-400 italic font-semibold'>
                            Contact <sup className='text-red-500 text-[0.5rem]'>*</sup></p>
                                <input type="number" name="contact" onChange={changeHandler} value={formData.contact}
                                    required placeholder='Enter contact no'
                                    className='px-2 py-1 rounded py- w-full text-blue-950 text-lg font-semibold 
                                    focus:outline-offset-1 focus:outline focus:outline-sky-400'
                                />
                           </label> 
                           <div className='w-full max-w-[400px]'>
                                <p className='text-sky-400 italic font-semibold'>Your Query <sup className='text-red-500 text-[0.5rem]'>*</sup></p>
                                <textarea placeholder='Enter your query' name="query" onChange={changeHandler} value={formData.query}
                                className='w-full px-2 py-1 rounded text-blue-950 text-lg font-semibold focus:outline-offset-1 focus:outline focus:outline-sky-400 '>

                                </textarea>
                           </div>
                          
                           <button type="submit" className='px-10 py-3 my-3 rounded-md text-blue-950 bg-white font-semibold hover:bg-sky-100'>
                            Submit</button> 
                        </form>
                    </div>
                </div>
                <div className=' max-w-[600px]'>
                    <img src={contact} alt="contact" className=' md:w-[300px] lg:w-[400px] xl:w-[600px] object-contain' loading='lazy'/>
                </div>
            </div>
        
        </div>
    )
}

export default Contact