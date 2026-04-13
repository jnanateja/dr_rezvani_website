import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.jpeg';
import { practiceInfo } from '../siteContent';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <div className="eyebrow">Gynecology care in Ridgewood, New Jersey</div>
          <h1>
            Personalized women&apos;s health care
            <br />
            <span className="accent-text">from Fred Rezvani, MD</span>
          </h1>

          <div className="hero-actions">
            <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
            <Link className="button button-secondary" to="/contact">Request Information</Link>
          </div>
        </div>

        <div className="hero-card premium-card">
          <div className="hero-portrait-wrap">
            <img src={headshot} alt={practiceInfo.doctorName} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
