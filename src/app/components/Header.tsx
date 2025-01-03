"use client"
import { useState } from "react";
import { userInfo,headerItems } from "../constants/constant";
import { NavItems } from "../models/header";
import { GiHamburgerMenu } from "react-icons/gi";


const Header:React.FunctionComponent =()=>{
    const[navItem,showNavItems]=useState<boolean>(false);
    return(
        <header className="bg-7E99A3 z-10 p-6 text-white justify-between fixed top-0 md:flex w-full">
            <div className="flex justify-between"><h2 className="text-1xl text-black font-bold">{userInfo.name}</h2>
            <GiHamburgerMenu size={30} className="md:hidden" 
           onClick={()=>showNavItems(prevState=>!prevState)}
           />

            </div>
            <div className={`mr-8 md:space-x-6 mt-3  md:mt-0 md:block ${navItem ?'block':'hidden'}`}>
                {
                    Object.keys(headerItems).map(item=>(
                        <a key={headerItems[item as keyof NavItems].label} className="block md:inline-block cursor-pointer"
                        >{headerItems[item as keyof NavItems].label}</a>
                    ))
                }
            </div>
        </header>
    )
}
export default Header