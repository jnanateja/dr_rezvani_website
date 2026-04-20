import { Link, Navigate, useParams } from 'react-router-dom';
import { findServiceBySlug, practiceInfo } from '../siteContent';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = findServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <section className="section page-hero services-page-shell service-detail-page">
      <div className="container">
        <div className="service-detail-breadcrumb fade-up">
          <Link to="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span>{service.categoryTitle}</span>
        </div>

        <div className="section-heading align-left fade-up services-page-heading service-detail-heading">
          <div className="eyebrow">{service.categoryTitle}</div>
          <h1>{service.title}</h1>
        </div>

        <div className="service-detail-layout">
          <article className="premium-card service-detail-main fade-up">
            <div className="service-detail-section">
              <div className="service-expand-label">Why a patient may need this</div>
              <ul className="service-reason-list">
                {service.whyNeed.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <div className="service-detail-callout">
              <div className="service-expand-label">When to see the doctor</div>
              <p>{service.whenToSee}</p>
            </div>
          </article>

          <aside className="premium-card service-detail-aside fade-up">
            <div className="mini-eyebrow">Care Area</div>
            <h2>{service.categoryTitle}</h2>
            <p>{service.categoryDescription}</p>
            <div className="service-detail-actions">
              <a className="button" href={practiceInfo.phoneHref}>
                Call {practiceInfo.phoneDisplay}
              </a>
              <Link className="button button-secondary" to="/contact">
                Contact the Office
              </Link>
            </div>
          </aside>
        </div>

        <section className="faq-block-polished service-detail-faqs fade-up">
          <div className="faq-block-header">
            <div className="mini-eyebrow">Common Questions</div>
            <h2>FAQs</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <article className="faq-item-polished service-detail-faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="service-detail-footer-actions fade-up">
          <Link className="button button-secondary" to="/services">
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
