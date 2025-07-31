import { useState, useCallback } from 'react';
import type { ChatMessage } from '../types/components';
import { matchPattern, getQuickActions } from '../utils/patternMatching';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hi! I\'m the NOVA Component Assistant. Describe what UI component you\'d like to build, and I\'ll suggest the best NOVA components and generate code for you.',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);

  const [currentSuggestion, setCurrentSuggestion] = useState<ReturnType<typeof matchPattern>>(null);

  const sendMessage = useCallback((content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Add typing indicator
    const typingMessage: ChatMessage = {
      id: Date.now().toString() + '_typing',
      content: 'Analyzing your request...',
      sender: 'assistant',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    // Simulate processing delay
    setTimeout(() => {
      // Remove typing indicator
      setMessages(prev => prev.filter(msg => msg.id !== typingMessage.id));

      // Process the message
      const suggestion = matchPattern(content);
      
      if (suggestion) {
        setCurrentSuggestion(suggestion);
        
        const componentsHtml = suggestion.components
          .map(comp => `• **${comp.name}** - ${comp.purpose}`)
          .join('\n');
        
        const quickActions = getQuickActions(content.toLowerCase());
        
        const assistantMessage: ChatMessage = {
          id: Date.now().toString(),
          content: `Great! I found these NOVA components that match your needs:\n\n${componentsHtml}\n\nI've generated the code for you. You can see it in the code editor below.\n\nQuick modifications available: ${quickActions.join(', ')}`,
          sender: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        const assistantMessage: ChatMessage = {
          id: Date.now().toString(),
          content: 'I couldn\'t find an exact match for your request. Try describing components like "login form", "navigation menu", "data table", "modal dialog", or "card layout".',
          sender: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    }, 1500);
  }, []);

  const resetChat = useCallback(() => {
    setMessages([{
      id: Date.now().toString(),
      content: 'Chat reset! What would you like to build?',
      sender: 'assistant',
      timestamp: new Date()
    }]);
    setCurrentSuggestion(null);
  }, []);

  return {
    messages,
    sendMessage,
    resetChat,
    currentSuggestion
  };
}