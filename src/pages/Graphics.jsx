import React, { useState } from 'react'
import CourseHeader from '../components/CourseHeader'
import Syllabus from '../components/Syllabus'
import PaymentCard from '../components/PaymentCard'
import CoursePaymentCard from '../components/CoursePaymentCard'

function Graphics({library, image1, image2, image3, duration, level,course, pack,price, description, whatToLearn, syllabus}) {
  const [showPayment, setShowPayment] = useState(false)
  return (
    <div className='md:relative min-h-screen mb-15'>
        <CourseHeader duration={duration} level={level} image2={image2} image3={image3} course={course} description={description}/>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-5 '>
            <div className='flex-[2]'>
               <Syllabus syllabus={syllabus} whatToLearn={whatToLearn} image1={image1}/>
            </div>
            <div className='flex-1 z-10 md:-mt-40 '>
                <div className="md:sticky md:top-25">
                  <PaymentCard image1={image1} library={library} price={price} setShowPayment={setShowPayment}/>
                </div>
            </div>
        </div>
        {
           showPayment && (
            
              <div className='fixed inset-0 top-0 h-full w-full z-[100] flex items-center justify-center'>
                  <div 
                  className="absolute inset-0 backdrop-blur-[5px] bg-black/30 backdrop-saturate-200 transition-opacity" 
                  onClick={() => setShowPayment(false)} 
                />
                  <div className="relative z-10 w-full isolate">
                      <CoursePaymentCard 
                        setShowPayment = {setShowPayment}
                        course = {course}
                        price ={price}
                
        />
                  </div>
              </div>
           )
        }
        
    </div>
  )
}

export default Graphics