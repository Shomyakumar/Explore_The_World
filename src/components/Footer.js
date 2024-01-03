
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedIn.png"

import Logo from "../assets/logo2.png"
export default function Footer(){
    return(
        <div className="bg-blue-900">
            <div className="max-w-[1200px] mx-auto  py-4 px-8 sm:px-12  sm:py-8   sm:flex-row sm:justify-between sm:items-center flex flex-col items-center gap-4   ">
                <div>
                    <img src={Logo} alt="logo" className="w-[140px] sm:w-[200px]"/>
                </div>
                <div>
                    <p className="text-white font-semibold text-lg italic hidden md:inline">-Keep Exploring & <br/> keep Enjoying</p>
                </div>
                <div className="text-center">
                    <p className="text-white">Copyright ©2024</p>
                    <p className="text-white font-semibold text-lg">Designed by shomya</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-semibold text-lg">Follow me on</p>
                    <div className="flex gap-4">
                        <button ><img   className="w-8" src={insta} alt="insta"/></button>
                        <button ><img   className="w-8" src={twitter} alt="twitter"/></button>
                        <button ><img   className="w-8" src={linkedin} alt="linkedIn"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}