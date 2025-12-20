import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // added import

interface DashboardStats {
  totalVMs: number;
  activeVMs: number;
  cpuUsage: number;
  memoryUsage: number;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalVMs: 24,
    activeVMs: 18,
    cpuUsage: 65,
    memoryUsage: 48,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const vms = [
    { id: 1, name: 'Server-01', status: 'Running', cpu: 45, memory: 62 },
    { id: 2, name: 'Server-02', status: 'Running', cpu: 32, memory: 41 },
    { id: 3, name: 'Server-03', status: 'Stopped', cpu: 0, memory: 0 },
    { id: 4, name: 'Server-04', status: 'Running', cpu: 78, memory: 85 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">VirBox Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total VMs</h3>
          <p className="stat-number">{stats.totalVMs}</p>
        </div>
        <div className="stat-card">
          <h3>Active VMs</h3>
          <p className="stat-number">{stats.activeVMs}</p>
        </div>
        <div className="stat-card">
          <h3>CPU Usage</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ '--progress': `${stats.cpuUsage}%` } as React.CSSProperties}
              data-value={stats.cpuUsage}
            ></div>
          </div>
          <p>{stats.cpuUsage}%</p>
        </div>
        <div className="stat-card">
          <h3>Memory Usage</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ ['--progress' as any]: `${stats.memoryUsage}%` }}
            ></div>
          </div>
          <p>{stats.memoryUsage}%</p>
        </div>
      </div>

      {/* Carousel - VMs */}
      <div className="carousel-section">
        <h2>Virtual Machines</h2>
        <div className="carousel">
          <button
            className="carousel-btn"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? vms.length - 1 : currentIndex - 1
              )
            }
          >
            ←
          </button>

          <div className="carousel-content">
            <div className="vm-card fade-in">
              <h3>{vms[currentIndex].name}</h3>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`status ${vms[currentIndex].status === 'Running' ? 'running' : 'stopped'}`}>
                  {vms[currentIndex].status}
                </span>
              </p>
              <p>
                <strong>CPU:</strong> {vms[currentIndex].cpu}%
              </p>
              <p>
                <strong>Memory:</strong> {vms[currentIndex].memory}%
              </p>
              <button className="action-btn">Manage</button>
            </div>
          </div>

          <button
            className="carousel-btn"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % vms.length)
            }
          >
            →
          </button>
        </div>
        <p className="carousel-indicator">
          {currentIndex + 1} / {vms.length}
        </p>
      </div>

      {/* VM List */}
      <div className="vm-list">
        <h2>All Virtual Machines</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vms.map((vm) => (
              <tr key={vm.id}>
                <td>{vm.name}</td>
                <td>
                  <span className={`status ${vm.status === 'Running' ? 'running' : 'stopped'}`}>
                    {vm.status}
                  </span>
                </td>
                <td>{vm.cpu}%</td>
                <td>{vm.memory}%</td>
                <td>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* style tag removed - moved to CSS file */}
    </div>
  );
};

export default Dashboard;