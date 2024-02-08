import toursDetail from '../data/toursDetail';
import { useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import toast from 'react-hot-toast';

export default function TourDetail(){

    let { id } = useParams();  
    id = +id; // Convert id to integer

    // Find the tour with the specified id
    let tour = toursDetail.find(tour => tour.id === id);
    
    return(
        <div className="bg-sky-100 ">
            <div className="pt-[140px] pb-[70px] ">
                <div className="max-w-[1130px] w-11/12 mx-auto px-8 sm:px-12 flex-col flex lg:flex-row items-center justify-between  lg:gap-12 bg-blue-950 rounded-xl">
                    {/* left content */}
                    <div className="max-w-[500px] pt-8 lg:pt-0">
                       <img className="w-full max-h-[600px] rounded-md outline outline-offset-1 outline-sky-200" src={tour.image} alt={tour.name} loading="lazy"/>
                    </div>
                    {/* right content */}
                    <div className="flex-1 py-10 ">
                        <p className="text-4xl pb-4 sm:text-[3rem] leading-[3rem] text-[#ffc738] ">{tour.name}</p>
                        <p className="text-xl text-[#d3effd] ">{tour.description}</p>
                        
                        <div className="mt-4">
                            <p className="text-[#FFCD4B] font-semibold text-lg mb-2">Includes:</p>
                            <ul className=" text-white">
                                {tour.includes.map((item, index) => (
                                    <li key={index} className='flex items-center gap-1'><span><FaCheck className='text-teal-300' /></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Display highlights */}
                        <div className="my-4 ">
                            <p className="text-[#FFCD4B] text-lg font-semibold mb-2">Highlights:</p>
                            <ul className="list-disc list-inside ">
                                {tour.highlights.map((item, index) => (
                                    <li key={index} className='text-white'>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* You can display more tour details here */}
                        <p className="text-[#FFCD4B]  text-xl ">Price: ₹{tour.price} /Person</p>
                        <p className="text-white text-xl ">Duration: {tour.duration}</p>
                        <p className="text-white  text-xl ">Departure Location: {tour.departureLocation}</p>

                        <button onClick={()=>{
                            
                            toast.success("Working on this")}}
                        className='px-10 sm:px-14 py-4 my-4 bg-[#ffc738] rounded-md text-lg font-semibold text-white hover:bg-yellow-500'>Book</button>
                        {/* You can add more details as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}
