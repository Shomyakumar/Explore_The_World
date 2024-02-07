import { forwardRef } from "react";

import { useState} from "react";
import Card from "./Card";
import "./Cards.css"


const Cards=forwardRef((props, refr) => {

    const toursdata=props.toursdata;
    const [location,setLocation]=useState("India");
    // const cardsData=toursdata[location];

    const [cardsData,setCardsData]=useState(toursdata.India);

    function clickHandler(location){
        setLocation(location);
        setCardsData(toursdata[location]);
    }
    function removeCard(id){
        setCardsData(cardsData.filter(data=>data.id!==id))
    }
    return(
        <div className="bg-sky-100">
            <div className="max-w-[1200px] mx-auto pt-[4rem] pb-12">
                <div className="flex flex-col items-center gap-6 px-8 sm:px-12">
                    <p className="text-[rgba(9,9,121,1)] text-[2.5rem] font-semibold style-text text-center hidden sm:block">Join us on a journey to discover stunning destinations in India and beyond.</p>
                    <p className="text-[rgba(9,9,121,1)] text-[2rem] font-semibold style-text text-center sm:hidden">Explore beautiful destinations in India and beyond.</p>
                    <div className="nav-bg h-1 w-[8rem] "></div>
                     <p className="text-2xl text-center font-semibold text-sky-700 hidden  ">Here, we present a curated collection of some of the most enchanting destinations,
                      inviting you to experience the world's wonders. </p>
                    <p className="text-lg  font-semibold text-[#040A44] text-center">These are the popular destinations in</p>
                </div>

                <div ref={refr} className="flex items-center justify-center sm:gap-6 gap-4 my-6">
                    <button onClick={()=>{clickHandler("India")}}
                        className={`px-8 sm:px-12 py-4 bg-[#040A54] rounded-lg 
                        ${location === "India" ? "outline outline-offset-4 outline-blue-950" : ""} 
                    hover:bg-[#040A69] text-white text-xl hover:shadow-md hover:shadow-blue-700 font-semibold`}>India
                    </button>
                    <button onClick={()=>{clickHandler("Foreign")}}
                        className={`px-8 sm:px-10 py-4 bg-[#040A54] rounded-lg 
                        ${location === "Foreign" ? "outline outline-offset-4 outline-blue-950" : ""} 
                    hover:bg-[#040A69] text-white text-xl hover:shadow-md hover:shadow-blue-700 font-semibold`}>Foreign
                    </button>
                    
                </div>
                <div  className="p-[2rem] flex flex-wrap justify-center items-stretch gap-8">
                {
                    cardsData.map((data)=><Card data={data} key={data.id} removeCard={removeCard}/>)
                }
                </div>
            </div>
        </div>
    )
})

export default  Cards;