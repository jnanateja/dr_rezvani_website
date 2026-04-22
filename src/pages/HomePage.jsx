import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { practiceInfo } from '../siteContent';
import officeExamRoom from '../assets/office-exam-room.jpeg';
import officeHallway from '../assets/office-hallway.jpeg';
import officeExteriorFront from '../assets/office-exterior-front.jpeg';

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

const officeConvenience = [
  {
    title: 'In-House Lab Services',
    description: 'For patient convenience, in-office lab services are available through Accu Reference.',
  },
  {
    title: 'Walk-In Blood Work',
    description: 'Patients with blood work orders may come in without scheduling a separate lab appointment.',
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
            <div className="eyebrow">Office Convenience</div>
            <h2>Support services designed for patient convenience</h2>
          </div>
          <div className="card-grid two-up-grid">
            {officeConvenience.map((item) => (
              <article key={item.title} className="service-card premium-card fade-up">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading compact-heading fade-up">
            <div className="eyebrow">Inside Our Office</div>
            <h2>A clean, comfortable office environment</h2>
            <p>
              Our office is designed to provide a welcoming setting for gynecologic care, routine
              visits, and in-office evaluation.
            </p>
          </div>
          <div className="office-photo-grid">
            <article className="premium-card office-photo-card fade-up">
              <img src={officeExamRoom} alt="Exam room inside Dr. Rezvani's office" className="office-photo" />
              <div className="office-photo-copy">
                <h3>Exam Room</h3>
                <p>Private, professional treatment spaces for examinations and office visits.</p>
              </div>
            </article>
            <article className="premium-card office-photo-card fade-up">
              <img src={officeHallway} alt="Hallway and seating area inside the office" className="office-photo" />
              <div className="office-photo-copy">
                <h3>Office Interior</h3>
                <p>A comfortable office setting designed to make visits feel calm and organized.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container visit-office-panel premium-card fade-up">
          <div className="visit-office-copy">
            <div className="mini-eyebrow">Visit Our Office</div>
            <h2>Conveniently located in Ridgewood</h2>
            <p>
              Our office is easy to find and designed to provide a professional setting for ongoing
              gynecologic care.
            </p>
            <Link className="button" to="/contact">
              Get directions
            </Link>
          </div>
          <div className="visit-office-image-wrap">
            <img src={officeExteriorFront} alt="Exterior of Dr. Rezvani's office in Ridgewood" className="visit-office-image" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container published-author-panel premium-card fade-up">
          <div>
            <div className="mini-eyebrow">Published Author</div>
            <h2>The Perfect Living Womb</h2>
            <p>
              Dr. Rezvani is the author of <em>The Perfect Living Womb: Conversations with a
              Virtual Pregnant Patient</em>, a prenatal guide published in 2020 and available on
              Amazon in paperback and e-book formats.
            </p>
          </div>
          <div className="services-cta-actions">
            <a
              className="button"
              href="https://www.amazon.com/perfect-Conversations-virtual-pregnant-patient-ebook/dp/B08KPRKSPP/"
              target="_blank"
              rel="noreferrer"
            >
              View on Amazon
            </a>
            <Link className="button button-secondary" to="/about">
              About the doctor
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
