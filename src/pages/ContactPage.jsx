import { practiceInfo } from '../siteContent';

export default function ContactPage() {
  const mapQuery = encodeURIComponent(practiceInfo.fullAddress);
  const embeddedMapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section className="section page-hero contact-page-section">
      <div className="container contact-page">
        <div className="section-heading align-left fade-up">
          <div className="eyebrow">Contact</div>
          <h1>Contact The Office</h1>
          <p>
            For appointments, insurance questions, or general office information, please call the
            practice directly.
          </p>
        </div>

        <div className="premium-card contact-info-band fade-up">
          <section className="contact-column contact-map-column" aria-labelledby="contact-map-title">
            <div className="mini-eyebrow">Office Location</div>
            <h2 id="contact-map-title">Visit our Ridgewood office</h2>
            <div className="contact-map-embed">
              <iframe
                title={`${practiceInfo.practiceName} map`}
                src={embeddedMapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="text-link contact-direction-link"
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
            >
              Driving directions
            </a>
          </section>

          <section className="contact-column contact-hours-column" aria-labelledby="contact-hours-title">
            <div className="mini-eyebrow">Office Hours</div>
            <h2 id="contact-hours-title">When to reach us</h2>
            <div className="contact-hours-list">
              {practiceInfo.hours.map(([day, hours]) => (
                <div key={day} className="contact-hours-row">
                  <span>{day}</span>
                  <strong>{hours}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-column contact-details-column" aria-labelledby="contact-details-title">
            <div className="mini-eyebrow">Get In Touch</div>
            <h2 id="contact-details-title">Reach our office directly</h2>
            <a className="button contact-phone-button" href={practiceInfo.phoneHref}>
              Call {practiceInfo.phoneDisplay}
            </a>
            <div className="contact-detail-list">
              <div>
                <strong>Address</strong>
                <span>{practiceInfo.addressLine1}</span>
                <span>{practiceInfo.cityStateZip}</span>
              </div>
              <div>
                <strong>Fax</strong>
                <span>{practiceInfo.faxDisplay}</span>
              </div>
              <div>
                <strong>Email</strong>
                <a href={practiceInfo.emailHref}>{practiceInfo.email}</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
