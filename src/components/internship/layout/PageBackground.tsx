'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: 'teal' | 'orange';
}

export const PageBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 2,
      color: Math.random() > 0.5 ? 'teal' : 'orange',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1423] via-[#0a1628] to-[#051018]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(26, 179, 168, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 179, 168, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow Orbs */}
      {/* Top-Left Teal Glow */}
      <motion.div
        className="absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(26, 179, 168, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom-Right Orange Glow */}
      <motion.div
        className="absolute bottom-0 -right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(244, 124, 32, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center Subtle Navy Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-3"
        style={{
          background: 'radial-gradient(circle, rgba(26, 45, 90, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.color === 'teal'
              ? 'bg-teal-500/40'
              : 'bg-orange-500/30'
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
