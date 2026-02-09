import React from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import images from '../assets/assets'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import briefProduct from '../assets/assets'

function Products() {
  return (
    <div className='mt-20'>
        <div className='flex justify-between items-center md:w-[95%]  mx-auto my-0 md:flex-row flex-col w-[88%] gap-3'>
            <div className='flex flex-col gap-3'>
              <h3 className='md:text-4xl font-bold text-3xl'>Featured Courses</h3>
              <p className='text-lg text-[hsl(210,20%,45%)]'>Popular coureses to kickstart your learning journey</p>
            </div>
            <div className='mt-3 group border-2 border-solid border-[hsl(168,76%,30%)] rounded-xl px-6 py-3 flex items-center hover:bg-[hsl(168,76%,30%)] cursor-pointer' >
              <Link to="/courses" className='text-[hsl(168,76%,30%)] font-bold group-hover:text-white'>View All Courses</Link>
              <ArrowRight className='text-[hsl(168,76%,30%)] group-hover:text-white'/>
            </div>
        </div>
        <div>
          <Clock />₦
          <ChartNoAxesColumnIncreasing />

        </div>
    </div>
  )
}

export default Products