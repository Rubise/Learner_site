import React, { useState } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import {images} from '../assets/assets'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import {briefProduct} from '../assets/assets'


function Products() {

  return (
    <div className='mt-20 mb-22'>
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
        <div className='flex items-center justify-between gap-8 md:w-[95%] w-[88%] mx-auto my-0 mt-12 md:flex-row flex-col' >
          
            {
              briefProduct.map((product) => {
                  const Icon3 = product.image3; 
                  const Icon2 = product.image2;
                return(
                  <Link to={`/courses/${product.name}`} key={product.id} className='group border border-solid  border-[hsl(168,30%,95%)]  flex-1 rounded-2xl shadow-[0_4px_20px_-4px_rgba(41,46,51,0.08)] overflow-hidden pb-6 transition-all duration-300 hover:shadow-xl hover:translate-y-2 active-scale-105' >
                     <div className=' flex justify-center items-center md:h-70 h-50' style={{background: "linear-gradient(to bottom right, hsl(168 76% 36%/.2), hsl(168 76% 36%/.05))"}}>
                        <img src={product.image1} alt="" className='w-10 '/>
                     </div>
                     <div className='flex flex-col gap-3 pt-5 pl-5 pr-3'>
                        <div className='flex gap-3 text-[0.9rem]'>
                            <div className='flex gap-1 items-center justify-center text-[hsl(210,20%,45%)] font-medium '>
                              <Icon3 className='w-3 h-3 md:w-4 md:h-4' size={null}/>
                              <span className='text-[0.7rem] md:text-sm'>{product.duration}</span>
                            </div>
                            <div className='flex gap-1 items-center justify-center text-[hsl(210,20%,45%)] font-medium text-sm'>
                              <Icon2  className='w-3 h-3 md:w-4 md:h-4' size={null}/>
                              <span className='text-[0.7rem] md:text-sm'>{product.level}</span>
                            </div>
                        </div>
                        <div>
                          <h2 className='font-bold text-lg pb-3 course group-hover:text-[hsl(168,76%,30%)]'>{product.course}</h2>
                          <p className='text-[hsl(210,20%,45%)] font-medium text-sm'>{product.pack}</p>
                          <hr  className='mt-5 text-[hsl(210,20%,90%)] font-light' />
                          <p className='pt-2 text-[1.2rem] text-[hsl(168,76%,30%)] font-bold'>₦{product.price}</p>
                        </div>
                     </div>
                  </Link>
                )
              })
            }
        </div>
        
    </div>
  )
}

export default Products