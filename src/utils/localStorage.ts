import type { SavedComponent } from '../types/components';

const STORAGE_KEY = 'nova_saved_components';

export function getSavedComponents(): SavedComponent[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading saved components:', error);
    return [];
  }
}

export function saveComponent(component: Omit<SavedComponent, 'id' | 'createdAt'>): SavedComponent {
  const savedComponents = getSavedComponents();
  const newComponent: SavedComponent = {
    ...component,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  
  const updated = [...savedComponents, newComponent];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  return newComponent;
}

export function deleteComponent(id: string): void {
  const savedComponents = getSavedComponents();
  const filtered = savedComponents.filter(comp => comp.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function getComponentById(id: string): SavedComponent | null {
  const savedComponents = getSavedComponents();
  return savedComponents.find(comp => comp.id === id) || null;
}