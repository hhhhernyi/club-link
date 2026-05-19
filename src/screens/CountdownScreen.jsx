import { useState, useEffect } from 'react';
import { ClubBadge } from '../components/ClubBadge';

export function CountdownScreen({ clubAId, clubBId, onDone }) {
  const [n, setN] = useState(3);
  useEffect(() => {
    if (n <= 0) { onDone(); return; }
    const t = setTimeout(() => setN(prev => prev - 1), 800);
    return () => clearTimeout(t);
  }, [n, onDone]);

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', gap:32, padding:'2rem' }}>
      <div style={{ display:'flex', alignItems:'center', gap:24, justifyContent:'center', flexWrap:'wrap' }}>
        <ClubBadge clubId={clubAId} size="lg" />
        <span style={{ fontFamily:'var(--font-head)', fontSize:'1.2rem', color:'var(--text-dim)' }}>VS</span>
        <ClubBadge clubId={clubBId} size="lg" />
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
        <div style={{ fontFamily:'var(--font-head)', fontSize:'6rem', color:'var(--accent)', lineHeight:1 }}>{n > 0 ? n : ''}</div>
        <span style={{ fontSize:'0.85rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-dim)' }}>Get ready…</span>
      </div>
    </div>
  );
}