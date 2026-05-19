import { useState, useEffect, useRef } from 'react';
import { ClubBadge } from '../components/ClubBadge';
import { TimerRing } from '../components/TimerRing';
import { RoundDots } from '../components/RoundDots';
import { useCountdown } from '../hooks/useCountdown';
import { checkGuess, TIMER_SECONDS } from '../utils/gameLogic';

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
    animation: 'fadeIn 0.3s ease forwards',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  roundLabel: {
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-dim)',
  },
  clubs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  vs: {
    fontFamily: 'var(--font-head)',
    fontSize: '1rem',
    color: 'var(--text-dim)',
  },
  guessArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  prompt: {
    fontSize: '0.95rem',
    color: 'var(--text-dim)',
    textAlign: 'center',
  },
  promptStrong: {
    color: 'var(--text)',
    fontWeight: 700,
  },
  inputRow: {
    display: 'flex',
    gap: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    background: 'var(--surface)',
    border: '2px solid var(--border)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontSize: '1rem',
    padding: '14px 16px',
    transition: 'border-color 0.2s',
  },
  submitBtn: {
    background: 'var(--accent)',
    color: '#000',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '0.9rem',
    padding: '14px 20px',
    borderRadius: 'var(--radius)',
    flexShrink: 0,
    transition: 'var(--transition)',
  },
  skipBtn: {
    background: 'transparent',
    border: '1px solid var(--border)',
    color: 'var(--text-dim)',
    fontSize: '0.85rem',
    padding: '8px 20px',
    borderRadius: 'var(--radius)',
    transition: 'var(--transition)',
  },
  shake: {
    animation: 'shake 0.3s ease',
  },
};

// inject shake keyframe
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
`;
document.head.appendChild(shakeStyle);

export function GuessScreen({ clubA, clubB, round, totalRounds, roundResults, onResult }) {
  const [guess, setGuess] = useState('');
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef(null);

  const handleTimeout = () => {
    onResult({ correct: false, guess: '', timedOut: true });
  };

  const { timeLeft, start } = useCountdown(TIMER_SECONDS, handleTimeout);

  useEffect(() => {
    start();
    inputRef.current?.focus();
  }, []); // eslint-disable-line

  const handleSubmit = () => {
    const match = checkGuess(guess, clubA, clubB);
    if (match) {
      onResult({ correct: true, guess: guess.trim(), player: match });
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 350);
    }
  };

  const handleSkip = () => {
    onResult({ correct: false, guess: '', skipped: true });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div style={styles.container}>
      <div style={styles.topRow}>
        <div style={styles.roundLabel}>Round {round} of {totalRounds}</div>
        <RoundDots current={round - 1} results={roundResults} />
        <div style={styles.clubs}>
          <ClubBadge clubName={clubA} size="md" />
          <span style={styles.vs}>↔</span>
          <ClubBadge clubName={clubB} size="md" />
        </div>
      </div>

      <TimerRing timeLeft={timeLeft} total={TIMER_SECONDS} />

      <div style={styles.guessArea}>
        <p style={styles.prompt}>
          Name a player who played for{' '}
          <span style={styles.promptStrong}>{clubA}</span>{' '}
          AND{' '}
          <span style={styles.promptStrong}>{clubB}</span>
        </p>

        <div style={{
          ...styles.inputRow,
          ...(shaking ? { animation: 'shake 0.3s ease' } : {}),
        }}>
          <input
            ref={inputRef}
            style={{
              ...styles.input,
              borderColor: shaking ? 'var(--danger)' : 'var(--border)',
            }}
            type="text"
            placeholder="Player name..."
            value={guess}
            onChange={e => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={e => {
              if (!shaking) e.target.style.borderColor = 'var(--accent)';
            }}
            onBlur={e => {
              if (!shaking) e.target.style.borderColor = 'var(--border)';
            }}
          />
          <button
            style={styles.submitBtn}
            onClick={handleSubmit}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            GO
          </button>
        </div>

        <button
          style={styles.skipBtn}
          onClick={handleSkip}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--text-dim)';
            e.currentTarget.style.color = 'var(--text)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-dim)';
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
}
