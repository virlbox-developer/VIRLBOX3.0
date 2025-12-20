import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  message = 'Loading...',
}) => {
  const sizeMap = {
    small: 30,
    medium: 50,
    large: 70,
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.spinner,
          width: sizeMap[size],
          height: sizeMap[size],
        }}
      ></div>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    gap: '20px',
  },
  spinner: {
    border: '4px solid rgba(0, 255, 150, 0.2)',
    borderTop: '4px solid #00ff9a',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  message: {
    color: '#a0aec0',
    fontSize: '16px',
  },
};

export default LoadingSpinner;