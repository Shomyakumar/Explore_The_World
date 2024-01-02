

import laugage from "../assets/travel-luggage_2028382.png"
import wave from '../assets/wave.png'
import car from '../assets/travel.png'
import travel from "../assets/destination.png"

import './Hero.css'

export default function Hero({cardsRef}){

    
    const clickHandler = () => {
        // Scroll to the "cards-section" ref        
        cardsRef.current.scrollIntoView({behavior:'smooth'})
    };

    return(
        <div className=" ">
            <div className="  flex flex-col  md:flex-row  bg-[#101841] " >
                <div className= "relative   max-w-[600px] px-6 sm:px-[4rem] py-[2rem] flex justify-start sm:min-h-[100vh]  ">
                    <div className=" flex flex-col gap-6 items-start sm:px-[2rem]">
                        <p className="font-mono text-[3rem]   sm:text-[4rem] font-bold text-[#E3FDFD] shadow-text">Hey! Adventurer</p>
                        <p className="text-[1.5rem] sm:text-[2rem] font-semibold text-sky-300 ">Are you eager to discover the extraordinary beauty of 
                        attractive destinations in India that will simply take your breath away</p>
                        <button onClick={clickHandler}
                            className='bg-white px-6 py-4 rounded-md text-sky-800 hover:bg-sky-200  shadow
                         hover:text-sky-900 transition-all duration-200 font-semibold text-xl my-4'>Get Started</button>
                    </div>        
                    <img src={laugage} alt="laugage" className='absolute md:-right-10 md:top-20 right-0 top-[120px]  z-10 w-[80px] md:w-[120px] sm:inline hidden '/> 
                    <img src={car} alt="car" className='absolute right-20 bottom-[45px] z-10 sm:w-[120px] w-[80px]'/> 
                    <img src={travel} alt="car" className='absolute right-2 bottom-[90px] z-10 sm:w-[80px] w-[60px] '/> 
                              
                </div>
                <div className='min-h-[100vh] flex-1 plane-bg  bg-no-repeat bg-cover bg-center'>
                    <img src={wave} alt="wave" className='md:h-[100%]   rotate-90 md:rotate-0 h-[100vw]'/>
                    
                </div>
                
            </div>
        </div>
    )
}