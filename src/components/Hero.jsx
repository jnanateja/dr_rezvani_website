import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.jpeg';
import { practiceInfo } from '../App';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <div className="eyebrow">Gynecology care in Ridgewood, New Jersey</div>
          <h1>
            {practiceInfo.displayBrand}
            <br />
            <span className="accent-text">Gynecology</span>
          </h1>
          <p className="hero-copy">
            {practiceInfo.practiceName} provides gynecology care for routine visits, preventive care,
            and common gynecologic concerns, including labiaplasty consultation.
          </p>
          <div className="hero-actions">
            <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
            <Link className="button button-secondary" to="/contact">Contact the Office</Link>
          </div>
          <div className="hero-meta">
            <span>{practiceInfo.addressLine1}</span>
            <span>{practiceInfo.cityStateZip}</span>
            <span>{practiceInfo.insurance}</span>
          </div>
        </div>

        <div className="hero-card premium-card">
          <div className="hero-portrait-wrap">
            <img src={headshot} alt={practiceInfo.doctorName} className="hero-image" />
          </div>
          <div className="hero-card-body">
            <h3>{practiceInfo.doctorName}</h3>
            <p>{practiceInfo.specialty}</p>
            <p>Affiliated with {practiceInfo.hospital}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
