import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col justify-center items-center text-center py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-indigo-50 relative overflow-hidden">
      
      {/* Floating Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 opacity-40 blur-3xl rounded-full -z-10"></div>

      {/* Tagline */}
      <div className="inline-flex items-center gap-2 bg-white/70 px-6 py-2 rounded-full border border-gray-300 shadow-sm backdrop-blur-md">
        <p className="text-gray-700 font-medium">Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" className="h-5" />
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold max-w-[650px] mt-10 leading-tight text-gray-900">
        Turn text into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">images</span> in seconds
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mt-5 text-base sm:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea esse!
        Voluptate odit iusto soluta. Facere odio fuga sequi assumenda tempore.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/result')}
        className="group mt-10 inline-flex items-center gap-3 px-10 py-3.5 rounded-full text-white font-medium text-lg
                   bg-gradient-to-r from-black via-gray-900 to-gray-800 
                   hover:from-gray-800 hover:to-black hover:scale-105 
                   transition-all duration-300 shadow-lg"
      >
        Generate Images
        <img
          src={assets.star_group}
          alt="stars"
          className="h-6 group-hover:rotate-12 transition-transform duration-300"
        />
      </button>

      {/* Image Preview Row */}
      <div className="flex gap-3 mt-10 flex-wrap justify-center">
        {Array(6)
          .fill('')
          .map((_, index) => (
            <img
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="generated sample"
              key={index}
              width={80}
              className="rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer max-sm:w-12"
            />
          ))}
      </div>

      {/* Footer Note */}
      <p className="mt-4 text-neutral-600 text-sm">Generated images from Imagify</p>
    </header>
  )
}
