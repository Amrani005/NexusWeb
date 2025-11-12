'use client'
import React from 'react'; // You were missing the React import
import { HoverEffect } from './ui/HoverEffect'
import { useLanguage } from '@/context/LanguageContext'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from './ui/animations';

// This is our 'data' array with translation keys.
// It can live outside the component.
const approachData = [
  {
    titleKey: "approach_1_title",
    descriptionKey: "approach_1_desc",
    link: "#planning-strategy",
    img: "app.svg"
  },
  {
    titleKey: "approach_2_title", // Fixed: Was hard-coded 'title'
    descriptionKey: "approach_2_desc", // Fixed: Was hard-coded 'description'
    link: "#development-progress"
  },
  {
    titleKey: "approach_3_title", // Fixed: Was hard-coded 'title'
    descriptionKey: "approach_3_desc", // Fixed: Was hard-coded 'description'
    link: "#development-launch"
  },
];

const Approach: React.FC = () => {

  const { t } = useLanguage();


   useGSAP(() => {
      
      animateWithGsap('#title', { y: -50, opacity: 1, duration: 1.5, ease: "power2.inout", delay: 0.3 },undefined);
    });

  // --- THIS IS THE FIX ---
  // The HoverEffect component expects an array of { title: string, description: string }.
  // It cannot call the t() function itself.
  // So, we build the translated array *before* passing it.
  const translatedProjects = approachData.map(item => ({
    ...item, // Keep the 'link' and 'img' properties
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  return (
    <div className='isolate bg-gray-900 -mt-15   '>
      <div className='mt-15 translate-y-10 text-center font-bold mb-10'>
        {/* This will now work because you updated your translation keys in Step 1 */}
        <p  id='title' className='opacity-0 text-6xl lg:text-8xl text-amber-50'>{t('approach_my')}
          <span className='text-purple-400 text-6xl lg:text-8xl'>
            {t('approach_title')} 
          </span>
        </p>
      </div>

      <HoverEffect
        // We pass the *translated* array, not the data array
        items={translatedProjects}
        className='gap-5 lg:gap-10 p-10' 
      />
    </div>
  )
}

export default Approach