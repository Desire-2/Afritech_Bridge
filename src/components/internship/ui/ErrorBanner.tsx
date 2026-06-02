'use client';

import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface ErrorBannerProps {
  message: string;
  onDismiss: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({
  message,
  onDismiss,
  autoClose = true,
  autoCloseDelay = 5000,
}) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onDismiss, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3"
    >
      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-red-300 flex-1">{message}</p>
      <button
        onClick={onDismiss}
        className="p-1 hover:bg-red-500/20 rounded-lg transition-colors"
      >
        <X className="w-4 h-4 text-red-400" />
      </button>
    </motion.div>
  );
};
