import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  background: string;
}

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'VIRLBOX',
      subtitle: 'Unleash Your Digital Universe!',
      description: 'Powerful virtualization management platform for enterprise and cloud environments',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'CONNECT',
      subtitle: 'Seamless Integration',
      description: 'Connect multiple cloud providers and manage all your virtual machines from one dashboard',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: 'CREATE',
      subtitle: 'Build Instantly',
      description: 'Deploy new virtual machines in seconds with our intelligent automation',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: 'INNOVATE',
      subtitle: 'Transform Your Infrastructure',
      description: 'Stay ahead with cutting-edge virtualization technology and AI-powered insights',
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">VirBox</h1>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
            <li><a href="#blog" className="nav-link">Blog</a></li>
          </ul>
          <div className="nav-buttons">
            <button onClick={() => navigate('/login')} className="btn login-btn">Login</button>
            <button onClick={() => navigate('/register')} className="btn signup-btn">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className={`carousel slide-${currentSlide}`}>
        <div className="carousel-content">
          <h2 className="slide-title">{slides[currentSlide].title}</h2>
          <h3 className="slide-subtitle">{slides[currentSlide].subtitle}</h3>
          <p className="slide-description">{slides[currentSlide].description}</p>
          <button className="cta">Get Started Now →</button>
        </div>

        {/* Carousel Controls */}
        <button aria-label="Previous slide" onClick={prevSlide} className="carousel-control prev">
          ❮
        </button>
        <button aria-label="Next slide" onClick={nextSlide} className="carousel-control next">
          ❯
        </button>

        {/* Carousel Indicators */}
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose VirBox?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>High Performance</h3>
            <p>Lightning-fast VM deployment and management</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-grade encryption and compliance</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Comprehensive monitoring and reporting</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Intelligent resource optimization</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Infrastructure?</h2>
        <p>Start managing your virtual machines efficiently today</p>
        <button onClick={() => navigate('/register')} className="cta-btn">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 VirBox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;