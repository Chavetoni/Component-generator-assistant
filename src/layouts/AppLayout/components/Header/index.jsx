import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../../hooks/useTheme';
import { HelpModal } from '../../../../components/common/HelpModal';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title"> Component Generator Assistant</h1>
          <div className="header-actions">
            <button 
              className="btn-icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="btn btn-secondary" onClick={() => setShowHelp(true)}>Help</button>
          </div>
        </div>
      </header>
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </>
  );
}