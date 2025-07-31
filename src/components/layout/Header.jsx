import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">[VISA] NOVA Component Assistant</h1>
        <div className="header-actions">
          <button 
            className="btn-icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="btn btn-secondary">Help</button>
        </div>
      </div>
    </header>
  );
}