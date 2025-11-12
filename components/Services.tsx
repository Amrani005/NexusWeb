'use client'
import React from 'react';
import { MonitorSmartphone, Zap, Search, FolderGit2, Smile, Rocket, Globe } from 'lucide-react'; // <-- IMPORT NEW ICONS HERE
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import { animateWithGsap } from './ui/animations';

const Services: React.FC = () => {

  const { t } = useLanguage();

  const services = [
    {
      icon: MonitorSmartphone,
      titleKey: 'service_1_title',
      descriptionKey: 'service_1_desc',
    },
    {
      icon: Zap,
      titleKey: 'service_2_title',
      descriptionKey: 'service_2_desc',
    },
    {
      icon: Search,
      titleKey: 'service_3_title',
      descriptionKey: 'service_3_desc',
    },
  ];

  // --- UPDATED statsData WITH ICONS ---
  const statsData = [
    {
      num: '150+',
      descriptionKey: 'results_1_desc',
      icon: FolderGit2, // Added icon
    },
    {
      num: '98%',
      descriptionKey: 'results_2_desc',
      icon: Smile, // Added icon
    },
    {
      num: '5+',
      descriptionKey: 'results_3_desc',
      icon: Rocket, // Added icon
    },
    {
      num: '24/7',
      descriptionKey: 'results_4_desc',
      icon: Globe, // Added icon
    }
  ];
  // ------------------------------------

  useGSAP(() => {
    animateWithGsap('#service', { y: -50, opacity: 1, duration: 1.5, ease: "power2.inout", delay: 0.3 }, undefined);
    animateWithGsap('#cards', { y: -50, opacity: 1, duration: 1.5, ease: "power2.inout", delay: 0.3 }, undefined);
    animateWithGsap('#card', { y: -50, opacity: 1, duration: 1.5, ease: "power2.inout", delay: 0.3 }, undefined);
  });

  return (
    <section className="bg-gray-900 py-20 isolate sm:py-32 font-bold 
    font-sans -mb-25  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div id='service' className="opacity-0 
          text-center">
          <h2 className=" flex text-5xl font-bold tracking-tight
            text-white sm:text-6xl justify-center gap-5">
            {t('services_title')}
            <p className='text-purple-400'>
              {t('service_title_1')}
            </p>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('services_subtitle')}
          </p>
        </div>

        <div id='cards' className=" mt-20 grid  grid-cols-1 
          gap-8 sm:mt-30 lg:max-w-none lg:grid-cols-3 opacity-0 ">

          {services.map((service) => (
            <div
              key={service.titleKey}
              className="flex flex-col rounded-2xl
                bg-gray-800/60 p-8 shadow-lg transition-all
                duration-300 hover:bg-gray-700/60 justify-center
                items-center text-center hover:-translate-y-1 "
            >
              <div className="mb-6 flex h-15 w-15 items-center
                justify-center rounded-4xl bg-gradient-to-r
                from-purple-500 to-gray-900 hover:from-gray-900 
                hover:to-purple-500 transition-colors duration-900 text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <div className="flex flex-col ">
                <h3 className="text-lg font-semibold leading-7 text-white">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-2 font-bold leading-6 text-zinc-500">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div id='card' className=' grid grid-cols-2 gap-4 text-center font-mono
           lg:flex lg:flex-cols-3 lg:gap-30 mt-20 opacity-0 mb-13 '>
          {statsData.map((item) => (
            <div
              key={item.descriptionKey}
              className="bg-gray-800/50 p-6 rounded-xl border
                border-gray-700 lg:p-10 shadow-xl shadow-purple-500
                  hover:shadow-blue-500 duration-300 hover:bg-gray-700/50
                  hover:-translate-y-1"
            >
             
              <div className="mb-4 flex h-12 w-12 items-center justify-center 
                 rounded-full bg-gradient-to-r from-blue-400
                  to-purple-400 mx-auto hover:from-blue-400 hover:to-purple-400 
                  transition-colors duration-800">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              

              <span className="text-4xl font-semibold block pt-2 mb-5 
                bg-gradient-to-r from-blue-400 to-cyan-300 
                bg-clip-text text-transparent cursor-pointer">
                {item.num}
              </span>
              <p className=" font-light text-zinc-300 cursor-pointer">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;