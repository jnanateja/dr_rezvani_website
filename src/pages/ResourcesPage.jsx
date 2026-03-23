import { faqs, practiceInfo } from '../App';

export default function ResourcesPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Resources</div>
          <h1>Patient information</h1>
          <p>
            This page includes common questions patients may have before contacting or visiting the office.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.q} className="faq-card premium-card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>

        <div className="resource-banner premium-card">
          <div>
            <div className="eyebrow">Need More Information?</div>
            <h2>Call the office directly</h2>
            <p>
              Online information can be helpful, but the office can answer questions about visits,
              services, and scheduling.
            </p>
          </div>
          <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
