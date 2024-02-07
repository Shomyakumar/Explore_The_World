

// import laugage from "../assets/travel-luggage_2028382.png"
import wave from '../assets/wave.png'
// import car from '../assets/travel.png'
// import travel from "../assets/destination.png"
import wavesm from "../assets/wave-haikei (2).svg"
import Button from './Button';
import './Hero.css'

export default function Hero({cardsRef}){

    
    const clickHandler = () => {
        // Scroll to the "cards-section" ref        
        cardsRef.current.scrollIntoView({behavior:'smooth'})
    };

    return(
        <div className="bg-[#101841]  ">
            <div className="  flex flex-col  md:flex-row max-w-[1200px] mx-auto py-4 px-8 sm:px-12 mt-[73px] min-h-[calc(100vh-70px)] " >
                <div className= "relative   max-w-[600px] ">

                    <div className=" flex flex-col gap-6 items-start ">
                        <p className="font-mono text-[3rem]   sm:text-[4rem] font-bold text-white shadow-text">Hey! Adventurer</p>
                        <p className="text-[1.5rem] sm:text-[2rem] font-semibold text-sky-300 ">Are you eager to discover the extraordinary beauty of 
                        attractive destinations in India that will simply take your breath away</p>
                        <p className="text-2xl font-semibold text-sky-400 italic ">Get ready to Explore with us</p>
                        <span onClick={clickHandler}><Button text="Get Started" x="8" y="4"></Button></span>
                    </div>        
                    
                              
                </div>
                <div className='hidden md:flex flex-1 plane-bg   bg-no-repeat bg-cover bg-center '>
                    <img src={wave} alt="wave" className=''/>
                </div>
                <div className="md:hidden visible plane-bg bg-no-repeat bg-cover bg-center ">
                    <img src={wavesm} alt="wave"/>
                </div>
            </div>
        </div>
    )
}