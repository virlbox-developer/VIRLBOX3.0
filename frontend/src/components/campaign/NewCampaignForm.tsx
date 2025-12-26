import React, { useState } from 'react';
import { campaignService } from '../../services/campaign.service';
import './NewCampaignForm.css';

interface Props {
  onSuccess: (campaign: any) => void;
  onCancel: () => void;
}

export const NewCampaignForm: React.FC<Props> = ({ onSuccess, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const allPlatforms = [
    'Twitter',
    'LinkedIn',
    'Instagram',
    'Facebook',
    'TikTok',
    'Pinterest'
  ];

  const handlePlatformToggle = (platform: string) => {
    setPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const campaign = await campaignService.createCampaign({
        name,
        description,
        platforms
      });

      onSuccess(campaign);
    } catch (err: any) {
      setError(err.message || 'Failed to create campaign');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-modal">
      <div className="form-content">
        <h2>Create New Campaign</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Campaign Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label>Platforms *</label>
            <div className="platforms-grid">
              {allPlatforms.map(platform => (
                <label key={platform} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={platforms.includes(platform.toLowerCase())}
                    onChange={() => handlePlatformToggle(platform.toLowerCase())}
                  />
                  {platform}
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn--secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary" disabled={loading}>
              {loading ? 'Creating...' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};