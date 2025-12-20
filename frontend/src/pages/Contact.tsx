import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We'd love to hear from you</p>

        <div style={styles.content}>
          <div style={styles.grid}>
            <div style={styles.formSection}>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  rows={5}
                  required
                ></textarea>
                <button type="submit" style={styles.button}>
                  Send Message
                </button>
              </form>
            </div>

            <div style={styles.infoSection}>
              <div style={styles.infoBox}>
                <h3>📧 Email</h3>
                <p><a href="mailto:support@virbox.com" style={styles.link}>support@virbox.com</a></p>
              </div>

              <div style={styles.infoBox}>
                <h3>📞 Phone</h3>
                <p><a href="tel:+1234567890" style={styles.link}>+1 (234) 567-890</a></p>
              </div>

              <div style={styles.infoBox}>
                <h3>📍 Address</h3>
                <p>123 Tech Street, San Francisco, CA 94102</p>
              </div>

              <div style={styles.infoBox}>
                <h3>🕒 Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM PT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '1000px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  formSection: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  input: {
    padding: '12px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
  },
  textarea: {
    padding: '12px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'inherit',
  },
  button: {
    padding: '12px',
    background: 'linear-gradient(90deg, #00ff9a, #00d4ff)',
    border: 'none',
    borderRadius: '6px',
    color: '#000',
    fontWeight: '600',
    cursor: 'pointer',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  infoBox: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
  },
  link: {
    color: '#00ff9a',
    textDecoration: 'none',
  },
};

export default Contact;