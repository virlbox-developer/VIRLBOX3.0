import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navLinks = token
    ? [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Admin', path: '/admin' },
      ]
    : [
        { label: 'Home', path: '/' },
        { label: 'Features', path: '/' },
        { label: 'Pricing', path: '/' },
      ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          VirBox
        </div>

        <div style={{ ...styles.menu, display: isOpen ? 'flex' : 'none' }}>
          {navLinks.map((link) => (
            <a
              key={link.path}
              onClick={() => {
                navigate(link.path);
                setIsOpen(false);
              }}
              style={{
                ...styles.navLink,
                borderBottom: isActive(link.path)
                  ? '2px solid #00ff9a'
                  : 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={styles.actions}>
          {token ? (
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                style={styles.loginBtn}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                style={styles.signupBtn}
              >
                Sign Up
              </button>
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={styles.menuBtn}
            className="menu-toggle"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  navbar: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexDirection: 'row' as const,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.3s',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  actions: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  loginBtn: {
    padding: '10px 20px',
    border: '1px solid #667eea',
    background: 'transparent',
    color: '#667eea',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  signupBtn: {
    padding: '10px 20px',
    border: 'none',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    color: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  logoutBtn: {
    padding: '10px 20px',
    background: '#ff0055',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
  },
  menuBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default Navbar;