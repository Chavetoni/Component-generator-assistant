import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Tabs } from '../ui/Tabs';
import { Button } from '../ui/Button';
import './CodeCard.css';

export function CodeCard({ code, componentInfo, onSave }) {
  const [copied, setCopied] = useState(false);
  const [editedCode, setEditedCode] = useState(code);

  React.useEffect(() => {
    setEditedCode(code);
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const renderComponentsAndTree = () => {
    if (!componentInfo.name) {
      return (
        <div className="empty-state">
          <p>No components to display</p>
          <p className="empty-hint">Generate a component using the chat to see details here.</p>
        </div>
      );
    }

    return (
      <div className="components-and-tree">
        <div className="components-section">
          <h4 className="section-title">Component</h4>
          <div className="component-info">
            <div className="component-header">
              <h5>{componentInfo.name}</h5>
            </div>
          </div>
        </div>
        
        <div className="tree-section">
          <h4 className="section-title">Component Tree</h4>
          <div className="component-tree">
            <div className="tree-node">
              <span className="tree-icon">{componentInfo.name}</span>
              {componentInfo.components.map((component, index) => (
                <div key={index} className="tree-node tree-child">
                  <span className="tree-icon tree-component">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    {
      id: 'code',
      label: 'Code Editor',
      content: (
        <div className="code-editor-container">
          <div className="code-editor-header">
            <span className="file-icon">📄</span>
            <span className="file-name">component.html</span>
            <div className="code-stats">
              <span className="line-count">{editedCode.split('\n').length} lines</span>
              <span className="char-count">{editedCode.length} chars</span>
            </div>
          </div>
          <textarea
            className="code-editor"
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            placeholder="<!-- Your generated Visa component code will appear here -->"
            spellCheck={false}
          />
        </div>
      )
    },
    {
      id: 'components',
      label: 'Components & Tree',
      content: renderComponentsAndTree()
    }
  ];

  return (
    <Card className="code-card">
      <div className="code-header">
        <h3>Code & Components</h3>
        <div className="code-actions">
          <Button
            variant="secondary"
            size="small"
            onClick={handleCopy}
            disabled={!editedCode}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={onSave}
            disabled={!editedCode}
          >
            Save Component
          </Button>
        </div>
      </div>
      <div className="code-content">
        <Tabs tabs={tabs} defaultTab="code" />
      </div>
    </Card>
  );
}