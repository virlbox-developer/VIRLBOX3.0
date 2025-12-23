import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="vb">
      {/* Navigation - Apple Style */}
      <nav className="vb-nav">
        <div className="vb-nav-inner">
          <Link to="/" className="vb-logo">
            <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" />
            <span>VIRLBOX</span>
          </Link>

          <div className={`vb-nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <Link to="/#platform">Platform</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/#enterprise">Enterprise</Link>
            <Link to="/#resources">Resources</Link>
          </div>

          <div className="vb-nav-actions">
            <button className="vb-btn-text" onClick={() => navigate("/login")}>
              Sign in
            </button>
            <button className="vb-btn-primary" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </div>

          <button
            className="vb-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero - Apple "Marketing Moment" */}
      <section className="vb-hero">
        <div className="vb-hero-content">
          <p className="vb-hero-eyebrow">AI Content Platform</p>
          <h1 className="vb-hero-title">
            Unlock Your
            <br />
            <span>Virtual Potential</span>
          </h1>
          <p className="vb-hero-subtitle">
            Create viral content across every platform. Powered by AI agents
            that understand your brand.
          </p>
          <div className="vb-hero-cta">
            <button className="vb-btn-primary vb-btn-lg" onClick={() => navigate("/register")}>
              Start Free Trial
            </button>
            <button className="vb-btn-secondary vb-btn-lg">
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
          </div>
          <p className="vb-hero-note">No credit card required</p>
        </div>

        <div className="vb-hero-visual">
          <div className="vb-hero-image-container">
            <img src="/assets/IMG_3775.jpg" alt="VIRLBOX Platform" className="vb-hero-img" />
            <div className="vb-hero-glow"></div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="vb-proof">
        <div className="vb-proof-inner">
          <p>Trusted by 10,000+ creators and brands worldwide</p>
          <div className="vb-proof-logos">
            <span>TikTok</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </section>

      {/* Platform Overview - Big Visual Moment */}
      <section className="vb-section vb-platform" id="platform">
        <div className="vb-section-header">
          <p className="vb-label">Platform</p>
          <h2>One dashboard.<br />Every platform.</h2>
          <p className="vb-section-desc">
            Manage content, track analytics, and schedule posts across
            all your social accounts from a single, intuitive interface.
          </p>
        </div>

        <div className="vb-card vb-card-hero">
          <img src="/assets/Landing-P3.jpg" alt="Dashboard Preview" />
        </div>
      </section>

      {/* Features - Uniform Grid */}
      <section className="vb-section vb-features" id="features">
        <div className="vb-section-header">
          <p className="vb-label">Features</p>
          <h2>Everything you need<br />to go viral</h2>
        </div>

        <div className="vb-grid vb-grid-3">
          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
                <line x1="10" y1="22" x2="14" y2="22"/>
              </svg>
            </div>
            <h3>AI Assistant</h3>
            <p>Generate scroll-stopping content ideas, captions, and hashtags tailored to each platform.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="23,7 16,12 23,17"/>
                <rect x="1" y="5" width="15" height="14" rx="2"/>
              </svg>
            </div>
            <h3>Video Generation</h3>
            <p>Create professional videos in 60 seconds with AI-powered editing and trending templates.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3>Analytics</h3>
            <p>Track performance across all platforms with real-time insights and predictive analytics.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Smart Scheduling</h3>
            <p>AI determines the perfect posting time for maximum engagement on each platform.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Trending Topics</h3>
            <p>Stay ahead with real-time trend detection and content recommendations.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Team Collaboration</h3>
            <p>Work together seamlessly with roles, approvals, and shared content libraries.</p>
          </div>
        </div>
      </section>

      {/* Showcase Split - Apple Style */}
      <section className="vb-section vb-showcase">
        <div className="vb-showcase-grid">
          <div className="vb-showcase-content">
            <p className="vb-label">Create</p>
            <h2>Viral videos in<br />60 seconds</h2>
            <p className="vb-showcase-desc">
              Describe your vision in plain language. Our AI transforms your ideas
              into platform-optimized videos, complete with captions, music, and effects.
            </p>
            <ul className="vb-showcase-list">
              <li>
                <span className="vb-list-num">01</span>
                <div>
                  <strong>Describe your vision</strong>
                  <p>Tell our AI what you want to create</p>
                </div>
              </li>
              <li>
                <span className="vb-list-num">02</span>
                <div>
                  <strong>AI generates content</strong>
                  <p>Watch as our agents create videos, images, and copy</p>
                </div>
              </li>
              <li>
                <span className="vb-list-num">03</span>
                <div>
                  <strong>Publish everywhere</strong>
                  <p>Schedule across all platforms with one click</p>
                </div>
              </li>
            </ul>
            <button className="vb-btn-primary vb-btn-lg">Try It Free</button>
          </div>
          <div className="vb-showcase-visual">
            <div className="vb-card vb-card-visual">
              <img src="/assets/Landing-P4.jpg" alt="Mobile App Preview" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid with Images */}
      <section className="vb-section vb-bento">
        <div className="vb-section-header">
          <p className="vb-label">Capabilities</p>
          <h2>Built for modern creators</h2>
        </div>

        <div className="vb-bento-grid">
          <div className="vb-card vb-card-lg">
            <img src="/assets/Landing-P2.jpg" alt="AI Features" />
            <div className="vb-card-overlay">
              <h3>AI-Powered Tools</h3>
              <p>From content ideation to automated workflows</p>
            </div>
          </div>

          <div className="vb-card vb-card-md">
            <img src="/assets/IMG_3776.jpg" alt="VIRLBOX Story" />
            <div className="vb-card-overlay">
              <h3>Unleash Creativity</h3>
              <p>Your digital universe awaits</p>
            </div>
          </div>

          <div className="vb-card vb-card-md">
            <img src="/assets/IMG_3778.jpg" alt="Connect Create Innovate" />
            <div className="vb-card-overlay">
              <h3>Connect. Create. Innovate.</h3>
              <p>All-in-one platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Clean Cards */}
      <section className="vb-section vb-pricing" id="pricing">
        <div className="vb-section-header">
          <p className="vb-label">Pricing</p>
          <h2>Simple, transparent pricing</h2>
          <p className="vb-section-desc">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="vb-grid vb-grid-3 vb-pricing-grid">
          <div className="vb-card vb-pricing-card">
            <div className="vb-pricing-header">
              <h3>Free</h3>
              <div className="vb-price">
                <span className="vb-price-amount">$0</span>
                <span className="vb-price-period">/month</span>
              </div>
              <p>Perfect for getting started</p>
            </div>
            <ul className="vb-pricing-features">
              <li>10 AI generations/month</li>
              <li>1 social account</li>
              <li>Basic analytics</li>
              <li>Community support</li>
            </ul>
            <button className="vb-btn-secondary vb-btn-full">Get Started</button>
          </div>

          <div className="vb-card vb-pricing-card vb-pricing-featured">
            <div className="vb-pricing-badge">Most Popular</div>
            <div className="vb-pricing-header">
              <h3>Pro</h3>
              <div className="vb-price">
                <span className="vb-price-amount">$29</span>
                <span className="vb-price-period">/month</span>
              </div>
              <p>For serious creators</p>
            </div>
            <ul className="vb-pricing-features">
              <li>Unlimited AI generations</li>
              <li>10 social accounts</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom templates</li>
              <li>Team collaboration</li>
            </ul>
            <button className="vb-btn-primary vb-btn-full">Start Free Trial</button>
          </div>

          <div className="vb-card vb-pricing-card">
            <div className="vb-pricing-header">
              <h3>Business</h3>
              <div className="vb-price">
                <span className="vb-price-amount">$99</span>
                <span className="vb-price-period">/month</span>
              </div>
              <p>For teams and agencies</p>
            </div>
            <ul className="vb-pricing-features">
              <li>Everything in Pro</li>
              <li>Unlimited accounts</li>
              <li>White-label reports</li>
              <li>API access</li>
              <li>Dedicated manager</li>
              <li>Custom integrations</li>
            </ul>
            <button className="vb-btn-secondary vb-btn-full">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA - Full Bleed */}
      <section className="vb-cta">
        <div className="vb-cta-bg">
          <img src="/assets/IMG_3779.jpg" alt="VIRLBOX AI" />
          <div className="vb-cta-overlay"></div>
        </div>
        <div className="vb-cta-content">
          <h2>Ready to transform your content?</h2>
          <p>Join thousands of creators already using VIRLBOX</p>
          <div className="vb-cta-actions">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="vb-input"
            />
            <button className="vb-btn-white vb-btn-lg">Get Started Free</button>
          </div>
        </div>
      </section>

      {/* Footer - Reorganized */}
      <footer className="vb-footer">
        <div className="vb-footer-inner">
          <div className="vb-footer-top">
            <div className="vb-footer-brand">
              <Link to="/" className="vb-logo">
                <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" />
                <span>VIRLBOX</span>
              </Link>
              <p>AI-powered content creation for the modern creator.</p>
            </div>

            <div className="vb-footer-grid">
              <div className="vb-footer-col">
                <h4>Product</h4>
                <Link to="/#features">Features</Link>
                <Link to="/#pricing">Pricing</Link>
                <Link to="/#platform">Platform</Link>
                <Link to="/integrations">Integrations</Link>
                <Link to="/api">API</Link>
              </div>
              <div className="vb-footer-col">
                <h4>Resources</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/tutorials">Tutorials</Link>
                <Link to="/help">Help Center</Link>
                <Link to="/community">Community</Link>
                <Link to="/status">Status</Link>
              </div>
              <div className="vb-footer-col">
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/press">Press</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="vb-footer-col">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/security">Security</Link>
                <Link to="/cookies">Cookies</Link>
              </div>
            </div>
          </div>

          <div className="vb-footer-bottom">
            <p>© 2025 VIRLBOX. All rights reserved.</p>
            <div className="vb-footer-social">
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
