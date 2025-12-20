import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Company */}
          <div style={styles.section}>
            <h3 style={styles.heading}>VirBox</h3>
            <p style={styles.description}>
              Powerful virtualization management platform for enterprise and cloud environments.
            </p>
            <div style={styles.social}>
              <a href="#" style={styles.socialLink}>Twitter</a>
              <a href="#" style={styles.socialLink}>LinkedIn</a>
              <a href="#" style={styles.socialLink}>GitHub</a>
            </div>
          </div>

          {/* Product */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Product</h4>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Features</a></li>
              <li><a href="#" style={styles.link}>Pricing</a></li>
              <li><a href="#" style={styles.link}>Security</a></li>
              <li><a href="#" style={styles.link}>Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Company</h4>
            <ul style={styles.list}>
              <li><a onClick={() => navigate('/about')} style={styles.link}>About Us</a></li>
              <li><a onClick={() => navigate('/blog')} style={styles.link}>Blog</a></li>
              <li><a onClick={() => navigate('/careers')} style={styles.link}>Careers</a></li>
              <li><a onClick={() => navigate('/press')} style={styles.link}>Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Support</h4>
            <ul style={styles.list}>
              <li><a onClick={() => navigate('/help')} style={styles.link}>Help Center</a></li>
              <li><a onClick={() => navigate('/contact')} style={styles.link}>Contact Us</a></li>
              <li><a onClick={() => navigate('/status')} style={styles.link}>Status</a></li>
              <li><a href="#" style={styles.link}>Documentation</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Legal</h4>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Privacy</a></li>
              <li><a href="#" style={styles.link}>Terms</a></li>
              <li><a href="#" style={styles.link}>Cookie Policy</a></li>
              <li><a href="#" style={styles.link}>GDPR</a></li>
            </ul>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            &copy; {currentYear} VirBox. All rights reserved.
          </p>
          <p style={styles.credits}>
            Made with ❤️ by the VirBox Team
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    color: '#fff',
    padding: '60px 20px 20px',
    marginTop: '80px',
    borderTop: '1px solid rgba(0, 255, 150, 0.2)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '15px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#00ff9a',
  },
  description: {
    fontSize: '14px',
    color: '#a0aec0',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  social: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    color: '#00ff9a',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  link: {
    color: '#a0aec0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  divider: {
    height: '1px',
    background: 'rgba(0, 255, 150, 0.1)',
    margin: '30px 0',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#a0aec0',
  },
  copyright: {
    margin: 0,
  },
  credits: {
    margin: 0,
  },
};

export default Footer;