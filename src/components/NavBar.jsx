import React from 'react'
import { Link } from 'react-router-dom';
import images from '../assets/assets';

function NavBar() {
  return (
    <div className='border-b border-solid border-[hsl(210,20%,90%)] hover:border-[#e5e7eb] sticky  top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50' >
        <nav className='flex justify-between items-center  m-auto md:w-[95%] w-[88%]' style={{paddingBottom:"15px", paddingTop:"15px"}}>
            <div className='flex gap-2'>
                <img src={images.book} alt="logo" style={{width:"35px"}} className='rounded-full p-2 bg-[#12876f]'/>
                <span className='text-[hsl(210,40%,14%)] font-bold text-[1.25rem]'>LearnHub</span>
            </div>
            <div className='flex justify-between  md:gap-6 font-bold gap-4'>
                <Link to="/courses" className='text-[hsl(210,20%,45%)] font-meduim text-[0.9rem] md:text-[1rem] '>Courses</Link>
                <Link to="/Payment" className='text-[hsl(210,20%,45%)] font-meduim text-[0.9rem] md:text-[1rem]'>How to Pay</Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
