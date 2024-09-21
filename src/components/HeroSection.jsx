import React from 'react'
import banner from "../images/conversation.svg";

function HeroSection() {
  return (
    <section className='flex flex-col items-center mt-8'>
      <h1 className='text-2xl font-mono'>Welcome to Learn|Ohub</h1>
      <p className='text-gray-400'>Learn react using vite</p>
      <button className='bg-black text-white p-2 rounded-md mt-2 hover:bg-gray-700'>Get started</button>
      <div>
        <img src={banner} alt="banner" width="600px" height="600px"/>
      </div>
    </section>
  )
}

export default HeroSection
