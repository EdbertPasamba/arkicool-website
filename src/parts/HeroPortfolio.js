/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/portfolioHero.png';

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">Portfolio</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
          Over the years of experiences by the led Principal and President / C.E.O. of the
company, Arch. Randy Barlizo Serra, the company has undertaken many
challenging projects and accumulated skills.
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
  <Fade direction="up" triggerOnce>
    <div className="overflow-hidden rounded-3xl shadow-xl transform transition duration-300 hover:scale-105">
      <img
        src={heroPortfolio}
        alt="Hero"
        className="w-full h-auto object-cover"
      />
    </div>
  </Fade>
</div>

    </section>
  );
}
