import React from 'react'
import { Link} from 'react-router-dom'
import { Images } from '../assets/assets'

function Header() {
  return (
    <>
        <div className='bg-[#f2f2f2] md:pt-10 md:px-10 pt-5 mb-9 pb-[60px]' >
           <div className='md:grid md:grid-cols-2 md:grid-rows-2 pl-10 flex flex-col mb-10' >
                <div className='col-start-1 col-end-2'>
                    <h1 className='md:text-5xl font-semibold text-[00050A] md:mb-0 text-4xl mb-7' style={{fontFamily: "sora"}}>Learn what <br />matters most</h1>
                </div>
                <div className='row-start-2 col-end-3'>
                    <p style={{fontFamily:"inter"}} className='text-[00050A] md:text-xl md:pr-0 text-[18.3px] pr-[3px]'>Master new skills at your own pace with courses designed for real growth. Start learning today and unlock your potential.</p>
                    <div className='flex my-8 gap-2 '>
                        <Link to="/explore" className='bg-[#CCE0F4] text-[#00050A] rounded-md px-6 py-1.5 border-[1.5px] border-solid border-black hover:bg-gray-800 transition duration-150'>Explore</Link>
                        <Link to="/learn" className='rounded-md px-6 py-1.5 border-black border-solid border-[1.5px] flex items-center space-x-2 hover:bg-gray-100 transition duration-150'>Learn</Link>
                    </div>
                </div>
            </div>
            <img src={Images.headerbg} alt="" className='rounded-xl w-[93%] mx-[auto] md:h-auto h-[170px]'/> 
        </div>
    </>
  )
}

export default Header