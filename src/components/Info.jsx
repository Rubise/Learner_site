import React from 'react'
import { makePayment } from '../assets/assets'

function Info() {
    
  return (
    <div className='bg-[hsl(210,33%,99%)] pt-5'>
    <div className='pb-20 border-b border-[hsl(210,20%,90%)] md:w-[95%] my-0 mx-auto w-[88%] mt-30'>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-4xl font-extrabold pb-5 text-[hsl(210,40%,14%)]' >How It Works</h2>
            <p className='pb-6 md:text-xl font-meduim text-[hsl(210,20%,45%)] text-center text-[1.05rem]'>Getting started is simple. Follow these three easy steps</p>
            <div className='flex gap-8 md:flex-row flex-col mt-10.5'>{
                makePayment.map((pay) =>{
                    const Icon = pay.icon
                    return(
                    <div key={pay.id} className='flex flex-col items-center flex-1 shadow-[0_4px_20px_rgba(41,46,51,0.08)] p-8 rounded-2xl relative'>
                        <h6 className='text-xl bg-[hsl(168,76%,30%)] text-[hsl(0,0%,100%)] rounded-4xl px-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>{pay.step}</h6>
                        <div className='flex items-center flex-col'>
                            <Icon className='text-[hsl(168,76%,30%)] font-bold mb-5 bg-[hsl(168,30%,95%)] p-3.5 w-15 h-15 rounded-3xl'/>
                            <h4 className='text-xl font-bold mt-2'>{pay.action}</h4>
                            <p className='text-center mt-2.5 text-[hsl(210,20%,45%)]'>{pay.action1}</p></div>
                    </div>
                )})
                
                }</div>
        </div>
    </div>
    </div>
  )
}

export default Info