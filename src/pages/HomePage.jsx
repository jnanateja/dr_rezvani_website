import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { practiceInfo, serviceTiles } from '../siteContent';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container about-practice-layout">
          <div className="about-practice-intro section-heading compact-heading">
            <div className="eyebrow">About The Practice</div>
            <h2>Comprehensive Gynecologic and Women&apos;s Health Care</h2>
            <p>
              Providing medical care for women of all ages, including preventive care, diagnostic
              procedures in a professional clinical setting.
            </p>
          </div>

          <div className="split-section info-layout">
            <article className="info-panel premium-card">
              <h3>Services</h3>
              <p>
                Our office provides comprehensive gynecologic and women&apos;s health services,
                including:
              </p>
              <ul className="services-summary-list">
                <li>Preventive Gynecologic Care</li>
                <li>Office-Based Procedures</li>
                <li>Hormone &amp; Menopause Care</li>
                <li>Family Planning Services</li>
              </ul>
              <Link className="button services-card-button" to="/services">
                View all services
              </Link>
            </article>

            <article className="info-panel premium-card">
              <h3>Office Information</h3>
              <div className="feature-stack">
                <div className="feature-item">
                  <strong>Location</strong>
                  <span>{practiceInfo.fullAddress}</span>
                </div>
                <div className="feature-item">
                  <strong>Insurance</strong>
                  <span>{practiceInfo.insuranceLine}</span>
                </div>
                <div className="feature-item">
                  <strong>Appointments</strong>
                  <span>Call the office for scheduling, availability, and visit questions.</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Areas Of Care</div>
            <h2>Comprehensive Women&apos;s Health Care</h2>
            <p>
              Care is organized to provide clear, comprehensive services supporting women&apos;s
              health at every stage of life.
            </p>
          </div>
          <div className="card-grid">
            <article className="service-card premium-card">
              <h3>Gynecological Care</h3>
              <p>
                Preventive and diagnostic care addressing gynecologic concerns for women at every
                stage of life.
              </p>
            </article>
            <article className="service-card premium-card">
              <h3>Office Procedures</h3>
              <p>
                In-office evaluations and procedures performed for accurate diagnosis and effective
                treatment.
              </p>
            </article>
            <article className="service-card premium-card">
              <h3>Hormone and Menopause Care</h3>
              <p>
                Personalized care addressing hormonal changes, menopause symptoms, and long-term
                health concerns.
              </p>
            </article>
            <article className="service-card premium-card">
              <h3>Family Planning &amp; Birth Control</h3>
              <p>
                Counseling and management options including contraceptive care and reproductive
                planning.
              </p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
