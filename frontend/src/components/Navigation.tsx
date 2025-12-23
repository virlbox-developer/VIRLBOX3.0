import React from 'react';
import { useAuthStore } from '../stores/auth';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

export const Navigation: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          VIRLBOX
        </Link>

        <div className="nav-menu">
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/analytics" className="nav-link">
                Analytics
              </Link>
              <div className="nav-user">
                <span>{user.name}</span>
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
