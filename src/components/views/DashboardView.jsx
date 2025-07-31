import React from 'react';
import { ChatCard } from '../dashboard/ChatCard';
import { PreviewCard } from '../dashboard/PreviewCard';
import { CodeCard } from '../dashboard/CodeCard';
import { useChat } from '../../hooks/useChat.js';
import { saveComponent } from '../../utils/localStorage.js';
import './DashboardView.css';

export function DashboardView({ selectedComponent }) {
  const { messages, sendMessage, resetChat, currentExample, currentCode, currentPreview, componentInfo, previewUpdateKey, setCurrentCode, addAssistantMessage } = useChat();
  const [lastLoadedComponent, setLastLoadedComponent] = React.useState(null);

  // Update the current code when a component is selected from the library
  React.useEffect(() => {
    if (selectedComponent && selectedComponent.code !== lastLoadedComponent) {
      setCurrentCode(selectedComponent.code);
      setLastLoadedComponent(selectedComponent.code);
   
      addAssistantMessage('Component loaded from library.');
    }
  }, [selectedComponent, setCurrentCode, addAssistantMessage, lastLoadedComponent]);

  const handleSaveComponent = () => {
    if (currentCode) {
      const name = prompt('Enter a name for this component:');
      if (name) {
        saveComponent({
          name,
          description: currentExample ? currentExample.baseComponent.description : 'Custom component',
          code: currentCode,
          components: currentExample ? [{ name: currentExample.baseComponent.name, purpose: currentExample.baseComponent.description, props: '' }] : []
        });
        alert('Component saved successfully!');
      }
    }
  };

  return (
    <div className="dashboard-view">
      <div className="dashboard-grid">
        <ChatCard 
          messages={messages}
          onSendMessage={sendMessage}
          onReset={resetChat}
        />
        <PreviewCard 
          preview={currentPreview || selectedComponent?.preview || null}
          code={currentCode || selectedComponent?.code}
          key={`preview-${previewUpdateKey}-${currentCode.length}`}
        />
        <CodeCard 
          code={currentCode || selectedComponent?.code || ''}
          componentInfo={componentInfo}
          onSave={handleSaveComponent}
        />
      </div>
    </div>
  );
}