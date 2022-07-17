import React, {useState} from "react";
import { MenuIcon, XIcon, CashIcon } from "@heroicons/react/outline"


const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const handleClick = () => setToggler(!toggler);
  
  return (
    <div>
      <nav className="w-screen h-[60px] z-10 bg-sky-50 drop-shadow fixed ">
       <div className="px-3 flex justify-between item-center w-full h-full">
        <div className="flex sm:ml-0 md:ml-10 ">
        <CashIcon className="ml-3 w-7"/>
        <h1 className="text-3xl font-bold  pt-3  sm:text-4xl md:pt-2">iBinace</h1>
        </div>
        
        <ul className="hidden md:flex font-sans ml-[20rem] hover:cursor-pointer ">
          <li className="navLi">About</li>
          <li className="navLi">About</li>
          <li className="navLi">About</li>
          <li className="navLi">About</li>
        </ul>
          <div className="hidden md:flex mr-6 gap-2">
            <button className="px-7 bg-transparent text-purple-500 hover:border-purple-700 ">Sign In</button>
            <button className="px-7 ">Register</button>
          </div>
          <div className="md:hidden pt-4" onClick={handleClick}>
            {!toggler ? <MenuIcon className="w-5" />:<XIcon className="w-5" />}
          </div>
        </div>
        <ul className={!toggler ? "hidden":"md:hidden font-sans absolute hover:cursor-pointer bg-sky-50 w-full px-5 "}>
          <li className=" navLi  border-b-2 border-zinc-300 w-full">About</li>
          <li className=" navLi border-b-2 border-zinc-300 w-full">About</li>
          <li className=" navLi border-b-2 border-zinc-300 w-full">About</li>
          <li className=" navLi border-b-2 border-zinc-300 w-full">About</li> 
          <div className="flex flex-col">
            <button className="bg-transparent text-purple-500 hover:border-purple-700 ">Sign In </button>
            <button className="px-8 py-3">Register</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}



export default Navbar;