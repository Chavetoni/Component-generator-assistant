import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './AppLayout.css';

export default function AppLayout({ children }) {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="app-layout">
      <Header />
      <div className="app-body">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        <MainContent>
          {children(activeView)}
        </MainContent>
      </div>
    </div>
  );
}