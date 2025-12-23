import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

import Lightbox, { LightboxItem } from "../components/Lightbox";
import { landingImages } from "../assets/landing";
import { getTrendThumb } from "../assets/trends";

type TrendItem = {
  id: string;
  title: string;
  platform: "TikTok" | "Instagram" | "YouTube";
  category: "Fashion" | "Beauty" | "Gadgets" | "Food" | "Travel";
  url: string;
  thumbFile: string; // curated screenshot filename in src/assets/trends
  preview?: { type: "image" } | { type: "youtube"; videoId: string };
  why: string;
};

type BlueprintItem = {
  id: string;
  title: string;
  category: "Fashion" | "Beauty" | "Gadgets" | "Food" | "Travel";
  hook: string;
  deliverables: string;
  primaryCta: string;
  secondaryCta: string;
  previewImage: string;
};

const LandingPage = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | TrendItem["category"]>("All");

  // pricing table
  const [selectedPlan, setSelectedPlan] = useState<"Free" | "Pro" | "Business">("Pro");

  // lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  // carousels
  const trendsRef = useRef<HTMLDivElement>(null);
  const blueprintsRef = useRef<HTMLDivElement>(null);

  const openLightbox = (item: LightboxItem) => {
    setLightboxItem(item);
    setLightboxOpen(true);
  };

  const scrollByCard = (ref: React.RefObject<HTMLDivElement>, dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  const categories: Array<"All" | TrendItem["category"]> = ["All", "Fashion", "Beauty", "Gadgets", "Food", "Travel"];

  const trending2025: TrendItem[] = useMemo(
    () => [
      {
        id: "t1",
        title: "2025 Fashion trend inspiration",
        platform: "TikTok",
        category: "Fashion",
        url: "https://www.tiktok.com/tag/2025fashion",
        thumbFile: "tiktok-2025fashion.jpg",
        preview: { type: "image" },
        why: "Fast hooks + outfit reveals + comment-driving prompts.",
      },
      {
        id: "t2",
        title: "Viral beauty products (2025)",
        platform: "TikTok",
        category: "Beauty",
        url: "https://www.vogue.com/article/tiktok-viral-beauty-products-2025",
        thumbFile: "vogue-viral-beauty-2025.jpg",
        preview: { type: "image" },
        why: "Before/after, proof, and clear product payoff.",
      },
      {
        id: "t3",
        title: "Instagram Reels trends (2025)",
        platform: "Instagram",
        category: "Beauty",
        url: "https://later.com/blog/instagram-reels-trends/",
        thumbFile: "later-reels-trends-2025.jpg",
        preview: { type: "image" },
        why: "Repeatable templates that scale across niches.",
      },
      {
        id: "t4",
        title: "Short-form travel content ideas (2025)",
        platform: "Instagram",
        category: "Travel",
        url: "https://travelcollabs.com/travel-content-ideas/",
        thumbFile: "travelcollabs-ideas-2025.jpg",
        preview: { type: "image" },
        why: "POV storytelling with quick cuts and payoff.",
      },
      {
        id: "t5",
        title: "Short-form trends to dominate (2025)",
        platform: "YouTube",
        category: "Gadgets",
        url: "https://shortsninja.com/blog/short-form-video-trends/",
        thumbFile: "shortsninja-trends-2025.jpg",
        preview: { type: "image" },
        why: "Retention loops, captions, and pattern interrupts.",
      },
      {
        id: "t6",
        title: "Fashion + beauty trend discovery",
        platform: "TikTok",
        category: "Fashion",
        url: "https://www.tiktok.com/discover/us-fashion-and-beauty-trends-2025",
        thumbFile: "tiktok-fashion-beauty-trends-2025.jpg",
        preview: { type: "image" },
        why: "Trend discovery → fast iteration → scale winners.",
      },
      {
        id: "t7",
        title: "Travel gadgets roundup (2025)",
        platform: "YouTube",
        category: "Gadgets",
        url: "https://www.youtube.com/watch?v=weAJbbBAQ34",
        thumbFile: "youtube-travel-gadgets-2025.jpg",
        preview: { type: "youtube", videoId: "weAJbbBAQ34" },
        why: "Unboxing + quick verdict + clean CTA.",
      },
      {
        id: "t8",
        title: "TikTok trends brands copy (2025)",
        platform: "TikTok",
        category: "Food",
        url: "https://www.amraandelma.com/tiktok-trends-every-brand-is-copying/",
        thumbFile: "amraandelma-tiktok-trends-2025.jpg",
        preview: { type: "image" },
        why: "High-signal formats you can adapt quickly.",
      },
      {
        id: "t9",
        title: "Reels + Shorts trends for businesses (2025)",
        platform: "Instagram",
        category: "Travel",
        url: "https://creativesplash.co.in/blog/2025-instagram-reels-youtube-shorts-trends-business/",
        thumbFile: "creativesplash-trends-2025.jpg",
        preview: { type: "image" },
        why: "Business-friendly edits and series structure.",
      },
      {
        id: "t10",
        title: "Shorts vs Reels (what to know)",
        platform: "YouTube",
        category: "Food",
        url: "https://www.hammerhead.global/blogs/youtube-shorts-vs-instagram-reels-what-you-must-know",
        thumbFile: "hammerhead-shorts-vs-reels.jpg",
        preview: { type: "image" },
        why: "Platform differences → better creative decisions.",
      },
    ],
    []
  );

  const virlboxVideoBlueprints: BlueprintItem[] = useMemo(
    () => [
      {
        id: "v1",
        title: "7-day outfit series (high retention)",
        category: "Fashion",
        hook: "Stop scrolling — steal my 7-day capsule wardrobe.",
        deliverables: "10 hook variants + captions + hashtag pack + shot list.",
        primaryCta: "Generate 10 scripts",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3778,
      },
      {
        id: "v2",
        title: "Viral product demo (UGC native)",
        category: "Beauty",
        hook: "This is why your makeup separates — fix it in 20s.",
        deliverables: "UGC script + voiceover + on-screen text + CTA pack.",
        primaryCta: "Build shot list",
        secondaryCta: "See example output",
        previewImage: landingImages.LandingP2,
      },
      {
        id: "v3",
        title: "‘Worth it?’ gadget review",
        category: "Gadgets",
        hook: "I tested the viral gadget so you don’t have to…",
        deliverables: "3 endings (buy/skip/alt) + thumbnail text + captions.",
        primaryCta: "Create 3 endings",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3779,
      },
      {
        id: "v4",
        title: "3-ingredient recipe (fast cuts)",
        category: "Food",
        hook: "3 ingredients. 10 minutes. Restaurant-level.",
        deliverables: "Edit plan + step captions + pacing guide + CTA variations.",
        primaryCta: "Generate captions",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3776,
      },
      {
        id: "v5",
        title: "Hidden gems travel series",
        category: "Travel",
        hook: "You’ve walked past this place 100 times…",
        deliverables: "POV script + B-roll list + location overlays + CTA.",
        primaryCta: "Make a series",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3775,
      },
      {
        id: "v6",
        title: "Try-on haul (comment bait)",
        category: "Fashion",
        hook: "Rate these 5 looks — be brutal.",
        deliverables: "Hook pack A/B + comment prompts + 5 captions.",
        primaryCta: "Create A/B hooks",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3777,
      },
      {
        id: "v7",
        title: "Before/after routine (30s)",
        category: "Beauty",
        hook: "If your skin looks dull — do this tonight.",
        deliverables: "Storyboard + overlays + 5 captions + CTA pack.",
        primaryCta: "Generate storyboard",
        secondaryCta: "See example output",
        previewImage: landingImages.IMG_3776,
      },
      {
        id: "v8",
        title: "Desk setup upgrade (creator kit)",
        category: "Gadgets",
        hook: "This upgraded my setup instantly.",
        deliverables: "B-roll list + hook pack + CTA pack + repurpose formats.",
        primaryCta: "Create hook pack",
        secondaryCta: "See example output",
        previewImage: landingImages.LandingP4,
      },
      {
        id: "v9",
        title: "Street-food at home (hack)",
        category: "Food",
        hook: "I recreated the viral street food — here’s the hack.",
        deliverables: "Beat sheet + cuts plan + caption set + CTA variants.",
        primaryCta: "Generate edit plan",
        secondaryCta: "See example output",
        previewImage: landingImages.LandingP3,
      },
      {
        id: "v10",
        title: "Packing hacks (fast cuts)",
        category: "Travel",
        hook: "Packing mistake everyone makes (fix it).",
        deliverables: "3 formats (TikTok/Reels/Shorts) + captions + CTA pack.",
        primaryCta: "Repurpose for all",
        secondaryCta: "See example output",
        previewImage: landingImages.LandingP2,
      },
    ],
    []
  );

  const filteredTrends =
    activeCategory === "All" ? trending2025 : trending2025.filter((t) => t.category === activeCategory);

  return (
    <div className="vb light">
      {/* NAV */}
      <nav className="vb-nav">
        <div className="vb-nav-inner">
          <Link to="/" className="vb-logo">
            <img src={landingImages.IMG_3777} alt="VIRLBOX" />
            <span>VIRLBOX</span>
          </Link>

          <div className={`vb-nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#platform">Platform</a>
            <a href="#trending">Trending</a>
            <a href="#analytics">Analytics</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="vb-nav-actions">
            <button className="vb-btn-text" onClick={() => navigate("/login")}>
              Sign in
            </button>
            <button className="vb-btn-primary" onClick={() => navigate("/register")}>
              Start Free
            </button>
          </div>

          <button className="vb-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* HERO (smaller) */}
      <section className="vb-hero">
        <div className="vb-hero-badge">
          <span className="vb-badge-dot" />
          VirlBox — AI content automation
        </div>

        <h1 className="vb-hero-title">
          Create viral content
          <br />
          <span>in seconds</span>
        </h1>

        <p className="vb-hero-subtitle">
          Plan, create, schedule, and measure short-form content across TikTok, Instagram Reels, and YouTube Shorts.
        </p>

        <div className="vb-hero-cta">
          <div className="vb-hero-input-group">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <button className="vb-btn-primary" onClick={() => navigate("/register")}>
              Get Started Free
            </button>
          </div>
        </div>

        <p className="vb-hero-note">No credit card required · 14-day free trial</p>

        <button
          className="vb-hero-visual"
          onClick={() =>
            openLightbox({
              type: "image",
              src: landingImages.LANDINGP1 ?? landingImages.IMG_3775,
              title: "VirlBox preview",
            })
          }
          aria-label="Open hero image"
        >
          <img src={landingImages.LANDINGP1 ?? landingImages.IMG_3775} alt="VIRLBOX hero preview" />
        </button>
      </section>

      {/* TRENDING */}
      <section className="vb-section vb-trending" id="trending">
        <div className="vb-section-header">
          <span className="vb-label">Trending now</span>
          <h2>Trending short videos in 2025</h2>
          <p className="vb-section-desc">
            Inspiration across TikTok, Instagram Reels, and YouTube Shorts — then generate your own versions with VirlBox.
          </p>
        </div>

        <div className="vb-tabs">
          {categories.map((cat) => (
            <button key={cat} className={`vb-tab ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel A: Trend links */}
        <div className="vb-carousel-block">
          <div className="vb-carousel-head">
            <h3>Watch what’s trending</h3>
            <p>Open a preview, then go to the source link.</p>
          </div>

          <div className="vb-carousel-wrapper">
            <button className="vb-carousel-btn vb-carousel-btn-left" onClick={() => scrollByCard(trendsRef, "left")} aria-label="Previous">
              ‹
            </button>

            <div
              className="vb-carousel"
              ref={trendsRef}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") scrollByCard(trendsRef, "left");
                if (e.key === "ArrowRight") scrollByCard(trendsRef, "right");
              }}
              aria-label="Trending carousel"
            >
              {filteredTrends.map((item) => {
                const thumb = getTrendThumb(item.thumbFile, landingImages.IMG_3775);

                return (
                  <div key={item.id} className="vb-video-card">
                    <button
                      className="vb-video-thumbnail vb-media-btn"
                      onClick={() => {
                        if (item.preview?.type === "youtube") {
                          openLightbox({
                            type: "iframe",
                            title: item.title,
                            src: `https://www.youtube-nocookie.com/embed/${item.preview.videoId}?autoplay=1`,
                            actions: [{ label: "Open source", href: item.url }],
                          });
                        } else {
                          openLightbox({
                            type: "image",
                            title: item.title,
                            src: thumb,
                            actions: [{ label: "Open source", href: item.url }],
                          });
                        }
                      }}
                      aria-label={`Open preview: ${item.title}`}
                    >
                      <img src={thumb} alt={item.title} />
                      <span className="vb-video-pill">{item.platform}</span>
                    </button>

                    <div className="vb-video-info">
                      <span className="vb-video-category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p className="vb-video-why">{item.why}</p>

                      <div className="vb-video-links">
                        <a className="vb-link-cta" href={item.url} target="_blank" rel="noreferrer">
                          Open source →
                        </a>
                        <button
                          className="vb-link-cta vb-link-btn"
                          onClick={() => navigate("/register")}
                          type="button"
                        >
                          Create similar →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="vb-carousel-btn vb-carousel-btn-right" onClick={() => scrollByCard(trendsRef, "right")} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        {/* Carousel B: VirlBox blueprints */}
        <div className="vb-carousel-block vb-carousel-block-tight">
          <div className="vb-carousel-head">
            <h3>Create 10 videos in VirlBox</h3>
            <p>Blueprints with hooks, variants, and a production-ready plan.</p>
          </div>

          <div className="vb-carousel-wrapper">
            <button className="vb-carousel-btn vb-carousel-btn-left" onClick={() => scrollByCard(blueprintsRef, "left")} aria-label="Previous">
              ‹
            </button>

            <div
              className="vb-carousel"
              ref={blueprintsRef}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") scrollByCard(blueprintsRef, "left");
                if (e.key === "ArrowRight") scrollByCard(blueprintsRef, "right");
              }}
              aria-label="Blueprint carousel"
            >
              {virlboxVideoBlueprints.map((v) => (
                <div key={v.id} className="vb-video-card">
                  <button
                    className="vb-video-thumbnail vb-media-btn"
                    onClick={() => openLightbox({ type: "image", title: v.title, src: v.previewImage })}
                    aria-label={`Open blueprint preview: ${v.title}`}
                  >
                    <img src={v.previewImage} alt={v.title} />
                    <span className="vb-video-pill">Blueprint</span>
                  </button>

                  <div className="vb-video-info">
                    <span className="vb-video-category">{v.category}</span>
                    <h3>{v.title}</h3>
                    <p className="vb-video-why">
                      <strong>Hook:</strong> {v.hook}
                    </p>
                    <p className="vb-video-why">
                      <strong>Deliverables:</strong> {v.deliverables}
                    </p>
                  </div>

                  <div className="vb-video-actions">
                    <button className="vb-btn-primary vb-btn-full" onClick={() => navigate("/register")}>
                      {v.primaryCta}
                    </button>
                    <button className="vb-btn-outline vb-btn-full" onClick={() => openLightbox({ type: "image", title: v.title, src: v.previewImage })}>
                      {v.secondaryCta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="vb-carousel-btn vb-carousel-btn-right" onClick={() => scrollByCard(blueprintsRef, "right")} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* OUTCOMES (Hootsuite-style structure but original copy) */}
      <section className="vb-section vb-outcomes" id="outcomes">
        <div className="vb-section-header">
          <span className="vb-label">Outcomes</span>
          <h2>Turn content into results</h2>
          <p className="vb-section-desc">Create faster, learn faster, and scale the formats that perform.</p>
        </div>

        <div className="vb-grid vb-grid-3">
          <div className="vb-card">
            <h3>Prove impact</h3>
            <p>Connect posts to engagement and performance trends that matter to your team.</p>
          </div>
          <div className="vb-card">
            <h3>Simplify workflow</h3>
            <p>Briefs, templates, scripts, approvals, and schedules — in one place.</p>
          </div>
          <div className="vb-card">
            <h3>Scale reach</h3>
            <p>Turn winning ideas into repeatable series and repurpose across platforms.</p>
          </div>
        </div>
      </section>

      {/* ANALYTICS + MONITOR IMAGE WITH CONTENT */}
      <section className="vb-section vb-analytics" id="analytics">
        <div className="vb-analytics-grid">
          <div className="vb-analytics-copy">
            <span className="vb-label">Analytics</span>
            <h2>See what performs. Ship what wins.</h2>
            <p className="vb-section-desc">
              Track content performance and iterate with confidence using clear insights and repeatable playbooks.
            </p>

            <div className="vb-kpi-grid">
              <div className="vb-kpi">
                <div className="vb-kpi-value">Realtime</div>
                <div className="vb-kpi-label">Performance insights</div>
              </div>
              <div className="vb-kpi">
                <div className="vb-kpi-value">A/B</div>
                <div className="vb-kpi-label">Hook & CTA testing</div>
              </div>
              <div className="vb-kpi">
                <div className="vb-kpi-value">1-click</div>
                <div className="vb-kpi-label">Repurpose formats</div>
              </div>
            </div>

            <div className="vb-analytics-actions">
              <button className="vb-btn-primary" onClick={() => navigate("/register")}>
                Start tracking performance
              </button>
              <button className="vb-btn-outline" onClick={() => navigate("/register")}>
                See analytics demo
              </button>
            </div>
          </div>

          <button
            className="vb-analytics-media"
            onClick={() =>
              openLightbox({
                type: "image",
                src: landingImages.LandingP3,
                title: "Analytics dashboard preview",
              })
            }
            aria-label="Open analytics preview"
          >
            <img src={landingImages.LandingP3} alt="Analytics dashboard on desktop monitor" />
          </button>
        </div>
      </section>

      {/* PRICING (clickable table) */}
      <section className="vb-section vb-pricing" id="pricing">
        <div className="vb-section-header">
          <span className="vb-label">Pricing</span>
          <h2>Simple pricing. Built to scale.</h2>
          <p className="vb-section-desc">Choose a plan and upgrade anytime.</p>
        </div>

        <div className="vb-pricing-table" role="table" aria-label="Pricing table">
          <div className="vb-pricing-row vb-pricing-head" role="row">
            <div className="vb-pricing-cell vb-feature" role="columnheader">
              Features
            </div>

            {(["Free", "Pro", "Business"] as const).map((plan) => (
              <button
                key={plan}
                role="columnheader"
                className={`vb-pricing-cell vb-plan ${selectedPlan === plan ? "is-active" : ""}`}
                onClick={() => setSelectedPlan(plan)}
                type="button"
              >
                <div className="vb-plan-name">{plan}</div>
                <div className="vb-plan-price">
                  {plan === "Free" ? "$0" : plan === "Pro" ? "$29" : "$99"}
                  <span>/month</span>
                </div>
                <div className="vb-plan-cta">{selectedPlan === plan ? "Selected" : "Select"}</div>
              </button>
            ))}
          </div>

          {[
            ["AI generations", "10 / month", "Unlimited", "Unlimited"],
            ["Team members", "1", "Unlimited", "Unlimited"],
            ["Storage", "1GB", "100GB", "Unlimited"],
            ["Support", "Basic", "Priority", "24/7 Dedicated"],
            ["Analytics", "Basic", "Advanced", "Advanced + exports"],
          ].map(([feat, free, pro, biz]) => (
            <div className="vb-pricing-row" role="row" key={feat}>
              <div className="vb-pricing-cell vb-feature" role="cell">
                {feat}
              </div>
              <div className={`vb-pricing-cell ${selectedPlan === "Free" ? "is-active" : ""}`} role="cell">
                {free}
              </div>
              <div className={`vb-pricing-cell ${selectedPlan === "Pro" ? "is-active" : ""}`} role="cell">
                {pro}
              </div>
              <div className={`vb-pricing-cell ${selectedPlan === "Business" ? "is-active" : ""}`} role="cell">
                {biz}
              </div>
            </div>
          ))}

          <div className="vb-pricing-actions">
            <button className="vb-btn-primary" onClick={() => navigate("/register")}>
              {selectedPlan === "Free" ? "Get started free" : "Start free trial"}
            </button>
            <button className="vb-btn-outline" onClick={() => navigate("/contact")}>
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vb-cta">
        <div className="vb-cta-inner">
          <h2>Ready to build your next 10 videos?</h2>
          <p>Create, iterate, and scale short-form content with VirlBox.</p>
          <div className="vb-cta-actions">
            <button className="vb-btn-primary vb-btn-lg" onClick={() => navigate("/register")}>
              Start Free Trial
            </button>
            <button className="vb-btn-outline vb-btn-lg" onClick={() => navigate("/contact")}>
              Request a demo
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER (restored) */}
      <footer className="vb-footer">
        <div className="vb-footer-inner">
          <div className="vb-footer-main">
            <div className="vb-footer-brand">
              <Link to="/" className="vb-logo">
                <img src={landingImages.IMG_3777} alt="VIRLBOX" />
                <span>VIRLBOX</span>
              </Link>
              <p>AI-powered short-form content creation, scheduling, and analytics.</p>

              <div className="vb-footer-social">
                <a href="#" aria-label="X / Twitter">X</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="YouTube">YT</a>
                <a href="#" aria-label="TikTok">TT</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </div>
            </div>

            <div className="vb-footer-links">
              <div className="vb-footer-col">
                <h4>Product</h4>
                <a href="#platform">Platform</a>
                <a href="#trending">Trending</a>
                <a href="#analytics">Analytics</a>
                <a href="#pricing">Pricing</a>
              </div>

              <div className="vb-footer-col">
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/careers">Careers</Link>
              </div>

              <div className="vb-footer-col">
                <h4>Resources</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/help">Help Center</Link>
                <Link to="/templates">Templates</Link>
              </div>
            </div>
          </div>

          <div className="vb-footer-legal">
            <div className="vb-legal-links">
              <Link to="/privacy">Privacy</Link>
              <span className="vb-divider">·</span>
              <Link to="/terms">Terms</Link>
              <span className="vb-divider">·</span>
              <Link to="/cookies">Cookies</Link>
              <span className="vb-divider">·</span>
              <Link to="/security">Security</Link>
            </div>
            <p className="vb-copyright">© 2025 VIRLBOX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Lightbox open={lightboxOpen} item={lightboxItem} onClose={() => setLightboxOpen(false)} />
    </div>
  );
};

export default LandingPage;
