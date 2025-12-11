import { useState } from 'react';
import React from 'react'
import { productArray } from '../assets/assets'
import { ArrowRight, ArrowLeft} from 'lucide-react';

function Courses() {
  
  const [active, setActive] = useState(0);
  const totalProduct = productArray.length;
  const slideDistance = 426;

  const setForwardScroll = () => {
    setActive(current => (current === totalProduct - 1 ? 0 : current + 1));
  };


  const setBackwardScroll = () => {
    setActive(current => (current === 0 ? totalProduct - 1 : current - 1));
  };


  const trackStyle = {
    transform: `translateX(-${active * slideDistance}px)`,
    transition: 'transform 0.5s ease-in-out',
  };
  return (
    <>
        <section className='w-[90%] mx-auto mt-[100px] flex flex-col'>
            <div className='flex flex-col mb-16 gap-3'>
                <p className='font-semibold'>Available</p>
                <h3 className='font-semibold text-4xl'>Courses</h3>
                <div className='flex items-center justify-between'>
                  <h6 className='font-semibold'>Pick a course and begin your learning journey today</h6>
                  <button className='bg-[#f2f2f2] font-medium py-2.5 px-4.5 text-[#00050A] rounded-md'>View all</button>
                </div>
            </div>
                <div>
                  <div className='overflow-x-scroll carouselWrapper'>
                  <ul className='flex gap-8 w-max flex-nowrap' style={trackStyle}>{
                    productArray.map(product =>{
                      return(
                      <li key={product.id} className='flex flex-col shrink-0 gap-1.5'>
                        <img src={product.image} alt="" className='md:w-[394px] md:h-[486.4px] w-[320px] h-[370px] rounded-lg object-fill' id={product.productId}/>
                      <div className='flex justify-between items-center font-semibold text-[20px]'>
                        <h6 >{product.desc}</h6>
                        <span >{product.price}</span>
                      </div>
                      <h4 className='font-semibold'>{product.level}</h4>
                        <button className='bg-[#f2f2f2] py-2 text-[#00050A] rounded-md border-2 border-[#00050A] font-semibold text-2xl' style={{fontFamily:"Inter"}}>{product.button}</button>
                      </li>)
                    })
                    
                    }</ul>
                </div>
                <div className="scrollButtons flex items-center justify-between mt-[50px]">
                    <div className="dots flex items-center gap-[10px]">
                      <a href="#design" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                      <a href="#pyth" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                      <a href="#digit" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                      <a href="#data" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                      <a href="#java" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                      <a href="#js" className='bg-[#f2f2f2] w-[10px] h-[10px] rounded-full inline-block'></a>
                    </div>
                    <div className="arrows flex items-center justify-center gap-2.5">
                      <button className='bg-[#f2f2f2] py-2.5 px-3 border border-[#00050A] rounded-md' onClick={setBackwardScroll}><ArrowLeft /></button>
                      <button className='bg-[#f2f2f2] py-2.5 px-3 border border-[#00050A] rounded-md'  onClick={setForwardScroll}><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Courses