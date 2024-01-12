import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png"
import { useState } from "react";
import { Twirl  } from 'hamburger-react'
export default function Navbar(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
      
    };
    

    return(
        <div className="bg-[#101841] ">
            <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-4 relative flex items-center justify-between">
                <div>
                    <img src={Logo} alt="logo" className="w-[140px]"></img>
                </div>
                <div className="hidden md:flex flex-1 justify-end" >
                    <ul className="flex items-center text-white font-semibold text-lg justify-between w-[55%] md:w-[40%] ">
                        <li className="hover:text-cyan-200 pb-2 border-b-2 border-transparent hover:border-cyan-200"><Link to="/">Home</Link></li>
                        <li className="hover:text-cyan-200 pb-2 border-b-2 border-transparent hover:border-cyan-200"><Link to="/about">About</Link></li>
                        <li className="hover:text-cyan-200 pb-2 border-b-2 border-transparent hover:border-cyan-200"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
        
                {/* hanburger button */}
                <div className="md:hidden z-10">
                   <button onClick={toggleMobileMenu}> <Twirl color={isMobileMenuOpen?" rgb(23 37 84)":"#FFFFFF"} /></button>
                 </div>
                {
                    isMobileMenuOpen&&(
                        <div className="md:hidden absolute top-0 -z-5 right-0 px-6 pt-[60px] py-4 bg-sky-50 rounded-lg">
                    
                            <ul className="flex flex-col text-cyan-600 font-semibold text-lg ">
                                <li><Link to="/" className="py-2 px-2">Home</Link></li>
                                <li><Link to="/about" className="py-2 px-2">About</Link></li>
                                <li><Link to="/contact" className="py-2 px-2">Contact</Link></li>
                            </ul>
                        </div>
                    )
                }
            
            </div> 
        </div>
    )
}