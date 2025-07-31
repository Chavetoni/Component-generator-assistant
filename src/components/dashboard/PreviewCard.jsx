import { Card } from '../ui/Card';
import './PreviewCard.css';

export function PreviewCard({ preview, code }) {
  const renderPreview = () => {
    // If we have code, render it directly with Visa styles
    if (code && code.trim()) {
      return (
        <div className="preview-content">
          <div className="dynamic-preview" dangerouslySetInnerHTML={{ __html: code }} />
        </div>
      );
    }

    if (!preview) {
      return (
        <div className="preview-empty">
          <p>Preview will appear here...</p>
        </div>
      );
    }

    switch (preview) {
      case 'login':
        return (
          <div className="preview-content">
            <div className="preview-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="preview-input" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="preview-input" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>
              <button className="preview-button">Login</button>
            </div>
          </div>
        );
      
      case 'navigation':
        return (
          <div className="preview-content">
            <nav className="preview-nav">
              <a href="#" className="nav-item active">Dashboard</a>
              <div className="nav-group">
                <span className="nav-group-title">Account</span>
                <a href="#" className="nav-item">Profile</a>
                <a href="#" className="nav-item">Settings</a>
              </div>
              <a href="#" className="nav-item">Payments</a>
            </nav>
          </div>
        );
      
      case 'button':
        return (
          <div className="preview-content">
            <div className="button-group">
              <button className="preview-button primary">Primary Action</button>
              <button className="preview-button secondary">Secondary Action</button>
              <button className="preview-button outline">Cancel</button>
            </div>
          </div>
        );
      
      case 'card':
        return (
          <div className="preview-content">
            <div className="preview-card">
              <div className="card-header">
                <div>
                  <h4>Payment Method</h4>
                  <p>Add a new payment method to your account</p>
                </div>
                <button className="text-button">Edit</button>
              </div>
              <div className="card-body">
                <p>Your payment information is encrypted and secure.</p>
              </div>
              <div className="card-footer">
                <button className="preview-button outline">Cancel</button>
                <button className="preview-button primary">Add Payment Method</button>
              </div>
            </div>
          </div>
        );
      
      case 'table':
        return (
          <div className="preview-content">
            <table className="preview-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>John Doe</td>
                  <td>$1,234.56</td>
                  <td><span className="status-badge active">Active</span></td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Jane Smith</td>
                  <td>$2,345.67</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      
      case 'modal':
        return (
          <div className="preview-content">
            <button className="preview-button primary">Open Modal</button>
            <div className="preview-modal">
              <div className="modal-header">
                <h4>Confirm Action</h4>
                <button className="close-button">×</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to proceed with this action?</p>
                <p>This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button className="preview-button outline">Cancel</button>
                <button className="preview-button primary">Confirm</button>
              </div>
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className="preview-content">
            <div className="dashboard-grid">
              <div className="metrics-row">
                <div className="metric-card">
                  <span className="metric-value">$124,563</span>
                  <span className="metric-label">Total Revenue</span>
                  <span className="metric-trend positive">+12%</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">8,429</span>
                  <span className="metric-label">Active Users</span>
                  <span className="metric-trend positive">+5%</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">3.2%</span>
                  <span className="metric-label">Conversion</span>
                  <span className="metric-trend negative">-2%</span>
                </div>
              </div>
              <div className="chart-placeholder">
                <span>📊 Revenue Chart</span>
              </div>
            </div>
          </div>
        );
      
      case 'search':
        return (
          <div className="preview-content">
            <div className="search-interface">
              <div className="search-bar">
                <input type="text" className="preview-input" placeholder="Search products, services..." />
                <button className="search-button">🔍</button>
              </div>
              <div className="search-filters">
                <span className="filter-tag">Category: All</span>
                <span className="filter-tag">Date: Last 30 days</span>
              </div>
              <div className="search-results">
                <div className="result-item">
                  <strong>Premium Product</strong>
                  <p>High-quality item with great reviews</p>
                </div>
                <div className="result-item">
                  <strong>Basic Service</strong>
                  <p>Affordable option for everyday needs</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'productCard':
        return (
          <div className="preview-content">
            <div className="product-grid">
              <div className="product-card">
                <div className="product-image">📱</div>
                <div className="product-info">
                  <h4>Premium Headphones</h4>
                  <p>High-quality audio experience</p>
                  <div className="price-display">
                    <span className="current-price">$199.99</span>
                    <span className="original-price">$249.99</span>
                  </div>
                  <button className="preview-button primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="preview-content">
            <div className="settings-panel">
              <div className="settings-group">
                <h4>Appearance</h4>
                <div className="setting-item">
                  <label>Theme</label>
                  <select className="preview-select">
                    <option>Auto</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
              <div className="settings-group">
                <h4>Notifications</h4>
                <div className="setting-item">
                  <label>Push Notifications</label>
                  <div className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </div>
                </div>
              </div>
              <button className="preview-button primary">Save Changes</button>
            </div>
          </div>
        );
      
      case 'alert':
        return (
          <div className="preview-content">
            <div className="alerts-stack">
              <div className="alert success">
                <span className="alert-icon">✅</span>
                <div className="alert-content">
                  <strong>Success!</strong>
                  <p>Your changes have been saved successfully.</p>
                </div>
                <button className="alert-close">×</button>
              </div>
              <div className="alert warning">
                <span className="alert-icon">⚠️</span>
                <div className="alert-content">
                  <strong>Warning</strong>
                  <p>Your session will expire in 5 minutes.</p>
                </div>
                <button className="preview-button outline small">Extend</button>
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="preview-content">
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">SJ</div>
                <div className="profile-info">
                  <h4>Sarah Johnson</h4>
                  <p>Senior Product Manager</p>
                  <span className="profile-email">sarah.johnson@company.com</span>
                  <span className="verified-badge">✓ Verified</span>
                </div>
              </div>
              <div className="profile-actions">
                <button className="preview-button primary">Edit Profile</button>
                <button className="preview-button outline">View Activity</button>
                <button className="preview-button outline">Settings</button>
              </div>
            </div>
          </div>
        );
      
      case 'input':
        return (
          <div className="preview-content">
            <div className="preview-form">
              <div className="form-group">
                <label>Label</label>
                <input type="text" className="preview-input" placeholder="Enter text..." />
              </div>
            </div>
          </div>
        );
      
      case 'select':
        return (
          <div className="preview-content">
            <div className="preview-form">
              <div className="form-group">
                <label>Choose an option</label>
                <select className="preview-select">
                  <option>Select...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="preview-content">
            <div className="preview-form">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to the terms</span>
              </label>
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div className="preview-content">
            <ul className="preview-list">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </div>
        );
      
      case 'form':
        return (
          <div className="preview-content">
            <form className="preview-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="preview-input" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="preview-input" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="preview-textarea" rows={4}></textarea>
              </div>
              <button className="preview-button primary">Send Message</button>
            </form>
          </div>
        );
      
      case 'layout':
        return (
          <div className="preview-content">
            <div className="preview-grid">
              <div className="grid-column">
                <h4>Left Column</h4>
                <p>Content for the left side.</p>
              </div>
              <div className="grid-column">
                <h4>Right Column</h4>
                <p>Content for the right side.</p>
              </div>
            </div>
          </div>
        );
      
      case 'hero':
        return (
          <div className="preview-content">
            <section className="preview-hero">
              <h1>Welcome to Our Site</h1>
              <p>Discover amazing features and services</p>
              <button className="preview-button primary large">Get Started</button>
            </section>
          </div>
        );
      
      case 'accordion':
        return (
          <div className="preview-content">
            <details className="v-accordion">
              <summary className="v-button v-button-secondary v-button-large v-accordion-heading">
                <span>▶</span>
                Accordion Title
              </summary>
              <div className="v-accordion-panel">
                <p>This is the accordion content that expands when clicked.</p>
              </div>
            </details>
          </div>
        );
      
      case 'radio':
        return (
          <div className="preview-content">
            <div className="v-flex v-flex-col v-gap-4">
              <div className="v-flex v-align-items-center v-gap-2">
                <input className="v-radio" id="radio-1" name="radio-group" type="radio" defaultChecked />
                <label className="v-label" htmlFor="radio-1">Option 1</label>
              </div>
              <div className="v-flex v-align-items-center v-gap-2">
                <input className="v-radio" id="radio-2" name="radio-group" type="radio" />
                <label className="v-label" htmlFor="radio-2">Option 2</label>
              </div>
            </div>
          </div>
        );
      
      case 'textarea':
        return (
          <div className="preview-content">
            <div className="v-flex v-flex-col v-gap-4">
              <label className="v-label" htmlFor="textarea-preview">Message</label>
              <div className="v-input-container v-surface">
                <textarea className="v-input" id="textarea-preview" rows={4} placeholder="Enter your message..."></textarea>
              </div>
            </div>
          </div>
        );
      
      case 'avatar':
        return (
          <div className="preview-content">
            <div className="v-flex v-align-items-center v-gap-4">
              <span className="v-avatar v-avatar-small">JS</span>
              <span className="v-avatar">AM</span>
              <span className="v-avatar v-avatar-large">SJ</span>
            </div>
          </div>
        );
      
      case 'progress':
        return (
          <div className="preview-content">
            <div className="v-flex v-flex-col v-gap-4">
              <div>
                <progress className="v-progress v-progress-bar" value="60" max="100"></progress>
                <div className="v-progress-label">60% complete</div>
              </div>
              <div>
                <progress className="v-progress v-progress-bar"></progress>
                <div className="v-progress-label">Loading...</div>
              </div>
            </div>
          </div>
        );
      
      case 'spinner':
        return (
          <div className="preview-content">
            <div className="v-spinner">
              <svg className="v-spinner-svg" viewBox="0 0 50 50">
                <circle className="v-spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
              </svg>
            </div>
          </div>
        );
      
      case 'toast':
        return (
          <div className="preview-content">
            <div className="v-toast v-surface">
              <div className="v-toast-content">
                <p className="v-typography-body-medium">Changes saved successfully</p>
              </div>
              <button className="v-button v-button-tertiary v-button-icon">×</button>
            </div>
          </div>
        );
      
      case 'breadcrumb':
        return (
          <div className="preview-content">
            <nav className="v-breadcrumb">
              <ol className="v-breadcrumb-list">
                <li className="v-breadcrumb-item">
                  <a href="#" className="v-link">Home</a>
                  <span className="v-breadcrumb-separator">›</span>
                </li>
                <li className="v-breadcrumb-item">
                  <a href="#" className="v-link">Products</a>
                  <span className="v-breadcrumb-separator">›</span>
                </li>
                <li className="v-breadcrumb-item">
                  <span>Details</span>
                </li>
              </ol>
            </nav>
          </div>
        );
      
      case 'tabs':
        return (
          <div className="preview-content">
            <div className="v-tabs">
              <div className="v-tabs-list">
                <button className="v-tab v-tab-active">Tab 1</button>
                <button className="v-tab">Tab 2</button>
                <button className="v-tab">Tab 3</button>
              </div>
              <div className="v-tab-panel">
                <p className="v-typography-body-medium">Content for tab 1</p>
              </div>
            </div>
          </div>
        );
      
      case 'pagination':
        return (
          <div className="preview-content">
            <nav className="v-pagination">
              <button className="v-button v-button-secondary v-button-icon">‹</button>
              <button className="v-button v-button-secondary">1</button>
              <button className="v-button v-button-tertiary">2</button>
              <button className="v-button v-button-tertiary">3</button>
              <span className="v-pagination-ellipsis">...</span>
              <button className="v-button v-button-tertiary">10</button>
              <button className="v-button v-button-secondary v-button-icon">›</button>
            </nav>
          </div>
        );
      
      case 'badge':
        return (
          <div className="preview-content">
            <div className="v-flex v-align-items-center v-gap-4">
              <span className="v-badge">New</span>
              <span className="v-badge v-badge-count">99+</span>
            </div>
          </div>
        );
      
      case 'tag':
        return (
          <div className="preview-content">
            <div className="v-tag">
              <span className="v-tag-label">Category</span>
              <button className="v-tag-remove">×</button>
            </div>
          </div>
        );
      
      case 'tooltip':
        return (
          <div className="preview-content">
            <div className="v-tooltip-container">
              <button className="v-button">Hover me</button>
              <div className="v-tooltip">
                <div className="v-tooltip-content">This is a helpful tooltip</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="preview-content">
            <div className="preview-form">
              <div className="form-group">
                <label>Field Label</label>
                <input type="text" className="preview-input" placeholder="Enter value" />
              </div>
              <button className="preview-button primary">Submit</button>
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="preview-card">
      <h3>Live Preview</h3>
      <div className="preview-container">
        {renderPreview()}
      </div>
    </Card>
  );
}