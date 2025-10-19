import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

export default function Generatebtn() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20 bg-gradient-to-b from-white via-gray-50 to-indigo-50">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-10">
        See the Magic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Try Now</span>
      </h1>

      {/* Button */}
      <button
        onClick={() => navigate('/result')}
        className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full 
                   bg-gradient-to-r from-black via-gray-900 to-gray-800 
                   text-white font-medium text-lg shadow-lg
                   hover:shadow-2xl hover:scale-105 active:scale-95 
                   transition-all duration-300"
      >
        Generate Images
        <img
          src={assets.star_group}
          alt="Stars"
          className="h-6 group-hover:rotate-12 transition-transform duration-300"
        />

        {/* Subtle glow effect */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
      </button>
    </section>
  )
}
