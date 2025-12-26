import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/dashboard" className="nav-link active">
          📊 Dashboard
        </Link>
        <Link to="/dashboard" className="nav-link">
          🎯 Campaigns
        </Link>
        <Link to="/dashboard" className="nav-link">
          📝 Content
        </Link>
        <Link to="/dashboard" className="nav-link">
          📈 Analytics
        </Link>
        <Link to="/admin" className="nav-link">
          ⚙️ Admin
        </Link>
      </nav>
    </aside>
  );
};