import React from 'react'
import { MessageCircle, Mail, Copy, Check } from 'lucide-react'
import { useState } from 'react'

function AccountCard() {
    const [clicked, setClicked] = useState({
        icon: Copy,
        message: "Copy Account Number"
    })

    const handleClicked = () =>{
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
        }, 3000)
    }
  return (
    <div className='flex  items-center flex-col pb-15'>
        <div className='flex items-stretch flex-col shadow-[0_4px_30px_rgba(41,46,51,0.12)] rounded-3xl p-7 md:w-[40%] w-[85%] mx-auto my-0'>
            <h1 className='font-bold text-xl text-[hsl(210,405,14%)] text-center mb-6'>Payment Details</h1>
            <div>
                    <div className='bg-[hsl(210,20%,96%)] w-full mx-auto my-0 rounded-2xl p-5'>
                        <div className='flex justify-between mb-2 pt-3 items-center'>
                            <h4>Bank Name</h4>
                            <span>First Bank Nigeria</span>
                        </div>
                        <hr className='w-[98%] mx-auto my-0 text-[hsl(210,20%,90%)]'/>
                        <div className='flex justify-between mb-2 pt-3 items-center'>
                            <h4>Account Name</h4>
                            <span>LearnHub Academy</span>
                        </div>
                        <hr className='w-[98%] mx-auto my-0  text-[hsl(210,20%,90%)]'/>
                        <div className="flex justify-between mb-2 pt-3 items-center">
                            <h4>Account Number</h4>
                            <span>0123456789</span>
                        </div>
                    </div>

                    <div className='group flex justify-center align-center w-full md:py-4 md:px-4 px-3 py-3 border-2 border-[hsl(168,76%,30%)] mt-5 rounded-xl gap-3 hover:bg-[hsl(168,76%,30%)]' onClick={handleClicked}>
                        <clicked.icon className='text-[hsl(168,76%,30%)] group-hover:text-white' size={20}/>
                        <button className='text-[hsl(168,76%,30%)] font-bold md:text-[1.1rem]  group-hover:text-white text-[0.9rem]'>{clicked.message}</button>
                    </div>
                <p className='text-center text-[0.9rem] py-3.5 text-[hsl(210,20%,45%)]'>After Payment, send Proof to:</p>
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
        </div>
    </div>
  )
}

export default AccountCard