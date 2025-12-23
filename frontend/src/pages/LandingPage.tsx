import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";

// Trending video data - 2025 UK/USA viral content
const trendingVideos = [
  {
    id: 1,
    title: "GRWM: London Fashion Week",
    category: "Fashion",
    platform: "TikTok",
    views: "4.2M",
    thumbnail: "/assets/IMG_3778.jpg",
    creator: "@fashionmaven",
    duration: "0:45"
  },
  {
    id: 2,
    title: "Must-Have Travel Gadgets 2025",
    category: "Gadgets",
    platform: "YouTube",
    views: "2.8M",
    thumbnail: "/assets/Landing-P4.jpg",
    creator: "@techtravel",
    duration: "0:58"
  },
  {
    id: 3,
    title: "Viral Glow Skin Routine",
    category: "Beauty",
    platform: "Instagram",
    views: "6.1M",
    thumbnail: "/assets/Landing-P2.jpg",
    creator: "@glowqueen",
    duration: "0:32"
  },
  {
    id: 4,
    title: "NYC Street Food Challenge",
    category: "Food",
    platform: "TikTok",
    views: "3.5M",
    thumbnail: "/assets/IMG_3776.jpg",
    creator: "@foodiefinds",
    duration: "0:48"
  },
  {
    id: 5,
    title: "Hidden Gems in Santorini",
    category: "Travel",
    platform: "Instagram",
    views: "5.2M",
    thumbnail: "/assets/IMG_3775.jpg",
    creator: "@wanderlust",
    duration: "0:55"
  },
  {
    id: 6,
    title: "Fall 2025 Outfit Ideas",
    category: "Fashion",
    platform: "TikTok",
    views: "7.8M",
    thumbnail: "/assets/IMG_3779.jpg",
    creator: "@stylehard",
    duration: "0:42"
  },
  {
    id: 7,
    title: "AI Beauty Tools Review",
    category: "Beauty",
    platform: "YouTube",
    views: "1.9M",
    thumbnail: "/assets/Landing-P3.jpg",
    creator: "@beautytech",
    duration: "0:38"
  },
  {
    id: 8,
    title: "Tokyo Ramen Tour",
    category: "Food",
    platform: "TikTok",
    views: "4.7M",
    thumbnail: "/assets/IMG_3777.jpg",
    creator: "@keithlee",
    duration: "0:52"
  },
  {
    id: 9,
    title: "Smart Packing Hacks",
    category: "Travel",
    platform: "Instagram",
    views: "3.1M",
    thumbnail: "/assets/Landing-P4.jpg",
    creator: "@packlight",
    duration: "0:35"
  },
  {
    id: 10,
    title: "Unboxing: Viral Tech 2025",
    category: "Gadgets",
    platform: "YouTube",
    views: "2.4M",
    thumbnail: "/assets/Landing-P2.jpg",
    creator: "@unboxtherapy",
    duration: "0:59"
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Fashion", "Beauty", "Gadgets", "Food", "Travel"];

  const filteredVideos = activeCategory === "All" 
    ? trendingVideos 
    : trendingVideos.filter(v => v.category === activeCategory);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        );
      case "Instagram":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        );
      case "YouTube":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
            <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vb light">
      {/* Navigation */}
      <nav className="vb-nav">
        <div className="vb-nav-inner">
          <Link to="/" className="vb-logo">
            <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" />
            <span>VIRLBOX</span>
          </Link>

          <div className={`vb-nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <Link to="/#platform">Platform</Link>
            <Link to="/#trending">Trending</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/#enterprise">Enterprise</Link>
          </div>

          <div className="vb-nav-actions">
            <button className="vb-btn-text" onClick={() => navigate("/login")}>
              Sign in
            </button>
            <button className="vb-btn-primary" onClick={() => navigate("/register")}>
              Start Free
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

      {/* Hero */}
      <section className="vb-hero">
        <div className="vb-hero-badge">
          <span className="vb-badge-dot"></span>
          Trusted by 10,000+ creators
        </div>
        <h1 className="vb-hero-title">
          Create viral content
          <br />
          <span>in seconds</span>
        </h1>
        <p className="vb-hero-subtitle">
          AI-powered platform that helps you create, schedule, and analyze 
          short-form videos for TikTok, Instagram, and YouTube.
        </p>
        <div className="vb-hero-cta">
          <div className="vb-hero-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="vb-btn-primary">Get Started Free</button>
          </div>
        </div>
        <p className="vb-hero-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22,4 12,14.01 9,11.01"/>
          </svg>
          No credit card required · 14-day free trial
        </p>

        <div className="vb-hero-visual">
          <img src="/assets/IMG_3775.jpg" alt="VIRLBOX Platform" />
        </div>
      </section>

      {/* Logos */}
      <section className="vb-logos">
        <p>Powering content on</p>
        <div className="vb-logos-grid">
          <span>TikTok</span>
          <span>Instagram</span>
          <span>YouTube</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </section>

      {/* Trending Videos Carousel */}
      <section className="vb-section vb-trending" id="trending">
        <div className="vb-section-header">
          <span className="vb-label">Trending Now</span>
          <h2>What's going viral in 2025</h2>
          <p className="vb-section-desc">
            Explore the top-performing short videos across fashion, beauty, gadgets, food, and travel.
            Create similar content with VIRLBOX in minutes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="vb-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`vb-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Carousel */}
        <div className="vb-carousel-wrapper">
          <button 
            className="vb-carousel-btn vb-carousel-btn-left"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>

          <div className="vb-carousel" ref={carouselRef}>
            {filteredVideos.map((video) => (
              <div key={video.id} className="vb-video-card">
                <div className="vb-video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="vb-video-overlay">
                    <button className="vb-play-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    </button>
                  </div>
                  <span className="vb-video-duration">{video.duration}</span>
                  <div className="vb-video-platform">
                    {getPlatformIcon(video.platform)}
                    <span>{video.platform}</span>
                  </div>
                </div>
                <div className="vb-video-info">
                  <span className="vb-video-category">{video.category}</span>
                  <h3>{video.title}</h3>
                  <div className="vb-video-meta">
                    <span className="vb-video-creator">{video.creator}</span>
                    <span className="vb-video-views">{video.views} views</span>
                  </div>
                </div>
                <button className="vb-btn-outline vb-btn-sm">
                  Create Similar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button 
            className="vb-carousel-btn vb-carousel-btn-right"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>

        <div className="vb-trending-cta">
          <button className="vb-btn-primary vb-btn-lg">
            Start Creating Viral Content
          </button>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="vb-section vb-platform" id="platform">
        <div className="vb-section-header">
          <span className="vb-label">Platform</span>
          <h2>Your creative command center</h2>
          <p className="vb-section-desc">
            Manage all your content from one beautiful dashboard. 
            Schedule, analyze, and optimize across every platform.
          </p>
        </div>

        <div className="vb-card vb-card-showcase">
          <img src="/assets/Landing-P3.jpg" alt="Dashboard Preview" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="vb-section vb-features" id="features">
        <div className="vb-section-header">
          <span className="vb-label">Features</span>
          <h2>Everything you need to go viral</h2>
        </div>

        <div className="vb-grid vb-grid-3">
          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
                <line x1="10" y1="22" x2="14" y2="22"/>
              </svg>
            </div>
            <h3>AI Content Generator</h3>
            <p>Generate scroll-stopping scripts, captions, and hashtags tailored to each platform's algorithm.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="23,7 16,12 23,17"/>
                <rect x="1" y="5" width="15" height="14" rx="2"/>
              </svg>
            </div>
            <h3>Video Editor</h3>
            <p>Edit videos in seconds with AI-powered tools. Add trending sounds, effects, and transitions.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Track performance with real-time insights. See what's working and optimize your strategy.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Smart Scheduler</h3>
            <p>AI finds the best posting times for maximum reach. Schedule weeks of content in minutes.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Trend Detection</h3>
            <p>Stay ahead with real-time trend alerts. Never miss a viral moment in your niche.</p>
          </div>

          <div className="vb-card">
            <div className="vb-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Auto-Repurpose</h3>
            <p>Turn one video into content for every platform. Automatic resizing and reformatting.</p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="vb-section vb-showcase">
        <div className="vb-showcase-grid">
          <div className="vb-showcase-content">
            <span className="vb-label">How It Works</span>
            <h2>From idea to viral in 3 steps</h2>
            <ul className="vb-steps">
              <li>
                <span className="vb-step-num">01</span>
                <div>
                  <strong>Describe your vision</strong>
                  <p>Tell our AI what you want to create in plain language</p>
                </div>
              </li>
              <li>
                <span className="vb-step-num">02</span>
                <div>
                  <strong>AI generates content</strong>
                  <p>Watch as our agents create videos, images, and captions</p>
                </div>
              </li>
              <li>
                <span className="vb-step-num">03</span>
                <div>
                  <strong>Publish everywhere</strong>
                  <p>Schedule across TikTok, Instagram, and YouTube instantly</p>
                </div>
              </li>
            </ul>
            <button className="vb-btn-primary vb-btn-lg">Try It Free</button>
          </div>
          <div className="vb-showcase-visual">
            <div className="vb-card vb-card-showcase">
              <img src="/assets/Landing-P4.jpg" alt="Mobile App" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="vb-section vb-bento">
        <div className="vb-bento-grid">
          <div className="vb-card vb-card-bento vb-card-lg">
            <img src="/assets/Landing-P2.jpg" alt="AI Features" />
            <div className="vb-card-content">
              <span className="vb-label">AI Powered</span>
              <h3>Tools that understand trends</h3>
              <p>Our AI analyzes millions of viral videos to help you create content that resonates.</p>
            </div>
          </div>

          <div className="vb-card vb-card-bento">
            <img src="/assets/IMG_3776.jpg" alt="Creative Tools" />
            <div className="vb-card-content">
              <h3>Unleash creativity</h3>
              <p>Professional editing tools made simple</p>
            </div>
          </div>

          <div className="vb-card vb-card-bento">
            <img src="/assets/IMG_3778.jpg" alt="Multi-platform" />
            <div className="vb-card-content">
              <h3>Every platform</h3>
              <p>TikTok, Reels, Shorts, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="vb-section vb-pricing" id="pricing">
        <div className="vb-section-header">
          <span className="vb-label">Pricing</span>
          <h2>Start free, scale as you grow</h2>
          <p className="vb-section-desc">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="vb-grid vb-grid-3 vb-pricing-grid">
          <div className="vb-card vb-pricing-card">
            <div className="vb-pricing-header">
              <h3>Free</h3>
              <div className="vb-price">
                <span className="vb-price-amount">$0</span>
                <span className="vb-price-period">/month</span>
              </div>
              <p>For getting started</p>
            </div>
            <ul className="vb-pricing-list">
              <li>10 AI generations/month</li>
              <li>1 social account</li>
              <li>Basic analytics</li>
              <li>Community support</li>
            </ul>
            <button className="vb-btn-outline vb-btn-full">Get Started</button>
          </div>

          <div className="vb-card vb-pricing-card vb-pricing-featured">
            <div className="vb-pricing-badge">Popular</div>
            <div className="vb-pricing-header">
              <h3>Pro</h3>
              <div className="vb-price">
                <span className="vb-price-amount">$29</span>
                <span className="vb-price-period">/month</span>
              </div>
              <p>For serious creators</p>
            </div>
            <ul className="vb-pricing-list">
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
              <p>For teams & agencies</p>
            </div>
            <ul className="vb-pricing-list">
              <li>Everything in Pro</li>
              <li>Unlimited accounts</li>
              <li>White-label reports</li>
              <li>API access</li>
              <li>Dedicated manager</li>
              <li>Custom integrations</li>
            </ul>
            <button className="vb-btn-outline vb-btn-full">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vb-cta">
        <div className="vb-cta-inner">
          <h2>Ready to go viral?</h2>
          <p>Join 10,000+ creators using VIRLBOX to grow their audience.</p>
          <div className="vb-cta-actions">
            <button className="vb-btn-primary vb-btn-lg" onClick={() => navigate("/register")}>
              Start Free Trial
            </button>
            <button className="vb-btn-outline vb-btn-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Reorganized with Legal & Contact Hierarchy */}
      <footer className="vb-footer">
        <div className="vb-footer-inner">
          {/* Main Footer Grid */}
          <div className="vb-footer-main">
            <div className="vb-footer-brand">
              <Link to="/" className="vb-logo">
                <img src="/assets/IMG_3777.jpg" alt="VIRLBOX" />
                <span>VIRLBOX</span>
              </Link>
              <p>AI-powered content creation for the modern creator.</p>
              <div className="vb-footer-social">
                <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
                <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/></svg></a>
                <a href="#" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>

            <div className="vb-footer-links">
              <div className="vb-footer-col">
                <h4>Product</h4>
                <Link to="/#features">Features</Link>
                <Link to="/#pricing">Pricing</Link>
                <Link to="/#platform">Platform</Link>
                <Link to="/integrations">Integrations</Link>
                <Link to="/api">API</Link>
                <Link to="/changelog">What's New</Link>
              </div>
              <div className="vb-footer-col">
                <h4>Resources</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/tutorials">Tutorials</Link>
                <Link to="/guides">Creator Guides</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/help">Help Center</Link>
                <Link to="/community">Community</Link>
              </div>
              <div className="vb-footer-col">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/press">Press Kit</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/customers">Customers</Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="vb-footer-contact">
            <div className="vb-contact-item">
              <h4>Sales</h4>
              <a href="mailto:sales@virlbox.com">sales@virlbox.com</a>
              <a href="tel:+442012345678">+44 20 1234 5678</a>
            </div>
            <div className="vb-contact-item">
              <h4>Support</h4>
              <a href="mailto:support@virlbox.com">support@virlbox.com</a>
              <Link to="/help">Help Center</Link>
            </div>
            <div className="vb-contact-item">
              <h4>Press</h4>
              <a href="mailto:press@virlbox.com">press@virlbox.com</a>
              <Link to="/press">Media Kit</Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="vb-footer-legal">
            <div className="vb-legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="vb-divider">·</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="vb-divider">·</span>
              <Link to="/cookies">Cookie Policy</Link>
              <span className="vb-divider">·</span>
              <Link to="/security">Security</Link>
              <span className="vb-divider">·</span>
              <Link to="/gdpr">GDPR</Link>
              <span className="vb-divider">·</span>
              <Link to="/accessibility">Accessibility</Link>
            </div>
            <p className="vb-copyright">© 2025 VIRLBOX Ltd. All rights reserved. Registered in England & Wales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
