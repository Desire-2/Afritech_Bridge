import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SITE_CONFIG from '@/config/site';
import { FOOTER_COLUMNS } from '@/data/navigation';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1C3A] text-white border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          {/* Brand Column (spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="AfriTech Bridge"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                AfriTech Bridge
              </span>
            </Link>

            <p className="text-sm text-slate-300 font-medium">
              {SITE_CONFIG.positioning}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              AfriTech Bridge turns African potential into verified global talent through rigorous technical training, verifiable Talent Passports, and direct connections to high-impact opportunities.
            </p>

            {/* Official Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#00A896] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#00A896] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-[#00A896] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase font-mono">
                {column.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {column.links.map((link) => {
                  const isExt = link.isExternal || link.href.startsWith('http');
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExt ? '_blank' : undefined}
                        rel={isExt ? 'noreferrer noopener' : undefined}
                        className="text-slate-400 hover:text-[#3ECFB2] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Locations & Presence Bar */}
        <div className="pt-8 pb-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
          {SITE_CONFIG.locations.map((loc) => (
            <div key={loc.city} className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00A896] mt-1.5 shrink-0" />
              <div>
                <span className="text-slate-200 font-semibold">{loc.city}</span>: {loc.role}
                <p className="text-[11px] text-slate-500 mt-0.5">{loc.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-slate-200 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
            <a
              href={SITE_CONFIG.platforms.jobs}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-200 transition-colors"
            >
              TalentSphere
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
