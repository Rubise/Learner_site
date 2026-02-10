import React from 'react'
import Footer from '../components/Footer'
import Pay from '../components/Pay'
import AccountCard from '../components/AccountCard'

function Payment() {
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center w-[95%] mx-auto my-0">
        <h1 className="md:text-5xl text-3xl font-bold mb-7 text-[hsl(210,405,14%)]">How To Pay</h1>
        <p className="text-[1.1rem] text-[hsl(210,20%,45%)] text-center">Follow these simple steps to complete your payment and get instant access to your <br />course.</p>
      </div>
      <Pay />
      <AccountCard />
      <Footer />
    </div>
  )
}

export default Payment