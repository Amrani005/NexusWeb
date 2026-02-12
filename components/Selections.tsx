'use client'
import { projects } from '@/data';
import { useGSAP } from '@gsap/react';
import { FaLocationArrow } from 'react-icons/fa';
import { animateWithGsap } from '@/components/ui/animations'
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

const Selection = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    animateWithGsap("#sooka", { opacity: 1, duration: 1.7, ease: 'power2.inOut' }, undefined)
    animateWithGsap(".project-card", { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.1 }, undefined)
  }, [])

  return (
    <section id='project' className='w-full min-h-screen p-5 md:p-10 bg-gray-900 text-white'>
      
      {/* Header Section */}
      <div id='sooka' className="opacity-0 mx-auto max-w-4xl text-center mt-10 mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {t('work_title')} <span className='text-purple-400'>{t('work_title_1')}</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {t('work_subtitle')}
        </p>
      </div>

      {/* Grid Container - Solves alignment issues */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20'>
        {projects.map(({ desc, id, title, des, img, iconLists, link, videoUrl, completionDate, industry, services, imgList }) => (
          
          <Link 
            key={id}
            href={{
              pathname: '/selections',
              query: {
                title, des, desc, videoUrl, industry,
                services, completionDate,
                imgList: JSON.stringify(imgList)
              }
            }}
            className="project-card opacity-0 group relative flex flex-col h-full"
          >
            {/* Card Container */}
            <div className='relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/[0.1] bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2'>
              
              {/* Image Section */}
              <div className='relative w-full h-64 overflow-hidden bg-[#13162d]'>
                {/* Background Pattern */}
                <img src="/bg.png" alt="bg-pattern" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                
                {/* Project Image with Zoom Effect */}
                <img 
                  src={img} 
                  alt={title} 
                  className='absolute bottom-0 right-0 w-[90%] h-[90%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105 rotate-1'
                />
              </div>

              {/* Content Section */}
              <div className='flex flex-col flex-grow p-6'>
                <h3 className='text-2xl font-bold line-clamp-1 mb-2 group-hover:text-purple-400 transition-colors'>
                  {title}
                </h3>
                
                <p className='text-gray-400 text-sm line-clamp-2 mb-6 flex-grow'>
                  {des}
                </p>

                {/* Footer: Tech Stack & Link */}
                <div className='flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]'>
                  
                  {/* Icons Stack */}
                  <div className='flex items-center -space-x-2'>
                    {iconLists.map((icon, index) => (
                      <div 
                        key={index} 
                        className='relative w-8 h-8 rounded-full border border-white/[0.1] bg-gray-950 flex items-center justify-center overflow-hidden transition-transform hover:z-10 hover:scale-110'
                      >
                        <img src={icon} alt="tech" className='p-1.5 w-full h-full object-contain' />
                      </div>
                    ))}
                  </div>

                  {/* Live Site Link */}
                  <div className='flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform'>
                    <span>Check Live Site</span>
                    <FaLocationArrow className="w-3 h-3" />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Selection