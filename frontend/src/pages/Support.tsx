import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started?',
      answer:
        'Simply sign up for an account, and you can start managing your virtual machines immediately. Check out our documentation for a detailed walkthrough.',
    },
    {
      question: 'Is VirBox secure?',
      answer:
        'Yes! VirBox uses enterprise-grade encryption and security practices. All data is encrypted both in transit and at rest.',
    },
    {
      question: 'Can I integrate with my existing infrastructure?',
      answer:
        'Absolutely! VirBox supports integration with major cloud providers including AWS, Azure, Google Cloud, and more.',
    },
    {
      question: 'What kind of support is available?',
      answer:
        'We offer email support, live chat, and comprehensive documentation. Premium plans include dedicated support.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! Start with our 30-day free trial with full access to all features. No credit card required.',
    },
  ];

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Support Center</h1>
        <p style={styles.subtitle}>Get help when you need it</p>

        <div style={styles.content}>
          <section style={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div style={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={styles.faqItem}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div style={styles.faqQuestion}>
                    <h3>{faq.question}</h3>
                    <span style={styles.icon}>
                      {openIndex === index ? '▼' : '▶'}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p style={styles.faqAnswer}>{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section style={styles.section}>
            <h2>Help Resources</h2>
            <div style={styles.resourceGrid}>
              <a href="#" style={styles.resourceCard}>
                <h3>📚 Documentation</h3>
                <p>Complete guides and API documentation</p>
              </a>
              <a href="#" style={styles.resourceCard}>
                <h3>🎓 Tutorials</h3>
                <p>Step-by-step video tutorials</p>
              </a>
              <a href="#" style={styles.resourceCard}>
                <h3>🔧 Troubleshooting</h3>
                <p>Solutions to common issues</p>
              </a>
              <a href="#" style={styles.resourceCard}>
                <h3>💬 Community</h3>
                <p>Connect with other users</p>
              </a>
            </div>
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
    marginBottom: '60px',
  },
  faqList: {
    marginTop: '20px',
  },
  faqItem: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '8px',
    marginBottom: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  icon: {
    color: '#00ff9a',
    fontSize: '12px',
  },
  faqAnswer: {
    padding: '0 20px 20px',
    color: '#a0aec0',
    borderTop: '1px solid rgba(0, 255, 150, 0.1)',
  },
  resourceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  resourceCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 150, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
};

export default Support;