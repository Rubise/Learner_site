import React from 'react'
import { accessConditions } from '../assets/assets'
import { CircleCheckBig } from 'lucide-react'

function PaymentCard(props) {
  const  handleClick = () =>{
    props.setShowPayment(true)
  }
  return (
    <div className='md:w-100 border border-[hsl(210,20%,90%)] md:p-10  p-7 rounded-3xl bg-white shadow-[0_4px_30px_rgba(41,46,51,0.12)]'>
        <div className='flex flex-col items-stretch '>
            <div className='md:h-50 h-40 w-full flex justify-center items-center rounded-2xl' style={{background: "linear-gradient(to bottom right, hsl(168 76% 36%/.2), hsl(168 76% 36%/.05))"}}>
               <img src={props.image1} alt="" className='w-10 h-5'/>
            </div>
            <div className='flex flex-col items-center mt-4'>
              <h4 className='text-4xl font-extrabold mb-3'>₦{props.price}</h4>
              <p className='text-[hsl(210,20%,45%)]'>One-time payment • Lifetime access</p>
            </div>
            <button className='px-10 py-4 bg-[hsl(15,90%,60%)] rounded-2xl my-5 text-white text-[1.1rem] font-bold' onClick={handleClick}>Pay For Course</button>
            <ul>
              {
                accessConditions.map((access, index)=>{
                  return(
                      <li key={index} className='flex items-center gap-2 mt-3'>
                        <CircleCheckBig size={17} className='text-[hsl(168,76%,30%)] font-bold'/>
                        <span className='text-[hsl(210,20%,45%)]'>{access}</span>
                      </li>
                  )
                })
              }
            </ul>
        </div>
    </div>
  )
}

export default PaymentCard