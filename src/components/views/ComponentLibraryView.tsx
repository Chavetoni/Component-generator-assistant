import { useState } from 'react';
import { Search } from 'lucide-react';
import { componentLibrary } from '../../data/componentDatabase';
import './ComponentLibraryView.css';

export function ComponentLibraryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...componentLibrary.map(cat => cat.category)];

  const filteredComponents = componentLibrary
    .filter(category => selectedCategory === 'all' || category.category === selectedCategory)
    .map(category => ({
      ...category,
      components: category.components.filter(comp =>
        comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.components.length > 0);

  return (
    <div className="component-library-view">
      <div className="library-header">
        <h2>NOVA Component Library</h2>
        <p>Browse and explore all available NOVA components</p>
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
        {filteredComponents.map((category, catIndex) => (
          <div key={catIndex} className="category-section">
            <h3 className="category-title">{category.category}</h3>
            <div className="components-list">
              {category.components.map((component, compIndex) => (
                <div key={compIndex} className="component-card">
                  <h4>{component.name}</h4>
                  <p>{component.description}</p>
                  <button className="use-component-btn">
                    Use This Component
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="empty-state">
          <p>No components found matching your search.</p>
        </div>
      )}
    </div>
  );
}