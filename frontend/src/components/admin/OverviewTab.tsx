import React from 'react';

interface Props {
  metrics: any;
}

export const OverviewTab: React.FC<Props> = ({ metrics }) => {
  if (!metrics) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div className="admin-tab">
      <h2>Platform Overview</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Users</h3>
          <p className="metric-value">{metrics.totalUsers || 0}</p>
        </div>
        <div className="metric-card">
          <h3>Total Campaigns</h3>
          <p className="metric-value">{metrics.totalCampaigns || 0}</p>
        </div>
        <div className="metric-card">
          <h3>Total Posts</h3>
          <p className="metric-value">{metrics.totalPosts || 0}</p>
        </div>
        <div className="metric-card">
          <h3>Total Reach</h3>
          <p className="metric-value">{(metrics.totalReach || 0).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};