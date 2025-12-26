import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth.service';
import './Header.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">VIRLBOX</h1>
      </div>
      <div className="header-right">
        <button className="btn btn--secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};