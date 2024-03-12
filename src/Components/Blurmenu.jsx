import React from 'react'
import { FaTimes } from 'react-icons/fa'
function Blurmenu({setFlag}) {
  return (
    <>
    <div className='absolute inset-0 z-50 slide-right '>
    <div className='  backdrop-blur-md h-screen w-screen '>
    <div className="text-white p-8 ">
          <button className="mt-[40px] ml-[50px]" >
            <FaTimes onClick={setFlag.off} size={25}/>
            </button>
            <div className='flex justify-end '>
            <div className="pt-[150px] mr-10">
              <div className='tracking-widest text-lg text-white/90 mb-9 uppercase'>inspiring greatness</div>
              <div className='tracking-widest text-lg text-white/90 mb-9 uppercase'>inspiring greatness</div>
              <div className='tracking-widest text-lg text-white/90 mb-9 uppercase'>inspiring greatness</div>
              <div className='tracking-widest text-lg text-white/90 mb-9 uppercase'>inspiring greatness</div>
              <div className='tracking-widest text-lg text-white/90 mb-9 uppercase'>inspiring greatness</div>
              
            </div>
            </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Blurmenu