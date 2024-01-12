import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo2.png"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
export default function Navbar(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
      
    };
    const navigate=useNavigate();
    function clickHandler(path){
        toggleMobileMenu();
        navigate(path);
        console.log("clicked",path);

    }

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
                <div className="md:hidden ">
                    {
                        !isMobileMenuOpen&&
                        <button onClick={toggleMobileMenu}><RxHamburgerMenu className="text-white text-2xl" /> </button>
                    } 
                 </div>
                {
                    isMobileMenuOpen&&(
                        <div className="md:hidden  flex flex-col items-end ">
                            <button onClick={toggleMobileMenu} className="text-white text-xl w-full flex justify-end" ><AiOutlineClose /></button>
                            <div className="flex flex-col">
                                <button onClick={()=>{clickHandler("/")}} className="text-white text-lg  font-semibold">
                                    Home
                                </button>
                                <button onClick={()=>{clickHandler("/about")}} className="text-white text-lg font-semibold" >
                                    About
                                </button>
                                <button onClick={()=>{clickHandler("/contact")}} className="text-white text-lg font-semibold" >
                                    Contact
                                </button>
                            </div>
                        </div>
                    )
                }
            
            </div> 
        </div>
    )
}