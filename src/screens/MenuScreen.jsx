const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem 1.5rem',
    gap: 40,
    animation: 'fadeIn 0.4s ease forwards',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    textAlign: 'center',
  },
  logo: {
    fontSize: '3.5rem',
    lineHeight: 1,
    marginBottom: 4,
  },
  title: {
    fontFamily: 'var(--font-head)',
    fontSize: 'clamp(2.4rem, 8vw, 3.5rem)',
    letterSpacing: '-0.02em',
    color: 'var(--text)',
    lineHeight: 1,
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--text-dim)',
    maxWidth: 300,
    lineHeight: 1.5,
  },
  playBtn: {
    background: 'var(--accent)',
    color: '#000',
    fontFamily: 'var(--font-head)',
    fontSize: '1.2rem',
    letterSpacing: '0.02em',
    padding: '16px 56px',
    borderRadius: 'var(--radius)',
    border: 'none',
    cursor: 'pointer',
    transition: 'var(--transition)',
    boxShadow: '0 0 32px rgba(61,255,160,0.25)',
  },
  howto: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding: '24px',
    maxWidth: 380,
    width: '100%',
  },
  howtoTitle: {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
    marginBottom: 14,
  },
  howtoList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  howtoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    fontSize: '0.9rem',
    color: 'var(--text-dim)',
    lineHeight: 1.4,
  },
  howtoNum: {
    background: 'var(--border)',
    color: 'var(--text)',
    borderRadius: '50%',
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 1,
  },
  stats: {
    display: 'flex',
    gap: 32,
    justifyContent: 'center',
  },
  statItem: {
    textAlign: 'center',
  },
  statNum: {
    fontFamily: 'var(--font-head)',
    fontSize: '1.8rem',
    color: 'var(--accent)',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
};

export function MenuScreen({ onPlay, stats }) {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.logo}>⚽</div>
        <h1 style={styles.title}>Club Link</h1>
        <p style={styles.subtitle}>
          Name a player who has played for both clubs. 5 rounds. 10 seconds each.
        </p>
      </div>

      <button
        style={styles.playBtn}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.boxShadow = '0 0 48px rgba(61,255,160,0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 32px rgba(61,255,160,0.25)';
        }}
        onClick={onPlay}
      >
        PLAY
      </button>

      <div style={styles.howto}>
        <div style={styles.howtoTitle}>How to play</div>
        <ul style={styles.howtoList}>
          {[
            "Pick a football club you know well",
            "We'll pair it with a mystery club",
            "Name any player who played for BOTH clubs",
            "You have 10 seconds per round",
            "Score 5/5 for a perfect game",
          ].map((item, i) => (
            <li key={i} style={styles.howtoItem}>
              <span style={styles.howtoNum}>{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {(stats?.visits > 0 || stats?.gamesPlayed > 0) && (
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <div style={styles.statNum}>{stats.visits}</div>
            <div style={styles.statLabel}>Visits</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNum}>{stats.gamesPlayed}</div>
            <div style={styles.statLabel}>Games played</div>
          </div>
        </div>
      )}
    </div>
  );
}
