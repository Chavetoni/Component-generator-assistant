import { LayoutDashboard, Library, Star } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ activeView, onViewChange }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'components', icon: Library, label: 'View Components' },
    { id: 'my-components', icon: Star, label: 'My Components' }
  ];

  return (
    <nav className="sidebar">
      {navItems.map(item => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`sidebar-btn ${activeView === item.id ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
            title={item.label}
            aria-label={item.label}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </nav>
  );
}