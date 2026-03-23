import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { practiceInfo, services, faqs } from '../App';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container split-section info-layout">
          <article className="info-panel premium-card">
            <div className="eyebrow">About Dr. Rezvani</div>
            <h2>Gynecology care in Ridgewood</h2>
            <p>
              Dr. Rezvani graduated from St. George’s University School of Medicine in 1983 and
              practices in Ridgewood, New Jersey. He is affiliated with {practiceInfo.hospital}.
            </p>
            <p>
              The practice provides gynecology care for routine visits, preventive exams, and
              common gynecologic concerns.
            </p>
            <Link className="text-link" to="/about">Learn more about Dr. Rezvani</Link>
          </article>

          <article className="info-panel premium-card">
            <div className="eyebrow">Practice Information</div>
            <h2>Office information</h2>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Specialty</strong>
                <span>Gynecology</span>
              </div>
              <div className="feature-item">
                <strong>Services offered</strong>
                <span>Routine gynecology care, preventive visits, and labiaplasty consultation.</span>
              </div>
              <div className="feature-item">
                <strong>Location</strong>
                <span>{practiceInfo.fullAddress}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Services</div>
            <h2>Gynecology services</h2>
            <p>
              The practice offers a range of services for preventive care and common gynecologic concerns.
            </p>
          </div>
          <div className="card-grid">
            {featuredServices.map((service) => (
              <article key={service.title} className="service-card premium-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button-secondary" to="/services">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section callout-split">
          <div className="callout-card premium-card">
            <div className="eyebrow">Insurance</div>
            <h2>Insurance information</h2>
            <p>
              The office accepts <strong>Aetna</strong> and also welcomes <strong>out-of-network</strong>{' '}
              patients. Please call the office with coverage questions before your visit.
            </p>
          </div>
          <div className="callout-card premium-card">
            <div className="eyebrow">Appointments</div>
            <h2>Contact the office</h2>
            <p>
              For appointments, service questions, or general office information, please contact
              the office directly.
            </p>
            <a className="button" href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2>Helpful information for patients</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.q} className="faq-card premium-card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
