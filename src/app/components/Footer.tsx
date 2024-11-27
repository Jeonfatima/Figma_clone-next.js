import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#faf5f5] py-6 text-center">
      < div className="flex justify-center space-x-4 mb-4">
      
      <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><IoLogoFacebook /></a>
        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl" > <FaInstagram /></a>
      
        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><TfiTwitter /></a>
        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><IoLogoLinkedin /></a>
      </div>
      <p className="text-gray-800 text-lg font-bold">copyright ©2020 All rights reserved</p>
    </footer>
    </div>
  )
}

export default Footer
