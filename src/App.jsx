import "./App.css";
import ScrollObserver from "./components/ScrollObserver";

function App() {
  return (
    <div className="app">
      <ScrollObserver />
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">✦</span>
            Believer Ad Space
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-container">
          <div className="hero-badge">🚀 Elevate Your Brand</div>
          <h1 className="hero-title">
            Transform Your Brand with{" "}
            <span className="gradient-text">Believer Ad Space</span>
          </h1>
          <p className="hero-subtitle">
            Strategic advertising solutions that drive results and amplify your
            message across all platforms
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">View Our Work</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Campaigns</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">700K+</div>
              <div className="stat-label">Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="disclaimer-banner">
        <div className="container">
          <div className="disclaimer-banner-content fade-in-up">
            <div className="disclaimer-banner-icon">⚖️</div>
            <p className="disclaimer-banner-text">
              Political and social issue advertisements published through
              Believer Ad Space are managed and paid for by Believer Ad Space
              unless otherwise stated. Believer Ad Space complies with Meta's
              advertising transparency and applicable Indian laws. For queries,
              contact:{" "}
              <a href="mailto:support@believerad.space">
                support@believerad.space
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge fade-in-up">What We Do</span>
            <h2 className="section-title fade-in-up stagger-1">Our Services</h2>
            <p className="section-description fade-in-up stagger-2">
              Comprehensive solutions tailored to your brand's unique needs
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card fade-in-up stagger-1">
              <div className="service-icon-wrapper">
                <div className="service-icon">📱</div>
              </div>
              <h3>Digital Advertising</h3>
              <p>
                Reach your audience across all digital platforms with targeted
                campaigns that convert
              </p>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card fade-in-up stagger-2">
              <div className="service-icon-wrapper">
                <div className="service-icon">🎯</div>
              </div>
              <h3>Brand Strategy</h3>
              <p>
                Build a powerful brand identity that resonates with your target
                market and stands out
              </p>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card fade-in-up stagger-3">
              <div className="service-icon-wrapper">
                <div className="service-icon">📊</div>
              </div>
              <h3>Analytics & Insights</h3>
              <p>
                Data-driven decisions backed by comprehensive performance
                metrics and real-time tracking
              </p>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card fade-in-up stagger-4">
              <div className="service-icon-wrapper">
                <div className="service-icon">🚀</div>
              </div>
              <h3>Campaign Management</h3>
              <p>
                End-to-end campaign execution from concept to conversion with
                expert guidance
              </p>
              <div className="service-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image fade-in-left">
              <div className="about-image-placeholder">
                <div className="floating-element">✦</div>
                <div className="floating-element">★</div>
                <div className="floating-element">◆</div>
              </div>
            </div>
            <div className="about-content fade-in-right">
              <span className="section-badge">Our Story</span>
              <h2 className="section-title left">About Us</h2>
              <p className="fade-in-up stagger-1">
                Believer Ad Space is a forward-thinking marketing agency
                dedicated to helping businesses grow through innovative
                advertising solutions. Founded and led by{" "}
                <strong>Aatam Gandhi</strong>, we combine creativity with
                data-driven strategies to deliver exceptional results.
              </p>
              <p className="fade-in-up stagger-2">
                Our mission is to empower brands to reach their full potential
                through strategic advertising that connects, engages, and
                converts.
              </p>
              <div className="about-features">
                <div className="feature-item fade-in-left stagger-3">
                  <span className="feature-icon">✓</span>
                  <span>Award-Winning Campaigns</span>
                </div>
                <div className="feature-item fade-in-left stagger-4">
                  <span className="feature-icon">✓</span>
                  <span>Expert Team</span>
                </div>
                <div className="feature-item fade-in-left stagger-5">
                  <span className="feature-icon">✓</span>
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-bg"></div>
        <div className="container">
          <div className="contact-content">
            <span className="section-badge light fade-in-up">Let's Connect</span>
            <h2 className="section-title fade-in-up stagger-1">Get In Touch</h2>
            <p className="contact-subtitle fade-in-up stagger-2">
              Ready to elevate your brand? Let's create something amazing
              together.
            </p>
            <div className="contact-buttons fade-in-up stagger-3">
              <button className="cta-button primary">Start a Project</button>
            </div>
            <div className="contact-info">
              <div className="contact-item fade-in-up stagger-4">
                <span className="contact-icon">📧</span>
                <span>support@believerad.space</span>
              </div>
              <div className="contact-item fade-in-up stagger-5">
                <span className="contact-icon">📱</span>
                <span>+91 9407227905</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand fade-in-up">
              <div className="logo">
                <span className="logo-icon">✦</span>
                Believer Ad Space
              </div>
              <p>Transforming brands through strategic advertising</p>
            </div>
            <div className="footer-links fade-in-up stagger-1">
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <a
                  href="https://www.instagram.com/believer_ad_space?igsh=OXk5MWRvY2VpNWJi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom fade-in-up stagger-2">
            <p>
              &copy; 2026 Believer Ad Space | Owned and operated by Aatam Gandhi
              | Ashoknagar, Madhya Pradesh, India | Contact:
              support@believerad.space
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
