import React from 'react'
import {images} from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

function Cta() {
  return (
    <div className='flex flex-col items-center justify-between py-20 md:w-[90%] w-[88%] mx-auto my-0' >
        <div className='flex bg-[hsl(168,30%,95%)] rounded-full mb-5 py-2 px-4 gap-2 items-center justify-between'>
            <img src={images.spark} alt="" />
            <span className='text-[hsl(168,76%,30%)] font-medium text-[0.875rem]'>Start learning today</span>
        </div>
        <div >
            <h1 className='flex items-center flex-col font-extrabold md:text-6xl text-[hsl(210,40%,14%)] py-2 text-4xl text-center'>Learn Skills That <span> <span className='text-[hsl(168,76%,30%)]'>Transform</span> Your Career</span></h1>
        </div>
        <div>
            <p className='flex flex-col items-center mt-6 text-lg md:text-xl text-[hsl(210,20%,45%)] text-center w-[97%] mx-auto my-0'>Practical, affordable courses designed to help you succeed in the digital world. Learn at your own pace with expert-led content.</p>
        </div>
        <div>
            <Link to="/courses" className='bg-[hsl(15,90%,60%)] px-10  py-4 rounded-xl text-xl flex items-center gap-2 mt-10 font-bold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:translate-y-1 active-scale-95'>
                <span className='text-white'>View Courses</span>
                <ArrowRight size={18} className='text-white'/>
            </Link>
        </div>
        <div className='flex md:flex-nowrap flex-wrap md:gap-7 mt-12 md:text-[1rem] text-[0.85rem] gap-5 justify-center'>
            <h5 className='flex gap-2'>
                <Check  className='text-[#12876f] rounded-full bg-[hsl(168,30%,95%)] p-1'/>
                <span className='text-[#5c738a]'>Lifetime access</span>
            </h5>
            <h5 className='flex gap-2'>
                <Check  className='text-[#12876f] rounded-full bg-[hsl(168,30%,95%)] p-1'/>
                <span className='text-[#5c738a]'>Certificate included</span>
            </h5>
            <h5 className='flex gap-2'>
                <Check  className='text-[#12876f] rounded-full bg-[hsl(168,30%,95%)] p-1'/>
                <span className='text-[#5c738a]'>Money-back guarantee</span>
            </h5>
        </div>
    </div>
  )
}

export default Cta