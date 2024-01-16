import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo2.png"
import Button from "./Button";
import { useState,useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
export default function Navbar(props){
    const loggedIn=props.loggedIn;
    const setLoggedIn=props.setLoggedIn;
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
    function logoutHandler(){
        toast.success("Logged out successfully");
        setLoggedIn(false);
        console.log(loggedIn);
        navigate("/");
    }
        const [isScrolled, setIsScrolled] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollThreshold = window.innerHeight; // Adjust this value as needed

            // Check if the user has scrolled beyond the threshold
            setIsScrolled(scrollTop > scrollThreshold);
            };

            // Attach the scroll event listener
            window.addEventListener('scroll', handleScroll);

            // Cleanup the event listener when the component is unmounted
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return(
        <div className={`bg-[#101841] fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${isScrolled ? 'scale-y-0 pointer-events-none origin-top ' : 'scale-y-100 origin-top'} `}>
            <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-4 relative flex items-center justify-between">
                <div>
                    <img src={Logo} alt="logo" className="w-[140px]"></img>
                </div>
                <div className="hidden md:flex  gap-8 items-center" >
                    <div className="flex  " >
                        <ul className="flex gap-4 items-center text-white font-semibold text-lg justify-between w-[55%] md:w-[40%] ">
                            <li className="hover:text-cyan-200  border-b-2 border-transparent hover:border-cyan-200"><Link to="/">Home</Link></li>
                            <li className="hover:text-cyan-200  border-b-2 border-transparent hover:border-cyan-200"><Link to="/about">About</Link></li>
                            <li className="hover:text-cyan-200  border-b-2 border-transparent hover:border-cyan-200"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        {
                            !loggedIn&&
                            <Link to="/login"><Button text="Log in" x="4" y="2"/></Link>
                        }
                        {
                            !loggedIn&&
                            <Link to="/signup"><Button text="Sign up"  x="4" y="2"/></Link>
                        }
                        {
                            loggedIn&&
                            <div onClick={logoutHandler}>
                            <Button text="Log out"  x="4" y="2" />
                            </div>
                        }

                    </div>
                </div>
                
        
                {/* hanburger button */}
                <div className="md:hidden ">
                    {
                        !isMobileMenuOpen&&
                        <button onClick={toggleMobileMenu}><RxHamburgerMenu className="text-white text-2xl" /> </button>
                    } 
                 </div>
                {
                   
                    <div className={`md:hidden z-10 flex flex-col items-end fixed px-8 py-4 top-0 right-0 bg-[#444445b5] rounded-l-md transition-transform duration-300
                                    ${isMobileMenuOpen?"scale-x-100 origin-right":"scale-x-0 origin-right"}`}>
                        <button onClick={toggleMobileMenu} className="text-white text-2xl w-full flex justify-end" ><AiOutlineClose /></button>
                        <div className="flex flex-col items-start">
                            <button onClick={()=>{clickHandler("/")}} className="text-white text-lg  font-semibold">
                                Home
                            </button>
                            <button onClick={()=>{clickHandler("/about")}} className="text-white text-lg font-semibold" >
                                About
                            </button>
                            <button onClick={()=>{clickHandler("/contact")}} className="text-white text-lg font-semibold" >
                                Contact
                            </button>
                            {
                                !loggedIn &&
                                <button onClick={()=>{clickHandler("/login")}} className="text-white text-lg font-semibold" >
                                    Log in
                                </button>
                            }
                            {
                                !loggedIn &&
                                <button onClick={()=>{clickHandler("/signup")}} className="text-white text-lg font-semibold" >
                                    Sign up
                                </button>
                            }
                            {
                                loggedIn &&
                                <button onClick={logoutHandler} className="text-white text-lg font-semibold" >
                                    Log out
                                </button>
                            }
                        </div>
                    </div>                    
                }
            
            </div> 
        </div>
    )
}