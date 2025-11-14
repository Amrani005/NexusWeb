"use client"; 

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import { useLanguage } from '../context/LanguageContext'; // Import Language Hook

const Header: React.FC = () => {
  // Get language state and translation function
  const { language, setLanguage, t } = useLanguage(); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nav links now use translation keys instead of hardcoded labels
  const navLinks = [
    { href: '#service', label: t('nav_services') },
    { href: '#project', label: t('nav_portfolio') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#contact', label: t('nav_contact') },
  ];
  
  // Style classes for the language buttons
  const baseLangClass = "text-sm font-medium text-gray-400 transition-colors hover:text-white";
  const activeLangClass = "text-sm font-semibold text-white bg-white/10 rounded-md px-2 py-1";
  
  // Mobile active style class
  const mobileActiveLangClass = "text-base font-semibold text-white bg-gray-700 rounded-md px-3 py-2";


  return (
    <header className="fixed top-3 left-0 right-0 z-50 shadow-xl
     backdrop-blur bg-transparent font-sans w-[90%] translate-x-8 
     lg:translate-x-15  rounded-3xl">
      <div className=" mx-auto flex h-20 max-w-7xl items-center
       justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <span className="text-4xl font-sans font-bold text-white">Nexus</span>
          <span className="text-4xl font-sans font-bold text-purple-600">Web</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {/* Nav Links - Links use translated labels */}
          <div className="flex items-center space-x-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Switcher - Uses onClick to change language state */}
          <div className="flex items-center space-x-3 border border-white/10 rounded-xl p-1">
            {['en', 'fr', 'ro'].map((langKey) => (
              <button
                key={langKey}
                onClick={() => setLanguage(langKey as 'en' | 'fr' | 'ro')}
                className={
                  language === langKey ? activeLangClass : baseLangClass
                }
              >
                {langKey.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA Button - Uses translated label */}
          <a
            href='#contact'
            className="rounded-2xl bg-gradient-to-r from-purple-600
              to-pink-600 px-5 py-3.5 text-l font-semibold 
              text-white shadow-sm transition-opacity hover:opacity-90
              font-sans"
          >
            {t('nav_start_project')}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div 
          className=" top-full left-0 w-full bg-gray-900/95 md:hidden shadow-2xl
          shadow-purple-500  rounded-2xl " 
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-4 px-2 pt-2 pb-8 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher for Mobile */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700 mx-3">
              {['en', 'fr', 'ro'].map((langKey) => (
                <button
                  key={langKey}
                  onClick={() => {
                    setLanguage(langKey as 'en' | 'fr' | 'ro');
                    setIsMenuOpen(false); // Close menu after selection
                  }}
                  className={
                    language === langKey ? mobileActiveLangClass : "text-base font-medium text-gray-400 transition-colors hover:text-white px-3 py-2"
                  }
                >
                  {langKey.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button for Mobile - Uses translated label */}
            <div className="pt-4">
              <a
                href='#contact'
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-md bg-gradient-to-r
                  cursor-pointer from-purple-600 to-pink-600 px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {t('nav_start_project')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
