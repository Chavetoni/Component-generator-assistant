export interface ComponentInfo {
  name: string;
  purpose: string;
  props: string;
}

export interface ComponentSuggestion {
  components: ComponentInfo[];
  code: string;
  preview: string;
}

export interface SavedComponent {
  id: string;
  name: string;
  description: string;
  code: string;
  components: ComponentInfo[];
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}