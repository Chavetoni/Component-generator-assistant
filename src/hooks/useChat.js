import { useState, useCallback } from 'react';
import { workingExamples } from '../services/workingExamples.js';

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Build components with natural language. Click the **Help** button for more information on how to use.  \n\n**Available components:**\n• "login form" - basic login with email/password\n• "contact form" - name, email, message fields\n• "button group" - multiple action buttons\n• "card layout" - content card with text\n• "profile card" - user profile with avatar\n\n**Example requests:**\n• "login form with remember me"\n• "contact form with phone field"\n• "profile card with status and actions"\n• "button group with large buttons"\n\n**Use suggested add on features as you go:** "add login", "add forgot password", etc.',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);

  const [currentExample, setCurrentExample] = useState(null);
  const [currentCode, setCurrentCode] = useState('');
  const [currentPreview, setCurrentPreview] = useState('');
  const [appliedModifications, setAppliedModifications] = useState([]);
  const [componentInfo, setComponentInfo] = useState({ name: '', description: '', components: [] });
  const [previewUpdateKey, setPreviewUpdateKey] = useState(0);

  const sendMessage = useCallback((content) => {
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    const typingMessage = {
      id: Date.now().toString() + '_typing',
      content: 'Analyzing your request...',
      sender: 'assistant',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== typingMessage.id));

      if (currentExample) {
        const normalizedContent = content.toLowerCase().trim();
        
        const isModificationRequest = 
          content.startsWith('+') ||
          normalizedContent.startsWith('add ') ||
          normalizedContent.includes('add ') ||
          normalizedContent.startsWith('include ') ||
          normalizedContent.startsWith('make ') ||
          currentExample.modifications.some(mod => {
            const modName = mod.name.toLowerCase().replace('+ ', '').replace('add ', '');
            return normalizedContent.includes(modName) || 
                   normalizedContent.includes(mod.name.toLowerCase());
          });
        
        if (isModificationRequest) {
          let modification = null;
          
          if (content.startsWith('+')) {
            modification = currentExample.modifications.find(mod => mod.name === content.trim());
          }
          
          if (!modification) {
            modification = currentExample.modifications.find(mod => {
              const modName = mod.name.toLowerCase().replace('+ ', '').replace('add ', '');
              const cleanModName = modName.replace(/[^\w\s]/g, '').trim();
              const cleanContent = normalizedContent.replace(/[^\w\s]/g, '').trim();
              
              return cleanContent.includes(cleanModName) || 
                     cleanContent.includes('forgot password') && mod.id === 'add-forgot-password' ||
                     cleanContent.includes('remember me') && mod.id === 'add-remember-me' ||
                     cleanContent.includes('social login') && mod.id === 'add-social-login' ||
                     cleanContent.includes('contact info') && mod.id === 'add-contact-info' ||
                     cleanContent.includes('status badge') && mod.id === 'add-status-badge' ||
                     cleanContent.includes('action buttons') && mod.id === 'add-action-buttons' ||
                     cleanContent.includes('social links') && mod.id === 'add-social-links' ||
                     cleanContent.includes('phone') && mod.id === 'add-phone' ||
                     cleanContent.includes('subject') && mod.id === 'add-subject';
            });
          }
          
          if (modification && !appliedModifications.includes(modification.id)) {
            const newCode = modification.codeTransform(currentCode);
            setCurrentCode(newCode);
            setAppliedModifications(prev => [...prev, modification.id]);
            
            const getComponentsFromModification = (modificationId) => {
              switch (modificationId) {
                case 'add-remember-me':
                  return ['Checkbox (Remember me)'];
                case 'add-forgot-password':
                  return ['Link (Forgot password)'];
                case 'add-social-login':
                  return ['Button (Google)', 'Button (Facebook)'];
                case 'add-phone':
                  return ['Input Field (Phone)'];
                case 'add-subject':
                  return ['Input Field (Subject)'];
                case 'add-urgency':
                  return ['Select (Urgency)'];
                case 'add-size':
                  return ['Button (Large)'];
                case 'add-variant':
                  return ['Button (Secondary)'];
                case 'add-icon':
                  return ['Icon'];
                case 'add-actions':
                  return ['Button (Edit)', 'Button (Delete)'];
                case 'add-image':
                  return ['Image'];
                case 'add-status':
                  return ['Badge (Status)'];
                case 'add-contact-info':
                  return ['Text (Phone)', 'Text (Location)'];
                case 'add-status-badge':
                  return ['Badge (Online)'];
                case 'add-action-buttons':
                  return ['Button (Message)', 'Button (Call)'];
                case 'add-social-links':
                  return ['Link (LinkedIn)', 'Link (GitHub)'];
                default:
                  return [];
              }
            };
            
            const newComponents = getComponentsFromModification(modification.id);
            setComponentInfo(prev => ({
              ...prev,
              components: [...prev.components, ...newComponents]
            }));
            
            setCurrentPreview('');
            setPreviewUpdateKey(prev => prev + 1);
            
            const assistantMessage = {
              id: Date.now().toString(),
              content: ` Applied modification: **${modification.name}**\n\n${modification.description}\n\nThe code has been updated in the editor. Please check the preview.`,
              sender: 'assistant',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, assistantMessage]);
            return;
          } else {
            const availableModifications = currentExample.modifications
              .filter(mod => !appliedModifications.includes(mod.id))
              .map(mod => mod.name)
              .join(', ');
            
            let errorMessage = '';
            if (!modification) {
              errorMessage = `I couldn't find that modification. Available modifications: ${availableModifications || 'None available'}`;
            } else {
              errorMessage = `That modification has already been applied. Available modifications: ${availableModifications || 'None available'}`;
            }
            
            const assistantMessage = {
              id: Date.now().toString(),
              content: errorMessage,
              sender: 'assistant',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, assistantMessage]);
            return;
          }
        }
      }
      
      const example = findMatchingExample(content);
      
      if (example) {
        setCurrentExample(example);
        let finalCode = example.baseComponent.code;
        let appliedMods = [];
        let autoAppliedModNames = [];
        
        const normalizedInput = content.toLowerCase().trim();
        const autoModifications = example.modifications.filter(mod => {
          const modKeywords = [
            { keywords: ['status', 'online', 'offline', 'badge'], modId: 'add-status-badge' },
            { keywords: ['actions', 'action', 'buttons', 'message', 'call'], modId: 'add-action-buttons' },
            { keywords: ['contact info', 'phone', 'location'], modId: 'add-contact-info' },
            { keywords: ['social', 'linkedin', 'github'], modId: 'add-social-links' },
            { keywords: ['remember me', 'remember'], modId: 'add-remember-me' },
            { keywords: ['forgot password', 'forgot'], modId: 'add-forgot-password' },
            { keywords: ['social login', 'google', 'facebook'], modId: 'add-social-login' },
            { keywords: ['phone', 'phone number'], modId: 'add-phone' },
            { keywords: ['subject'], modId: 'add-subject' }
          ];
          
          const matchingKeyword = modKeywords.find(mk => 
            mk.modId === mod.id && mk.keywords.some(keyword => normalizedInput.includes(keyword))
          );
          
          return matchingKeyword !== undefined;
        });
        
        autoModifications.forEach(mod => {
          finalCode = mod.codeTransform(finalCode);
          appliedMods.push(mod.id);
          autoAppliedModNames.push(mod.name);
        });
        
        setCurrentCode(finalCode);
        setCurrentPreview('');
        setAppliedModifications(appliedMods);
        setPreviewUpdateKey(prev => prev + 1);
        
        const getBaseComponents = (exampleId) => {
          switch (exampleId) {
            case 'login-form':
              return ['Input Field (Email)', 'Input Field (Password)', 'Button (Sign In)'];
            case 'contact-form':
              return ['Input Field (Name)', 'Input Field (Email)', 'Textarea (Message)', 'Button (Send Message)'];
            case 'button-group':
              return ['Button (Primary)', 'Button (Secondary)', 'Button (Outline)'];
            case 'card-layout':
              return ['Card Container', 'Text (Content)', 'Button (Action)'];
            case 'profile-card':
              return ['Card Container', 'Avatar', 'Text (Name)', 'Text (Title)', 'Text (Email)', 'Text (Department)'];
            default:
              return [];
          }
        };
        
        let allComponents = getBaseComponents(example.id);
        autoModifications.forEach(mod => {
          const getComponentsFromModification = (modificationId) => {
            switch (modificationId) {
              case 'add-remember-me':
                return ['Checkbox (Remember me)'];
              case 'add-forgot-password':
                return ['Link (Forgot password)'];
              case 'add-social-login':
                return ['Button (Google)', 'Button (Facebook)'];
              case 'add-phone':
                return ['Input Field (Phone)'];
              case 'add-subject':
                return ['Input Field (Subject)'];
              case 'add-urgency':
                return ['Select (Urgency)'];
              case 'add-size':
                return ['Button (Large)'];
              case 'add-variant':
                return ['Button (Secondary)'];
              case 'add-icon':
                return ['Icon'];
              case 'add-actions':
                return ['Button (Edit)', 'Button (Delete)'];
              case 'add-image':
                return ['Image'];
              case 'add-status':
                return ['Badge (Status)'];
              case 'add-contact-info':
                return ['Text (Phone)', 'Text (Location)'];
              case 'add-status-badge':
                return ['Badge (Online)'];
              case 'add-action-buttons':
                return ['Button (Message)', 'Button (Call)'];
              case 'add-social-links':
                return ['Link (LinkedIn)', 'Link (GitHub)'];
              default:
                return [];
            }
          };
          
          const newComponents = getComponentsFromModification(mod.id);
          allComponents = [...allComponents, ...newComponents];
        });
        
        setComponentInfo({
          name: example.baseComponent.name,
          description: example.baseComponent.description,
          components: allComponents
        });
        
        const remainingModifications = example.modifications
          .filter(mod => !appliedMods.includes(mod.id))
          .map(mod => mod.name)
          .join(', ');
        
        let responseContent = `Created **${example.baseComponent.name}**`;
        
        if (autoAppliedModNames.length > 0) {
          responseContent += `\n\n**Auto-applied:** ${autoAppliedModNames.join(', ')}`;
        }
        
        if (remainingModifications) {
          responseContent += `\n\n**Available modifications:** ${remainingModifications}`;
        }
        
        const assistantMessage = {
          id: Date.now().toString(),
          content: responseContent,
          sender: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        const availableOptions = workingExamples.map(ex => ex.name).join(', ');
        const assistantMessage = {
          id: Date.now().toString(),
          content: `I couldn't find a match for that request. Try asking for one of these components:\n\n${availableOptions}\n\nOr describe what you want to build and I'll help you find the right component!`,
          sender: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    }, 1500);
  }, [currentExample, currentCode, appliedModifications]);

  const resetChat = useCallback(() => {
    setMessages([{
      id: Date.now().toString(),
      content: 'Welcome to the Visa Design System Assistant! I can help you build components with real code and live previews.\n\n**Available components:**\n• "login form" - basic login with email/password\n• "contact form" - name, email, message fields\n• "button group" - multiple action buttons\n• "card layout" - content card with text\n• "profile card" - user profile with avatar\n\n**Example requests:**\n• "login form with remember me"\n• "contact form with phone field"\n• "profile card with status and actions"\n• "button group with large buttons"\n\n**Add features later:** "add social login", "add forgot password", etc.',
      sender: 'assistant',
      timestamp: new Date()
    }]);
    setCurrentExample(null);
    setCurrentCode('');
    setCurrentPreview('');
    setAppliedModifications([]);
    setComponentInfo({ name: '', description: '', components: [] });
    setPreviewUpdateKey(0);
  }, []);

  const addAssistantMessage = useCallback((content) => {
    const assistantMessage = {
      id: Date.now().toString(),
      content,
      sender: 'assistant',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, assistantMessage]);
  }, []);
  
  const findMatchingExample = (input) => {
    const normalizedInput = input.toLowerCase().trim();
    
    const correctedInput = normalizedInput
      .replace(/profle/g, 'profile')
      .replace(/logn/g, 'login')
      .replace(/contct/g, 'contact')
      .replace(/buton/g, 'button');
    
    const scores = workingExamples.map(example => {
      let score = 0;
      let exactMatches = 0;
      
      for (const keyword of example.keywords) {
        if (correctedInput.includes(keyword)) {
          score += keyword.length * 3;
          exactMatches++;
        }
      }
      
      return { example, score, exactMatches };
    });
    
    scores.sort((a, b) => {
      if (a.exactMatches !== b.exactMatches) {
        return b.exactMatches - a.exactMatches;
      }
      return b.score - a.score;
    });
    
    return scores[0].exactMatches > 0 ? scores[0].example : null;
  };

  return {
    messages,
    sendMessage,
    resetChat,
    currentExample,
    currentCode,
    currentPreview,
    appliedModifications,
    componentInfo,
    previewUpdateKey,
    setCurrentCode,
    addAssistantMessage
  };
}