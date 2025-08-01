const STORAGE_KEY = 'nova_saved_components';

export function getSavedComponents() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading saved components:', error);
    return [];
  }
}

export function saveComponent(component) {
  const savedComponents = getSavedComponents();
  const newComponent = {
    ...component,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  
  const updated = [...savedComponents, newComponent];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  return newComponent;
}

export function deleteComponent(id) {
  const savedComponents = getSavedComponents();
  const filtered = savedComponents.filter(comp => comp.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function getComponentById(id) {
  const savedComponents = getSavedComponents();
  return savedComponents.find(comp => comp.id === id) || null;
}