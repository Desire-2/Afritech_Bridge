'use client';

import React, { useState } from 'react';
import { SAMPLE_TALENT_PASSPORT } from '@/data/talentPassport';
import { Badge } from './Badge';

export function TalentPassportCard() {
  const [activeTab, setActiveTab] = useState<'skills' | 'evidence'>('skills');
  const profile = SAMPLE_TALENT_PASSPORT;

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-[#0E1F3D] text-white overflow-hidden shadow-2xl">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0B1C3A] via-[#12284C] to-[#0A2239] p-6 sm:p-8 border-b border-slate-700/70">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00A896] to-[#0B1C3A] border-2 border-[#3ECFB2]/40 flex items-center justify-center text-white text-xl font-bold font-mono">
              {profile.avatarSeed}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {profile.name}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#3ECFB2]/15 text-[#3ECFB2] border border-[#3ECFB2]/30">
                  <svg className="w-3 h-3 text-[#3ECFB2]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              </div>
              <p className="text-sm text-[#3ECFB2] font-medium mt-0.5">{profile.title}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-700/60">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Talent Passport ID
            </span>
            <span className="text-xs font-mono text-slate-200 bg-black/40 px-2.5 py-1 rounded border border-slate-700">
              {profile.passportId}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {profile.status}
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-700/60">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-[#00A896] text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Verified Skills ({profile.verifiedSkills.length})
          </button>
          <button
            onClick={() => setActiveTab('evidence')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'evidence'
                ? 'bg-[#00A896] text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Evidence & Projects ({profile.evidence.length})
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 bg-[#0D182F]">
        {activeTab === 'skills' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {profile.verifiedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#13223F] border border-slate-700/60 hover:border-[#00A896]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-white text-sm">
                      {skill.name}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-medium bg-[#00A896]/15 text-[#3ECFB2] border border-[#00A896]/30">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mb-2">{skill.category}</p>
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-300 bg-black/20 p-2 rounded border border-white/5">
                    <svg className="w-3.5 h-3.5 text-[#3ECFB2] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{skill.verifiedMethod}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3.5">
            {profile.evidence.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#13223F] border border-slate-700/60 hover:border-[#00A896]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-[#F07C2E] border border-slate-700">
                      {item.type}
                    </span>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  </div>
                  <span className="text-[11px] text-[#3ECFB2] font-mono flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#3ECFB2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item.verificationBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-2 leading-relaxed">{item.description}</p>
                <div className="text-[11px] font-mono text-slate-400 bg-black/20 px-2.5 py-1.5 rounded border border-white/5 inline-block">
                  Metric: {item.metrics}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conceptual disclaimer badge */}
        <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F07C2E]" />
            <span>Illustrative Talent Passport preview generated by AfriTech Assess & Talent standards.</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            Powered by AfriTech Talent Engine
          </span>
        </div>
      </div>
    </div>
  );
}

export default TalentPassportCard;
