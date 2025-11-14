'use client'
import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Import Language Hook


const ContactFooter: React.FC = () => {

  const {t}= useLanguage();

  const contactData = [
    {
      title: 'Phone',
      content: '+213795351720 ',
      href: 'tel:+213 795351720',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 text-purple-500 mx-auto mb-4"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      title: 'Email',
      content: 'nexusweb@gmail.com',
      href: 'nexusweb@gmail.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 text-purple-500 mx-auto mb-4"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
    },
    {
      title: 'Location',
      content: 'Oran, Algeria',
      href: '#', // In a real site, this would be a Google Maps link
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 text-purple-500 mx-auto mb-4"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
  ];

  const links = [
    {
      title: 'links_title_1',
    },
    {
      title: 'links_title_2',
    },
    {
     title: 'links_title_3',
    },
    {
     title: 'links_title_4',
    },
  ];
  const services = [
    {
      title: 'services_title_1',
    },
    {
      title: 'services_title_2',
    },
    {
     title: 'services_title_3', 
    },
    {
     title: 'services_title_4', 
    },
  ];

  // --- ADDED THIS ARRAY FOR SOCIAL ICONS ---
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        // This is the 'X' icon
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 9l-6 6-6-6"/></svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      ),
    },
  ];

  return (
    <section id='contact' className="bg-black  py-20 sm:py-32 isolate ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('contact_subtitle')}
          </p>
        </div>

        
        <form
          action="https://getform.io/f/amdylynb"
          method="POST"
          encType="multipart/form-data" // <-- IMPORTANT: Getform requires this
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8">
            
            {/* This will appear in your email as "Full Name: ..." */}
            <div>
              <label htmlFor="name" className="sr-only">
                {t('form_placeholder_name')}
              </label>
              <input
                type="text"
                name="Full Name" 
                id="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
              />
            </div>

            {/* This will appear as "email: ..." */}
            <div>
              <label htmlFor="email" className="sr-only">
                {t('form_placeholder_email')}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
              />
            </div>

            {/* This will appear as "Project Description: ..." */}
            <div>
              <label htmlFor="message" className="sr-only">
                {t('form_placeholder_message')}
              </label>
              <textarea
                name="Project Description"
                id="message"
                rows={4}
                placeholder="Tell us a little about your project..."
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="mt-10 hover:scale-[1.1] duration-300">
            <button
              type="submit"
              className="block w-full rounded-md bg-gradient-to-r
                  from-purple-500 to-pink-500 px-3.5 py-3 text-center
                    text-sm font-semibold text-white shadow-md transition-opacity 
                    hover:opacity-90 focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-purple-500
                    "
            >
              {t('form_button_send')}
            </button>
          </div>
        </form>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6
          mt-15 p-10 lg:p-0">
          
          {contactData.map((item, index) => (
            
            <a
              key={index} // The 'key' is important for React
              href={item.href}
              className="block p-8 bg-zinc-800 rounded-xl shadow-lg 
              text-center transition-all duration-300 hover:bg-zinc-700
                hover:shadow-xl hover:-translate-y-1"
            >  
              {item.icon}
              
              <h3 className="text-xl font-semibold text-white mb-2">                  
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-base">
                {item.content}
              </p>
            </a>

          ))}
        </div>

        <hr className=' lg:mt-20'/>
        {/* --- MODIFIED THIS SECTION --- */}
        <div className='grid grid-cols-2 lg:grid-cols-4 w-full h-full gap-5 '>
            {/* nexus web desc*/}
          <div className='flex flex-col p-10 '>
              <a href="/" className="flex-shrink-0">
                <span className="text-4xl font-sans font-bold text-white">Nexus</span>
                <span className="text-4xl font-sans font-bold text-purple-600">Web</span>
              </a>
              <p className='text-zinc-200 block w-45 text-[1.1rem]
              mt-8 font-bold'>
                {t('nexus_desc')}
              </p>
          
          </div>
          {/* quiks links*/}
          <div className='flex flex-col p-10'>
              {/* --- ADDED ICON AND FLEX WRAPPER --- */}
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <span className='text-xl font-sans font-bold text-white'>
                  Quick Links
                </span>
              </div>

              <div className='text-zinc-400 block w-45 text-[1rem]
              mt-4 font-light flex flex-col gap-2 '>
                {links.map((item, index)=>(
                    <a key={index} className='hover:text-purple-400 hover:scale-[1.1] cursor-pointer 
                    duration-300'>
                      {t(item.title as any)}
                    </a>
                ))}
              </div>

              
          </div>

          {/* services */}
          <div className='flex flex-col p-10'>
              {/* --- ADDED ICON AND FLEX WRAPPER --- */}
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                <span className='text-xl font-sans font-bold text-white'>
                  Services
                </span>
              </div>

              <div className='text-zinc-400 block w-45 text-[1rem]
              mt-4 font-light flex flex-col gap-2 '>
                {services.map((item, index)=>(
                    <a key={index} className='hover:text-purple-400 hover:scale-[1.1] cursor-pointer 
                    duration-300 transition-transform'>
                     {t(item.title as any)}
                    </a>
                    
                ))}
              </div>
          </div>
          
          {/* --- ADDED THIS ENTIRE "FOLLOW US" BLOCK --- */}
          <div className='flex flex-col p-10'>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.5" y2="17.5"/><line x1="15.41" x2="8.59" y1="6.5" y2="10.5"/></svg>
                <span className='text-xl font-sans font-bold text-white'>
                  Follow Us
                </span>
              </div>
              <div className='flex flex-row gap-4 mt-4'>
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                    className='text-zinc-400 hover:text-purple-400 hover:scale-110 duration-300'
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center text-xs leading-5 text-gray-400">
            <p>&copy; {t('footer_copyright')} </p>
            <p className="mt-1">
              Creating the future of the web in Romania.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactFooter;