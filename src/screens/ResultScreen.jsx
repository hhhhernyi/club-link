import { ClubBadge } from '../components/ClubBadge';
import { RoundDots } from '../components/RoundDots';
import { getSharedPlayers } from '../utils/gameLogic';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem 1.5rem',
    gap: 24,
    maxWidth: 500,
    margin: '0 auto',
    width: '100%',
    animation: 'scaleIn 0.25s ease forwards',
  },
  resultBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: '24px 32px',
    borderRadius: 'var(--radius-lg)',
    width: '100%',
    textAlign: 'center',
  },
  resultIcon: {
    fontSize: '2.5rem',
  },
  resultText: {
    fontFamily: 'var(--font-head)',
    fontSize: '1.8rem',
    letterSpacing: '-0.01em',
  },
  guessedName: {
    fontSize: '0.9rem',
    opacity: 0.8,
  },
  clubs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  vs: {
    fontFamily: 'var(--font-head)',
    fontSize: '0.9rem',
    color: 'var(--text-dim)',
  },
  answersBox: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding: '20px',
    width: '100%',
  },
  answersTitle: {
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
    marginBottom: 12,
  },
  answerList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  answerChip: {
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '5px 12px',
    fontSize: '0.85rem',
    color: 'var(--text)',
  },
  highlightChip: {
    background: 'rgba(61,255,160,0.15)',
    borderColor: 'var(--accent)',
    color: 'var(--accent)',
    fontWeight: 600,
  },
  nextBtn: {
    background: 'var(--accent)',
    color: '#000',
    fontFamily: 'var(--font-head)',
    fontSize: '1rem',
    padding: '15px 48px',
    borderRadius: 'var(--radius)',
    transition: 'var(--transition)',
    marginTop: 'auto',
    boxShadow: '0 0 24px rgba(61,255,160,0.2)',
  },
};

export function ResultScreen({ clubA, clubB, round, totalRounds, roundResults, result, onNext }) {
  const correct = result?.correct;
  const sharedPlayers = getSharedPlayers(clubA, clubB);
  const guessedPlayerName = result?.player?.name;

  return (
    <div style={styles.container}>
      <RoundDots current={round - 1} results={roundResults} />

      <div style={{
        ...styles.resultBadge,
        background: correct
          ? 'rgba(61,255,160,0.1)'
          : 'rgba(255,77,109,0.1)',
        border: `1px solid ${correct ? 'var(--accent)' : 'var(--danger)'}`,
      }}>
        <span style={styles.resultIcon}>{correct ? '✓' : '✗'}</span>
        <span style={{
          ...styles.resultText,
          color: correct ? 'var(--accent)' : 'var(--danger)',
        }}>
          {correct ? 'Correct!' : result?.timedOut ? 'Time\'s up!' : 'No match!'}
        </span>
        {correct && guessedPlayerName && (
          <span style={styles.guessedName}>
            {guessedPlayerName} played for both clubs
          </span>
        )}
      </div>

      <div style={styles.clubs}>
        <ClubBadge clubName={clubA} size="sm" />
        <span style={styles.vs}>↔</span>
        <ClubBadge clubName={clubB} size="sm" />
      </div>

      <div style={styles.answersBox}>
        <div style={styles.answersTitle}>
          {sharedPlayers.length} valid answer{sharedPlayers.length !== 1 ? 's' : ''}
        </div>
        <div style={styles.answerList}>
          {sharedPlayers.map(p => (
            <span
              key={p.name}
              style={{
                ...styles.answerChip,
                ...(p.name === guessedPlayerName ? styles.highlightChip : {}),
              }}
            >
              {p.name}
              {p.name === guessedPlayerName ? ' ✓' : ''}
            </span>
          ))}
        </div>
      </div>

      <button
        style={styles.nextBtn}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        onClick={onNext}
      >
        {round >= totalRounds ? 'SEE RESULTS' : 'NEXT ROUND'}
      </button>
    </div>
  );
}
