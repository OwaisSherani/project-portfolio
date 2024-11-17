import React from "react";

export const Skills = () => {
    return (
      <div>
        <h2 className='mt-18 text-center text-4xl font-bold underline text-yellow-700'>
          My Skills
        </h2>
        <ul className='mt-8'>
          <li className='mb-6'>
            <div className='flex justify-between text-2xl text-gray-800 ml-16'>
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className='w-[45%] ml-16 mb-3 h-4 bg-green-600 rounded-2xl'></div>
          </li>
          <li className='mb-6'>
            <div className='flex justify-between text-2xl text-gray-800 ml-16'>
              <span>CSS/Tailwind CSS</span>
              <span>80%</span>
            </div>
            <div className='w-[40%] ml-16 mb-3 h-4 bg-green-400 rounded-2xl'></div>
          </li>
          <li className='mb-6'>
            <div className='flex justify-between text-2xl text-gray-800 ml-16'>
              <span>Typescript</span>
              <span>70%</span>
            </div>
            <div className='w-[35%] ml-16 mb-3 h-4 bg-red-400 rounded-2xl'></div>
          </li>
          <li className='mb-6'>
            <div className='flex justify-between text-2xl text-gray-800 ml-16'>
              <span>NextJs</span>
              <span>60%</span>
            </div>
            <div className='w-[30%] ml-16 mb-3 h-4 bg-red-500 rounded-2xl'></div>
          </li>
          <li className='mb-6'>
            <div className='flex justify-between text-2xl text-gray-800 ml-16'>
              <span>React</span>
              <span>50%</span>
            </div>
            <div className='w-[25%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
          </li>
        </ul>
      </div>
    );
  };
  