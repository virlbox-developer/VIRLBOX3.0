import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';

const Home: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="home">
      <div className="hero">
        <h1>VIRLBOX</h1>
        <p>AI-Powered Content Automation Platform</p>
        {!user ? (
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        ) : (
          <Link to="/dashboard" className="btn btn-primary">
            Go to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
