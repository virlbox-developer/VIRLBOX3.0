import React, { useState } from 'react';

export const SettingsTab: React.FC = () => {
  const [settings, setSettings] = useState({
    platformName: 'VIRLBOX',
    maintenanceMode: false,
    maxCampaignsPerUser: 100
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className="admin-tab">
      <h2>Platform Settings</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>Platform Name</label>
          <input
            type="text"
            value={settings.platformName}
            onChange={e =>
              setSettings({ ...settings, platformName: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Maintenance Mode</label>
          <input
            type="checkbox"
            checked={settings.maintenanceMode}
            onChange={e =>
              setSettings({ ...settings, maintenanceMode: e.target.checked })
            }
          />
        </div>

        <div className="form-group">
          <label>Max Campaigns Per User</label>
          <input
            type="number"
            value={settings.maxCampaignsPerUser}
            onChange={e =>
              setSettings({
                ...settings,
                maxCampaignsPerUser: parseInt(e.target.value)
              })
            }
          />
        </div>

        <button className="btn btn--primary" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
};