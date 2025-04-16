/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from "react";
import Fade from "react-awesome-reveal";

export default function OtherTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto py-12">
      {/* Section Header */}
      <Fade bottom delay={300} triggerOnce>
        <div className="flex flex-col mt-10 mb-12 mx-8 sm:mx-16 xl:mx-28">
          <h2 className="text-3xl text-theme-blue font-bold mb-5">
            Other Team Members
          </h2>
        </div>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-16 sm:gap-12 lg:gap-10 mx-8 sm:mx-16 justify-items-center">
        {data.map((item) => (
          <Fade bottom triggerOnce key={item.name}>
            <div className="relative w-72 h-48 sm:w-96 sm:h-60 rounded-xl overflow-hidden shadow-xl border border-light-theme-purple group">
              {/* Image with Blur on Hover */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-md"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Name & Position (Disappear on Hover) */}
              <div className="absolute bottom-4 left-0 w-full text-center transition-opacity duration-500 group-hover:opacity-0">
                <h2 className="text-white text-xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,1)]">
                  {item.name}
                </h2>
                <p className="text-gray-200 font-light drop-shadow-[2px_2px_4px_rgba(0,0,0,1)]">
                  {item.position}
                </p>
              </div>

              {/* Bio Text (Shows on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="max-h-32 overflow-y-auto p-2 text-white text-sm text-center drop-shadow-lg custom-scrollbar">
                  <p className="mt-1 mb-1 leading-tight">{item.bio}</p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
