import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import './ChatCard.css';

export function ChatCard({ messages, onSendMessage, onReset }) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleQuickAction = (action) => {
    onSendMessage(action);
  };

  const renderMessageContent = (message) => {
    if (message.isTyping) {
      return <p className="typing-indicator">{message.content}</p>;
    }

    // Parse modification actions from message
    const modificationRegex = /Available modifications: (.+)$/;
    const match = message.content.match(modificationRegex);
    
    if (match && message.sender === 'assistant') {
      const mainContent = message.content.replace(modificationRegex, '');
      const actions = match[1].split(', ');
      
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: formatMessage(mainContent) }} />
          <div className="modification-actions">
            <div className="actions-label">Try these modifications:</div>
            <div className="quick-actions">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className="quick-action-btn modification-btn"
                  onClick={() => handleQuickAction(action)}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />;
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  return (
    <Card className="chat-card">
      <div className="chat-header">
        <h3>Chat & Build Components</h3>
        <button className="reset-btn" onClick={onReset}>
          Reset
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sender}`}
          >
            <div className="message-sender">
              {message.sender === 'user' ? 'You' : 'NOVA Assistant'}
            </div>
            {renderMessageContent(message)}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          className="input chat-input"
          placeholder="Describe what you want to build..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="primary" size="small">
          <Send size={16} />
          Send
        </Button>
      </form>
    </Card>
  );
}