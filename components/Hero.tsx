'use client'
import React from 'react';
// This import assumes your ParticlesBackground.tsx
// is in the same 'components' folder.
import ParticlesBackground from './ui/ParticlesBackground';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { useLanguage } from '../context/LanguageContext'; 

const Hero: React.FC = () => {

  const {t}= useLanguage();

  return (
    
    <section className="  overflow-hidden bg-[#1a1a2e]
      w-full h-170 lg:h-140 font-sans ">



        <div className='relative'>
          <ParticlesBackground />
        </div>
      

      
      <div className="relative z-10 mx-auto w-full  ">       
        
             
        <div className="mx-auto flex min-h-screen  flex-col
         items-center  justify-center text-center ">
            <div className='flex lg:w-300 '>
               <TextGenerateEffect 
               words={t('hero_title')}
            />
            </div>
         <div className='rounded-full w-600 h-100 bg-purple-900 -z-10 border
         border-purple-900/60 absolute isolate -translate-x-80 -translate-y-60
          blur-3xl '>

        </div>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-300 ">
            {t('hero_subtitle')}
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#packages"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:opacity-90"
            >
             {t('hero_button')}
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;