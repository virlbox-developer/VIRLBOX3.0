import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>About VirBox</h1>
        <p style={styles.subtitle}>Transforming virtualization management</p>

        <div style={styles.content}>
          <section style={styles.section}>
            <h2>Our Mission</h2>
            <p>
              To empower organizations with cutting-edge virtualization management tools
              that are intuitive, powerful, and accessible to teams of all sizes.
            </p>
          </section>

          <section style={styles.section}>
            <h2>Our Vision</h2>
            <p>
              A world where managing virtual infrastructure is as simple as a few clicks,
              enabling teams to focus on innovation rather than infrastructure complexity.
            </p>
          </section>

          <section style={styles.section}>
            <h2>Our Values</h2>
            <ul style={styles.list}>
              <li>Innovation - Constantly pushing boundaries</li>
              <li>Reliability - Enterprise-grade quality</li>
              <li>Accessibility - Simple yet powerful</li>
              <li>Security - Your data, protected</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2>Our Team</h2>
            <p>
              VirBox is built by a passionate team of engineers, designers, and product
              experts with decades of combined experience in cloud infrastructure and
              virtualization technologies.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 20px',
    minHeight: 'calc(100vh - 200px)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#a0aec0',
    marginBottom: '40px',
  },
  content: {
    color: '#fff',
  },
  section: {
    marginBottom: '40px',
  },
  list: {
    color: '#a0aec0',
    lineHeight: '2',
  },
};

export default About;