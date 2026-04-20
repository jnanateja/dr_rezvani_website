import { Link } from 'react-router-dom';
import { createServiceSlug, practiceInfo, serviceCategories, visitReasons } from '../siteContent';

export default function ServicesPage() {
  return (
    <section className="section page-hero services-page-shell">
      <div className="container">
        <div className="section-heading align-left fade-up services-page-heading">
          <div className="eyebrow">Services</div>
          <h1>Services</h1>
          {/*<p>
            Clear, office-based gynecologic care for routine concerns, in-office procedures,
            menopause support, preventive visits, and follow-up when symptoms or screening results change.
          </p>*/}
        </div>

        <div className="stacked-sections services-stacked-sections">
          {serviceCategories.map((section) => (
            <section className="service-category premium-card fade-up" key={section.title}>
              <div className="service-category-head service-category-head-polished">
                <div>
                  <h2>{section.title}</h2>
                </div>
              </div>

              <div className="procedure-link-grid">
                {section.services.map((service) => (
                  <Link
                    className="procedure-link-card"
                    key={service.title}
                    to={`/services/${createServiceSlug(service.title)}`}
                  >
                    <span className="procedure-link-content">
                      <span className="procedure-link-title">{service.title}</span>
                    </span>
                    <span className="procedure-link-action" aria-hidden="true">
                      View
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="services-support-grid fade-up">
          <div className="premium-card services-support-card">
            <div className="mini-eyebrow">When To Schedule</div>
            <h2>Common reasons patients book a visit</h2>
            <p>
              Many appointments are scheduled because symptoms changed, a screening result needs
              follow-up, or a patient wants guidance on the right next step.
            </p>
            <ul className="service-reason-list service-reason-list-columns">
              {visitReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div className="premium-card services-support-card services-cta-card">
            <div className="mini-eyebrow">Appointments</div>
            <h2>Need help deciding which visit is appropriate?</h2>
            <p>
              The office can help with appointment information, current services, and general next
              steps for evaluation.
            </p>
            <div className="services-cta-actions">
              <a className="button" href={practiceInfo.phoneHref}>
                Call {practiceInfo.phoneDisplay}
              </a>
              <Link className="button button-secondary" to="/contact">
                Contact the Office
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
