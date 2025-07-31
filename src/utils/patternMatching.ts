import { componentDatabase } from '../data/componentDatabase';
import type { ComponentSuggestion } from '../types/components';

export function matchPattern(input: string): ComponentSuggestion | null {
  const normalizedInput = input.toLowerCase().trim();
  
  // Direct pattern matching
  const patterns: Record<string, string[]> = {
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

  // Form-related patterns
  if (normalizedInput.includes('form') || normalizedInput.includes('input')) {
    if (normalizedInput.includes('login') || normalizedInput.includes('sign')) {
      return componentDatabase.login;
    }
    // Return a generic form pattern
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
    // Handle form submission
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

export function getQuickActions(pattern: string): string[] {
  const baseActions = ['+ Add validation', '+ Add loading state', '+ Make responsive'];
  
  const patternSpecificActions: Record<string, string[]> = {
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