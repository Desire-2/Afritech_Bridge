'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';
import { submitContactForm } from '@/services/contact/contactService';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const result = await submitContactForm({
        ...formData,
        subject: `[${formData.inquiryType.toUpperCase()}] ${formData.subject || 'Direct Inquiry'}`,
      });

      setStatus('success');
      setFeedbackMessage(
        result.message ||
          'Thank you for contacting AfriTech Bridge. Our team will review your inquiry and get back to you within 24 hours.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        subject: '',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : 'Unable to deliver message right now. Please reach us directly by phone or email.'
      );
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1C3A] via-[#0E2246] to-[#0B1C3A] text-white py-20 border-b border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Contact AfriTech Bridge
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about our talent pipelines, custom software engineering, corporate workforce training, or student programs? We are here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Form & Direct Contact Info */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info & Hubs (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1C3A]">
                  Speak directly with our team
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Our core operations are stationed at Norrsken House in Kigali, with active technical hubs in Musanze and Nyabihu.
                </p>
              </div>

              {/* Verified Direct Channels */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center shrink-0 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm font-bold text-[#0B1C3A] hover:text-[#00A896] transition-colors"
                    >
                      {SITE_CONFIG.phoneFormatted} ({SITE_CONFIG.phone})
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center shrink-0 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                      Official Inquiries Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-bold text-[#0B1C3A] hover:text-[#00A896] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Physical Locations List */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Verified Physical Locations (Rwanda)
                </h3>
                <div className="space-y-3">
                  {SITE_CONFIG.locations.map((loc) => (
                    <div key={loc.city} className="p-3 rounded-lg border border-slate-200/80 bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0B1C3A]">{loc.city}</span>
                        <span className="text-[10px] font-mono text-[#00A896] font-semibold">{loc.role}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 font-mono">{loc.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-xl font-bold text-[#0B1C3A] mb-1">
                  Send an Inquiry
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the details below and a member of our technical or talent leadership team will respond promptly.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm">
                    <p className="font-bold mb-1">Success</p>
                    <p>{feedbackMessage}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm">
                    <p className="font-bold mb-1">Notice</p>
                    <p>{feedbackMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                        placeholder="e.g. Jean Paul Habimana"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                        placeholder="+250 78X XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Inquiry Category *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                      >
                        <option value="general">General Information</option>
                        <option value="employer">Hire Verified Talent (TalentSphere)</option>
                        <option value="software">Custom Software & Product Studio</option>
                        <option value="workforce">Workforce & Corporate Training</option>
                        <option value="internship">Internship & Student Program</option>
                        <option value="partnership">Ecosystem Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                      placeholder="Brief description of your need or inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                      placeholder="Please share details about your team, project requirements, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? 'Submitting Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
