import { useState, useMemo } from 'react';
import { ClubBadge } from '../components/ClubBadge';
import { normalizeStr } from '../utils/gameLogic';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    maxWidth: 480,
    margin: '0 auto',
    padding: '2rem 1.5rem 1.5rem',
    gap: 20,
    animation: 'fadeIn 0.3s ease forwards',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  back: {
    background: 'transparent',
    color: 'var(--text-dim)',
    fontSize: '0.85rem',
    padding: '6px 0',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontFamily: 'var(--font-head)',
    fontSize: '1.8rem',
    letterSpacing: '-0.01em',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--text-dim)',
  },
  searchWrap: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--text-dim)',
    fontSize: '1rem',
    pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontSize: '0.95rem',
    padding: '12px 12px 12px 42px',
    transition: 'border-color 0.2s',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    overflowY: 'auto',
    flex: 1,
  },
  clubRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '10px 14px',
    borderRadius: 'var(--radius)',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    textAlign: 'left',
    width: '100%',
  },
  clubInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    flex: 1,
    minWidth: 0,
  },
  clubName: {
    fontWeight: 600,
    fontSize: '0.9rem',
    color: 'var(--text)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  clubLeague: {
    fontSize: '0.75rem',
    color: 'var(--text-dim)',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  emptyState: {
    textAlign: 'center',
    color: 'var(--text-dim)',
    padding: '3rem 0',
    fontSize: '0.9rem',
  },
};

export function PickClubScreen({ allClubs, onSelect, onBack }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return allClubs;
    const q = normalizeStr(query);
    return allClubs.filter(c => normalizeStr(c).includes(q));
  }, [allClubs, query]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.back} onClick={onBack}>← Back</button>
        <h2 style={styles.title}>Pick your club</h2>
        <p style={styles.subtitle}>Choose a club you know well — you'll need to name a link player.</p>
      </div>

      <div style={styles.searchWrap}>
        <span style={styles.searchIcon}>🔍</span>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search clubs..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <div style={styles.list}>
        {filtered.length === 0 ? (
          <div style={styles.emptyState}>No clubs found for "{query}"</div>
        ) : (
          filtered.map(club => (
            <button
              key={club}
              style={styles.clubRow}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = 'var(--surface2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--surface)';
              }}
              onClick={() => onSelect(club)}
            >
              <ClubBadge clubName={club} size="sm" showName={false} showLeague={false} />
              <div style={styles.clubInfo}>
                <span style={styles.clubName}>{club}</span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
