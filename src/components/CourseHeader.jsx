import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function CourseHeader(props) {
    const Icon = props.image3
    const IconChart = props.image2
  return (
    <div className='bg-[hsl(168,76%,36%)] py-25 '>
        <div className='md:w-[95%] mx-auto my-0 flex flex-col w-[88%]'>
            <Link className="group flex gap-2 items-center text-white/80 hover:text-white mb-7" to="/courses">
                <ArrowLeft className='group-hover:font-meduim' size={15}/>
                <span className='group-hover:font-meduim text-sm'>Back to Courses</span>
            </Link>
            <div className='flex flex-col text-white'>
                <div className='flex gap-3 text-white/80'>
                    <div className='flex items-center gap-1.5'>
                            <Icon size={15}/>
                            <span>{props.duration}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                            <IconChart size={15}/>
                            <span>{props.level}</span>
                    </div>
                </div>
                <div>
                    <h1 className='md:text-5xl text-[33px] font-bold my-4' style={{lineHeight:1.2}}>{props.course}</h1>
                </div>
                <p className='text-lg font-meduim text-white/90 md:max-w-[60%]' style={{lineHeight:1.8}}>{props.description}</p>
                
            </div>
        </div>
    </div>
  )
}

export default CourseHeader