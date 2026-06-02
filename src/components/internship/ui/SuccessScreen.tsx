'use client';

import { motion } from 'framer-motion';
import { Copy, Check, Share2, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface SuccessScreenProps {
  referenceCode: string;
  email: string;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ referenceCode, email }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1ab3a8', '#f47c20', '#ffffff'],
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'AfriTech Bridge Internship Application',
        text: `I just applied for the AfriTech Bridge Internship! 🚀 Reference Code: ${referenceCode}`,
        url: window.location.href,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full text-center"
    >
      {/* Animated Checkmark */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="mx-auto mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.1 }}
      >
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="#1ab3a8"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.path
          d="M 35 60 L 50 75 L 85 45"
          fill="none"
          stroke="#1ab3a8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </motion.svg>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold font-display text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Application Received!
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-xl text-white/70 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Thank you for applying to AfriTech Bridge Internship
      </motion.p>

      {/* Reference Code */}
      <motion.div
        className="mb-8 p-6 rounded-lg bg-gradient-to-r from-teal-500/20 to-teal-500/10 border border-teal-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="text-sm text-white/60 mb-3">Your Reference Code</p>
        <div className="flex items-center justify-center gap-4">
          <code className="text-3xl font-mono font-bold text-teal-300">{referenceCode}</code>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="p-3 bg-teal-500/20 hover:bg-teal-500/30 rounded-lg transition-colors"
          >
            {copied ? (
              <Check className="w-5 h-5 text-teal-300" />
            ) : (
              <Copy className="w-5 h-5 text-teal-400" />
            )}
          </motion.button>
        </div>
        <p className="text-xs text-white/50 mt-3">Save this code to track your application status</p>
      </motion.div>

      {/* Email Confirmation */}
      <motion.p
        className="text-white/70 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Confirmation email sent to <strong className="text-white">{email}</strong>
      </motion.p>

      {/* What Happens Next */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold font-display text-white mb-6">What Happens Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: 1, title: 'Application Review', desc: 'Our team reviews your application within 5 business days' },
            { num: 2, title: 'Interview', desc: 'Selected applicants will be invited for an online interview' },
            { num: 3, title: 'Welcome Onboard', desc: 'Successful candidates will receive their offer letter' },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 mx-auto mb-4">
                <span className="text-lg font-bold text-teal-300">{step.num}</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-sm text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Share Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="mb-8 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all inline-flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <Share2 className="w-4 h-4" />
        Share on LinkedIn
      </motion.button>

      {/* Footer CTA */}
      <motion.div
        className="text-center text-white/60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <p>Questions? Visit <a href="https://afritechbridge.org" className="text-teal-400 hover:text-teal-300">afritechbridge.org</a></p>
      </motion.div>
    </motion.div>
  );
};
