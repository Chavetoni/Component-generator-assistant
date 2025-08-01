import { componentDatabase } from '../data/componentDatabase.js';
import { authenticVisaComponents } from '../data/authenticVisaComponents.js';

export function matchPattern(input) {
  const normalizedInput = input.toLowerCase().trim();
  
  const visaPatterns = {
    'visa-button-primary': ['primary button', 'main button', 'action button'],
    'visa-button-secondary': ['secondary button', 'outline button'],
    'visa-button-large': ['large button', 'big button'],
    'visa-input-text': ['text input', 'input field', 'text field'],
    'visa-input-email': ['email input', 'email field'],
    'visa-input-password': ['password input', 'password field'],
    'visa-textarea': ['textarea', 'text area', 'multiline'],
    'visa-checkbox': ['checkbox', 'check box', 'toggle'],
    'visa-checkbox-group': ['checkbox group', 'multiple checkboxes'],
    'visa-radio-group': ['radio button', 'radio input', 'radio group'],
    'visa-accordion': ['accordion', 'collapsible', 'expandable'],
    'visa-progress-bar': ['progress bar', 'progress', 'loading'],
    'visa-progress-determinate': ['progress with value', 'determinate progress'],
    'visa-alert-info': ['info alert', 'information'],
    'visa-alert-success': ['success alert', 'success message'],
    'visa-alert-warning': ['warning alert', 'warning message'],
    'visa-alert-error': ['error alert', 'error message'],
    'visa-avatar': ['avatar', 'profile picture', 'user icon'],
    'visa-avatar-small': ['small avatar', 'tiny avatar'],
    'visa-avatar-large': ['large avatar', 'big avatar'],
    'visa-breadcrumb': ['breadcrumb', 'navigation trail'],
    'visa-tabs': ['tabs', 'tab navigation'],
    'visa-login-form': ['login form', 'sign in form', 'authentication'],
    'visa-contact-form': ['contact form', 'contact us', 'feedback form']
  };

  for (const [componentId, keywords] of Object.entries(visaPatterns)) {
    if (keywords.some(keyword => normalizedInput.includes(keyword))) {
      const component = authenticVisaComponents.find(c => c.id === componentId);
      if (component) {
        return {
          components: [{ name: component.name, purpose: component.description, props: '' }],
          code: component.code,
          preview: component.preview
        };
      }
    }
  }

  const patterns = {
    login: ['login', 'signin', 'sign in', 'authenticate', 'auth form'],
    navigation: ['nav', 'menu', 'navigation', 'navbar', 'sidebar'],
    button: ['button', 'btn', 'action', 'submit'],
    card: ['card', 'panel', 'container', 'box'],
    table: ['table', 'data', 'grid', 'list'],
    modal: ['modal', 'dialog', 'popup', 'overlay'],
    dashboard: ['dashboard', 'analytics', 'metrics', 'stats', 'overview', 'admin panel'],
    search: ['search', 'find', 'filter', 'lookup', 'discover'],
    productCard: ['product', 'item card', 'product grid', 'catalog', 'shop', 'store'],
    settings: ['settings', 'preferences', 'config', 'options', 'account settings'],
    alert: ['alert', 'notification', 'message', 'warning', 'error', 'success'],
    profile: ['profile', 'user card', 'account', 'user info', 'user profile']
  };

  for (const [key, keywords] of Object.entries(patterns)) {
    if (keywords.some(keyword => normalizedInput.includes(keyword))) {
      return componentDatabase[key] || null;
    }
  }

  if (normalizedInput.includes('form') || normalizedInput.includes('input')) {
    if (normalizedInput.includes('login') || normalizedInput.includes('sign')) {
      return componentDatabase.login;
    }
    return {
      components: [
        { name: 'FormContainer', purpose: 'Form wrapper', props: 'onSubmit, children' },
        { name: 'Input', purpose: 'Text input field', props: 'type, label, required' },
        { name: 'Button', purpose: 'Submit button', props: 'type, variant, children' }
      ],
      code: `import React, { useState } from 'react';
import { FormContainer, Input, Button } from '@visa/nova-react';

function CustomForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input 
        type="text" 
        label="Field Label" 
        required 
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </FormContainer>
  );
}

export default CustomForm;`,
      preview: 'form'
    };
  }

  return null;
}

export function getQuickActions(pattern) {
  const baseActions = ['+ Add validation', '+ Add loading state', '+ Make responsive'];
  
  const patternSpecificActions = {
    login: ['+ Add forgot password', '+ Add social login', '+ Add captcha'],
    navigation: ['+ Add dropdown', '+ Add search', '+ Add user menu'],
    button: ['+ Add icon', '+ Change size', '+ Add tooltip'],
    card: ['+ Add image', '+ Add actions', '+ Change elevation'],
    table: ['+ Add sorting', '+ Add filters', '+ Add export'],
    modal: ['+ Add confirmation', '+ Change size', '+ Add backdrop'],
    dashboard: ['+ Add charts', '+ Add filters', '+ Add export', '+ Add real-time data'],
    search: ['+ Add autocomplete', '+ Add recent searches', '+ Add advanced filters'],
    productCard: ['+ Add wishlist', '+ Add compare', '+ Add quick view'],
    settings: ['+ Add categories', '+ Add search', '+ Add reset option'],
    alert: ['+ Add auto-dismiss', '+ Add actions', '+ Add icons'],
    profile: ['+ Add edit mode', '+ Add social links', '+ Add activity feed']
  };

  return [...baseActions, ...(patternSpecificActions[pattern] || [])];
}