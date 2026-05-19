import { useState, useEffect } from 'react';
import { ClubBadge } from '../components/ClubBadge';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: 32,
    padding: '2rem',
  },
  clubs: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  vs: {
    fontFamily: 'var(--font-head)',
    fontSize: '1.2rem',
    color: 'var(--text-dim)',
  },
  countWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  count: {
    fontFamily: 'var(--font-head)',
    fontSize: '6rem',
    color: 'var(--accent)',
    lineHeight: 1,
    transition: 'all 0.2s ease',
  },
  label: {
    fontSize: '0.85rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
  },
};

export function CountdownScreen({ clubA, clubB, onDone }) {
  const [n, setN] = useState(3);

  useEffect(() => {
    if (n <= 0) {
      onDone();
      return;
    }
    const t = setTimeout(() => setN(prev => prev - 1), 800);
    return () => clearTimeout(t);
  }, [n, onDone]);

  return (
    <div style={styles.container}>
      <div style={styles.clubs}>
        <ClubBadge clubName={clubA} size="lg" />
        <span style={styles.vs}>VS</span>
        <ClubBadge clubName={clubB} size="lg" />
      </div>

      <div style={styles.countWrap}>
        <div style={{
          ...styles.count,
          transform: n > 0 ? 'scale(1)' : 'scale(0.5)',
          opacity: n > 0 ? 1 : 0,
        }}>
          {n > 0 ? n : ''}
        </div>
        <span style={styles.label}>Get ready…</span>
      </div>
    </div>
  );
}
