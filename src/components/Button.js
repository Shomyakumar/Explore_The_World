

export default function Button(props){
    let text=props.text;
    let x=+props.x;
    let y=+props.y;
    return(
        <button  className={`rounded px-${x} py-${y} overflow-hidden group bg-sky-100 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-800 hover:text-white text-blue-950 transition-all ease-out duration-300`}>
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative  text-lg font-semibold">{text}</span>
</button>
    )
}