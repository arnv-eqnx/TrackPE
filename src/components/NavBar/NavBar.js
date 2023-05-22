import Image from "next/image";
import logo from '../../assets/Logo.png';

import './NavBar.css';

const NavBar = () =>{
    return (
        <div className="nav flex justify-between items-center w-full font-semibold lg:min-h-[10vh] relative lg:top-[5vh]">
            <div className="background-gradient flex items-center justify-center cursor-pointer pr-6 h-[10vh]">
                <Image src={logo} className="h-[80px] w-[80px]" />
                <p className="lg:text-2xl">TrackPE</p>
            </div>
            <div className="flex items-center justify-center gap-12 text-xl font-normal">
                <p className="cursor-pointer">Signup</p>
                <p className="background-gradient flex items-center justify-center cursor-pointer px-6 h-[7vh]">Login</p>
            </div>
        </div>
    )
}

export default NavBar;