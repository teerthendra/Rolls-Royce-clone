import React from 'react'

import { useBoolean } from '@chakra-ui/react';

import { FaBars, FaSearch } from "react-icons/fa";
import Blurmenu from "./Blurmenu";
function StickyNav() {
  const [flag, setFlag] = useBoolean();

  return (
    <>
    {flag ? <Blurmenu setFlag={setFlag}></Blurmenu> : null}
      <div className=''>
    <div className="fixed backdrop-blur-md w-screen  z-10">
          <div className="text-white flex justify-between  p-1 items-center text-xl mr-11 ml-11 ">
            <button className=" flex items-center text-lg">
              <FaBars onClick={setFlag.on} size={25} />
              <div className="  w-[80px] tracking-wide">MENU</div>
            </button>
            <div className="h-[100px] w-[100px]">
              <img
                src="https://imgs.search.brave.com/eWufM9hAI7q55HL009cx7D5fIdLxLdV-BrMhc6U72gA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92ZWhs/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMy9S/b2xscy1Sb3ljZV9S/Ul9sb2dvLnBuZw"
                alt=""
              />
            </div>
            <button className="flex items-center text-lg">
              <FaSearch size={25} />
              <div className="w-[100px] tracking-wide">DEALER</div>
            </button>
          </div>
          <div class=" ml-11 mr-12  border-2 border-white"></div>
        </div>
        </div>
        </>
  )
}

export default StickyNav