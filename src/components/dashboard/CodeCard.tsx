import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Tabs } from '../ui/Tabs';
import { Button } from '../ui/Button';
import type { ComponentInfo } from '../../types/components';
import './CodeCard.css';

interface CodeCardProps {
  code: string;
  components: ComponentInfo[];
  onSave: () => void;
}

export function CodeCard({ code, components, onSave }: CodeCardProps) {
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

  const renderComponentTree = () => {
    if (components.length === 0) return null;

    return (
      <div className="component-tree">
        <div className="tree-node">
          <span className="tree-icon">📦</span> App
          {components.map((comp, index) => (
            <div key={index} className="tree-node tree-child">
              <span className="tree-icon">📄</span> {comp.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    {
      id: 'code',
      label: 'Code',
      content: (
        <div className="code-editor-container">
          <textarea
            className="code-editor"
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            placeholder="// Your generated code will appear here..."
            spellCheck={false}
          />
        </div>
      )
    },
    {
      id: 'components',
      label: 'Components',
      content: (
        <div className="components-list">
          {components.length === 0 ? (
            <p className="empty-state">No components to display</p>
          ) : (
            components.map((comp, index) => (
              <div key={index} className="component-info">
                <h4>{comp.name}</h4>
                <p><strong>Purpose:</strong> {comp.purpose}</p>
                <p><strong>Props:</strong> {comp.props}</p>
              </div>
            ))
          )}
        </div>
      )
    },
    {
      id: 'tree',
      label: 'Component Tree',
      content: (
        <div className="tree-container">
          {components.length === 0 ? (
            <p className="empty-state">No components to display</p>
          ) : (
            renderComponentTree()
          )}
        </div>
      )
    }
  ];

  return (
    <Card className="code-card">
      <div className="code-header">
        <Tabs tabs={tabs} defaultTab="code" />
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
    </Card>
  );
}