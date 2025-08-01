import { useState } from 'react';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import ComponentLibrary from './pages/ComponentLibrary';
import MyComponents from './pages/MyComponents';
import './styles/visaComponents.css';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderView = (activeView) => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard selectedComponent={selectedComponent} />;
      case 'components':
        return <ComponentLibrary onUseComponent={(component) => {
          setSelectedComponent({ code: component.code, preview: component.preview });
        }} />;
      case 'my-components':
        return <MyComponents />;
      default:
        return <Dashboard selectedComponent={selectedComponent} />;
    }
  };

  return (
    <AppLayout>
      {renderView}
    </AppLayout>
  );
}

export default App