import { Link } from 'react-router-dom';
import { createServiceSlug, practiceInfo, serviceCategories, visitReasons } from '../siteContent';

const additionalPatientServices = [
  {
    title: 'In-House Lab Services',
    text: 'Convenient in-office lab services are available through Accu Reference.',
  },
  {
    title: 'Walk-In Blood Work',
    text: 'No separate appointment is required for patients with blood work orders.',
  },
];

export default function ServicesPage() {
  return (
    <section className="section page-hero services-page-shell">
      <div className="container">
        <div className="section-heading align-left fade-up services-page-heading">
          <div className="eyebrow">Services</div>
          <h1>Services</h1>
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

        <section className="section section-inner">
          <div className="section-heading compact-heading align-left fade-up">
            <div className="eyebrow">Additional Patient Services</div>
            <h2>Office support services</h2>
            <p>These in-office conveniences help make visits more efficient for patients.</p>
          </div>
          <div className="card-grid two-up-grid">
            {additionalPatientServices.map((item) => (
              <article key={item.title} className="service-card premium-card fade-up">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

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
