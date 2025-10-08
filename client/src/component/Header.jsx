import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt=''/>
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-500'>image</span> in seconds</h1>
        <p className='text-center max-w-xl mx-auto mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea esse! Voluptate odit iusto soluta. Facere odio fuga sequi assumenda tempore</p>

        <button onClick={()=>navigate('/result')} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex item-center gap-2 rounded-full'>
            Generate Images
            <img className='h-6' src={assets.star_group} alt=''/>
        </button>
            {/* below div with array is used to provide a array of 6 spaces which all are initially empty used to fill with the images */}
        <div className=' flex gap-2 mt-2'>
            {Array(6).fill('').map((item,index)=>
            (
                <img src={index%2===0 ? assets.sample_img_2 : assets.sample_img_1} alt='' key={index} width={70} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'/>
            ))}
        </div>

        <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
    </div>
  )
}
