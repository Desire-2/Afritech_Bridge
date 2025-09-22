'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="AFritech Bridge Rwanda Technology Company Logo"
              width={40}
              height={40}
              className="mr-3 animate-scale"
              priority
            />
            <h1 className="text-xl font-bold text-[#1A2B4C]">AFritech Bridge</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/courses" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Courses
              </Link>
              <Link href="/about" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="https://jobs.afritechbridge.online" target="_blank" rel="noreferrer" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Jobs
              </Link>
              <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}