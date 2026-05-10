import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import { patientTestimonials } from '../siteContent';

const healthgradesProfileUrl = 'https://www.healthgrades.com/physician/dr-fred-rezvani-3gmqr';
const usNewsProfileUrl = 'https://health.usnews.com/doctors/fred-rezvani-15271';

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
            Dr. Rezvani is rated <strong>4.4/5 on Healthgrades</strong> and{' '}
            <strong>5/5 on U.S. News</strong>.
          </p>
          <div className="testimonial-source-actions">
            <a className="button" href={healthgradesProfileUrl} target="_blank" rel="noreferrer">
              View Healthgrades reviews
            </a>
            <a className="button" href={usNewsProfileUrl} target="_blank" rel="noreferrer">
              View U.S. News profile
            </a>
            <Link className="button" to="/contact">
              Contact the office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
