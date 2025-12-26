import React from 'react';

export const AnalyticsTab: React.FC = () => {
  return (
    <div className="admin-tab">
      <h2>System Analytics</h2>
      <div className="analytics-section">
        <h3>Performance Metrics</h3>
        <ul>
          <li>API Response Time: ~200ms</li>
          <li>Database Queries: ~1.5ms avg</li>
          <li>Cache Hit Rate: 85%</li>
          <li>Error Rate: 0.1%</li>
        </ul>
      </div>
    </div>
  );
};