import { useState, useEffect } from 'react';

const STORAGE_KEY = 'clublink_stats';

const defaultStats = {
  visits: 0,
  gamesPlayed: 0,
};

export function useGameStats() {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : defaultStats;
      const updated = { ...parsed, visits: (parsed.visits || 0) + 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setStats(updated);
    } catch {
      setStats(defaultStats);
    }
  }, []);

  const recordGame = () => {
    setStats(prev => {
      const updated = { ...prev, gamesPlayed: (prev.gamesPlayed || 0) + 1 };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  return { stats, recordGame };
}
