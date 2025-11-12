'use client'
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { useGSAP } from '@gsap/react';
import { FaLocationArrow } from 'react-icons/fa';
import { animateWithGsap } from '@/components/ui/animations'
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';



const Selection = () => {


  const {t}= useLanguage();

  useGSAP(()=>{
        animateWithGsap("#sooka",{opacity:1,duration:1.7,y:-50,ease:'power2.inOut'},undefined)
        animateWithGsap("#cards",{opacity:1,y:-50,duration:1.9,ease:'power2.inOut'}, undefined)
  
  },[])
  
  return (
    <section id='project' className='flex flex-col h-full p-10
     bg-gray-900 isolate  w-full'>
        
            <div id='sooka' className=" opacity-0 mx-auto max-w-2xl
             text-center m-10 mb-20">
          <h2 className="flex gap-4 justify-center text-5xl font-bold tracking-tight
           text-white sm:text-6xl ">
            {t('work_title')}
            <h2 className='text-purple-400'>
              {t('work_title_1')}
            </h2>
          </h2>
          
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('work_subtitle')}
          </p>
        </div>
       

         <div className='flex flex-wrap justify-center text-white p-4 
         gap-x-24 gap-y-15 lg:gap-x-60 -mt-5' >
            {projects.map(({desc,id,title,des,img,iconLists,link,videoUrl,
            completionDate,industry,services,imgList})=>(
              <Link href={{pathname:'/selections',
                query:{title:title,des:des,desc:desc,videoUrl:videoUrl,industry:industry,
                  services:services,completionDate:completionDate,
                  imgList:JSON.stringify(imgList)
                }
              }}>
              <div key={id} id='cards' className=' flex  
                   lg:min-h-[32.5rem] h-[25rem] items-center justify-center
                   sm:w-96 w-[80vw] lg:-mb-15  sm:mb-10 
                     '>
                   <PinContainer title={link} href={link}>
                     
                       <div className='relative flex items-center justify-center
                       ovrerflow-hidden sm:w-96 w-[80vw] scale-[1] h-[20vh] '>
                        <div className='relative w-full h-ful  '>
                          <img src="/bg.png" alt="bg-img" />
                        </div>
                         <img 
                         src={img} 
                         alt={title} 
                         className='z-10 absolute bottom-0'
                           />
                       </div>
                       <h1 className='font-bold mt-5 lg-text-2xl md:text-xl text-base
                        line-clamp-1'>
                        {title}
                       </h1>
                       <p className='lg:text-xl text-neutral-400 lf:font-normal 
                        font-light text-sm line-clamp-2'>
                        {des}
                       </p>

                       <div className='justify-between flex items-center'>
                        <div className=' flex mt-7  '>
                          {iconLists.map((icon,index) => (
                            <div key={index} className='border mx-1 border-white/[0.2]
                             bg-black rounded-full lg:w-10 lg:h-10 w-8
                              h-8 flex justify-center items-center'>
                              <img src={icon} alt={icon} 
                               className='p-2' />
                            </div>
                          ))}
                        </div>  
                        

                        <div className='flex justify-center items-center gap-2'>
                            <p className='flex lg:text-s md:text-xs text-sm
                            text-purple-400'>Check Live Site</p>
                            <FaLocationArrow color='#CBACF9' />

                        </div>
                       </div>
                   </PinContainer>
                  </div>
              </Link>
              
             
            ))}
        </div>

    </section>
  )
}

export default Selection
