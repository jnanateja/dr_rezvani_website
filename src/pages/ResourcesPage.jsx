import { faqs, practiceInfo } from '../siteContent';

export default function ResourcesPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading align-left fade-up">
          <div className="eyebrow">Resources</div>
          <h1>Resources</h1>
          <p>
            These answers cover a few of the most common questions patients have before contacting
            or visiting the office.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.q} className="faq-card premium-card fade-up">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>

        <div className="resource-banner premium-card fade-up">
          <div>
            <div className="mini-eyebrow">Need More Information?</div>
            <h2>Call The Office Directly</h2>
            <p>
              The office can answer questions about services, scheduling, and insurance before
              your visit.
            </p>
          </div>
          <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
