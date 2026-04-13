import { Link } from 'react-router-dom';
import { practiceInfo } from '../siteContent';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-shell">
        <div className="footer-grid">
          <div className="footer-section footer-info-line">
            <h3>{practiceInfo.doctorName}</h3>
            <p>{practiceInfo.cityStateZip}</p>
            <div className="footer-meta">
              <span>
                Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
              </span>
              <span>{practiceInfo.fullAddress}</span>
            </div>
          </div>

          <div className="footer-section footer-links-section">
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/new-patients">Patient Information</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {practiceInfo.practiceName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
