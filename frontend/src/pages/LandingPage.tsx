import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" className="logo-img" />
            <span className="logo-text">VIRLBOX</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="btn-ghost" onClick={() => navigate("/login")}>
              Sign in
            </button>
            <button className="btn-primary" onClick={() => navigate("/register")}>
              Start Free Trial
            </button>
          </div>
          <button className="nav-mobile-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              AI-Powered Content Platform
            </div>
            <h1 className="hero-title">
              Unlock Your
              <span className="gradient-text"> Virtual Potential</span>
            </h1>
            <p className="hero-subtitle">
              Create viral content across all social platforms in seconds. 
              Our AI agents handle everything from ideation to scheduling, 
              so you can focus on what matters most—growing your brand.
            </p>
            <div className="hero-cta">
              <div className="hero-input-group">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn-primary btn-lg">Get Started Free</button>
              </div>
              <p className="hero-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>
            <div className="hero-social-proof">
              <div className="avatar-stack">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="avatar" style={{ backgroundImage: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 40}, 70%, 40%))` }}></div>
                ))}
              </div>
              <div className="proof-text">
                <strong>2,500+</strong> creators already using VIRLBOX
                <div className="stars">★★★★★ <span>4.9/5</span></div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/assets/IMG_3775.jpg" alt="VIRLBOX Platform" className="hero-image" />
              <div className="hero-glow hero-glow-1"></div>
              <div className="hero-glow hero-glow-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos">
        <div className="logos-container">
          <p className="logos-title">Trusted by innovative teams worldwide</p>
          <div className="logos-grid">
            {["TikTok", "Instagram", "YouTube", "Twitter", "Discord", "LinkedIn"].map((brand) => (
              <div key={brand} className="logo-item">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">
              Everything you need to
              <span className="gradient-text"> go viral</span>
            </h2>
            <p className="section-subtitle">
              Powerful AI tools that transform how you create, schedule, and analyze content across every platform.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-large">
              <div className="feature-image-wrapper">
                <img src="/assets/Landing-P2.jpg" alt="AI Features" className="feature-image" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">🤖</div>
                <h3>AI Content Assistant</h3>
                <p>Generate scroll-stopping content ideas, captions, and hashtags tailored to each platform's algorithm.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📹</div>
              <h3>Video Generation</h3>
              <p>Create professional videos in 60 seconds with AI-powered editing and trending templates.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Track performance across all platforms with real-time insights and predictive analytics.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Smart Scheduling</h3>
              <p>AI determines the perfect posting time for maximum engagement on each platform.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Trending Topics</h3>
              <p>Stay ahead with real-time trend detection and content recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="showcase">
        <div className="showcase-container">
          <div className="showcase-content">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">
              Create viral videos in
              <span className="gradient-text"> 60 seconds</span>
            </h2>
            <p className="section-subtitle">
              Our AI handles the heavy lifting. Just describe your idea, and watch as VIRLBOX transforms it into platform-optimized content.
            </p>
            <ul className="showcase-list">
              <li>
                <span className="list-icon">1</span>
                <div>
                  <strong>Describe your vision</strong>
                  <p>Tell our AI what you want to create in plain language</p>
                </div>
              </li>
              <li>
                <span className="list-icon">2</span>
                <div>
                  <strong>AI generates content</strong>
                  <p>Watch as our agents create videos, images, and copy</p>
                </div>
              </li>
              <li>
                <span className="list-icon">3</span>
                <div>
                  <strong>Review and publish</strong>
                  <p>Fine-tune if needed, then schedule across all platforms</p>
                </div>
              </li>
            </ul>
            <button className="btn-primary btn-lg">Try It Now — Free</button>
          </div>
          <div className="showcase-visual">
            <img src="/assets/Landing-P4.jpg" alt="Mobile App" className="showcase-image" />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview">
        <div className="dashboard-container">
          <div className="section-header">
            <span className="section-badge">Dashboard</span>
            <h2 className="section-title">
              Your command center for
              <span className="gradient-text"> social domination</span>
            </h2>
            <p className="section-subtitle">
              Monitor all your accounts, track performance, and manage content from one powerful dashboard.
            </p>
          </div>
          <div className="dashboard-image-wrapper">
            <img src="/assets/Landing-P3.jpg" alt="Dashboard Preview" className="dashboard-image" />
            <div className="dashboard-glow"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="pricing-container">
          <div className="section-header">
            <span className="section-badge">Pricing</span>
            <h2 className="section-title">
              Simple, transparent
              <span className="gradient-text"> pricing</span>
            </h2>
            <p className="section-subtitle">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Free</h3>
                <div className="pricing-price">
                  <span className="price">$0</span>
                  <span className="period">/month</span>
                </div>
                <p>Perfect for getting started</p>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 10 AI generations/month</li>
                <li><span className="check">✓</span> 1 social account</li>
                <li><span className="check">✓</span> Basic analytics</li>
                <li><span className="check">✓</span> Community support</li>
              </ul>
              <button className="btn-outline btn-full">Get Started</button>
            </div>

            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <div className="pricing-price">
                  <span className="price">$29</span>
                  <span className="period">/month</span>
                </div>
                <p>For serious content creators</p>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Unlimited AI generations</li>
                <li><span className="check">✓</span> 10 social accounts</li>
                <li><span className="check">✓</span> Advanced analytics</li>
                <li><span className="check">✓</span> Priority support</li>
                <li><span className="check">✓</span> Custom templates</li>
                <li><span className="check">✓</span> Team collaboration</li>
              </ul>
              <button className="btn-primary btn-full">Start Free Trial</button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Business</h3>
                <div className="pricing-price">
                  <span className="price">$99</span>
                  <span className="period">/month</span>
                </div>
                <p>For teams and agencies</p>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Everything in Pro</li>
                <li><span className="check">✓</span> Unlimited accounts</li>
                <li><span className="check">✓</span> White-label reports</li>
                <li><span className="check">✓</span> API access</li>
                <li><span className="check">✓</span> Dedicated manager</li>
                <li><span className="check">✓</span> Custom integrations</li>
              </ul>
              <button className="btn-outline btn-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-background">
            <img src="/assets/IMG_3779.jpg" alt="VIRLBOX AI" className="cta-bg-image" />
            <div className="cta-overlay"></div>
          </div>
          <div className="cta-content">
            <h2>Ready to unleash your digital universe?</h2>
            <p>Join thousands of creators who are already using VIRLBOX to grow their audience.</p>
            <div className="cta-actions">
              <button className="btn-white btn-lg" onClick={() => navigate("/register")}>
                Start Free Trial
              </button>
              <button className="btn-ghost-white btn-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="nav-logo">
                <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" className="logo-img" />
                <span className="logo-text">VIRLBOX</span>
              </div>
              <p>AI-powered content creation platform for the modern creator.</p>
              <div className="footer-social">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="YouTube">▶</a>
                <a href="#" aria-label="TikTok">♪</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Integrations</a>
                <a href="#">API</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <a href="#">Help Center</a>
                <a href="#">Tutorials</a>
                <a href="#">Community</a>
                <a href="#">Status</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Security</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 VIRLBOX. All rights reserved.</p>
            <p>Made with 💜 for creators worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
