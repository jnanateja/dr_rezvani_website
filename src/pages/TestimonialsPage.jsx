import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import { patientTestimonials } from '../siteContent';

const healthgradesProfileUrl = 'https://www.healthgrades.com/physician/dr-fred-rezvani-3gmqr';

export default function TestimonialsPage() {
  return (
    <section className="section page-hero">
      <div className="container testimonials-page">
        <div className="section-heading align-left">
          <div className="eyebrow">Patient Feedback</div>
          <h1>Words from patients</h1>
          
        </div>

        <div className="card-grid testimonials-grid">
          {patientTestimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              quote={item.quote}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="testimonial-source premium-card fade-up">
          
          <p>
            For an additional public review source, the Healthgrades profile listed a <strong>4.4
            out of 5</strong> rating based on <strong>99 reviews</strong>
          </p>
          <div className="testimonial-source-actions">
            <a className="button" href={healthgradesProfileUrl} target="_blank" rel="noreferrer">
              View Healthgrades reviews
            </a>
            <Link className="button button-secondary" to="/contact">
              Contact the office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
