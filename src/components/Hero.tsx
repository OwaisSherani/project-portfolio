import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1'>
      <div className='ml-[18%] mt-10'>
        < Image src = "/pic.jpg" alt='my-pic' height={300} width={300} className='rounded-full ml-[10%]'/>
        </div>
        <div>
        <h2 className='text-6xl gap-y-2 text-left ml-[20%] font-bold text-yellow-700 mt-16'>Hello <br />I am <br />Owais Sherani</h2>
        <p className='text-3xl gap-y-2 text-left ml-[2%] font-bold text-yellow-700 mt-10'>
          I am persuing Governor Intiative Artificial Intelligent Program
          Web developing and Mataverse 3.0</p>
        </div>
    </div>
  )
}

export default Hero