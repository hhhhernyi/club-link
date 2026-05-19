import { ROUND_COUNT } from '../utils/gameLogic';

export function RoundDots({ current, results }) {
  // results: array of 'correct' | 'wrong' | null
  return (
    <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {Array.from({ length: ROUND_COUNT }).map((_, i) => {
        const res = results?.[i];
        const isActive = i === current;
        const bg = res === 'correct' ? 'var(--accent)'
                 : res === 'wrong'   ? 'var(--danger)'
                 : isActive          ? 'var(--text-dim)'
                 :                     'var(--border)';
        return (
          <div key={i} style={{
            width: isActive ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background: bg,
            transition: 'all 0.3s ease',
            flexShrink: 0,
          }} />
        );
      })}
    </div>
  );
}
