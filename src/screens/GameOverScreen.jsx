import { ClubBadge } from '../components/ClubBadge';
import { ROUND_COUNT } from '../utils/gameLogic';
import { CLUB_BY_ID } from '../data/clubs';

const VERDICTS = [
  { min:5, text:"Perfect game! 🔥", color:'var(--accent)' },
  { min:4, text:"Almost perfect!", color:'var(--accent)' },
  { min:3, text:"Not bad!", color:'var(--warning)' },
  { min:2, text:"Room to improve.", color:'var(--warning)' },
  { min:0, text:"Better luck next time.", color:'var(--danger)' },
];

export function GameOverScreen({ rounds, onPlayAgain, onMenu }) {
  const score = rounds.filter(r => r.result?.correct).length;
  const verdict = VERDICTS.find(v => score >= v.min);

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minHeight:'100vh', padding:'2rem 1.5rem', gap:28, maxWidth:500, margin:'0 auto', width:'100%', animation:'fadeIn 0.4s ease forwards' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, textAlign:'center' }}>
        <div style={{ fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-dim)' }}>Final score</div>
        <div>
          <span style={{ fontFamily:'var(--font-head)', fontSize:'clamp(4rem,12vw,6rem)', lineHeight:1, color:verdict.color }}>{score}</span>
          <span style={{ fontFamily:'var(--font-head)', fontSize:'1.5rem', color:'var(--text-dim)' }}> / {ROUND_COUNT}</span>
        </div>
        <div style={{ fontSize:'1.1rem', color:verdict.color }}>{verdict.text}</div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:8, width:'100%' }}>
        {rounds.map((round, i) => {
          const clubA = CLUB_BY_ID[round.clubAId];
          const clubB = CLUB_BY_ID[round.clubBId];
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderRadius:'var(--radius)', border:`1px solid ${round.result?.correct ? 'rgba(61,255,160,0.3)' : 'var(--border)'}`, background:'var(--surface)' }}>
              <span style={{ fontWeight:700, fontSize:'0.8rem', color:'var(--text-dim)', minWidth:16 }}>{i+1}</span>
              <ClubBadge clubId={round.clubAId} size="sm" showName={false} showLeague={false} />
              <div style={{ display:'flex', alignItems:'center', gap:6, flex:1, minWidth:0 }}>
                <span style={{ fontSize:'0.82rem', fontWeight:600, color:'var(--text)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{clubA?.name}</span>
                <span style={{ fontSize:'0.75rem', color:'var(--text-dim)', flexShrink:0 }}>↔</span>
                <span style={{ fontSize:'0.82rem', fontWeight:600, color:'var(--text)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{clubB?.name}</span>
              </div>
              <ClubBadge clubId={round.clubBId} size="sm" showName={false} showLeague={false} />
              <span style={{ fontSize:'0.8rem', color: round.result?.correct ? 'var(--accent)' : 'var(--text-dim)', maxWidth:100, textAlign:'right', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                {round.result?.correct ? round.result.player?.name : round.result?.timedOut ? 'Timed out' : round.result?.wrongGuess ? `✗ ${round.result.guess}` : 'Skipped'}
              </span>
              <span style={{ fontSize:'1rem', flexShrink:0 }}>{round.result?.correct ? '✓' : '✗'}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:10, width:'100%', marginTop:'auto' }}>
        <button onClick={onPlayAgain}
          style={{ background:'var(--accent)', color:'#000', fontFamily:'var(--font-head)', fontSize:'1.1rem', padding:16, borderRadius:'var(--radius)', width:'100%', boxShadow:'0 0 24px rgba(61,255,160,0.2)' }}
          onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity='1'}>PLAY AGAIN</button>
        <button onClick={onMenu}
          style={{ background:'transparent', border:'1px solid var(--border)', color:'var(--text-dim)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.9rem', padding:13, borderRadius:'var(--radius)', width:'100%' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--text-dim)'; e.currentTarget.style.color='var(--text)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-dim)'; }}>Main menu</button>
      </div>
    </div>
  );
}