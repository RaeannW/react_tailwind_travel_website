import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        //change css overflow property
        !nav ? document.body.style.overflow = 'hidden' : document.body.overflow = 'scroll'
    };

  return (
    <div className="absolute w-full flex flex-col text-left p-4">
        <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
        <HiMenu onClick={handleNav} className="z-20 text-white cursor-pointer"/>
        <div className={
            nav ? 
            "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10" 
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10" }>
            <ul className="flex flex-col fixed w-full h-full items-center justify-center ">
                <li className="navItems">Home</li>
                <li className="navItems">Destinations</li>
                <li className="navItems">Reservations</li>
                <li className="navItems">Amenities</li>
                <li className="navItems">Rooms</li>

            </ul>
        </div>
    </div>
  )
}