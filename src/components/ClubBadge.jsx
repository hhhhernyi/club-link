import { useState } from 'react';
import { CLUB_BY_ID } from '../data/clubs';
import { getCrestUrl } from '../utils/gameLogic';

const styles = {
  wrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 },
  crestWrap: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '50%', background: 'var(--surface2)', border: '2px solid var(--border)',
    overflow: 'hidden', flexShrink: 0,
  },
  crest: { objectFit: 'contain' },
  fallback: { fontSize: '1.5rem', lineHeight: 1 },
  meta: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 },
  name: { fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text)', textAlign: 'center', lineHeight: 1.2 },
  league: { fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 4 },
};

export function ClubBadge({ clubId, size = 'md', showName = true, showLeague = true }) {
  const [imgError, setImgError] = useState(false);
  const club = CLUB_BY_ID[clubId];
  const crestUrl = getCrestUrl(clubId);

  const sizes = {
    sm: { wrap: 40, img: 28, name: '0.8rem' },
    md: { wrap: 64, img: 44, name: '0.95rem' },
    lg: { wrap: 88, img: 64, name: '1.1rem' },
    xl: { wrap: 112, img: 84, name: '1.25rem' },
  };
  const s = sizes[size] || sizes.md;
  const displayName = club?.name || clubId;

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.crestWrap, width: s.wrap, height: s.wrap }}>
        {crestUrl && !imgError ? (
          <img src={crestUrl} alt={displayName} width={s.img} height={s.img}
            style={styles.crest} onError={() => setImgError(true)} />
        ) : (
          <span style={styles.fallback}>⚽</span>
        )}
      </div>
      {(showName || showLeague) && (
        <div style={styles.meta}>
          {showName && <span style={{ ...styles.name, fontSize: s.name }}>{displayName}</span>}
          {showLeague && club && (
            <span style={styles.league}><span>{club.flag}</span><span>{club.league}</span></span>
          )}
        </div>
      )}
    </div>
  );
}