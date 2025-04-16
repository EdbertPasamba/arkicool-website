/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import Button from 'elements/Button';

export default function AllPortfolio({ data }) {
  return (
    <Fade bottom>
      <section className="container mx-auto">
  <Tabs className="flex flex-col px-4">
    <TabList>
    <div className="flex flex-row flex-wrap md:flex-nowrap justify-center overflow-x-auto whitespace-nowrap mb-5 gap-3 scrollbar-hide">
        <Tab>
          <button className="font-normal px-5 py-2 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
            Signages
          </button>
        </Tab>
        <Tab>
          <button className="font-normal px-5 py-2 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
            Architecture
          </button>
        </Tab>
        <Tab>
          <button className="font-normal px-8 py-2 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
            Construction
          </button>
        </Tab>
        <Tab>
          <button className="font-normal px-8 py-2 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
            Aircon Services
          </button>
        </Tab>
        <Tab>
          <button className="font-normal px-8 py-2 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
            Lighting Fixtures
          </button>
        </Tab>
      </div>
    </TabList>

<TabPanel>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
        {
          data.filter((item) => item.responsibility.includes('Signages'))
            .map((item, index) => (
            <Fade direction="up" triggerOnce bottom delay={50 * index} key={item.id}>
              <Button type="link" href={`/project/${item.id}`}>
                <div className="group rounded-2xl shadow-xl w-auto sm:w-80 h-96 m-1 transform transition duration-500 hover:scale-110 portofolio-card">
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
                  <div className="py-2 text-center">
                    <h2 className="text-theme-blue text-xl">{item.title}</h2>
                    <p className="font-light text-gray-400 truncate max-w-full text-xs sm:text-sm md:text-base lg:text-lg">{item.type}</p>
                  </div>
                </div>
              </Button>
            </Fade>
            ))
      }
    </div>
</TabPanel>
<TabPanel>
<div className="mt-8 p-4 text-center border-t border-gray-300">
  
  <h3 className="text-2xl font-bold text-theme-blue">
    Architecture Services
  </h3>
  <p className="text-gray-600 mt-4">
    Arkicool provides expert architectural design solutions specializing in creating 
    Custom, Innovative, and Sustainable Design Structures. Arkicool focuses on blending 
    aesthetics with functionalism. Their services cover everything from initial concept design 
    and space planning to detailed architecture drawings and project coordination.
  </p>
  <p className="text-gray-600 mt-4">
    By incorporating modern design principles, energy-efficient solutions, and the latest 
    trends, Arkicool ensures each project is tailored to the client&rsquo;s vision while 
    optimizing for comfort, sustainability, and cost-efficiency.
  </p>
  <p className="text-gray-600 mt-4">
    Their team of experienced Architects and Engineers works closely with clients to create 
    beautiful, practical living spaces that stand the test of time.
  </p>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
        {
         data.filter((item) => item.responsibility.includes('Architecture'))
           .map((item, index) => (
              <Fade direction="up" triggerOnce bottom delay={50 * index} key={item.id}>
                <Button type="link" href={`/project/${item.id}`}>
                  <div className="group rounded-2xl shadow-xl w-auto sm:w-80 h-96 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
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
  
</TabPanel>

<TabPanel>
<div className="mt-8 p-4 text-center border-t border-gray-300">
  
  <h3 className="text-2xl font-bold text-theme-blue">
  Construction Services
  </h3>
  <p className="text-gray-600 mt-4">
  Arkicool Residential Building Construction Services specializes in delivering 
  high-qualityconstruction solutions adopting value engineering for any form
  of project. The company focuses on building structures that are not only 
  aesthetically pleasing but also structurally sound and energy-efficient. 
  They offer comprehensive services, from architectural design and planning 
  to and project  management. 
  </p>
  <p className="text-gray-600 mt-4">
  Arkicool emphasizes Innovation, Sustainability, and Client Satisfaction, 
  ensuring that each project is tailored to meet the unique needs and 
  preferences of the client. Their expert team uses modern construction 
  techniques and materials to ensure long-lasting and eco-friendly structures.
  </p>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
    {
      data
        .filter((item) => item.responsibility.includes('Construction')) // Filter for "Construction"
        .map((item, index) => (
          <Fade direction="up" triggerOnce bottom delay={50 * index} key={item.id}>
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto sm:w-80 h-96 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
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

</TabPanel>
<TabPanel>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
    {
      data
        .filter((item) => item.responsibility.includes('Aircon Services')) // Filter for "Aircon Services"
        .map((item, index) => (
          <Fade direction="up" triggerOnce bottom delay={50 * index} key={item.id}>
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto sm:w-80 h-96 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
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
                  <p className="font-light text-gray-400">{item.type}</p>
                </div>
              </div>
            </Button>
          </Fade>
        ))
    }
  </div>
</TabPanel>
<TabPanel>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 xl:gap-8 justify-items-center">
    {
      data
        .filter((item) => item.responsibility.includes('Lighting Fixtures')) // Filter for "Lighting Services"
        .map((item, index) => (
          <Fade direction="up" triggerOnce bottom delay={50 * index} key={item.id}>
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto sm:w-80 h-96 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
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
                  <p className="font-light text-gray-400">{item.type}</p>
                </div>
              </div>
            </Button>
          </Fade>
        ))
    }
  </div>
</TabPanel>

        </Tabs>

      </section>
    </Fade>
  );
}
