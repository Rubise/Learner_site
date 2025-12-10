import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../assets/assets'
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className='mt-[30px] pb-[85px]'>
        <div className="container mx-auto w-[90%]">
          <div className="flex md:gap-2.5 items-center justify-between mb-[65px] md:flex-row flex-col gap-[60px]">
            <div>
              <img src={Images.logo} alt="" className="w-10 h-10" />
            </div>
            <div id="" className='flex md:gap-[13px]  md:flex-row flex-col gap-[20px] items-center font-semibold' style={{fontFamily:"Inter"}}>
              <Link>All courses</Link>
              <Link>How it works</Link>
              <Link>Contact us</Link>
              <Link>Get started</Link>
              <Link>Support</Link>
            </div>
            <div className="flex gap-4 items-center">
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkedin />
              <Youtube />
            </div>
          </div>
          <hr className='w-[95%] mx-auto font-black mt-3 bg-[00050A]'/>
          <div className='md:flex justify-center items-center gap-6  pt-9 grid grid-col-2'>
            <p className='row-start-2 row-end-3 text-[13.4px] font-semibold' >&copy; 2025 LearningCanvas Platform. All rights reserved.</p>
            <ul className='flex items-center gap-6 md:flex-row flex-col font-semibold'>
                <li className='pb-1'><a href="#" className='underline'>Privacy Policy</a></li>
                <li className='underline'><a href="#">Terms of Service</a></li>
                <li className='underline'><a href="#">Cookies Setting</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer