import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

export const Navbar = () => {
    const[sideNav, setSideNav] = useState(false)
    const handleNav = () => {
        setSideNav(!sideNav);
        //change css overflow property
        !sideNav ? document.body.style.overflow = 'hidden' : document.body.overflow = 'scroll'
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className="absolute w-full flex flex-col text-left p-4">
        <h1 className="text-white font-bold text-2xl z-20 md:z-30 md:text-center md:mb-4">Experiences</h1>
        <HiMenu onClick={handleNav} className="hamburger"/>
        <div className={isMobile ? (sideNav ? "mobileEaseIn" : "mobileEaseOut") : "desktop"}>
            <ul className={isMobile ? "mobile" : "desktop"}>
                <li className={isMobile? "mobileNavItems" : "desktopNavItems"}>Home</li>
                <li className={isMobile? "mobileNavItems" : "desktopNavItems"}>Destinations</li>
                <li className={isMobile? "mobileNavItems" : "desktopNavItems"}>Reservations</li>
                <li className={isMobile? "mobileNavItems" : "desktopNavItems"}>Amenities</li>
                <li className={isMobile? "mobileNavItems" : "desktopNavItems"}>Rooms</li>
            </ul>
        </div>
    </div>
  )
}