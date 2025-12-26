import React from 'react';

interface Props {
  agents: any[];
}

export const AgentsTab: React.FC<Props> = ({ agents }) => {
  const categories = {
    'Content Creation': 45,
    'Marketing & Sales': 52,
    'Customer Experience': 35,
    'Data & Analytics': 48,
    'Design & Product': 38,
    'Education & Training': 20,
    'Business & Operations': 16
  };

  return (
    <div className="admin-tab">
      <h2>AI Agents (251 Total)</h2>
      <div className="agents-grid">
        {Object.entries(categories).map(([category, count]) => (
          <div key={category} className="agent-card">
            <h3>{category}</h3>
            <p className="agent-count">{count} agents</p>
          </div>
        ))}
      </div>
    </div>
  );
};