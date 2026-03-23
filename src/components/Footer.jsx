import { Link } from 'react-router-dom';
import { practiceInfo } from '../App';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-card premium-card">
          <div className="brand-kicker footer-kicker">Gynecology</div>
          <h3>{practiceInfo.displayBrand}</h3>
          <p>
            Gynecology care in Ridgewood, New Jersey for routine visits, preventive care, and
            common gynecologic concerns.
          </p>
        </div>

        <div className="footer-card premium-card">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/new-patients">New Patients</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-card premium-card">
          <h4>Office Information</h4>
          <p>{practiceInfo.practiceName}</p>
          <p>{practiceInfo.fullAddress}</p>
          <p>
            Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
          </p>
          <p>Insurance: {practiceInfo.insurance}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 {practiceInfo.practiceName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
