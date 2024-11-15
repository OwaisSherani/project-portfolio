import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div><>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-700">
            There are my some projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-yellow-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime. 
            Rerum quidem quos natus corrupti corporis placeat, nulla ipsam voluptates, 
            doloribus ratione eligendi dolor eaque dolore voluptas, maxime sint. Ipsam?
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                height={400}
                width={400}
                src="/pic1.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Countdown Timer
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Next.JS
                </h1>
                <p className="leading-relaxed">
                  Using next.js , tailwind CSS to buit countdown timer project.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                height={400}
                width={400}
                src="/pic3.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Governor Sindh
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  GIAIC
                </h1>
                <p className="leading-relaxed">
                Using next.js , tailwind CSS to buit GIAIC webpage.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                height={400}
                width={400}
                src="/pic4.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    GitHub
  </>
  </div>
  )
}

export default Projects