'use client'
import React from 'react';
import { Check } from 'lucide-react'; // Icon for the feature list
import gsap from 'gsap'
import {useGSAP} from '@gsap/react' 
import { animateWithGsap } from '@/components/ui/animations'
import { useLanguage } from '@/context/LanguageContext';


// Feature list for the Basic Package
const features = [
  
{  feature:'pricing_feature_1'
},

{  feature:'pricing_feature_2'
} , 
{feature:'pricing_feature_3'
},
{  feature:'pricing_feature_4'
} , 
{feature:'pricing_feature_5'
} 
];

const Pricing = () => {

const {t} = useLanguage();



  useGSAP(()=>{
      animateWithGsap('#pricing',{y:-50,opacity:1,duration:1.2,ease:'power2.inOut'},undefined)
  })
  return (
    // Section container
    <section id='packages' className="bg-gray-900 py-20 sm:py-32 isolate
    ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        
        <div id='pricing' className="mx-auto opacity-0 max-w-2xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-white 
          sm:text-6xl flex gap-3 text-center justify-center">
            {t('pricing_title')} 
            <p className="text-5xl font-bold tracking-tight text-purple-400 
             sm:text-6xl" > 
              {t('pricing_title_1')}
             </p>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('pricing_subtitle')}
          </p>
        </div>

        
        <div className="mx-auto mt-16 max-w-lg rounded-3xl
         bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 
         shadow-2xl duration-300 shadow-purple-400 hover:shadow-purple-600">
          
        
          <div className="h-full w-full rounded-[calc(1.5rem-2px)]
           bg-gray-900 p-8 sm:p-10">
            
            {/* Package Name and Description */}
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {t('pricing_package_title')}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {t('pricing_package_desc')}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-white">
                {t('currency')} 500
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-400">
                /{t('pricing_tag')}
              </span>
            </div>

            {/* Divider */}
            <div className="mt-6 mb-8 h-px bg-white/10" />

            {/* Feature List */}
            <ul role="list" className="space-y-3 text-sm leading-6 text-gray-300">
              {features.map((item) => (
                <li  className="flex gap-x-3">
                  <Check
                    className="h-6 w-5 flex-none text-purple-400"
                    aria-hidden="true"
                  />
                  {t(item.feature as any)}
                </li>
              ))}
            </ul>

            {/* Primary Button */}
            <a
              href="#contact" // Placeholder link
              className="mt-10 block w-full rounded-md bg-gradient-to-r
               from-purple-500 to-pink-500 px-3 py-3 text-center 
               text-sm font-semibold text-white shadow-sm 
               transition-opacity hover:opacity-90 
               focus-visible:outline focus-visible:outline-2 
               focus-visible:outline-offset-2 
                focus-visible:outline-purple-500 "
              >
               {t("pricing_button_alt")}
            </a>

            {/* "OR" Divider */}
            <div className="relative mt-8 flex items-center">
              <div className="flex-grow border-t border-white/10" />
              <span className="mx-4 flex-shrink text-sm text-gray-400"> OR </span>
              <div className="flex-grow border-t border-white/10" />
            </div>

            {/* Secondary "Button" / Link */}
            <a
              href="/partial-payments" // Placeholder link
              className="mt-6 block w-full text-center text-sm font-semibold leading-6 text-white transition-colors hover:text-gray-300"
            >
             {t('pricing_button_main')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;