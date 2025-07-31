import { useState } from 'react';
import { Trash2, Code, Search } from 'lucide-react';
import { getSavedComponents, deleteComponent } from '../../utils/localStorage';
import type { SavedComponent } from '../../types/components';
import './MyComponentsView.css';

export function MyComponentsView() {
  const [components, setComponents] = useState<SavedComponent[]>(getSavedComponents());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<SavedComponent | null>(null);

  const filteredComponents = components.filter(comp =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this component?')) {
      deleteComponent(id);
      setComponents(getSavedComponents());
      if (selectedComponent?.id === id) {
        setSelectedComponent(null);
      }
    }
  };

  const handleExport = (component: SavedComponent) => {
    const dataStr = JSON.stringify(component, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${component.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="my-components-view">
      <div className="view-header">
        <h2>My Components</h2>
        <p>Manage your saved component snippets</p>
      </div>

      <div className="search-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          className="input search-input"
          placeholder="Search your components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="components-layout">
        <div className="components-sidebar">
          {filteredComponents.length === 0 ? (
            <div className="empty-state">
              {searchTerm ? 'No components found' : 'No saved components yet'}
            </div>
          ) : (
            filteredComponents.map(comp => (
              <div
                key={comp.id}
                className={`saved-component-item ${selectedComponent?.id === comp.id ? 'active' : ''}`}
                onClick={() => setSelectedComponent(comp)}
              >
                <div className="component-info">
                  <h4>{comp.name}</h4>
                  <p>{comp.description}</p>
                  <span className="component-date">
                    {new Date(comp.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(comp.id);
                  }}
                  aria-label="Delete component"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="component-preview">
          {selectedComponent ? (
            <>
              <div className="preview-header">
                <h3>{selectedComponent.name}</h3>
                <div className="preview-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigator.clipboard.writeText(selectedComponent.code)}
                  >
                    <Code size={16} />
                    Copy Code
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleExport(selectedComponent)}
                  >
                    Export
                  </button>
                </div>
              </div>
              
              <div className="code-preview">
                <pre>{selectedComponent.code}</pre>
              </div>

              <div className="component-details">
                <h4>Used Components:</h4>
                <ul>
                  {selectedComponent.components.map((comp, index) => (
                    <li key={index}>
                      <strong>{comp.name}</strong> - {comp.purpose}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="empty-preview">
              <p>Select a component to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}