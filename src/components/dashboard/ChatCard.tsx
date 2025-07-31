import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import type { ChatMessage } from '../../types/components';
import './ChatCard.css';

interface ChatCardProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  onReset: () => void;
}

export function ChatCard({ messages, onSendMessage, onReset }: ChatCardProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleQuickAction = (action: string) => {
    onSendMessage(action);
  };

  const renderMessageContent = (message: ChatMessage) => {
    if (message.isTyping) {
      return <p className="typing-indicator">{message.content}</p>;
    }

    // Parse quick actions from message
    const quickActionRegex = /Quick modifications available: (.+)$/;
    const match = message.content.match(quickActionRegex);
    
    if (match && message.sender === 'assistant') {
      const mainContent = message.content.replace(quickActionRegex, '');
      const actions = match[1].split(', ');
      
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: formatMessage(mainContent) }} />
          <div className="quick-actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className="quick-action-btn"
                onClick={() => handleQuickAction(action)}
              >
                {action}
              </button>
            ))}
          </div>
        </>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />;
  };

  const formatMessage = (content: string) => {
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