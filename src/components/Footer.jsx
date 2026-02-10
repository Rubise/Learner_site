import React from 'react'
import {images} from '../assets/assets'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
function Footer() {
  return (
    <footer className='flex  pb-20 flex-col border-t pt-8 border-[hsl(210,20%,90%)] bg-[hsl(210,33%,98%)]'>
        <div className='md:w-[80%]'>
        <div className='flex md:items-center  mb-10 md:flex-row flex-col gap-6 md:w-[95%] w-[88%] my-0 mx-auto' style={{justifyContent: "space-between"}}>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <img src={images.book} alt="logo" style={{width:"35px"}} className='rounded-full p-2 bg-[#12876f]'/>
                    <span className='text-[hsl(210,40%,14%)] font-bold text-[1.25rem]'>LearnHub</span>
                </div>
                <p className='md:text-black text-[hsl(210,20%,45%)] md:text-[1rem] text-sm'>Empowering learners with practial skills for the digital world.</p>
            </div>
            <div className='flex flex-col gap-3 text-[0.9rem] pr-32.5'>
                <h3 className='font-bold'>Quick Links</h3>
                <Link to="/courses" className='text-[hsl(210,20%,45%)] '>Courses</Link>
                <Link to="/payment" className='text-[hsl(210,20%,45%)]'>How to pay</Link>
            </div>
            <div className='flex flex-col justify-center gap-3 text-[0.9rem] md:ml-18.75 md:pl-5'>
                <h3 className='font-bold'>Contact Us</h3>
                <div className='flex gap-2 items-center'><Mail className='text-[hsl(168,76%,30%)]' size={15}/> <span className='text-[hsl(210,20%,45%)]'>hello@learnhub.com</span></div>
                <div className='flex gap-2 items-center'><Phone className='text-[hsl(168,76%,30%)]' size={15}/> <span className='text-[hsl(210,20%,45%)]'>+234 801 234 5678</span></div>
                <div className='flex gap-2 items-center'><MapPin className='text-[hsl(168,76%,30%)]' size={15}/> <span className='text-[hsl(210,20%,45%)]'>Lagos, Nigeria</span></div>
            </div>
        </div>
        <hr className='text-[hsl(210,20%,90%)] font-light'/>
        <div className='text-center text-[hsl(210,20%,45%)] font-light text-sm mt-9'>
            &copy; 2026 LearnHub. All rights reserved
        </div>
        </div>
    </footer>
  )
}

export default Footer