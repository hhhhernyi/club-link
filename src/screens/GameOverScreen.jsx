import { ClubBadge } from '../components/ClubBadge';
import { ROUND_COUNT } from '../utils/gameLogic';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem 1.5rem',
    gap: 28,
    maxWidth: 500,
    margin: '0 auto',
    width: '100%',
    animation: 'fadeIn 0.4s ease forwards',
  },
  scoreSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    textAlign: 'center',
  },
  scoreLabel: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
  },
  scoreDisplay: {
    fontFamily: 'var(--font-head)',
    fontSize: 'clamp(4rem, 12vw, 6rem)',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  scoreOf: {
    fontFamily: 'var(--font-head)',
    fontSize: '1.5rem',
    color: 'var(--text-dim)',
  },
  verdict: {
    fontSize: '1.1rem',
    color: 'var(--text-dim)',
    marginTop: 4,
  },
  roundList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  roundRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 14px',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
  },
  roundNum: {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '0.8rem',
    color: 'var(--text-dim)',
    minWidth: 16,
    textAlign: 'center',
  },
  clubPair: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    flex: 1,
    minWidth: 0,
  },
  clubName: {
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--text)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  vs: {
    fontSize: '0.75rem',
    color: 'var(--text-dim)',
    flexShrink: 0,
  },
  answer: {
    fontSize: '0.8rem',
    color: 'var(--text-dim)',
    maxWidth: 120,
    textAlign: 'right',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  resultIcon: {
    fontSize: '1rem',
    flexShrink: 0,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    marginTop: 'auto',
  },
  playAgainBtn: {
    background: 'var(--accent)',
    color: '#000',
    fontFamily: 'var(--font-head)',
    fontSize: '1.1rem',
    padding: '16px',
    borderRadius: 'var(--radius)',
    width: '100%',
    transition: 'var(--transition)',
    boxShadow: '0 0 24px rgba(61,255,160,0.2)',
  },
  menuBtn: {
    background: 'transparent',
    border: '1px solid var(--border)',
    color: 'var(--text-dim)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '13px',
    borderRadius: 'var(--radius)',
    width: '100%',
    transition: 'var(--transition)',
  },
};

const VERDICTS = [
  { min: 5, text: "Perfect game! 🔥", color: 'var(--accent)' },
  { min: 4, text: "Almost perfect!", color: 'var(--accent)' },
  { min: 3, text: "Not bad!", color: 'var(--warning)' },
  { min: 2, text: "Room to improve.", color: 'var(--warning)' },
  { min: 0, text: "Better luck next time.", color: 'var(--danger)' },
];

export function GameOverScreen({ rounds, onPlayAgain, onMenu }) {
  const score = rounds.filter(r => r.result?.correct).length;
  const verdict = VERDICTS.find(v => score >= v.min);

  return (
    <div style={styles.container}>
      <div style={styles.scoreSection}>
        <div style={styles.scoreLabel}>Final score</div>
        <div>
          <span style={{ ...styles.scoreDisplay, color: verdict.color }}>{score}</span>
          <span style={styles.scoreOf}> / {ROUND_COUNT}</span>
        </div>
        <div style={{ ...styles.verdict, color: verdict.color }}>{verdict.text}</div>
      </div>

      <div style={styles.roundList}>
        {rounds.map((round, i) => (
          <div key={i} style={{
            ...styles.roundRow,
            borderColor: round.result?.correct ? 'rgba(61,255,160,0.3)' : 'var(--border)',
          }}>
            <span style={styles.roundNum}>{i + 1}</span>
            <ClubBadge clubName={round.clubA} size="sm" showName={false} showLeague={false} />
            <div style={styles.clubPair}>
              <span style={styles.clubName}>{round.clubA}</span>
              <span style={styles.vs}>↔</span>
              <span style={styles.clubName}>{round.clubB}</span>
            </div>
            <ClubBadge clubName={round.clubB} size="sm" showName={false} showLeague={false} />
            <span style={{
              ...styles.answer,
              color: round.result?.correct ? 'var(--accent)' : 'var(--text-dim)',
            }}>
              {round.result?.correct
                ? round.result.player?.name
                : round.result?.timedOut ? 'Timed out' : 'Skipped'}
            </span>
            <span style={styles.resultIcon}>
              {round.result?.correct ? '✓' : '✗'}
            </span>
          </div>
        ))}
      </div>

      <div style={styles.actions}>
        <button
          style={styles.playAgainBtn}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          onClick={onPlayAgain}
        >
          PLAY AGAIN
        </button>
        <button
          style={styles.menuBtn}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--text-dim)';
            e.currentTarget.style.color = 'var(--text)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-dim)';
          }}
          onClick={onMenu}
        >
          Main menu
        </button>
      </div>
    </div>
  );
}
