import { Card } from '../ui/Card';
import './PreviewCard.css';

interface PreviewCardProps {
  preview: string | null;
}

export function PreviewCard({ preview }: PreviewCardProps) {
  const renderPreview = () => {
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