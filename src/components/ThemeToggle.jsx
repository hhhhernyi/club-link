export function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} title="Toggle theme"
      style={{ position:'fixed', top:16, right:16, zIndex:100, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:8, padding:'8px 12px', color:'var(--text)', fontSize:'1rem', cursor:'pointer', transition:'var(--transition)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}