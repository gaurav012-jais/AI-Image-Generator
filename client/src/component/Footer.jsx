import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-8 px-6 md:px-20 shadow-inner">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <img 
          src={assets.logo} 
          alt="Logo" 
          width={150} 
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        />

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-left border-l md:border-l-2 border-gray-300 pl-4 md:flex-1 max-sm:hidden">
          © Copyright | All rights are reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <img 
            src={assets.facebook_icon} 
            alt="Facebook" 
            width={32} 
            className="hover:scale-110 hover:brightness-110 transition-transform duration-300 cursor-pointer"
          />
          <img 
            src={assets.twitter_icon} 
            alt="Twitter" 
            width={32} 
            className="hover:scale-110 hover:brightness-110 transition-transform duration-300 cursor-pointer"
          />
          <img 
            src={assets.instagram_icon} 
            alt="Instagram" 
            width={32} 
            className="hover:scale-110 hover:brightness-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-6 border-t border-gray-200"></div>

      {/* Mobile Copyright */}
      <p className="mt-4 text-gray-500 text-sm text-center md:hidden">
        © Copyright | All rights are reserved
      </p>
    </footer>
  )
}
