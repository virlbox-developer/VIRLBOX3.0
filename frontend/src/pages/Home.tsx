import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to VirBox</h1>
      <p>Your virtualization management platform</p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/login')}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/register')}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;