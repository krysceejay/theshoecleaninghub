import React from 'react'

const Onboarding = () => {
  return (
    <div className="px-4">
      <div className="w-14 h-14 mx-auto my-12">
        <img src="/img/colored-logo.png" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-80 h-80 mx-auto px-3">
        <img src="/img/thrift-shop-amico.png" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-80 mx-auto mt-10">
        <h3 className="text-2xl text-center text-cdark">Clean Shoes... Happy Feet</h3>
        <p className="text-sml text-center mt-3 text-clight">The Shoe Cleaning Hub is your convenient neighbourhood shoe cleaning service to clean, disinfect and refresh your footwear.</p>
      </div>
      <div className="flex items-center space-x-4 my-16">
        <button className="flex-1 bg-white text-cdark font-bold py-3 rounded-lg border border-cdark">
          Login
        </button>
        <button className="flex-1 bg-cdark text-white font-bold py-3 rounded-lg border border-cdark">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Onboarding
