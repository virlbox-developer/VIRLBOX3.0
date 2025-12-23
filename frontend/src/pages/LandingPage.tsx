import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import { landingImages } from "../assets/landing"; // adjust path if needed

const trendingVideos = [
  {
    id: 1,
    title: "GRWM: London Fashion Week",
    category: "Fashion",
    platform: "TikTok",
    views: "4.2M",
    thumbnail: landingImages.IMG_3778,
    creator: "@fashionmaven",
    duration: "0:45",
  },
  {
    id: 2,
    title: "Must-Have Travel Gadgets 2025",
    category: "Gadgets",
    platform: "YouTube",
    views: "2.8M",
    thumbnail: landingImages.LandingP4,
    creator: "@techtravel",
    duration: "0:58",
  },
  {
    id: 3,
    title: "Viral Glow Skin Routine",
    category: "Beauty",
    platform: "Instagram",
    views: "6.1M",
    thumbnail: landingImages.LandingP2,
    creator: "@glowqueen",
    duration: "0:32",
  },
  {
    id: 4,
    title: "NYC Street Food Challenge",
    category: "Food",
    platform: "TikTok",
    views: "3.5M",
    thumbnail: landingImages.IMG_3776,
    creator: "@foodiefinds",
    duration: "0:48",
  },
  {
    id: 5,
    title: "Hidden Gems in Santorini",
    category: "Travel",
    platform: "Instagram",
    views: "5.2M",
    thumbnail: landingImages.IMG_3775,
    creator: "@wanderlust",
    duration: "0:55",
  },
  {
    id: 6,
    title: "Fall 2025 Outfit Ideas",
    category: "Fashion",
    platform: "TikTok",
    views: "7.8M",
    thumbnail: landingImages.IMG_3779,
    creator: "@stylehard",
    duration: "0:42",
  },
  {
    id: 7,
    title: "AI Beauty Tools Review",
    category: "Beauty",
    platform: "YouTube",
    views: "1.9M",
    thumbnail: landingImages.LandingP3,
    creator: "@beautytech",
    duration: "0:38",
  },
  {
    id: 8,
    title: "Tokyo Ramen Tour",
    category: "Food",
    platform: "TikTok",
    views: "4.7M",
    thumbnail: landingImages.IMG_3777,
    creator: "@creator",
    duration: "0:52",
  },
  {
    id: 9,
    title: "Smart Packing Hacks",
    category: "Travel",
    platform: "Instagram",
    views: "3.1M",
    thumbnail: landingImages.LandingP4,
    creator: "@packlight",
    duration: "0:35",
  },
  {
    id: 10,
    title: "Unboxing: Viral Tech 2025",
    category: "Gadgets",
    platform: "YouTube",
    views: "2.4M",
    thumbnail: landingImages.LandingP2,
    creator: "@unboxtherapy",
    duration: "0:59",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Fashion", "Beauty", "Gadgets", "Food", "Travel"];

  const filteredVideos =
    activeCategory === "All"
      ? trendingVideos
      : trendingVideos.filter((v) => v.category === activeCategory);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="vb light">
      <nav className="vb-nav">
        <div className="vb-nav-inner">
          <Link to="/" className="vb-logo">
            <img src={landingImages.IMG_3777} alt="VIRLBOX" />
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
            <span />
            <span />
          </button>
        </div>
      </nav>

      <section className="vb-hero">
        {/* ... hero text unchanged ... */}

        <div className="vb-hero-visual">
          <img src={landingImages.IMG_3775} alt="VIRLBOX Platform" />
        </div>
      </section>

      <section className="vb-section vb-trending" id="trending">
        {/* tabs unchanged */}

        <div className="vb-carousel-wrapper">
          <button
            className="vb-carousel-btn vb-carousel-btn-left"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll left"
          >
            {/* icon */}
            ‹
          </button>

          <div className="vb-carousel" ref={carouselRef}>
            {filteredVideos.map((video) => (
              <div key={video.id} className="vb-video-card">
                <div className="vb-video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  {/* overlay unchanged */}
                </div>
                {/* info + CTA unchanged */}
              </div>
            ))}
          </div>

          <button
            className="vb-carousel-btn vb-carousel-btn-right"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll right"
          >
            {/* icon */}
            ›
          </button>
        </div>
      </section>

      <section className="vb-section vb-platform" id="platform">
        <div className="vb-card vb-card-showcase">
          <img src={landingImages.LandingP3} alt="Dashboard Preview" />
        </div>
      </section>

      <section className="vb-section vb-showcase">
        <div className="vb-card vb-card-showcase">
          <img src={landingImages.LandingP4} alt="Mobile App" />
        </div>
      </section>

      <section className="vb-section vb-bento">
        <div className="vb-bento-grid">
          <div className="vb-card vb-card-bento vb-card-lg">
            <img src={landingImages.LandingP2} alt="AI Features" />
            {/* overlay unchanged */}
          </div>

          <div className="vb-card vb-card-bento">
            <img src={landingImages.IMG_3776} alt="Creative Tools" />
          </div>

          <div className="vb-card vb-card-bento">
            <img src={landingImages.IMG_3778} alt="Multi-platform" />
          </div>
        </div>
      </section>

      <footer className="vb-footer">
        {/* footer unchanged */}
      </footer>
    </div>
  );
}
