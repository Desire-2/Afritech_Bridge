'use client';

import { useEffect, useState } from 'react';
import { InternshipTrack } from '@/types/internship';
import { fetchTracks } from '@/api/internship';

export const useTracks = () => {
  const [tracks, setTracks] = useState<InternshipTrack[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTracks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTracks();
        setTracks(data);
      } catch (err) {
        setError('Failed to load tracks');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTracks();
  }, []);

  return { tracks, isLoading, error };
};
