import { serviceCategories } from '../siteContent';

export default function ServicesPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading align-left fade-up">
          <div className="eyebrow">Services</div>
          <h1>Services</h1>
          <p>
            The practice offers a full range of office-based gynecology services, from preventive
            care to focused evaluation and treatment.
          </p>
        </div>

        <div className="stacked-sections">
          {serviceCategories.map((section) => (
            <section className="service-category premium-card fade-up" key={section.title}>
              <div className="service-category-head">
                <div className="mini-eyebrow">Care Area</div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div className="service-list-grid">
                {section.items.map((item) => (
                  <div className="service-list-item reveal" key={item}>
                    <span className="service-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
