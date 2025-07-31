import { useState } from 'react';
import { Search } from 'lucide-react';
import { authenticVisaComponents } from '../../data/authenticVisaComponents.js';
import './ComponentLibraryView.css';

export function ComponentLibraryView({ onUseComponent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(authenticVisaComponents.map(comp => comp.category))];

  const filteredComponents = authenticVisaComponents.filter(comp => {
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedComponents = categories
    .filter(cat => cat !== 'all')
    .map(category => ({
      category,
      components: filteredComponents.filter(comp => comp.category === category)
    }))
    .filter(group => group.components.length > 0);

  return (
    <div className="component-library-view">
      <div className="library-header">
        <h2>Visa Product Design System Components</h2>
        <p>Authentic components from <a href="https://design.visa.com/components/" target="_blank" rel="noopener noreferrer" className="v-link">design.visa.com</a></p>
      </div>

      <div className="library-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="input search-input"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="components-grid">
        {groupedComponents.map((group, catIndex) => (
          <div key={catIndex} className="category-section">
            <h3 className="category-title">{group.category}</h3>
            <div className="components-list">
              {group.components.map((component) => (
                <div key={component.id} className="component-card">
                  <h4>{component.name}</h4>
                  <div className="component-preview">
                    <pre><code>{component.code}</code></pre>
                  </div>
                  <button 
                    className="use-component-btn"
                    onClick={() => onUseComponent(component)}
                  >
                    Use This Component
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {groupedComponents.length === 0 && (
        <div className="empty-state">
          <p>No components found matching your search.</p>
        </div>
      )}
    </div>
  );
}