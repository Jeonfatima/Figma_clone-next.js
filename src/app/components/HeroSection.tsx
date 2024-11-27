import React from 'react'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className='flex justify-center gap-0 h-45'>
      <section className='flex justify-between items-center pl-[8%] p-6 bg-[#faf5f5] w-full'>
        <div>
            <h1 className='text-5xl pl-6 ml-8 font-bold text-black'>Hi, I am John,<br/>Creative Technologist</h1>
            <p className=' text-gray-700 mt-5 ml-8 pl-6 w-[50%]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className='mt-6 px-6 py-3 bg-[#f98585] text-white shadow-lg shadow-[#9f9c9c] ml-10 pl-6 '>
                Download Resume
            </button>
        </div>
        <Image 
        src="/profile.jpg"
        alt="John's profile picture"
        width={550} 
        height={550} 
        className="rounded-full pl-0"
      />
      </section>
    </div>
  )
}

export default HeroSection
