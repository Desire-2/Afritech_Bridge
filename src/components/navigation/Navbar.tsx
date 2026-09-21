'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAVIGATION } from '@/data/navigation';
import MobileNav from './MobileNav';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
        isScrolled
          ? 'border-slate-200 shadow-sm py-2.5'
          : 'border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <Image
              src="/images/logo.png"
              alt="AfriTech Bridge Logo"
              width={38}
              height={38}
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg font-bold text-[#0B1C3A] tracking-tight group-hover:text-[#00A896] transition-colors leading-tight truncate">
                AfriTech Bridge
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider hidden sm:inline truncate">
                Verified Global Talent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs xl:text-sm" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isActive = pathname === item.href;

              if (hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                        activeDropdown === item.label
                          ? 'text-[#00A896] bg-slate-50'
                          : 'text-slate-700 hover:text-[#00A896] hover:bg-slate-50'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && item.children && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                          {item.children.map((sub) => {
                            const isSubExternal = sub.isExternal || sub.href.startsWith('http');
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                target={isSubExternal ? '_blank' : undefined}
                                rel={isSubExternal ? 'noreferrer noopener' : undefined}
                                onClick={() => setActiveDropdown(null)}
                                className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#00A896] transition-colors">
                                    {sub.label}
                                  </span>
                                  {sub.badge && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold bg-[#00A896]/10 text-[#00A896]">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                {sub.description && (
                                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                    {sub.description}
                                  </p>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isItemExternal = item.isExternal || item.href.startsWith('http');

              if (item.label === 'Get Started') {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-1.5 xl:ml-2 inline-flex items-center justify-center px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-white bg-[#F07C2E] hover:bg-[#E06C1E] shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#F07C2E] focus:ring-offset-2 shrink-0 whitespace-nowrap"
                  >
                    Get Started
                  </a>
                );
              }

              if (isItemExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-[#00A896] font-semibold bg-slate-50'
                        : 'text-slate-700 hover:text-[#00A896] hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#00A896] font-semibold bg-slate-50'
                      : 'text-slate-700 hover:text-[#00A896] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
