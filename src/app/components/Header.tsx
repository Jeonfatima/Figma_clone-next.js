import React from 'react'

const Header = () => {
  return (
    <div>
      <header  className="flex justify-end items-center p-6 bg-[#faf5f5] gap-4 font-bold shadow-md">
       
        <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Works</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Blog</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Contact</a>
      </header>
    </div>
  )
}

export default Header
