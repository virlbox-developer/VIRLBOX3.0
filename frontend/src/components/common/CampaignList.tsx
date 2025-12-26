import React from 'react';
import './CampaignList.css';

interface Campaign {
  id: string;
  name: string;
  description: string;
  status: string;
  platforms: string[];
  createdAt: string;
}

interface Props {
  campaigns: Campaign[];
  onRefresh: () => void;
}

export const CampaignList: React.FC<Props> = ({ campaigns, onRefresh }) => {
  return (
    <div className="campaign-list">
      {campaigns.map(campaign => (
        <div key={campaign.id} className="campaign-card">
          <div className="campaign-header">
            <h3>{campaign.name}</h3>
            <span className={`status status--${campaign.status}`}>
              {campaign.status}
            </span>
          </div>
          <p className="campaign-description">{campaign.description}</p>
          <div className="campaign-platforms">
            {campaign.platforms.map(platform => (
              <span key={platform} className="platform-badge">
                {platform}
              </span>
            ))}
          </div>
          <small className="campaign-date">
            Created: {new Date(campaign.createdAt).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
};