import React from 'react'
import { Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='bg-[#f2f2f2]'>
           <div className='grid grid-cols-2'>
                <div className=''>
                    <h1>Learn What Matters Most</h1>
                </div>
                <div className='flex flex-col'>
                    <p>Master new skills at your own pace with courses designed for real growth.start learning today and unlock your potential</p>
                    <div className='flex'>
                        <Link to="/explore">Explore</Link>
                        <Link to="/learn">Learn</Link>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}

export default Header