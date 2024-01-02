import "./Card.css"

export default function Card(props){
    let image=props.data.image;
    let name=props.data.name;
    let info=props.data.info;
    console.log(name);
    return(
        <div className="flex">
            <div className=" relative max-w-[350px] bg-blue-950 p- items-stretch rounded-md flex-1  flex-col
             text-white bg-gradient-to-r from-blue-950 to-sky-800 outline-sky-500 outline-offset-4 outline-double">
                <div>
                    <img src={image} alt={name} className="object-cover aspect-square rounded-lg"/>
                </div>
                <div className="py-6 px-4  flex flex-col pb-[4rem]">
                    <p className="text-white font-mono text-2xl font-semibold name">{name}</p>
                    <p className="text-sky-200  my-4">{info}</p>

                    <button className="px-10 py-3 text-blue-90 bg-sky-100 text-blue-950 
                    font-semibold rounded-md absolute bottom-4 hover:bg-sky-200">Explore</button>
                </div>
            </div>
            
        </div>
    )
}