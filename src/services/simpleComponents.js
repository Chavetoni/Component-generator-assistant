export const simpleComponents = [
  // Basic Components
  {
    id: 'button-primary',
    name: 'Primary Button',
    category: 'Basic',
    description: 'A primary action button with Visa blue styling',
    code: `<button className="btn btn-primary">Click Me</button>`,
    preview: 'button'
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    category: 'Basic',
    description: 'A secondary action button with outline styling',
    code: `<button className="btn btn-secondary">Learn More</button>`,
    preview: 'button'
  },
  {
    id: 'input-text',
    name: 'Text Input',
    category: 'Basic',
    description: 'A simple text input field',
    code: `<div className="form-group">
  <label htmlFor="text-input">Label</label>
  <input type="text" id="text-input" className="input" placeholder="Enter text..." />
</div>`,
    preview: 'input'
  },
  {
    id: 'select-dropdown',
    name: 'Dropdown Select',
    category: 'Basic',
    description: 'A dropdown selection field',
    code: `<div className="form-group">
  <label htmlFor="select">Choose an option</label>
  <select id="select" className="select">
    <option value="">Select...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>`,
    preview: 'select'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Basic',
    description: 'A checkbox input with label',
    code: `<label className="checkbox-label">
  <input type="checkbox" className="checkbox" />
  <span>I agree to the terms</span>
</label>`,
    preview: 'checkbox'
  },

  // Cards
  {
    id: 'simple-card',
    name: 'Simple Card',
    category: 'Cards',
    description: 'A basic card container',
    code: `<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here. This is a simple card component.</p>
</div>`,
    preview: 'card'
  },
  {
    id: 'card-with-image',
    name: 'Card with Image',
    category: 'Cards',
    description: 'A card with image header',
    code: `<div className="card">
  <img src="https://via.placeholder.com/300x150" alt="Card image" className="card-image" />
  <div className="card-body">
    <h3>Featured Content</h3>
    <p>This card includes an image header for visual appeal.</p>
    <button className="btn btn-primary">View Details</button>
  </div>
</div>`,
    preview: 'card'
  },
  {
    id: 'info-card',
    name: 'Info Card',
    category: 'Cards',
    description: 'An informational card with icon',
    code: `<div className="card info-card">
  <div className="card-icon">ℹ️</div>
  <h4>Information</h4>
  <p>This is an informational message for users.</p>
</div>`,
    preview: 'card'
  },

  // Alerts
  {
    id: 'success-alert',
    name: 'Success Alert',
    category: 'Alerts',
    description: 'A success message alert',
    code: `<div className="alert alert-success">
  <strong>Success!</strong> Your action was completed successfully.
</div>`,
    preview: 'alert'
  },
  {
    id: 'warning-alert',
    name: 'Warning Alert',
    category: 'Alerts',
    description: 'A warning message alert',
    code: `<div className="alert alert-warning">
  <strong>Warning!</strong> Please review your information before proceeding.
</div>`,
    preview: 'alert'
  },
  {
    id: 'error-alert',
    name: 'Error Alert',
    category: 'Alerts',
    description: 'An error message alert',
    code: `<div className="alert alert-error">
  <strong>Error!</strong> Something went wrong. Please try again.
</div>`,
    preview: 'alert'
  },

  // Lists
  {
    id: 'simple-list',
    name: 'Simple List',
    category: 'Lists',
    description: 'A basic unordered list',
    code: `<ul className="list">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`,
    preview: 'list'
  },
  {
    id: 'numbered-list',
    name: 'Numbered List',
    category: 'Lists',
    description: 'An ordered list with numbers',
    code: `<ol className="list numbered">
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>`,
    preview: 'list'
  },
  {
    id: 'icon-list',
    name: 'List with Icons',
    category: 'Lists',
    description: 'A list with icon bullets',
    code: `<ul className="list icon-list">
  <li><span className="icon">✓</span> Completed task</li>
  <li><span className="icon">✓</span> Another completed task</li>
  <li><span className="icon">○</span> Pending task</li>
</ul>`,
    preview: 'list'
  },

  // Navigation
  {
    id: 'nav-links',
    name: 'Navigation Links',
    category: 'Navigation',
    description: 'Horizontal navigation links',
    code: `<nav className="nav-horizontal">
  <a href="#home" className="nav-link active">Home</a>
  <a href="#about" className="nav-link">About</a>
  <a href="#services" className="nav-link">Services</a>
  <a href="#contact" className="nav-link">Contact</a>
</nav>`,
    preview: 'navigation'
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Breadcrumb navigation',
    code: `<nav className="breadcrumb">
  <a href="#home">Home</a>
  <span className="separator">/</span>
  <a href="#products">Products</a>
  <span className="separator">/</span>
  <span className="current">Details</span>
</nav>`,
    preview: 'navigation'
  },

  // Forms
  {
    id: 'contact-form',
    name: 'Contact Form',
    category: 'Forms',
    description: 'A simple contact form',
    code: `<form className="form">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" className="input" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" className="input" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" className="textarea" rows="4" required></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Send Message</button>
</form>`,
    preview: 'form'
  },
  {
    id: 'search-bar',
    name: 'Search Bar',
    category: 'Forms',
    description: 'A search input with button',
    code: `<div className="search-bar">
  <input type="search" className="search-input" placeholder="Search..." />
  <button className="btn btn-primary">Search</button>
</div>`,
    preview: 'search'
  },

  // Layout
  {
    id: 'two-column',
    name: 'Two Column Layout',
    category: 'Layout',
    description: 'A simple two-column layout',
    code: `<div className="grid grid-cols-2">
  <div className="column">
    <h3>Left Column</h3>
    <p>Content for the left side.</p>
  </div>
  <div className="column">
    <h3>Right Column</h3>
    <p>Content for the right side.</p>
  </div>
</div>`,
    preview: 'layout'
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Layout',
    description: 'A hero banner section',
    code: `<section className="hero">
  <h1 className="hero-title">Welcome to Our Site</h1>
  <p className="hero-subtitle">Discover amazing features and services</p>
  <button className="btn btn-primary btn-large">Get Started</button>
</section>`,
    preview: 'hero'
  }
];