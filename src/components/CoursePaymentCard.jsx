import React from 'react'
import { MessageCircle, Mail, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { images } from '../assets/assets'

function CoursePaymentCard(props) {
    const [clicked, setClicked] = useState({
        icon: Copy,
        message: "Copy Account Number"
    })
    const[copied, setCopied] = useState(false)
    const handleClicked = () =>{
        if(copied) return

        setCopied(true)
        setClicked({
            icon: Check,
            message: "Copied!"
        })

        navigator.clipboard.writeText("0123456789")
        setTimeout(()=>{
             setClicked({
                icon: Copy,
                message: "Copy Account Number"
        })
        setCopied(false)
        }, 3000)
    }
  return (
    <div className='relative flex  items-center flex-col pb-15 '>
        <div className='relative flex items-stretch flex-col shadow-[0_4px_30px_rgba(41,46,51,0.12)] rounded-3xl p-7 md:w-[37%] w-[95%] mx-auto my-0 bg-white'>
            
                 
                    <button onClick={()=>{
                        props.setShowPayment(false)
                    }} className='absolute top-5 right-6 font-bold text-xl hover:bg-[hsl(168,30%,95%)] p-3 rounded-[40%]'>X</button>
             
                <div className='flex flex-col items-center gap-2 justify-center'>
                    <img src={images.crdca} alt="creditcard" style={{width:"60px"}} className='bg-[hsl(168,30%,95%)] p-2 rounded-xl'/>
                    <h1 className='text-2xl font-bold '>Complete Payment</h1>
                    <p className='text-sm font-bold'><span className='text-[hsl(210,20%,45%)]'>for</span> {props.course}</p>
                    <p className='font-bold text-2xl text-[hsl(168,76%,30%)]'>₦{props.price}</p>
                </div>
               
        
            <div>
                    <div className='bg-[hsl(210,20%,96%)] w-full mx-auto my-0 rounded-2xl p-5'>
                        <div className='flex justify-between mb-2 pt-3 items-center gap-2'>
                            <h4 className='text-[hsl(210,20%,45%)] text-[0.9rem] md:text-[1rem]'>Bank Name</h4>
                            <span className='font-bold'>First Bank Nigeria</span>
                        </div>
                        <hr className='w-[98%] mx-auto my-0 text-[hsl(210,20%,90%)]'/>
                        <div className='flex justify-between mb-2 pt-3 items-center gap-2'>
                            <h4 className='text-[hsl(210,20%,45%)] text-[0.9rem] md:text-[1rem]'>Account Name</h4>
                            <span className='font-bold'>LearnHub Academy</span>
                        </div>
                        <hr className='w-[98%] mx-auto my-0  text-[hsl(210,20%,90%)]'/>
                        <div className="flex justify-between mb-2 pt-3 items-center">
                            <h4 className='text-[hsl(210,20%,45%)] text-[0.9rem] md:text-[1rem]'>Account Number</h4>
                            <p className='flex items-center gap-3' >
                                <span className='font-bold'>0123456789</span>
                                <clicked.icon onClick={handleClicked} size={16}/>
                            </p>
                        </div>
                    </div>

                    <div className='group flex justify-center align-center w-full md:py-4 md:px-4 px-3 py-3 border-2 border-[hsl(168,76%,30%)] mt-5 rounded-xl gap-3 hover:bg-[hsl(168,76%,30%)]' onClick={handleClicked}>
                        <clicked.icon className='text-[hsl(168,76%,30%)] group-hover:text-white' size={20}/>
                        <button className='text-[hsl(168,76%,30%)] font-bold md:text-[1.1rem]  group-hover:text-white text-[0.9rem]'>{clicked.message}</button>
                    </div>
                <p className='text-sm py-3.5 text-[hsl(210,20%,45%)] bg-[hsl(17,64%,98%)] rounded-xl p-3 my-3'>After payment, send your proof of payment (screenshot or receipt) to our WhatsApp or Email. You will receive your course access within 2-4 hours.</p>
                <div className='flex md:gap-4 w-full gap-2'>
                    <div className='flex gap-2 justify-center items-center bg-[hsl(15,90%,60%)] px-3.5 py-3 rounded-xl flex-1 basis-0'>
                         <MessageCircle className='text-white' size={18}/>
                        <a href="https://wa.me/+2348012345678?text=I%20need%20support" target='blank' className='text-white cursor-pointer'>WhatsApp</a>
                    </div>
                    <div className='flex gap-2 justify-center items-center px-6.5 py-3 rounded-xl bg-[hsl(176,62%,95%)] flex-1 basis-0'>
                        <Mail className='text-[hsl(168,76%,30%)]' size={18}/>
                        <a href="mailto:hello@learnhub.com" className='text-[hsl(168,76%,30%)] cursor-pointer' target='blank'>Email</a>
                    </div>
                </div>
            </div>
            <button onClick={()=>{
                props.setShowPayment(false)
            }} className='hover:bg-[hsl(15,90%,60%)] py-2 rounded-2xl mt-5 hover:text-white text-[hsl(210,20%,45%)]'>close</button>
        </div>
    </div>
  )
}

export default CoursePaymentCard