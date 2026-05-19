import { useState, useEffect, useRef } from 'react';
import { ClubBadge } from '../components/ClubBadge';
import { TimerRing } from '../components/TimerRing';
import { RoundDots } from '../components/RoundDots';
import { useCountdown } from '../hooks/useCountdown';
import { checkGuess, TIMER_SECONDS } from '../utils/gameLogic';

if (!document.getElementById('shake-style')) {
  const s = document.createElement('style');
  s.id = 'shake-style';
  s.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }`;
  document.head.appendChild(s);
}

export function GuessScreen({ clubAId, clubBId, round, totalRounds, roundResults, onResult }) {
  const [guess, setGuess] = useState('');
  const inputRef = useRef(null);
  const doneRef = useRef(false);

  const handleTimeout = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onResult({ correct: false, guess: '', timedOut: true });
  };
  const { timeLeft, start, stop } = useCountdown(TIMER_SECONDS, handleTimeout);
  useEffect(() => { start(); inputRef.current?.focus(); }, []); // eslint-disable-line

  const handleSubmit = () => {
    if (doneRef.current || !guess.trim()) return;
    doneRef.current = true;
    stop();
    const match = checkGuess(guess, clubAId, clubBId);
    onResult(match
      ? { correct: true, guess: guess.trim(), player: match }
      : { correct: false, guess: guess.trim(), wrongGuess: true });
  };

  const handleSkip = () => {
    if (doneRef.current) return;
    doneRef.current = true; stop();
    onResult({ correct: false, guess: '', skipped: true });
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minHeight:'100vh', padding:'2rem 1.5rem', gap:24, maxWidth:500, margin:'0 auto', width:'100%', animation:'fadeIn 0.3s ease forwards' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16, width:'100%' }}>
        <div style={{ fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-dim)' }}>Round {round} of {totalRounds}</div>
        <RoundDots current={round - 1} results={roundResults} />
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:20, flexWrap:'wrap' }}>
          <ClubBadge clubId={clubAId} size="md" />
          <span style={{ fontFamily:'var(--font-head)', fontSize:'1rem', color:'var(--text-dim)' }}>↔</span>
          <ClubBadge clubId={clubBId} size="md" />
        </div>
      </div>
      <TimerRing timeLeft={timeLeft} total={TIMER_SECONDS} />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20, width:'100%' }}>
        <p style={{ fontSize:'0.95rem', color:'var(--text-dim)', textAlign:'center' }}>
          Name a player who played for both clubs
        </p>
        <div style={{ display:'flex', gap:10, width:'100%' }}>
          <input ref={inputRef}
            style={{ flex:1, background:'var(--surface)', border:'2px solid var(--border)', borderRadius:'var(--radius)', color:'var(--text)', fontSize:'1rem', padding:'14px 16px', transition:'border-color 0.2s' }}
            type="text" placeholder="Player name..." value={guess}
            onChange={e => setGuess(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          <button onClick={handleSubmit}
            style={{ background:'var(--accent)', color:'#000', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.9rem', padding:'14px 20px', borderRadius:'var(--radius)', flexShrink:0 }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}>GO</button>
        </div>
        <button onClick={handleSkip}
          style={{ background:'transparent', border:'1px solid var(--border)', color:'var(--text-dim)', fontSize:'0.85rem', padding:'8px 20px', borderRadius:'var(--radius)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--text-dim)'; e.currentTarget.style.color='var(--text)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-dim)'; }}>Skip</button>
      </div>
    </div>
  );
}