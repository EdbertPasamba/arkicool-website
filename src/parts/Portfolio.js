/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from '../elements/Button';

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Our Highlighted Projects</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          We are here to bring your dreams into reality.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
        {
          data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade direction="up" triggerOnce bottom delay={50 * index} key={index}>
              <Button type="link" href={`/project/${item.id}`}>
          <div className="group rounded-2xl shadow-xl w-full sm:w-80 h-96 m-2 sm:m-3 transform transition duration-500 hover:sm:scale-110 portofolio-card">
            <div className="relative w-full h-2/3 overflow-hidden">
              <img src={item.imageUrl} alt="Portfolio" className="w-full h-full object-cover rounded-t-2xl z-0" />
              <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center items-center rounded-t-2xl img-hover">
                <button className="focus:outline-none">
                  <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="py-4 text-center">
              <h2 className="text-theme-blue text-xl">{item.title}</h2>
              <p className="font-light text-gray-400 truncate max-w-full text-xs sm:text-sm md:text-base lg:text-lg">{item.type}</p>
            </div>
          </div>
        </Button>
      </Fade>
          ))
  }
</div>

      <Fade bottom triggerOnce>
        <Button href="/project" type="link" className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-theme-purple px-5 border border-theme-purple items-center mt-14 rounded-full justify-center transition duration-300 hover:bg-theme-purple hover:text-white">
          <p className="font-normal py-3 lg:text-lg xl:text-base">
            See More
          </p>
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <svg className="w-4 h-4 -ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </Fade>
    </section>
  );
}
