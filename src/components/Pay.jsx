import React from 'react'
import { makePayment } from '../assets/assets'

function Pay() {
  return (
    <div className='md:w-[75%] w-[95%] mx-auto my-auto pl-6 pr-6 mb-14'>
        <div className='md:grid md:grid-cols-3 flex flex-col gap-8  mt-10.5 items-center '>{
                        makePayment.map((pay) =>{
                            const Icon = pay.icon
                            return(
                            <div key={pay.id} className='flex flex-col items-center flex-1 shadow-[0_4px_30px_rgba(41,46,51,0.12)] p-5 rounded-2xl relative'>
                                <h6 className='text-[1rem] bg-[hsl(168,76%,30%)] text-[hsl(0,0%,100%)] rounded-2xl px-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-1'>{pay.step}</h6>
                                <div className='flex items-center flex-col'>
                                    <Icon className='text-[hsl(168,76%,30%)] font-bold mb-5 mt-5 bg-[hsl(168,30%,95%)] p-3.5 w-15 h-15 rounded-3xl'/>
                                    <h4 className='text-[1.1rem] font-bold mt-1.5'>{pay.action}</h4>
                                    <p className='text-center mt-2.5 text-[hsl(210,20%,45%)] text-[0.9rem]'>{pay.action1}</p></div>
                            </div>
                        )})
                        
                        }</div>
    </div>
  )
}

export default Pay