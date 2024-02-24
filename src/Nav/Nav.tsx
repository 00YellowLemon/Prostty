

export default function Nav(){
    return(
        <div className="w-full px-6 py-4 flex fixed opacity-100 bg-white shadow-xl justify-between items-center">
            <div className="h-7">
                <img className="h-full w-auto rounded-md" src="Prostty.jpg" alt="" />
            </div>   
            <ul className="flex items-center gap-6">
                <li>
                    <a href="#proj"  className="capitalize text-sky-950 opacity-60 hover:opacity-95 font-medium text-md">projects</a>
                </li>
                <li>
                    <a href="#about me " className="capitalize text-sky-950 opacity-60 hover:opacity-95 font-medium text-md">about me</a>
                </li>
                <li>
                    <a href="#tech"  className="capitalize text-sky-950 opacity-60 hover:opacity-95 font-medium text-md">tools</a>
                </li>
            </ul> 
            <div className="px-5 py-2 rounded-md bg-orange-500">
                <a href="#hirem" className="font-semibold font-md text-white opacity-60 no-underline">Hire me</a>
            </div>        
        </div>
    )
}