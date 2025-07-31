export const workingExamples = [
  {
    id: 'login-form',
    name: 'Login Form',
    keywords: ['login', 'signin', 'sign in', 'auth', 'authentication', 'login form'],
    baseComponent: {
      name: ' Login Form',
      description: 'A simple login form with email and password fields',
      code: `<form class="v-form">
  <div class="v-flex v-flex-col v-gap-6">
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="email">
        Email address
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="email" name="email" type="email" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="password">
        Password
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="password" name="password" type="password" required/>
      </div>
    </div>
    
    <button class="v-button v-button-large" type="submit">
      Sign In
    </button>
  </div>
</form>`,
      preview: 'login'
    },
    modifications: [
      {
        id: 'add-remember-me',
        name: '+ Add remember me',
        description: 'Add a remember me checkbox',
        codeTransform: (code) => {
          return code.replace(
            '<button class="v-button v-button-large" type="submit">',
            `<div class="v-flex v-align-items-center v-gap-2">
      <input class="v-checkbox" id="remember-me" type="checkbox"/>
      <label class="v-label v-typography-label-large" for="remember-me">
        Remember me
      </label>
    </div>
    
    <button class="v-button v-button-large" type="submit">`
          );
        }
      },
      {
        id: 'add-forgot-password',
        name: '+ Add forgot password',
        description: 'Add a forgot password link',
        codeTransform: (code) => {
          return code.replace(
            '</button>\n  </div>\n</form>',
            `</button>
    
    <div class="v-text-center">
      <a href="#" class="v-link">Forgot password?</a>
    </div>
  </div>
</form>`
          );
        }
      },
      {
        id: 'add-social-login',
        name: '+ Add social login',
        description: 'Add Google and Facebook login buttons',
        codeTransform: (code) => {
          return code.replace(
            '<button class="v-button v-button-large" type="submit">',
            `<div class="v-flex v-flex-col v-gap-4">
      <button class="v-button v-button-secondary v-button-large" type="button">
        Continue with Google
      </button>
      <button class="v-button v-button-secondary v-button-large" type="button">
        Continue with Facebook
      </button>
    </div>
    
    <div class="v-divider">
      <span>or</span>
    </div>
    
    <button class="v-button v-button-large" type="submit">`
          );
        }
      },
      {
        id: 'make-compact',
        name: '+ Make compact',
        description: 'Reduce spacing and make form more compact',
        codeTransform: (code) => {
          return code
            .replace(/v-gap-6/g, 'v-gap-4')
            .replace(/v-gap-4/g, 'v-gap-2')
            .replace(/v-button-large/g, 'v-button');
        }
      }
    ]
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    keywords: ['contact', 'contact form', 'contact us', 'feedback', 'get in touch'],
    baseComponent: {
      name: ' Contact Form',
      description: 'A contact form with name, email, and message fields',
      code: `<form class="v-form">
  <div class="v-flex v-flex-col v-gap-6">
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="name">
        Full name
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="name" name="name" type="text" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="email">
        Email address
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="email" name="email" type="email" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="message">
        Message
      </label>
      <div class="v-input-container v-surface">
        <textarea class="v-input" id="message" name="message" rows="4" required></textarea>
      </div>
    </div>
    
    <button class="v-button v-button-large" type="submit">
      Send Message
    </button>
  </div>
</form>`,
      preview: 'form'
    },
    modifications: [
      {
        id: 'add-phone',
        name: '+ Add phone field',
        description: 'Add a phone number input field',
        codeTransform: (code) => {
          return code.replace(
            '</div>\n    \n    <div class="v-flex v-flex-col v-gap-4">\n      <label class="v-label" for="message">',
            `</div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="phone">
        Phone number
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="phone" name="phone" type="tel"/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="message">`
          );
        }
      },
      {
        id: 'add-subject',
        name: '+ Add subject field',
        description: 'Add a subject/topic field',
        codeTransform: (code) => {
          return code.replace(
            '</div>\n    \n    <div class="v-flex v-flex-col v-gap-4">\n      <label class="v-label" for="message">',
            `</div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="subject">
        Subject
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="subject" name="subject" type="text" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="message">`
          );
        }
      },
      {
        id: 'two-column',
        name: '+ Make two column',
        description: 'Arrange name and email in two columns',
        codeTransform: (code) => {
          return code.replace(
            `<div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="name">
        Full name
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="name" name="name" type="text" required/>
      </div>
    </div>
    
    <div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="email">
        Email address
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="email" name="email" type="email" required/>
      </div>
    </div>`,
            `<div class="v-grid v-grid-cols-2 v-gap-6">
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="name">
          Full name
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="name" name="name" type="text" required/>
        </div>
      </div>
      
      <div class="v-flex v-flex-col v-gap-4">
        <label class="v-label" for="email">
          Email address
        </label>
        <div class="v-input-container v-surface v-flex-row">
          <input class="v-input" id="email" name="email" type="email" required/>
        </div>
      </div>
    </div>`
          );
        }
      },
      {
        id: 'add-file-upload',
        name: '+ Add file upload',
        description: 'Add a file attachment option',
        codeTransform: (code) => {
          return code.replace(
            '<button class="v-button v-button-large" type="submit">',
            `<div class="v-flex v-flex-col v-gap-4">
      <label class="v-label" for="attachment">
        Attachment (optional)
      </label>
      <div class="v-input-container v-surface v-flex-row">
        <input class="v-input" id="attachment" name="attachment" type="file"/>
      </div>
    </div>
    
    <button class="v-button v-button-large" type="submit">`
          );
        }
      }
    ]
  },
  {
    id: 'button-group',
    name: 'Button Group',
    keywords: ['button group', 'buttons', 'action buttons', 'multiple buttons'],
    baseComponent: {
      name: ' Button Group',
      description: 'A group of action buttons',
      code: `<div class="v-flex v-gap-4">
  <button class="v-button" type="button">
    Primary Action
  </button>
  <button class="v-button v-button-secondary" type="button">
    Secondary Action
  </button>
</div>`,
      preview: 'button'
    },
    modifications: [
      {
        id: 'add-third-button',
        name: '+ Add third button',
        description: 'Add a tertiary/cancel button',
        codeTransform: (code) => {
          return code.replace(
            '</button>\n</div>',
            `</button>
  <button class="v-button v-button-tertiary" type="button">
    Cancel
  </button>
</div>`
          );
        }
      },
      {
        id: 'make-vertical',
        name: '+ Make vertical',
        description: 'Stack buttons vertically',
        codeTransform: (code) => {
          return code.replace('v-flex v-gap-4', 'v-flex v-flex-col v-gap-4');
        }
      },
      {
        id: 'make-large',
        name: '+ Make large',
        description: 'Use large button size',
        codeTransform: (code) => {
          return code.replace(/v-button"/g, 'v-button v-button-large"');
        }
      },
      {
        id: 'add-icons',
        name: '+ Add icons',
        description: 'Add icons to buttons',
        codeTransform: (code) => {
          return code
            .replace(
              'Primary Action',
              '<svg class="v-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Save'
            )
            .replace(
              'Secondary Action',
              '<svg class="v-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> Edit'
            );
        }
      }
    ]
  },
  {
    id: 'card-layout',
    name: 'Card Layout',
    keywords: ['card layout', 'content card', 'info card', 'basic card'],
    baseComponent: {
      name: ' Card',
      description: 'A simple content card',
      code: `<div class="v-card v-surface v-p-6">
  <h3 class="v-typography-heading-small v-mb-4">Card Title</h3>
  <p class="v-typography-body-medium">
    This is a basic card with some content. Cards are great for organizing information into digestible sections.
  </p>
</div>`,
      preview: 'card'
    },
    modifications: [
      {
        id: 'add-actions',
        name: '+ Add actions',
        description: 'Add action buttons to the card',
        codeTransform: (code) => {
          return code.replace(
            '</p>\n</div>',
            `</p>
  
  <div class="v-flex v-justify-end v-gap-4 v-mt-6">
    <button class="v-button v-button-secondary" type="button">
      Cancel
    </button>
    <button class="v-button" type="button">
      Confirm
    </button>
  </div>
</div>`
          );
        }
      },
      {
        id: 'add-image',
        name: '+ Add image',
        description: 'Add an image to the card header',
        codeTransform: (code) => {
          return code.replace(
            '<h3 class="v-typography-heading-small v-mb-4">Card Title</h3>',
            `<div class="v-card-image v-mb-4">
    <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #1a1f71 0%, #f7b600 100%); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
      🖼️
    </div>
  </div>
  <h3 class="v-typography-heading-small v-mb-4">Card Title</h3>`
          );
        }
      },
      {
        id: 'make-grid',
        name: '+ Make grid layout',
        description: 'Create a grid of multiple cards',
        codeTransform: (code) => {
          return `<div class="v-grid v-grid-cols-2 v-gap-6">
  ${code}
  
  <div class="v-card v-surface v-p-6">
    <h3 class="v-typography-heading-small v-mb-4">Second Card</h3>
    <p class="v-typography-body-medium">
      This is another card in the grid layout. Multiple cards can display related information.
    </p>
  </div>
  
  <div class="v-card v-surface v-p-6">
    <h3 class="v-typography-heading-small v-mb-4">Third Card</h3>
    <p class="v-typography-body-medium">
      A third card completes this grid layout example with consistent styling.
    </p>
  </div>
  
  <div class="v-card v-surface v-p-6">
    <h3 class="v-typography-heading-small v-mb-4">Fourth Card</h3>
    <p class="v-typography-body-medium">
      The fourth card fills out the 2x2 grid perfectly for a balanced layout.
    </p>
  </div>
</div>`;
        }
      },
      {
        id: 'add-badge',
        name: '+ Add status badge',
        description: 'Add a status badge to the card',
        codeTransform: (code) => {
          return code.replace(
            '<h3 class="v-typography-heading-small v-mb-4">Card Title</h3>',
            `<div class="v-flex v-justify-between v-align-items-center v-mb-4">
    <h3 class="v-typography-heading-small">Card Title</h3>
    <span class="v-badge">Active</span>
  </div>`
          );
        }
      }
    ]
  },
  {
    id: 'profile-card',
    name: 'Profile Card',
    keywords: ['profile card', 'user profile', 'profile', 'user card', 'avatar', 'profile with status', 'profile with actions'],
    baseComponent: {
      name: 'User Profile Card',
      description: 'A user profile card with avatar and basic information',
      code: `<div class="v-card v-surface v-p-6">
  <div class="v-flex v-align-items-center v-gap-4 v-mb-6">
    <div class="v-avatar v-avatar-large">
      JD
    </div>
    <div class="v-flex v-flex-col v-gap-2">
      <h3 class="v-typography-heading-small">John Doe</h3>
      <p class="v-typography-body-medium v-text-secondary">Software Engineer</p>
    </div>
  </div>
  
  <div class="v-flex v-flex-col v-gap-4">
    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">Email</span>
      <span class="v-typography-body-medium">john.doe@company.com</span>
    </div>
    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">Department</span>
      <span class="v-typography-body-medium">Engineering</span>
    </div>
  </div>
</div>`,
      preview: 'profile'
    },
    modifications: [
      {
        id: 'add-contact-info',
        name: '+ Add contact info',
        description: 'Add phone number and location',
        codeTransform: (code) => {
          return code.replace(
            '</div>\n  </div>\n</div>',
            `    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">Phone</span>
      <span class="v-typography-body-medium">+1 (555) 123-4567</span>
    </div>
    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">Location</span>
      <span class="v-typography-body-medium">San Francisco, CA</span>
    </div>
  </div>
</div>`
          );
        }
      },
      {
        id: 'add-status-badge',
        name: '+ Add status badge',
        description: 'Add online/offline status badge',
        codeTransform: (code) => {
          return code.replace(
            '<p class="v-typography-body-medium v-text-secondary">Software Engineer</p>',
            `<p class="v-typography-body-medium v-text-secondary">Software Engineer</p>
      <span class="v-badge v-badge-success">Online</span>`
          );
        }
      },
      {
        id: 'add-action-buttons',
        name: '+ Add action buttons',
        description: 'Add message and call buttons',
        codeTransform: (code) => {
          return code.replace(
            '</div>\n</div>',
            `</div>
  
  <div class="v-flex v-gap-4 v-mt-6">
    <button class="v-button v-flex-1" type="button">
      Message
    </button>
    <button class="v-button v-button-secondary v-flex-1" type="button">
      Call
    </button>
  </div>
</div>`
          );
        }
      },
      {
        id: 'add-social-links',
        name: '+ Add social links',
        description: 'Add LinkedIn and GitHub links',
        codeTransform: (code) => {
          return code.replace(
            '</div>\n</div>',
            `    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">LinkedIn</span>
      <a href="#" class="v-link">linkedin.com/in/johndoe</a>
    </div>
    <div class="v-flex v-justify-between v-align-items-center">
      <span class="v-typography-label-medium">GitHub</span>
      <a href="#" class="v-link">github.com/johndoe</a>
    </div>
  </div>
</div>`
          );
        }
      }
    ]
  }
];