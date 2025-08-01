import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../../../../components/ui/Card';
import { Button } from '../../../../components/ui/Button';
import './ChatCard.css';

export default function ChatCard({ messages, onSendMessage, onReset }) {
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

    const modificationRegex = /Available modifications: (.+)$/;
    const match = message.content.match(modificationRegex);
    
    if (match && message.sender === 'assistant') {
      const mainContent = message.content.replace(modificationRegex, '');
      const actions = match[1].split(', ');
      
      return (
        <>
          <MessageText content={mainContent} />
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

    return <MessageText content={message.content} />;
  };

  const MessageText = ({ content }) => {
    const parts = content.split(/\*\*(.*?)\*\*|\n/g);
    
    return (
      <div>
        {parts.map((part, index) => {
          if (index % 2 === 1 && content.includes(`**${part}**`)) {
            return <strong key={index}>{part}</strong>;
          }
          if (part === '') {
            return <br key={index} />;
          }
          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </div>
    );
  };

  return (
    <Card className="chat-card">
      <div className="chat-header">
        <h3>Chat Box</h3>
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
              {message.sender === 'user' ? 'You' : 'Component Generator Assistant'}
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