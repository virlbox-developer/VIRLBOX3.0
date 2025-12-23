import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import { landingImages } from "../assets/landing"; // adjust path if needed

// 10 real-world trend examples (link-outs only; thumbnails are your own brand assets)
const trending2025 = [
  {
    id: "t1",
    title: "GRWM: Winter layering + texture mixing",
    platform: "TikTok",
    region: "UK",
    category: "Fashion",
    url: "https://www.tiktok.com/tag/2025fashion",
    thumb: landingImages.IMG_3778,
    why: "Fast hook + outfit reveal + comment bait.",
  },
  {
    id: "t2",
    title: "Viral beauty products that dominated TikTok",
    platform: "TikTok",
    region: "USA",
    category: "Beauty",
    url: "https://www.vogue.com/article/tiktok-viral-beauty-products-2025",
    thumb: landingImages.LandingP2,
    why: "Product demo + before/after + social proof.",
  },
  {
    id: "t3",
    title: "Instagram Reels trends (updated weekly)",
    platform: "Instagram",
    region: "UK/USA",
    category: "Beauty",
    url: "https://later.com/blog/instagram-reels-trends/",
    thumb: landingImages.IMG_3775,
    why: "Repeatable templates + trending audio patterns.",
  },
  {
    id: "t4",
    title: "Short-form travel content ideas for 2025",
    platform: "Instagram",
    region: "UK/USA",
    category: "Travel",
    url: "https://travelcollabs.com/travel-content-ideas/",
    thumb: landingImages.IMG_3776,
    why: "POV storytelling + quick cuts + location payoff.",
  },
  {
    id: "t5",
    title: "Short form video trends to dominate 2025",
    platform: "YouTube Shorts",
    region: "UK/USA",
    category: "Gadgets",
    url: "https://shortsninja.com/blog/short-form-video-trends/",
    thumb: landingImages.LandingP3,
    why: "Pattern interrupts + captions + retention loops.",
  },
  {
    id: "t6",
    title: "US fashion & beauty trends discovery",
    platform: "TikTok",
    region: "USA",
    category: "Fashion",
    url: "https://www.tiktok.com/discover/us-fashion-and-beauty-trends-2025",
    thumb: landingImages.LandingP4,
    why: "Trend aggregation + fast iteration of formats.",
  },
  {
    id: "t7",
    title: "Travel gadgets roundup (2025)",
    platform: "YouTube",
    region: "USA",
    category: "Gadgets",
    url: "https://www.youtube.com/watch?v=weAJbbBAQ34",
    thumb: landingImages.IMG_3779,
    why: "Unboxing + quick verdict + affiliate-friendly CTA.",
  },
  {
    id: "t8",
    title: "TikTok trends brands copy in 2025",
    platform: "TikTok",
    region: "UK/USA",
    category: "Food",
    url: "https://www.amraandelma.com/tiktok-trends-every-brand-is-copying/",
    thumb: landingImages.IMG_3777,
    why: "Trend formats that scale across niches.",
  },
  {
    id: "t9",
    title: "Reels/Shorts trends for businesses (2025)",
    platform: "Instagram / YouTube",
    region: "UK/USA",
    category: "Travel",
    url: "https://creativesplash.co.in/blog/2025-instagram-reels-youtube-shorts-trends-business/",
    thumb: landingImages.IMG_3776,
    why: "Business-friendly edits + repeatable series structure.",
  },
  {
    id: "t10",
    title: "YouTube Shorts vs Reels (what to know)",
    platform: "YouTube Shorts",
    region: "UK/USA",
    category: "Food",
    url: "https://www.hammerhead.global/blogs/youtube-shorts-vs-instagram-reels-what-you-must-know",
    thumb: landingImages.IMG_3775,
    why: "Platform differences → format decisions.",
  },
];

// 10 “Create now” videos (VirlBox-generated concepts) — styled after agency pipelines
const virlboxVideoBlueprints = [
  {
    id: "v1",
    title: "Fashion: 7-day outfit series (UK winter)",
    hook: "Stop scrolling — steal my 7-day winter capsule.",
    deliverables: "10 variants (hooks) + captions + hashtags",
    cta: "Generate 10 scripts",
  },
  {
    id: "v2",
    title: "Beauty: Viral product demo (USA Sephora-style)",
    hook: "This is why your makeup separates — fix it in 20s.",
    deliverables: "UGC script + shot list + VO + on-screen text",
    cta: "Build shot list",
  },
  {
    id: "v3",
    title: "Gadgets: ‘Worth it?’ quick review",
    hook: "I tested the viral gadget so you don’t have to…",
    deliverables: "3 endings (buy/skip/alt) + CTA variations",
    cta: "Create 3 endings",
  },
  {
    id: "v4",
    title: "Food: 3-ingredient recipe (UK/USA)",
    hook: "3 ingredients. 10 minutes. Restaurant-level.",
    deliverables: "Step captions + pacing guide + music cues",
    cta: "Generate captions",
  },
  {
    id: "v5",
    title: "Travel: Hidden gems (London/NYC)",
    hook: "You’ve walked past this place 100 times…",
    deliverables: "POV script + map overlay prompts + CTA",
    cta: "Make a series",
  },
  {
    id: "v6",
    title: "Fashion: Try-on haul (high retention edit)",
    hook: "Rate these 5 looks — be brutal.",
    deliverables: "Comment bait + split-test hooks + CTA",
    cta: "Create A/B hooks",
  },
  {
    id: "v7",
    title: "Beauty: Before/after routine (30 seconds)",
    hook: "If your skin looks dull — do this tonight.",
    deliverables: "Storyboard + text overlays + 5 captions",
    cta: "Generate storyboard",
  },
  {
    id: "v8",
    title: "Gadgets: Desk setup upgrade (creator kit)",
    hook: "This upgraded my setup instantly.",
    deliverables: "B-roll list + hook pack + CTA pack",
    cta: "Create hook pack",
  },
  {
    id: "v9",
    title: "Food: Viral street-food at home",
    hook: "I recreated the viral street food — here’s the hack.",
    deliverables: "Beat sheet + cuts every 0.7–1.2s guidance",
    cta: "Generate edit plan",
  },
  {
    id: "v10",
    title: "Travel: Packing hacks (fast cuts)",
    hook: "Packing mistake everyone makes (fix it).",
    deliverables: "3 formats (TikTok/Reels/Shorts) + captions",
    cta: "Repurpose for all",
  },
];


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
        <div className="vb-section-header">
          <span className="vb-label">Trending now</span>
          <h2>Trending short videos in 2025</h2>
          <p className="vb-section-desc">
            UK + USA inspiration across TikTok, Instagram Reels, and YouTube Shorts — then generate your own versions with VirlBox.
          </p>
        </div>

        {/* Carousel A: Real-world trend links */}
        <div className="vb-carousel-block">
          <div className="vb-carousel-head">
            <h3>Watch what’s trending</h3>
            <p>Link out to the original source. Use these as briefs.</p>
          </div>

          <div className="vb-carousel" style={{ paddingBottom: 8 }}>
            {trending2025.map((item) => (
              <a
                key={item.id}
                className="vb-video-card vb-video-card-link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="vb-video-thumbnail">
                  <img src={item.thumb} alt={item.title} />
                  <span className="vb-video-pill">{item.platform}</span>
                  <span className="vb-video-duration">{item.region}</span>
                </div>

                <div className="vb-video-info">
                  <span className="vb-video-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="vb-video-why">{item.why}</p>
                  <span className="vb-link-cta">Open trend →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Carousel B: VirlBox “Create” CTA carousel */}
        <div className="vb-carousel-block" style={{ marginTop: 36 }}>
          <div className="vb-carousel-head">
            <h3>Create 10 videos in VirlBox</h3>
            <p>
              Structured like top agencies: hooks, variants, production notes, and optimization-ready deliverables.
            </p>
          </div>

          <div className="vb-carousel" style={{ paddingBottom: 8 }}>
            {virlboxVideoBlueprints.map((v) => (
              <div key={v.id} className="vb-video-card">
                <div className="vb-video-info">
                  <span className="vb-video-category">Blueprint</span>
                  <h3>{v.title}</h3>
                  <p className="vb-video-why"><strong>Hook:</strong> {v.hook}</p>
                  <p className="vb-video-why"><strong>Deliverables:</strong> {v.deliverables}</p>
                </div>

                <div style={{ padding: "0 24px 24px" }}>
                  <button className="vb-btn-primary vb-btn-full" onClick={() => navigate("/register")}>
                    {v.cta}
                  </button>
                  <button className="vb-btn-outline vb-btn-full" style={{ marginTop: 10 }}>
                    See example output
                  </button>
                </div>
              </div>
            ))}
          </div>
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
