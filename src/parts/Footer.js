/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Cool spaces,
              {' '}
              <br />
              strong foundations.
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
             arkicoolservices@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
                <a 
                  href="https://www.google.com/maps/place/Arkicool+Residential+Building+Construction/@14.5828142,121.0257661,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c9006f9b1631:0xd377e1f747a4b955!8m2!3d14.582809!4d121.028341!16s%2Fg%2F11m6p1hw8d?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg text-gray-400 font-light"
                >
                464 Boni Avenue, Brgy. New Zaniga, Mandaluyong City, Philippines
             </a>
            </p>

          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.facebook.com/profile.php?id=61566237661283" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Facebook
            </Button>
          </div>
        </div>
       
      </div>
    </div>
  );
}
