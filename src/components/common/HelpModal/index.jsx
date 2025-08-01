import { Modal } from '../../ui/Modal';
import './HelpModal.css';

export function HelpModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About NOVA Component Assistant">
      <div className="help-content">
        <section className="help-section">
          <h3>What is this?</h3>
          <p>A prototype tool that generates Visa component code from natural language descriptions.</p>
        </section>

        <section className="help-section">
          <h3>How to Use</h3>
          <ul>
            <li><strong>Dashboard:</strong> Type descriptions like "login form" or "Profile card" in the chat</li>
            <li><strong>Component Library:</strong> Browse Visa's standard components (click to generate, no modifications yet)</li>
            <li><strong>My Components:</strong> Save generated components (session only, not stored on server)</li>
          </ul>
        </section>

        <section className="help-section">
          <h3>Available Harcoded Components</h3>
          <p><strong>Login Form, Contact Form, Button Group, Card Layout, Profile Card</strong></p>
        </section>

        <section className="help-section">
          <h3> Important Notes</h3>
          <ul>
            <li>This is a <strong>prototype</strong> with hardcoded patterns</li>
            <li>Components are <strong>static previews</strong>, not interactive</li>
            <li>Saved components <strong>exists only during session</strong></li>
            <li><strong>Some prompts work better than others</strong>, be specific with few words</li>
          </ul>
        </section>
      </div>
    </Modal>
  );
}