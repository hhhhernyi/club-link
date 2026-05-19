const RADIUS = 36;
const CIRC = 2 * Math.PI * RADIUS;

export function TimerRing({ timeLeft, total, size = 96 }) {
  const pct = timeLeft / total;
  const strokeDashoffset = CIRC * (1 - pct);
  const danger = timeLeft <= 3;
  const warning = timeLeft <= 6;

  const color = danger ? 'var(--danger)' : warning ? 'var(--warning)' : 'var(--accent)';

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 96 96"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Track */}
        <circle
          cx={48} cy={48} r={RADIUS}
          fill="none"
          stroke="var(--border)"
          strokeWidth={6}
        />
        {/* Progress */}
        <circle
          cx={48} cy={48} r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease' }}
        />
      </svg>
      {/* Number */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-head)',
        fontSize: size * 0.32,
        color,
        transition: 'color 0.3s ease',
        animation: danger ? 'pulse 1s ease infinite' : 'none',
      }}>
        {timeLeft}
      </div>
    </div>
  );
}
