import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.jpeg';
import { practiceInfo } from '../siteContent';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap fade-up">
          <div className="eyebrow">Gynecology care in Ridgewood, New Jersey</div>
          <h1>
            Women's health care
            <br />
            <span className="hero-doctor-line">From Dr. Fred F. Rezvani, MD</span>
          </h1>
          {/*<p className="hero-copy">
            Office-based gynecology care focused on preventive visits, evaluation of symptoms,
            menopause care, and selected in-office procedures.
          </p>*/}

          <div className="hero-actions">
            <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
            <Link className="button button-secondary" to="/contact">Request information</Link>
          </div>
        </div>

        <div className="hero-card premium-card fade-up">
          <div className="hero-portrait-wrap">
            <img src={headshot} alt={practiceInfo.doctorName} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
