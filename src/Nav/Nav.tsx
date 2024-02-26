import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Nav(){
    const [open,setOpen] = useState(false);

    function toggle(){
        setOpen(!open)
    }


    return(
        <div className="w-full px-6 py-4 flex relative opacity-100 bg-white shadow-xl justify-between items-center">
            <div className="h-7">
                <img className="h-full w-auto rounded-md" src="Prostty.jpg" alt="" />
            </div>   
            <ul className="sm:flex hidden items-center gap-6">
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
            <div className="px-5 hidden sm:block py-2 rounded-md bg-orange-500">
                <a href="#hirem" className="font-semibold font-md text-white opacity-60 no-underline">Hire me</a>
            </div>
            {!open && <div className="sm:hidden block">
                 <RxHamburgerMenu onClick={toggle}/>  
            </div>}   
            {open && <div className="p-6 absolute pt-8 top-3 gap-6 right-4 w-40 shadow-md rounded-lg bg-white">
                <div className="absolute top-4 right-4">
                     <GrClose onClick={toggle}/>
                </div>
                <ul className="flex text-left mb-6 flex-col items-center gap-6">
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
            </div>  }   
        </div>
    )
}