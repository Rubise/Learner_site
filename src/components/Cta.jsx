import React from 'react'
import { Link } from "react-router-dom"

function Cta() {
  return (
    <>
        <div className='flex flex-col items-center justify-center gap-[3px] my-[75px]'>
            <h2 className='md:text-[68px] text-center leading-[1] text-5xl' style={{fontWeight: 600}}><span style={{fontFamily: "Sora"}}>Ready to start <br />learning</span>?</h2>
            <h2 className='md:text-[68px] text-center leading-[1] text-5xl' style={{fontWeight: 600, fontFamily: "Sora"}}>Begin today</h2>
            <p className='text-xl text-center mt-2'>Choose your course, complete your payment, and gain access to begin</p>
            <div className='flex my-6 gap-2 '>
                <Link to="/explore" className='bg-[#CCE0F4] text-[#00050A] rounded-md px-6 py-1.5 border-[1.5px] border-solid border-black'>Explore</Link>
                <Link to="/learn" className='rounded-md px-6 py-1.5 border-black border-solid border-[1.5px] flex items-center space-x-2 hover:bg-gray-100 transition duration-150'>Learn</Link>
            </div>
        </div>
    </>
  )
}

export default Cta