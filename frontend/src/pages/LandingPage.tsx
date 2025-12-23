import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="page-landing">
      <header className="app-nav">
        <div className="app-logo">
          <span className="app-logo-accent" />
          <span>VIRLBOX</span>
        </div>
        <nav className="app-nav-links">
          <a href="/">Dashboard</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
        </nav>
        <button className="btn-primary">Launch box</button>
      </header>

      <main className="app-main">
        <section className="hero-grid">
          <div className="hero-copy">
            <span className="badge-pill">
              <span>●</span> Virtual machines, simplified
            </span>
            <h1>
              Control your malware
              <br />
              lab from one secure console.
            </h1>
            <p>
              Spin up disposable analysis environments, track samples and
              automate snapshots without ever touching your hypervisor UI.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Get started</button>
              <button className="hero-secondary">View running VMs</button>
            </div>
            <p className="hero-footnote">
              Connected to your backend at <code>localhost</code>.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/assets/virlbox-hero.png"
                alt="VIRLBOX dashboard preview"
              />
              <div className="hero-glow hero-glow-1" />
              <div className="hero-glow hero-glow-2" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
