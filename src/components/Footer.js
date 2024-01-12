
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedIn.png"
import github from "../assets/github.png"
import { Link } from "react-router-dom";
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
                        <Link to="https://www.instagram.com/invites/contact/?i=1f6eifg9px192&utm_content=fkhuuwn">
                            <img   className="w-8" src={insta} alt="insta"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/shomya-kumar-9b06a7220" >
                            <img   className="w-8" src={linkedin} alt="linkedin"/>
                        </Link>
                        <Link to="https://github.com/Shomyakumar" >
                            <img   className="w-8 bg-white rounded-full p-[1px]" src={github} alt="github"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}