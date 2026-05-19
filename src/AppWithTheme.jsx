import App from './App.jsx';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function AppWithTheme() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggle} />
      <App />
    </>
  );
}