import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>VirBox Dashboard</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3>Total VMs</h3>
          <p style={styles.statNumber}>{stats.totalVMs}</p>
        </div>
        <div style={styles.statCard}>
          <h3>Active VMs</h3>
          <p style={styles.statNumber}>{stats.activeVMs}</p>
        </div>
        <div style={styles.statCard}>
          <h3>CPU Usage</h3>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progress, width: `${stats.cpuUsage}%` }}></div>
          </div>
          <p>{stats.cpuUsage}%</p>
        </div>
        <div style={styles.statCard}>
          <h3>Memory Usage</h3>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progress, width: `${stats.memoryUsage}%` }}></div>
          </div>
          <p>{stats.memoryUsage}%</p>
        </div>
      </div>

      {/* Carousel - VMs */}
      <div style={styles.carouselSection}>
        <h2>Virtual Machines</h2>
        <div style={styles.carousel}>
          <button
            style={styles.carouselBtn}
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? vms.length - 1 : currentIndex - 1
              )
            }
          >
            ←
          </button>

          <div style={styles.carouselContent}>
            <div
              style={{
                ...styles.vmCard,
                animation: 'fadeIn 0.5s',
              }}
            >
              <h3>{vms[currentIndex].name}</h3>
              <p>
                <strong>Status:</strong>{' '}
                <span
                  style={{
                    color:
                      vms[currentIndex].status === 'Running'
                        ? '#00ff00'
                        : '#ff0000',
                  }}
                >
                  {vms[currentIndex].status}
                </span>
              </p>
              <p>
                <strong>CPU:</strong> {vms[currentIndex].cpu}%
              </p>
              <p>
                <strong>Memory:</strong> {vms[currentIndex].memory}%
              </p>
              <button style={styles.actionBtn}>Manage</button>
            </div>
          </div>

          <button
            style={styles.carouselBtn}
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % vms.length)
            }
          >
            →
          </button>
        </div>
        <p style={styles.carouselIndicator}>
          {currentIndex + 1} / {vms.length}
        </p>
      </div>

      {/* VM List */}
      <div style={styles.vmList}>
        <h2>All Virtual Machines</h2>
        <table style={styles.table}>
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
                  <span
                    style={{
                      color:
                        vm.status === 'Running' ? '#00ff00' : '#ff0000',
                    }}
                  >
                    {vm.status}
                  </span>
                </td>
                <td>{vm.cpu}%</td>
                <td>{vm.memory}%</td>
                <td>
                  <button style={styles.editBtn}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#fff',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid rgba(0, 255, 150, 0.3)',
  },
  title: {
    fontSize: '32px',
    margin: 0,
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  logoutBtn: {
    padding: '10px 20px',
    background: '#ff0055',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#00ff9a',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  progress: {
    height: '100%',
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    transition: 'width 0.3s ease',
  },
  carouselSection: {
    marginBottom: '30px',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '15px',
  },
  carouselBtn: {
    background: 'rgba(0, 255, 150, 0.2)',
    border: '1px solid rgba(0, 255, 150, 0.5)',
    color: '#00ff9a',
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  carouselContent: {
    flex: 1,
    minHeight: '200px',
  },
  vmCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
  },
  actionBtn: {
    marginTop: '15px',
    padding: '10px 20px',
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    border: 'none',
    borderRadius: '6px',
    color: '#000',
    fontWeight: '600',
    cursor: 'pointer',
  },
  carouselIndicator: {
    textAlign: 'center',
    marginTop: '10px',
    color: '#00ff9a',
    fontSize: '14px',
  },
  vmList: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  editBtn: {
    padding: '6px 12px',
    background: 'rgba(0, 255, 150, 0.2)',
    border: '1px solid rgba(0, 255, 150, 0.5)',
    color: '#00ff9a',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default Dashboard;