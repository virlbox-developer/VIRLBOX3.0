import React, { useEffect, useState } from 'react';
import { apiClient } from '../utils/api';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';

export const Analytics: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const analytics = await apiClient.getAnalytics('7d');
        setData(analytics);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <div className="analytics-grid">
        <Card title="Overview">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Card>
      </div>
    </div>
  );
};
