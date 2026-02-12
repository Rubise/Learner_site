import React from 'react'
import {CircleCheckBig, BookOpen } from 'lucide-react'

function Syllabus(props) {
  return (
    <>
        <div className='pt-5 w-[95%] mx-auto my-0'>
            <div className=''>
              <h2 className='text-[25px] font-bold mb-7'>What You'll Learn</h2>
              <ul className='md:grid grid-cols-2 flex flex-col gap-3'>
                  {
                   props.whatToLearn && props.whatToLearn.map((text, index)=>{
                      return(
                        <li key={index} className='flex items-start gap-3 md:text-[1rem] text-[0.95rem] text-[hsl(210,40%,14%)]'>
                              <CircleCheckBig className='text-[hsl(168,76%,36%)]'/>
                              <span>{text}</span>
                        </li>
                      )
                    })
                  }
              </ul>
            </div>
            <div>
              <h2 className='text-[25px] font-bold mb-5 mt-10'>
                  Course OutLine
              </h2>
              <ul className='flex gap-3 flex-col'>
                {
                  props.syllabus && props.syllabus.map((list, index)=>{
                    return(
                      <li key={index} className='flex items-center gap-3 px-4 py-5 border border-[hsl(210,20%,90%)] shadow-[0_2px_20px_rgba(41,46,51,0.12)] rounded-xl hover:bg-[hsl(210,20%,90%)]'>
                        <span className='bg-[hsl(168,30%,95%)] text-[hsl(168,76%,30%)] p-2.5 flex item-center justify-center font-bold rounded-xl'>{index >= 9 ? index + 1 : `0${index + 1}`}</span>
                        <BookOpen className='text-[hsl(168,76%,30%)]' size={15}/>
                        <span className='font-meduim text-lg text-[hsl(210,40%,14%)]'>{list}</span>
                      </li>
                  )})
                }
              </ul>
            </div>
        </div>
    </>
  )
}

export default Syllabus