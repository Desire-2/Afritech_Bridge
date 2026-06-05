'use client';

import { InternshipTrack } from '@/types/internship';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  Server,
  Layers,
  BarChart3,
  Palette,
  Cloud,
  Sparkles,
  Check,
} from 'lucide-react';

interface TrackCardProps {
  track: InternshipTrack;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Monitor,
  Server,
  Layers,
  BarChart3,
  Palette,
  Cloud,
  Sparkles,
};

export const TrackCard: React.FC<TrackCardProps> = ({ track, isSelected, onClick, index }) => {
  const IconComponent = iconMap[track.icon_key] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 group ${
        isSelected
          ? 'border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/20'
          : 'border-teal-500/20 bg-white/5 hover:border-teal-500/50 hover:bg-white/8 hover:shadow-lg hover:shadow-teal-500/10'
      }`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Selected Badge */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute top-4 right-4 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center"
        >
          <Check className="w-4 h-4 text-white" />
        </motion.div>
      )}

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="mb-4"
      >
        <IconComponent className="w-12 h-12 text-teal-400 mx-auto transition-colors group-hover:text-teal-300" />
      </motion.div>

      {/* Title */}
      <h3 className="text-center font-semibold text-lg text-white mb-2 font-display">
        {track.name}
      </h3>

      {/* Description */}
      <p className="text-center text-sm text-white/60 line-clamp-2">{track.description}</p>

      {/* Glow Effect */}
      {isSelected && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-transparent pointer-events-none opacity-50" />
      )}
    </motion.div>
  );
};
