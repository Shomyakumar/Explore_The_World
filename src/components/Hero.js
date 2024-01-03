

// import laugage from "../assets/travel-luggage_2028382.png"
import wave from '../assets/wave.png'
// import car from '../assets/travel.png'
// import travel from "../assets/destination.png"
import wavesm from "../assets/wave-haikei (2).svg"
import './Hero.css'

export default function Hero({cardsRef}){

    
    const clickHandler = () => {
        // Scroll to the "cards-section" ref        
        cardsRef.current.scrollIntoView({behavior:'smooth'})
    };

    return(
        <div className="bg-[#101841]  ">
            <div className="  flex flex-col  md:flex-row max-w-[1200px] mx-auto py-4 px-8 sm:px-12 min-h-[calc(100vh-74px)] " >
                <div className= "relative   max-w-[600px] ">

                    <div className=" flex flex-col gap-6 items-start ">
                        <p className="font-mono text-[3rem]   sm:text-[4rem] font-bold text-[#E3FDFD] shadow-text">Hey! Adventurer</p>
                        <p className="text-[1.5rem] sm:text-[2rem] font-semibold text-sky-300 ">Are you eager to discover the extraordinary beauty of 
                        attractive destinations in India that will simply take your breath away</p>
                        <p className="text-2xl font-semibold text-sky-400 italic ">Get ready to Explore with us</p>
                        <button onClick={clickHandler}
                            className='bg-white px-6 py-4 rounded-md text-sky-800 hover:bg-sky-200  shadow
                         hover:text-sky-900 transition-all duration-200 font-semibold text-xl my-4'>Get Started</button>
                    </div>        
                    {/* <img src={laugage} alt="laugage" className='absolute md:-right-10 md:top-20 right-0 top-[120px]  z-10 w-[80px] md:w-[120px] sm:inline hidden '/>  */}
                    {/* <img src={car} alt="car" className='absolute right-20 bottom-[45px] z-10 sm:w-[120px] w-[80px]'/>  */}
                    {/* <img src={travel} alt="car" className='absolute right-2 bottom-[90px] z-10 sm:w-[80px] w-[60px] '/>  */}
                              
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