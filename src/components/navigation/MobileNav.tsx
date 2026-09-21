'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAVIGATION } from '@/data/navigation';
import SITE_CONFIG from '@/config/site';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Auto-close when route/pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close when screen resizes to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  // Filter out "Get Started" from middle scrollable list since it has a dedicated pinned footer button
  const navigationItems = MAIN_NAVIGATION.filter((item) => item.label !== 'Get Started');

  return (
    <div className="lg:hidden flex items-center gap-2 shrink-0">
      {/* Quick CTA button for mobile header */}
      <a
        href="https://study.afritechbridge.online/courses"
        target="_blank"
        rel="noreferrer noopener"
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white shadow-xs transition-colors shrink-0 whitespace-nowrap"
      >
        Get Started
      </a>

      {/* Hamburger / Close toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-slate-700 hover:text-[#00A896] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A896] min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out drawer panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[320px] sm:max-w-sm bg-white z-50 shadow-2xl flex flex-col h-[100dvh] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 min-w-0"
          >
            <Image
              src="/images/logo.png"
              alt="AfriTech Bridge"
              width={32}
              height={32}
              className="w-8 h-8 object-contain shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[#0B1C3A] text-base leading-tight truncate">
                AfriTech Bridge
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider truncate">
                Verified Global Talent
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 overscroll-contain">
          {/* Quick Primary Links */}
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/'
                  ? 'bg-[#00A896]/10 text-[#00A896]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#00A896]'
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/courses'
                  ? 'bg-[#00A896]/10 text-[#00A896]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#00A896]'
              }`}
            >
              <span>Courses & Tracks</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00A896]/10 text-[#00A896]">
                Curriculum
              </span>
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/services'
                  ? 'bg-[#00A896]/10 text-[#00A896]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#00A896]'
              }`}
            >
              <span>Services & Solutions</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/about'
                  ? 'bg-[#00A896]/10 text-[#00A896]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#00A896]'
              }`}
            >
              <span>About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/contact'
                  ? 'bg-[#00A896]/10 text-[#00A896]'
                  : 'text-slate-800 hover:bg-slate-50 hover:text-[#00A896]'
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Section Divider: Explore Portals & Ecosystem */}
          <div className="pt-2 border-t border-slate-100">
            <span className="px-3 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium block mb-1">
              Ecosystem & Portals
            </span>

            <div className="space-y-1">
              {navigationItems
                .filter((item) => Boolean(item.children && item.children.length > 0))
                .map((item) => {
                  const isExpanded = expandedSection === item.label;

                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.label)}
                        className={`w-full flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-xl text-slate-800 font-semibold text-sm transition-colors ${
                          isExpanded ? 'bg-slate-100 text-[#00A896]' : 'hover:bg-slate-50'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#00A896]' : 'text-slate-400'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && item.children && (
                        <div className="pl-3 pr-2 py-1.5 space-y-0.5 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                          {item.children.map((sub) => {
                            const isSubExt = sub.isExternal || sub.href.startsWith('http');

                            if (isSubExt) {
                              return (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-between min-h-[42px] py-2 px-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#00A896] hover:bg-white transition-colors"
                                >
                                  <span className="font-semibold text-slate-800">{sub.label}</span>
                                  <div className="flex items-center gap-1.5">
                                    {sub.badge && (
                                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#00A896]/10 text-[#00A896]">
                                        {sub.badge}
                                      </span>
                                    )}
                                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </div>
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between min-h-[42px] py-2 px-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#00A896] hover:bg-white transition-colors"
                              >
                                <span className="font-semibold text-slate-800">{sub.label}</span>
                                {sub.badge && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#00A896]/10 text-[#00A896]">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Quick Action: Internship Placement */}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/internships/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#00A896]/10 hover:bg-[#00A896]/15 text-[#00A896] font-semibold text-xs transition-colors"
            >
              <span>Apply for Internship Placement</span>
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>

        {/* Drawer Action Footer (Pinned) */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/90 shrink-0 space-y-3">
          <a
            href="https://study.afritechbridge.online/courses"
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 px-4 rounded-xl bg-[#F07C2E] hover:bg-[#E06C1E] text-white text-center text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-colors"
          >
            <span>Get Started (AfriTech Learn)</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hover:text-[#00A896] transition-colors truncate max-w-[140px]"
            >
              {SITE_CONFIG.contact.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneFormatted}`}
              className="hover:text-[#00A896] font-mono transition-colors"
            >
              {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileNav;
