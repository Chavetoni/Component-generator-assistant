import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { DashboardView } from './components/views/DashboardView';
import { ComponentLibraryView } from './components/views/ComponentLibraryView';
import { MyComponentsView } from './components/views/MyComponentsView';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'components':
        return <ComponentLibraryView />;
      case 'my-components':
        return <MyComponentsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        <MainContent>
          {renderView()}
        </MainContent>
      </div>
    </div>
  );
}

export default App
