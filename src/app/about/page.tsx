import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div>
        <h2 className='mt-18 text-center text-4xl font-bold underline text-yellow-700 '>About Me</h2>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
      alt="hero"
      src="/pic.jpg"width={400} height={300} 
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 hover:text-yellow-700">
       Owais Ahmed Khan Sherani
      </h1>
      <p className="mb-8 leading-relaxed text-gray-800  hover:text-yellow-700">
        I am graduated in BS Computer Science. I ma persuing to learn Artificial Intelligence and Mataverse 
        in GIAIC. I have made different projects while learning.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-5xl text-blue-700 border-0 py-2 px-6 rounded">
        <FaLinkedin />
        </button>
        <button className="ml-4 inline-flex text-5xl text-grey-700 border-0 py-2 px-6">
        <FaGithub />
        </button>
      </div>
    </div>
  </div>
</section>
<Skills />
    </div>
  )
}

export default About




export const Skills = () => {
  return (
    <div>
<h2 className='mt-18 text-center text-4xl font-bold underline text-yellow-700 '>My Skills</h2>
<ul>
    <li className='text-2xl text-gray-800 ml-16'>HTML</li><div className='w-[45%] ml-16 mb-3 h-4 bg-green-600 rounded-2xl'></div>
    <li className='text-2xl text-gray-800 ml-16'>CSS/Tailwind CSS</li> <div className='w-[40%] ml-16 mb-3 h-4 bg-green-400 rounded-2xl'></div>
    <li className='text-2xl text-gray-800 ml-16'>Typescript</li><div className='w-[35%] ml-16 mb-3 h-4 bg-red-400 rounded-2xl'></div>
    <li className='text-2xl text-gray-800 ml-16'>NextJs</li><div className='w-[30%] ml-16 mb-3 h-4 bg-red-500 rounded-2xl'></div>
    <li className='text-2xl text-gray-800 ml-16'>React</li><div className='w-[25%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
</ul>
    </div>
  )
}
