import { ChatCard } from '../dashboard/ChatCard';
import { PreviewCard } from '../dashboard/PreviewCard';
import { CodeCard } from '../dashboard/CodeCard';
import { useChat } from '../../hooks/useChat';
import { saveComponent } from '../../utils/localStorage';
import './DashboardView.css';

export function DashboardView() {
  const { messages, sendMessage, resetChat, currentSuggestion } = useChat();

  const handleSaveComponent = () => {
    if (currentSuggestion) {
      const name = prompt('Enter a name for this component:');
      if (name) {
        saveComponent({
          name,
          description: `Generated from: ${messages[messages.length - 2]?.content || 'Chat'}`,
          code: currentSuggestion.code,
          components: currentSuggestion.components
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
          preview={currentSuggestion?.preview || null}
        />
        <CodeCard 
          code={currentSuggestion?.code || ''}
          components={currentSuggestion?.components || []}
          onSave={handleSaveComponent}
        />
      </div>
    </div>
  );
}