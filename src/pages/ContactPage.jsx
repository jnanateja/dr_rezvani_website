import { practiceInfo } from '../siteContent';

export default function ContactPage() {
  const mapQuery = encodeURIComponent(practiceInfo.fullAddress);
  const embeddedMapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section className="section page-hero contact-page-section">
      <div className="container contact-page">
        <div className="section-heading align-left">
          <div className="eyebrow">Contact</div>
          <h1>Contact The Office</h1>
          <p>
            For appointments, insurance questions, or general office information, please call the
            practice directly.
          </p>
        </div>

        <div className="contact-page-grid">
          <article className="premium-card info-panel">
            <div className="mini-eyebrow">Get In Touch</div>
            <h2>Reach our office directly</h2>
            <p>
              Call for appointments, insurance questions, directions, and general office
              information. We&apos;ll help you with scheduling and next steps.
            </p>
            <div className="hero-actions contact-actions">
              <a className="button" href={practiceInfo.phoneHref}>
                Call {practiceInfo.phoneDisplay}
              </a>
              <a
                className="button button-secondary"
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Address</strong>
                <span>{practiceInfo.fullAddress}</span>
              </div>
              <div className="feature-item">
                <strong>Practice</strong>
                <span>{practiceInfo.practiceName}</span>
              </div>
              <div className="feature-item">
                <strong>Appointments</strong>
                <span>Please call the office directly for scheduling and visit questions.</span>
              </div>
            </div>
          </article>

          <article className="premium-card info-panel contact-map-card">
            <div className="mini-eyebrow">Office Location</div>
            <h2>Visit our Ridgewood office</h2>
            <div className="contact-map-embed">
              <iframe
                title={`${practiceInfo.practiceName} map`}
                src={embeddedMapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>

        <div className="split-section contact-support-grid">
          <article className="premium-card info-panel">
            <div className="mini-eyebrow">Office Hours</div>
            <h3>When to reach us</h3>
            <div className="hours-list">
              {practiceInfo.hours.map(([day, hours]) => (
                <div key={day} className="hours-row">
                  <span>{day}</span>
                  <strong>{hours}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card info-panel">
            <div className="mini-eyebrow">Before You Call</div>
            <h3>Helpful information to have ready</h3>
            <ul className="bullet-list">
              <li>Your preferred appointment days and times.</li>
              <li>Any insurance or billing questions related to your visit.</li>
              <li>The reason for your appointment or symptoms you want to discuss.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
