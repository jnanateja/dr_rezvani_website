import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { practiceInfo } from '../siteContent';

const homepageServices = [
  {
    title: 'Hormone and Menopause Care',
    description:
      'Personalized care addressing hormonal changes, menopause symptoms, and long-term health concerns.',
  },
  {
    title: 'Family Planning & Birth Control',
    description:
      'Counseling and management options including contraceptive care and reproductive planning.',
  },
  {
    title: 'Gynecology',
    description:
      "Routine gynecologic care including annual exams, screening, evaluation of symptoms, and ongoing management of women's health concerns.",
  },
  {
    title: 'Minimally Invasive Surgery',
    description:
      'Office-based and minimally invasive procedures performed when appropriate to diagnose or treat gynecologic conditions with reduced recovery time.',
  },
  {
    title: 'Congenital Gynecologic Conditions',
    description:
      'Evaluation and management of congenital gynecologic conditions and structural differences affecting reproductive health.',
  },
  {
    title: 'High-Risk Pregnancy Consultation',
    description:
      'Consultation and evaluation related to high-risk pregnancy concerns, including assessment and guidance when specialized care is needed.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container about-practice-layout">
          <div className="about-practice-intro section-heading compact-heading fade-up">
            <div className="eyebrow">Welcome to the Office</div>
            <h2>Comprehensive Gynecology and Women's Health Care</h2>
            {/*<p>
              Dr. Fred Rezvani provides office-based gynecology care for women of all ages,
              including preventive visits, evaluation of gynecologic concerns, menopause care, and
              selected in-office procedures.
            </p>*/}
          </div>

          <div className="split-section info-layout">
            <article className="info-panel premium-card fade-up">
              <h3>Practice Overview</h3>
              <p>
                Dr. Rezvani provides comprehensive gynecologic and women&apos;s health services,
                including:
              </p>
              <ul className="services-summary-list">
                <li>Preventive Gynecologic Care</li>
                <li>Office-Based Procedures</li>
                <li>Hormone &amp; Menopause Care</li>
                <li>Family Planning Services</li>
              </ul>
              <Link className="button services-card-button" to="/services">
                View services
              </Link>
            </article>

            <article className="info-panel premium-card fade-up">
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
          <div className="section-heading compact-heading fade-up">
            <div className="eyebrow">Areas of Care</div>
            {/*<h2>Comprehensive Women&apos;s Health Care</h2>*/}
            {/*<p>
              Care is organized to provide clear, comprehensive services supporting women&apos;s
              health at every stage of life.
            </p>*/}
          </div>
          <div className="card-grid">
            {homepageServices.map((service) => (
              <article key={service.title} className="service-card premium-card fade-up">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="section-action fade-up">
            <Link className="button button-secondary" to="/contact">
              Contact and visit information
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact-heading fade-up">
            <div className="eyebrow">Testimonials</div>
            <h2>Patient feedback coming soon</h2>
            <p>
              This section is ready for future testimonials and can be updated when you are ready to
              add them.
            </p>
          </div>
          <div className="card-grid testimonials-grid">
            {[1, 2].map((item) => (
              <article key={item} className="service-card premium-card testimonial-placeholder fade-up">
                <div className="mini-eyebrow">Coming soon</div>
                <h3>Testimonial placeholder</h3>
                <p>Space reserved for future patient testimonials.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
