
import about from "../assets/about1.png"
export default function Details(){
    return(
        <div className="bg-sky-100 pt-[60px]">
            <div className="max-w-[1200px] mx-auto flex-col lg:flex-row flex py-12 px-8 sm:px-12 items-center gap-4">
                <div className="flex flex-col gap-6 max-w-[700px]">
                    <h1 className="text-[4rem] font-semibold text-[rgba(9,9,121,1)] ">About Us</h1>
                    <p className="text-2xl font-semibold text-blue-900">Discover, Explore, and Experience the Wonders of the World with us.</p>
                    <p className="text-lg font-semibold text-sky-900">
                      Welcome to our travel community! We are passionate about exploring beautiful destinations within India and around the world. Our mission is to inspire and guide fellow adventurers to discover the extraordinary beauty that each location has to offer.
                    </p>

                    <p className="text-lg font-semibold text-sky-900">
                      Whether you are an avid traveler seeking new adventures or someone planning your first journey, we curate a collection of enchanting destinations and travel experiences that cater to every wanderlust soul.
                    </p>
                    <p className="text-lg font-semibold text-sky-900">
                      At Shomya Travels, we believe in the magic of travel, the joy of discovering new cultures, and the thrill of exploring stunning landscapes. Join us on this journey of wanderlust and let the exploration begin!
                    </p>
                    <p className="text-lg font-semibold text-sky-900">
                      Feel free to reach out to us for any travel-related information, tips, or suggestions. Happy travels!
                    </p>
                </div>
                <div className="p-2  " >
                  <img src={about} alt="about" className=" min-w-[300px]" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}