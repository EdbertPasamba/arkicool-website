/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        .0
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Our Services</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade direction={item.animation} delay={50 * index} key={index} triggerOnce>
            <div className="h-full">
          <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105 h-[400px] flex flex-col">
            <div className="h-2/3">
              <img src={item.imageUrl} alt="Service" className="w-full h-full object-cover rounded-t-2xl" />
            </div>
            <div className="h-1/3 flex items-center justify-center">
              <h2 className="text-theme-blue text-center text-xl py-4 px-2">{item.title}</h2>
            </div>
            </div>
                </div>
              </Fade>
            ))
          }
        </div>
      </div>
    </div>
  );
}
