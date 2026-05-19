import { ClubBadge } from '../components/ClubBadge';
import { RoundDots } from '../components/RoundDots';
import { getSharedPlayers } from '../utils/gameLogic';

function getResultLabel(result) {
  if (result?.correct) return 'Correct!';
  if (result?.timedOut) return "Time's up!";
  if (result?.wrongGuess) return 'Wrong answer!';
  return 'Skipped';
}

export function ResultScreen({ clubAId, clubBId, round, totalRounds, roundResults, result, onNext }) {
  const correct = result?.correct;
  const sharedPlayers = getSharedPlayers(clubAId, clubBId);
  const guessedName = result?.player?.name;
  const label = getResultLabel(result);
  const sub = correct && guessedName ? `${guessedName} played for both clubs`
            : result?.wrongGuess && result?.guess ? `You guessed: "${result.guess}"`
            : null;

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minHeight:'100vh', padding:'2rem 1.5rem', gap:24, maxWidth:500, margin:'0 auto', width:'100%', animation:'scaleIn 0.25s ease forwards' }}>
      <RoundDots current={round - 1} results={roundResults} />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, padding:'24px 32px', borderRadius:'var(--radius-lg)', width:'100%', textAlign:'center', background: correct ? 'rgba(61,255,160,0.1)' : 'rgba(255,77,109,0.1)', border:`1px solid ${correct ? 'var(--accent)' : 'var(--danger)'}` }}>
        <span style={{ fontSize:'2.5rem' }}>{correct ? '✓' : '✗'}</span>
        <span style={{ fontFamily:'var(--font-head)', fontSize:'1.8rem', color: correct ? 'var(--accent)' : 'var(--danger)' }}>{label}</span>
        {sub && <span style={{ fontSize:'0.9rem', opacity:0.8 }}>{sub}</span>}
      </div>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, flexWrap:'wrap' }}>
        <ClubBadge clubId={clubAId} size="sm" />
        <span style={{ fontFamily:'var(--font-head)', fontSize:'0.9rem', color:'var(--text-dim)' }}>↔</span>
        <ClubBadge clubId={clubBId} size="sm" />
      </div>
      <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--radius-lg)', padding:'20px', width:'100%' }}>
        <div style={{ fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:12 }}>{sharedPlayers.length} valid answer{sharedPlayers.length !== 1 ? 's' : ''}</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {sharedPlayers.map(p => (
            <span key={p.name} style={{ background: p.name === guessedName ? 'rgba(61,255,160,0.15)' : 'var(--surface2)', border:`1px solid ${p.name === guessedName ? 'var(--accent)' : 'var(--border)'}`, color: p.name === guessedName ? 'var(--accent)' : 'var(--text)', borderRadius:8, padding:'5px 12px', fontSize:'0.85rem', fontWeight: p.name === guessedName ? 600 : 400 }}>
              {p.name}{p.name === guessedName ? ' ✓' : ''}
            </span>
          ))}
        </div>
      </div>
      <button onClick={onNext}
        style={{ background:'var(--accent)', color:'#000', fontFamily:'var(--font-head)', fontSize:'1rem', padding:'15px 48px', borderRadius:'var(--radius)', marginTop:'auto', boxShadow:'0 0 24px rgba(61,255,160,0.2)' }}
        onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity='1'}>
        {round >= totalRounds ? 'SEE RESULTS' : 'NEXT ROUND'}
      </button>
    </div>
  );
}