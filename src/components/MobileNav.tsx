'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close the mobile menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span 
          className={`block h-0.5 w-6 bg-[#1A2B4C] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} 
        />
        <span 
          className={`block h-0.5 w-6 bg-[#1A2B4C] my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} 
        />
        <span 
          className={`block h-0.5 w-6 bg-[#1A2B4C] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} 
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 w-4/5 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="AFritech Bridge Rwanda Technology Company Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-lg font-bold text-[#1A2B4C]">AFritech Bridge</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className="block py-2 text-lg text-[#1A2B4C] hover:text-[#00A896] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block py-2 text-lg text-[#1A2B4C] hover:text-[#00A896] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/courses" 
                className="block py-2 text-lg text-[#1A2B4C] hover:text-[#00A896] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block py-2 text-lg text-[#1A2B4C] hover:text-[#00A896] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="https://jobs.afritechbridge.online" 
                className="block py-2 text-lg text-[#1A2B4C] hover:text-[#00A896] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-2 text-lg bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-4 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t">
          <p className="text-sm text-gray-600">
            Connect with us
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com/company/afritech-bridge" target="_blank" rel="noreferrer" className="text-[#1A2B4C] hover:text-[#00A896]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com/afritechbridge" target="_blank" rel="noreferrer" className="text-[#1A2B4C] hover:text-[#00A896]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}