export const visaComponents = [
  // Buttons & Actions
  {
    id: 'v-button-primary',
    name: 'Primary Button',
    category: 'Buttons & Actions',
    description: 'Primary action button with Visa styling',
    code: `<button class="v-button" type="button">
  Primary action
</button>`,
    preview: 'button'
  },
  {
    id: 'v-button-secondary',
    name: 'Secondary Button',
    category: 'Buttons & Actions',
    description: 'Secondary action button',
    code: `<button class="v-button v-button-secondary" type="button">
  Secondary action
</button>`,
    preview: 'button'
  },
  {
    id: 'v-button-tertiary',
    name: 'Tertiary Button',
    category: 'Buttons & Actions',
    description: 'Tertiary/text-only button',
    code: `<button class="v-button v-button-tertiary" type="button">
  Tertiary action
</button>`,
    preview: 'button'
  },
  {
    id: 'v-button-large',
    name: 'Large Button',
    category: 'Buttons & Actions',
    description: 'Large size button',
    code: `<button class="v-button v-button-large" type="button">
  Large button
</button>`,
    preview: 'button'
  },
  {
    id: 'v-button-small',
    name: 'Small Button',
    category: 'Buttons & Actions',
    description: 'Small size button',
    code: `<button class="v-button v-button-small" type="button">
  Small button
</button>`,
    preview: 'button'
  },

  // Form Inputs
  {
    id: 'v-input-text',
    name: 'Text Input',
    category: 'Form Inputs',
    description: 'Standard text input field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-text">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-text" name="text-input" type="text"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'v-input-email',
    name: 'Email Input',
    category: 'Form Inputs',
    description: 'Email input field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-email">
    Email address
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-email" name="email-input" type="email" placeholder="name@example.com"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'v-input-password',
    name: 'Password Input',
    category: 'Form Inputs',
    description: 'Password input field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-password">
    Password
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-password" name="password-input" type="password"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'v-checkbox',
    name: 'Checkbox',
    category: 'Form Inputs',
    description: 'Checkbox input with label',
    code: `<div class="v-flex v-align-items-center v-gap-2">
  <input class="v-checkbox" id="checkbox-default" type="checkbox"/>
  <label class="v-label v-typography-label-large" for="checkbox-default">
    Label
  </label>
</div>`,
    preview: 'checkbox'
  },
  {
    id: 'v-radio',
    name: 'Radio Button',
    category: 'Form Inputs',
    description: 'Radio button input',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-radio" id="radio-1" name="radio-group" type="radio" value="option1"/>
    <label class="v-label v-typography-label-large" for="radio-1">
      Option 1
    </label>
  </div>
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-radio" id="radio-2" name="radio-group" type="radio" value="option2"/>
    <label class="v-label v-typography-label-large" for="radio-2">
      Option 2
    </label>
  </div>
</div>`,
    preview: 'radio'
  },
  {
    id: 'v-select',
    name: 'Select Dropdown',
    category: 'Form Inputs',
    description: 'Dropdown select field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="select-default">
    Select an option
  </label>
  <div class="v-select-container v-surface">
    <select class="v-select" id="select-default" name="select-default">
      <option value="">Choose...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div>`,
    preview: 'select'
  },
  {
    id: 'v-textarea',
    name: 'Textarea',
    category: 'Form Inputs',
    description: 'Multi-line text input',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="textarea-default">
    Message
  </label>
  <div class="v-input-container v-surface">
    <textarea class="v-input" id="textarea-default" name="textarea" rows="4"></textarea>
  </div>
</div>`,
    preview: 'textarea'
  },

  // Layout & Containers
  {
    id: 'v-accordion',
    name: 'Accordion',
    category: 'Layout & Containers',
    description: 'Expandable content accordion',
    code: `<details class="v-accordion">
  <summary class="v-button v-button-secondary v-button-large v-accordion-heading">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-right-tiny"></use>
    </svg>
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-down-tiny"></use>
    </svg>
    Accordion title
  </summary>
  <div class="v-accordion-panel">
    <p>This is required text that describes the accordion section in more detail.</p>
  </div>
</details>`,
    preview: 'accordion'
  },
  {
    id: 'v-card',
    name: 'Card',
    category: 'Layout & Containers',
    description: 'Content card container',
    code: `<div class="v-card v-surface v-p-6">
  <h3 class="v-typography-heading-small v-mb-4">Card Title</h3>
  <p class="v-typography-body-medium">
    This is a card component that can contain various types of content.
  </p>
</div>`,
    preview: 'card'
  },
  {
    id: 'v-card-with-actions',
    name: 'Card with Actions',
    category: 'Layout & Containers',
    description: 'Card with header and action buttons',
    code: `<div class="v-card v-surface">
  <div class="v-card-header v-p-6">
    <h3 class="v-typography-heading-small">Card Title</h3>
  </div>
  <div class="v-card-body v-p-6">
    <p class="v-typography-body-medium">
      Card content goes here. This card includes action buttons.
    </p>
  </div>
  <div class="v-card-footer v-p-6 v-flex v-justify-end v-gap-4">
    <button class="v-button v-button-secondary" type="button">Cancel</button>
    <button class="v-button" type="button">Confirm</button>
  </div>
</div>`,
    preview: 'card'
  },
  {
    id: 'v-modal',
    name: 'Modal',
    category: 'Layout & Containers',
    description: 'Modal dialog window',
    code: `<div class="v-modal" role="dialog" aria-modal="true">
  <div class="v-modal-backdrop"></div>
  <div class="v-modal-content v-surface">
    <div class="v-modal-header v-p-6">
      <h2 class="v-typography-heading-medium">Modal Title</h2>
      <button class="v-button v-button-tertiary v-button-icon" aria-label="Close">
        <svg class="v-icon v-icon-visa" viewBox="0 0 24 24">
          <use href="#visa-close"></use>
        </svg>
      </button>
    </div>
    <div class="v-modal-body v-p-6">
      <p class="v-typography-body-medium">Modal content goes here.</p>
    </div>
    <div class="v-modal-footer v-p-6 v-flex v-justify-end v-gap-4">
      <button class="v-button v-button-secondary" type="button">Cancel</button>
      <button class="v-button" type="button">Confirm</button>
    </div>
  </div>
</div>`,
    preview: 'modal'
  },

  // Identity
  {
    id: 'v-avatar',
    name: 'Avatar',
    category: 'Identity',
    description: 'User avatar with initials',
    code: `<span aria-label="Alex Miller" class="v-avatar">
  AM
</span>`,
    preview: 'avatar'
  },
  {
    id: 'v-avatar-large',
    name: 'Large Avatar',
    category: 'Identity',
    description: 'Large size avatar',
    code: `<span aria-label="Sarah Johnson" class="v-avatar v-avatar-large">
  SJ
</span>`,
    preview: 'avatar'
  },
  {
    id: 'v-avatar-small',
    name: 'Small Avatar',
    category: 'Identity',
    description: 'Small size avatar',
    code: `<span aria-label="John Doe" class="v-avatar v-avatar-small">
  JD
</span>`,
    preview: 'avatar'
  },
  {
    id: 'v-avatar-group',
    name: 'Avatar Group',
    category: 'Identity',
    description: 'Multiple avatars grouped together',
    code: `<div class="v-avatar-group">
  <span aria-label="Alex Miller" class="v-avatar">AM</span>
  <span aria-label="Sarah Johnson" class="v-avatar">SJ</span>
  <span aria-label="John Doe" class="v-avatar">JD</span>
  <span class="v-avatar v-avatar-count">+3</span>
</div>`,
    preview: 'avatar'
  },

  // Progress & Loading
  {
    id: 'v-progress-bar',
    name: 'Progress Bar',
    category: 'Progress & Loading',
    description: 'Determinate progress bar',
    code: `<div class="v-flex v-flex-col v-gap-2">
  <progress class="v-progress v-progress-bar" value="60" max="100" id="progress-bar">
  </progress>
  <label class="v-progress-label" for="progress-bar">
    <span>60% complete</span>
  </label>
</div>`,
    preview: 'progress'
  },
  {
    id: 'v-progress-indeterminate',
    name: 'Indeterminate Progress',
    category: 'Progress & Loading',
    description: 'Indeterminate loading progress',
    code: `<div class="v-flex v-flex-col v-gap-2">
  <progress class="v-progress v-progress-bar" id="progress-indeterminate">
  </progress>
  <label class="v-progress-label" for="progress-indeterminate">
    <span>Please wait...</span>
  </label>
</div>`,
    preview: 'progress'
  },
  {
    id: 'v-spinner',
    name: 'Loading Spinner',
    category: 'Progress & Loading',
    description: 'Circular loading spinner',
    code: `<div class="v-spinner" role="status" aria-label="Loading">
  <svg class="v-spinner-svg" viewBox="0 0 50 50">
    <circle class="v-spinner-circle" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
</div>`,
    preview: 'spinner'
  },

  // Feedback & Alerts
  {
    id: 'v-alert-info',
    name: 'Info Alert',
    category: 'Feedback & Alerts',
    description: 'Informational alert message',
    code: `<div class="v-alert v-alert-info" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-info"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Information</strong>
    <p class="v-typography-body-medium">This is an informational message.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'v-alert-success',
    name: 'Success Alert',
    category: 'Feedback & Alerts',
    description: 'Success alert message',
    code: `<div class="v-alert v-alert-success" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-check-circle"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Success!</strong>
    <p class="v-typography-body-medium">Your action was completed successfully.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'v-alert-warning',
    name: 'Warning Alert',
    category: 'Feedback & Alerts',
    description: 'Warning alert message',
    code: `<div class="v-alert v-alert-warning" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-alert-triangle"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Warning</strong>
    <p class="v-typography-body-medium">Please review before proceeding.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'v-alert-error',
    name: 'Error Alert',
    category: 'Feedback & Alerts',
    description: 'Error alert message',
    code: `<div class="v-alert v-alert-error" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-x-circle"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Error</strong>
    <p class="v-typography-body-medium">Something went wrong. Please try again.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'v-toast',
    name: 'Toast Notification',
    category: 'Feedback & Alerts',
    description: 'Temporary notification message',
    code: `<div class="v-toast v-surface" role="status" aria-live="polite">
  <div class="v-toast-content">
    <p class="v-typography-body-medium">Changes saved successfully</p>
  </div>
  <button class="v-button v-button-tertiary v-button-icon" aria-label="Dismiss">
    <svg class="v-icon v-icon-visa" viewBox="0 0 24 24">
      <use href="#visa-close"></use>
    </svg>
  </button>
</div>`,
    preview: 'toast'
  },

  // Navigation
  {
    id: 'v-breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Breadcrumb navigation',
    code: `<nav aria-label="Breadcrumb" class="v-breadcrumb">
  <ol class="v-breadcrumb-list">
    <li class="v-breadcrumb-item">
      <a href="#" class="v-link">Home</a>
      <svg class="v-icon v-icon-visa v-icon-tiny v-breadcrumb-separator" viewBox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use>
      </svg>
    </li>
    <li class="v-breadcrumb-item">
      <a href="#" class="v-link">Products</a>
      <svg class="v-icon v-icon-visa v-icon-tiny v-breadcrumb-separator" viewBox="0 0 16 16">
        <use href="#visa-chevron-right-tiny"></use>
      </svg>
    </li>
    <li class="v-breadcrumb-item">
      <span aria-current="page">Details</span>
    </li>
  </ol>
</nav>`,
    preview: 'breadcrumb'
  },
  {
    id: 'v-tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Tab navigation',
    code: `<div class="v-tabs">
  <div class="v-tabs-list" role="tablist">
    <button class="v-tab v-tab-active" role="tab" aria-selected="true" aria-controls="panel-1">
      Tab 1
    </button>
    <button class="v-tab" role="tab" aria-selected="false" aria-controls="panel-2">
      Tab 2
    </button>
    <button class="v-tab" role="tab" aria-selected="false" aria-controls="panel-3">
      Tab 3
    </button>
  </div>
  <div class="v-tab-panel" id="panel-1" role="tabpanel">
    <p class="v-typography-body-medium">Content for tab 1</p>
  </div>
</div>`,
    preview: 'tabs'
  },
  {
    id: 'v-pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'Page navigation controls',
    code: `<nav aria-label="Pagination" class="v-pagination">
  <button class="v-button v-button-secondary v-button-icon" aria-label="Previous page">
    <svg class="v-icon v-icon-visa" viewBox="0 0 24 24">
      <use href="#visa-chevron-left"></use>
    </svg>
  </button>
  <button class="v-button v-button-secondary" aria-current="page">1</button>
  <button class="v-button v-button-tertiary">2</button>
  <button class="v-button v-button-tertiary">3</button>
  <span class="v-pagination-ellipsis">...</span>
  <button class="v-button v-button-tertiary">10</button>
  <button class="v-button v-button-secondary v-button-icon" aria-label="Next page">
    <svg class="v-icon v-icon-visa" viewBox="0 0 24 24">
      <use href="#visa-chevron-right"></use>
    </svg>
  </button>
</nav>`,
    preview: 'pagination'
  },

  // Data Display
  {
    id: 'v-badge',
    name: 'Badge',
    category: 'Data Display',
    description: 'Status or count indicator',
    code: `<span class="v-badge">New</span>`,
    preview: 'badge'
  },
  {
    id: 'v-badge-count',
    name: 'Count Badge',
    category: 'Data Display',
    description: 'Numeric count badge',
    code: `<span class="v-badge v-badge-count">99+</span>`,
    preview: 'badge'
  },
  {
    id: 'v-tag',
    name: 'Tag',
    category: 'Data Display',
    description: 'Removable tag or chip',
    code: `<div class="v-tag">
  <span class="v-tag-label">Category</span>
  <button class="v-tag-remove" aria-label="Remove tag">
    <svg class="v-icon v-icon-visa v-icon-tiny" viewBox="0 0 16 16">
      <use href="#visa-close-tiny"></use>
    </svg>
  </button>
</div>`,
    preview: 'tag'
  },
  {
    id: 'v-tooltip',
    name: 'Tooltip',
    category: 'Data Display',
    description: 'Hover tooltip',
    code: `<div class="v-tooltip-container">
  <button class="v-button" aria-describedby="tooltip-1">
    Hover me
  </button>
  <div class="v-tooltip" role="tooltip" id="tooltip-1">
    <div class="v-tooltip-content">
      This is a helpful tooltip
    </div>
  </div>
</div>`,
    preview: 'tooltip'
  },

  // Forms & Patterns
  {
    id: 'v-form-login',
    name: 'Login Form',
    category: 'Forms & Patterns',
    description: 'Complete login form pattern',
    code: `<form class="v-form v-card v-surface v-p-8">
  <h2 class="v-typography-heading-medium v-mb-6">Sign In</h2>
  
  <div class="v-flex v-flex-col v-gap-6">
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="login-email">
        Email address
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="login-email" name="email" type="email" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="login-password">
        Password
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="login-password" name="password" type="password" required/>
      </div>
    </div>
    
    <div class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="remember-me" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="remember-me">
        Remember me
      </label>
    </div>
    
    <button class="v-button v-button-large v-w-full" type="submit">
      Sign In
    </button>
    
    <div class="v-text-center">
      <a href="#" class="v-link">Forgot password?</a>
    </div>
  </div>
</form>`,
    preview: 'login'
  },
  {
    id: 'v-form-contact',
    name: 'Contact Form',
    category: 'Forms & Patterns',
    description: 'Contact form with message',
    code: `<form class="v-form v-flex v-flex-col v-gap-6">
  <div class="v-grid v-grid-cols-2 v-gap-6">
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="contact-fname">
        First name
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="contact-fname" name="fname" type="text" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="contact-lname">
        Last name
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="contact-lname" name="lname" type="text" required/>
      </div>
    </div>
  </div>
  
  <div class="v-flex v-flex-col v-gap-4">
    <label class="v-label" for="contact-email">
      Email address
    </label>
    <div class="v-input-container v-surface v-flex-row">
      <input class="v-input" id="contact-email" name="email" type="email" required/>
    </div>
  </div>
  
  <div class="v-flex v-flex-col v-gap-4">
    <label class="v-label" for="contact-message">
      Message
    </label>
    <div class="v-input-container v-surface">
      <textarea class="v-input" id="contact-message" name="message" rows="5" required></textarea>
    </div>
  </div>
  
  <button class="v-button v-button-large" type="submit">
    Send Message
  </button>
</form>`,
    preview: 'form'
  }
];