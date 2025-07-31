// Based on actual Visa Design System documentation examples
export const authenticVisaComponents = [
  // Actions
  {
    id: 'visa-button-primary',
    name: 'Primary Button',
    category: 'Actions',
    description: 'Primary action button from Visa Design System',
    code: `<button class="v-button" type="button">
  Primary action
</button>`,
    preview: 'button'
  },
  {
    id: 'visa-button-secondary',
    name: 'Secondary Button',
    category: 'Actions',
    description: 'Secondary button variant',
    code: `<button class="v-button v-button-secondary" type="button">
  Secondary action
</button>`,
    preview: 'button'
  },
  {
    id: 'visa-button-large',
    name: 'Large Button',
    category: 'Actions',
    description: 'Large size button variant',
    code: `<button class="v-button v-button-large" type="button">
  Large action
</button>`,
    preview: 'button'
  },

  // Structure and Layout
  {
    id: 'visa-accordion',
    name: 'Accordion',
    category: 'Structure and Layout',
    description: 'Expandable content sections with Visa icons',
    code: `<details class="v-accordion">
  <summary class="v-button v-button-secondary v-button-large v-accordion-heading">
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-closed" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-right-tiny">
      </use>
    </svg>
    <svg aria-hidden="true" class="v-icon v-icon-visa v-icon-tiny v-accordion-toggle-icon v-accordion-toggle-icon-open" focusable="false" viewbox="0 0 16 16">
      <use href="#visa-chevron-down-tiny">
      </use>
    </svg>
    Accordion title
  </summary>
  <div class="v-accordion-panel">
    <p>This is required text that describes the accordion section in more detail.</p>
  </div>
</details>`,
    preview: 'accordion'
  },

  // Inputs
  {
    id: 'visa-input-text',
    name: 'Text Input',
    category: 'Inputs',
    description: 'Standard text input field with Visa styling',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-test-default">
    Label (required)
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-test-default" name="text-input-default" type="text"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'visa-input-email',
    name: 'Email Input',
    category: 'Inputs',
    description: 'Email input field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-email-default">
    Email address
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-email-default" name="email-input-default" type="email" placeholder="name@example.com"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'visa-input-password',
    name: 'Password Input',
    category: 'Inputs',
    description: 'Password input field',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="input-password-default">
    Password
  </label>
  <div class="v-input-container v-surface v-flex-row">
    <input class="v-input" id="input-password-default" name="password-input-default" type="password"/>
  </div>
</div>`,
    preview: 'input'
  },
  {
    id: 'visa-textarea',
    name: 'Textarea',
    category: 'Inputs',
    description: 'Multi-line text input',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <label class="v-label" for="textarea-default">
    Message
  </label>
  <div class="v-input-container v-surface">
    <textarea class="v-input" id="textarea-default" name="textarea-default" rows="4"></textarea>
  </div>
</div>`,
    preview: 'textarea'
  },

  // Selection Controls
  {
    id: 'visa-checkbox',
    name: 'Checkbox',
    category: 'Selection Controls',
    description: 'Checkbox with proper Visa styling and structure',
    code: `<div class="v-flex v-align-items-center v-gap-2">
  <input class="v-checkbox" id="checkbox-default" type="checkbox"/>
  <label class="v-label v-typography-label-large" for="checkbox-default">
    Label
  </label>
</div>`,
    preview: 'checkbox'
  },
  {
    id: 'visa-checkbox-group',
    name: 'Checkbox Group',
    category: 'Selection Controls',
    description: 'Multiple checkboxes grouped together',
    code: `<div class="v-flex v-flex-col v-gap-4">
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-checkbox" id="checkbox-1" type="checkbox"/>
    <label class="v-label v-typography-label-large" for="checkbox-1">
      Option 1
    </label>
  </div>
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-checkbox" id="checkbox-2" type="checkbox"/>
    <label class="v-label v-typography-label-large" for="checkbox-2">
      Option 2
    </label>
  </div>
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-checkbox" id="checkbox-3" type="checkbox"/>
    <label class="v-label v-typography-label-large" for="checkbox-3">
      Option 3
    </label>
  </div>
</div>`,
    preview: 'checkbox'
  },
  {
    id: 'visa-radio-group',
    name: 'Radio Button Group',
    category: 'Selection Controls',
    description: 'Radio buttons for single selection',
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
  <div class="v-flex v-align-items-center v-gap-2">
    <input class="v-radio" id="radio-3" name="radio-group" type="radio" value="option3"/>
    <label class="v-label v-typography-label-large" for="radio-3">
      Option 3
    </label>
  </div>
</div>`,
    preview: 'radio'
  },

  // Feedback and Status
  {
    id: 'visa-progress-bar',
    name: 'Progress Bar',
    category: 'Feedback and Status',
    description: 'Progress indicator with label from Visa docs',
    code: `<progress class="v-progress v-progress-bar v-mb-8" id="progress-bar-indeterminate">
</progress>
<label class="v-progress-label" for="progress-bar-indeterminate">
  <span>
    Please wait...
  </span>
</label>`,
    preview: 'progress'
  },
  {
    id: 'visa-progress-determinate',
    name: 'Determinate Progress',
    category: 'Feedback and Status',
    description: 'Progress bar with specific value',
    code: `<progress class="v-progress v-progress-bar v-mb-8" id="progress-bar-determinate" value="60" max="100">
</progress>
<label class="v-progress-label" for="progress-bar-determinate">
  <span>
    60% complete
  </span>
</label>`,
    preview: 'progress'
  },
  {
    id: 'visa-alert-info',
    name: 'Info Alert',
    category: 'Feedback and Status',
    description: 'Informational alert message',
    code: `<div class="v-alert v-alert-info" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-info"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Information</strong>
    <p class="v-typography-body-medium">This is an informational message for users.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'visa-alert-success',
    name: 'Success Alert',
    category: 'Feedback and Status',
    description: 'Success confirmation message',
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
    id: 'visa-alert-warning',
    name: 'Warning Alert',
    category: 'Feedback and Status',
    description: 'Warning message for user attention',
    code: `<div class="v-alert v-alert-warning" role="alert">
  <svg class="v-icon v-icon-visa v-alert-icon" viewBox="0 0 24 24">
    <use href="#visa-alert-triangle"></use>
  </svg>
  <div class="v-alert-content">
    <strong class="v-typography-label-large">Warning</strong>
    <p class="v-typography-body-medium">Please review your information before proceeding.</p>
  </div>
</div>`,
    preview: 'alert'
  },
  {
    id: 'visa-alert-error',
    name: 'Error Alert',
    category: 'Feedback and Status',
    description: 'Error message for failed actions',
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

  // Identity/Avatar
  {
    id: 'visa-avatar',
    name: 'Avatar',
    category: 'Identity',
    description: 'User avatar with initials from Visa docs',
    code: `<span aria-label="Alex Miller" class="v-avatar">
  AM
</span>`,
    preview: 'avatar'
  },
  {
    id: 'visa-avatar-small',
    name: 'Small Avatar',
    category: 'Identity',
    description: 'Small size avatar variant',
    code: `<span aria-label="John Smith" class="v-avatar v-avatar-small">
  JS
</span>`,
    preview: 'avatar'
  },
  {
    id: 'visa-avatar-large',
    name: 'Large Avatar',
    category: 'Identity',
    description: 'Large size avatar variant',
    code: `<span aria-label="Sarah Johnson" class="v-avatar v-avatar-large">
  SJ
</span>`,
    preview: 'avatar'
  },

  // Navigation
  {
    id: 'visa-breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Navigation breadcrumb trail',
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
    id: 'visa-tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Tab navigation component',
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
    <p class="v-typography-body-medium">Content for the first tab</p>
  </div>
</div>`,
    preview: 'tabs'
  },

  // Common Patterns/Forms
  {
    id: 'visa-login-form',
    name: 'Login Form',
    category: 'Patterns',
    description: 'Complete login form using Visa components',
    code: `<form class="v-form">
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
    
    <button class="v-button v-button-large" type="submit">
      Sign In
    </button>
  </div>
</form>`,
    preview: 'login'
  },
  {
    id: 'visa-contact-form',
    name: 'Contact Form',
    category: 'Patterns',
    description: 'Contact form with multiple input types',
    code: `<form class="v-form">
  <div class="v-flex v-flex-col v-gap-6">
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="contact-name">
        Full name
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="contact-name" name="name" type="text" required/>
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
  </div>
</form>`,
    preview: 'form'
  }
];