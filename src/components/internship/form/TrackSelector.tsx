'use client';

import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { TrackCard } from '../ui/TrackCard';
import { useTracks } from '@/hooks/useTracks';
import { InternshipTrack } from '@/types/internship';

interface TrackSelectorProps {
  selectedTrack: string;
  onTrackSelect: (slug: string) => void;
  onNext: () => void;
}

const FALLBACK_TRACKS: InternshipTrack[] = [
  {
    id: '1',
    slug: 'mobile',
    name: 'Mobile Development',
    description: 'Build iOS and Android applications',
    icon: 'Smartphone',
    isOpen: true,
  },
  {
    id: '2',
    slug: 'frontend',
    name: 'Frontend Development',
    description: 'Create beautiful user interfaces',
    icon: 'Monitor',
    isOpen: true,
  },
  {
    id: '3',
    slug: 'backend',
    name: 'Backend Development',
    description: 'Build robust server infrastructure',
    icon: 'Server',
    isOpen: true,
  },
  {
    id: '4',
    slug: 'fullstack',
    name: 'Full Stack Development',
    description: 'Master front and back end',
    icon: 'Layers',
    isOpen: true,
  },
  {
    id: '5',
    slug: 'data',
    name: 'Data Science',
    description: 'Analyze and visualize data',
    icon: 'BarChart3',
    isOpen: true,
  },
  {
    id: '6',
    slug: 'design',
    name: 'UI/UX Design',
    description: 'Design user experiences',
    icon: 'Palette',
    isOpen: true,
  },
  {
    id: '7',
    slug: 'devops',
    name: 'DevOps Engineering',
    description: 'Manage cloud infrastructure',
    icon: 'Cloud',
    isOpen: true,
  },
  {
    id: '8',
    slug: 'other',
    name: 'Other',
    description: 'Other areas',
    icon: 'Sparkles',
    isOpen: true,
  },
];

export const TrackSelector: React.FC<TrackSelectorProps> = ({
  selectedTrack,
  onTrackSelect,
  onNext,
}) => {
  const { tracks, isLoading } = useTracks();
  const displayTracks = tracks.length > 0 ? tracks : FALLBACK_TRACKS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold font-display text-white mb-3"
        >
          Choose Your Track
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-white/70 text-lg"
        >
          Select the domain you want to intern in at AfriTech Bridge
        </motion.p>
      </div>

      {/* Tracks Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-6 h-6 text-teal-400 animate-spin" />
          <p className="ml-2 text-white/60">Loading tracks...</p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {displayTracks.map((track, index) => (
            <TrackCard
              key={track.slug}
              track={track}
              isSelected={selectedTrack === track.slug}
              onClick={() => onTrackSelect(track.slug)}
              index={index}
            />
          ))}
        </motion.div>
      )}

      {/* Selected Track Info */}
      {selectedTrack && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 p-4 rounded-lg bg-teal-500/10 border border-teal-500/30"
        >
          <p className="text-sm text-teal-300">
            ✓ Track selected: <strong>{displayTracks.find(t => t.slug === selectedTrack)?.name}</strong>
          </p>
        </motion.div>
      )}

      {/* Next Button */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        onClick={onNext}
        disabled={!selectedTrack}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
          selectedTrack
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer'
            : 'bg-white/10 text-white/40 cursor-not-allowed'
        }`}
      >
        Continue →
      </motion.button>
    </motion.div>
  );
};
