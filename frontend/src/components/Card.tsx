import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, children, onClick, className, style }) => {
  return (
    <div
      style={{ ...styles.card, ...style }}
      onClick={onClick}
      className={className}
    >
      {title && <h3 style={styles.title}>{title}</h3>}
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#00ff9a',
  },
  content: {
    color: '#fff',
  },
};

export default Card;