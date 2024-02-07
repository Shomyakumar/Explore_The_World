import LoginForm from "../components/LoginForm"
import "../components/Cards.css"
import loginimg from "../assets/login.png"


export default function Login(props){
    const setLoggedIn=props.setLoggedIn;
    return(
        <div className=" bg-sky-300 min-h-[100vh]">
            <div className=" pt-[140px] pb-[100px]   min-h-[100vh] ">
                <div className=" max-w-[1130px] w-11/12 mx-auto px-8 sm:px-12 py-4   flex-col flex md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-800 to-sky-400 rounded-xl " >
                    {/* left content */}
                    <div className=" flex-1 pt-4 sm:min-w-[400px]">
                        <p className=" text-4xl pb-4  sm:text-[3rem] leading-[3rem]   text-white login-text">Welcome back</p>
                        <p className=" text-xl text-white login-text ">Login with Email</p>
                        <LoginForm setLoggedIn={setLoggedIn}/>
                    </div>
                    {/* right content */}
                    <div className=" max-w-[500px]">
                       <img className="w-full " src={loginimg} alt="login" loading="lazy"/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}