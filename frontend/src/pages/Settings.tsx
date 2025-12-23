import React, { useState } from 'react';
import { useAuthStore } from '../stores/auth';
import { Card } from '../components/Card';

export const Settings: React.FC = () => {
  const { user } = useAuthStore();
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    emailUpdates: true,
  });

  const handleSave = () => {
    console.log('Settings saved', settings);
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <Card title="Preferences">
        <div className="settings-form">
          <label>
            Theme:
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            >
              <option>light</option>
              <option>dark</option>
            </select>
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
            />
            Enable Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={settings.emailUpdates}
              onChange={(e) => setSettings({ ...settings, emailUpdates: e.target.checked })}
            />
            Email Updates
          </label>

          <button onClick={handleSave} className="btn btn-primary">
            Save Settings
          </button>
        </div>
      </Card>
    </div>
  );
};
