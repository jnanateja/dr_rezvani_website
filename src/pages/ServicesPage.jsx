import { services } from '../App';

export default function ServicesPage() {
  const sections = [
    {
      title: 'Preventive & Routine Care',
      intro: 'Ongoing gynecology care focused on prevention, screening, and routine visits.',
      items: services.slice(0, 4),
    },
    {
      title: 'Menstrual & Hormonal Concerns',
      intro: 'Evaluation and care for cycle changes, bleeding issues, and related symptoms.',
      items: services.slice(4, 8),
    },
    {
      title: 'Infections, Sexual Health & Specialized Care',
      intro: 'Care for common infections, sexual health concerns, and labiaplasty consultation.',
      items: services.slice(8, 12),
    },
  ];

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Services</div>
          <h1>Gynecology services</h1>
          <p>
            Below is an overview of services available at the practice. Please call the office if
            you have questions about a specific concern or appointment.
          </p>
        </div>

        <div className="stacked-sections">
          {sections.map((section) => (
            <section className="service-group" key={section.title}>
              <div className="service-group-header">
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
              </div>
              <div className="card-grid">
                {section.items.map((service) => (
                  <article key={service.title} className="service-card premium-card">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
