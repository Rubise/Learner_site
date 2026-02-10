import React from 'react'
import { allCourse } from '../assets/assets'
import { Link } from 'react-router-dom';
function CourseList() {
  return (
    <div className='md:w-[95%] w-[88%] mx-auto my-0 mt-15 mb-5 pb-15 '>
        <div className='flex items-center justify-center flex-col gap-2'>
            <h1 className='text-5xl font-bold mb-2'>All Courses</h1>
            <p className='mb-5 pb-5 text-[1.2rem] text-[hsl(210,20%,45%)]'>Choose from our collection of practical, skill-building courses</p>
        </div>
        <div className='md:grid grid-cols-3 gap-8 flex flex-col' >
          
            {
              allCourse.map((product) => {
                  const Icon3 = product.image3; 
                  const Icon2 = product.image2;
                return(
                  <Link to={`/courses/${product.name}`} key={product.id} className='group border border-solid  border-[hsl(168,30%,95%)]  rounded-2xl shadow-[0_4px_20px_-4px_rgba(41,46,51,0.08)] overflow-hidden pb-6 transition-all duration-300 hover:shadow-xl hover:translate-y-2 active-scale-105' >
                     <div className=' flex justify-center items-center md:h-60 h-50' style={{background: "linear-gradient(to bottom right, hsl(168 76% 36%/.2), hsl(168 76% 36%/.05))"}}>
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

export default CourseList