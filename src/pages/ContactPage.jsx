import officeExteriorFront from '../assets/office-exterior-front.jpeg';
import { insuranceHighlights, practiceInfo } from '../siteContent';

const insuranceNotes = [
  'Confirm current participation before your visit.',
  'Ask whether your plan requires a referral.',
  'Bring your current card and subscriber details.',
  'Call ahead with billing or coverage questions.',
];

const supportItems = [
  {
    title: 'Questions before your visit',
    text: 'The office can help with general service questions, scheduling details, and what to bring.',
  },
  {
    title: 'Insurance and billing',
    text: 'Coverage details may change, so please verify your plan details before the appointment.',
  },
  {
    title: 'Medical records',
    text: 'Bring relevant test results, prior procedure information, and records from recent care when available.',
  },
  {
    title: 'Medication list',
    text: 'Include prescriptions, over-the-counter medications, supplements, and any allergies.',
  },
];

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
            For appointments, insurance questions, visit preparation, or general office
            information, please call the practice directly.
          </p>
        </div>

        <section className="contact-photo-banner premium-card fade-up">
          <div className="contact-photo-copy">
            <div className="mini-eyebrow">Office Location</div>
            <h2>Find our Ridgewood office easily</h2>
            <p>
              The exterior photo below can help patients recognize the office building before
              arriving for their visit.
            </p>
            <a className="button button-small" href={directionsHref} target="_blank" rel="noreferrer">
              Driving directions
            </a>
          </div>
          <img src={officeExteriorFront} alt="Exterior building of Dr. Rezvani's office" className="contact-banner-image" />
        </section>

        <div className="contact-info-band fade-up">
          <section className="premium-card contact-column contact-map-column" aria-labelledby="contact-map-title">
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

          <section className="premium-card contact-column contact-hours-column" aria-labelledby="contact-hours-title">
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

          <section className="premium-card contact-column contact-details-column" aria-labelledby="contact-details-title">
            <div className="mini-eyebrow">Get In Touch</div>
            <h2 id="contact-details-title">For appointments, call our office directly</h2>
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

        <div className="section section-inner">
          <div className="section-heading compact-heading fade-up">
            <div className="eyebrow">Insurance</div>
            <h2>Coverage Information</h2>
            <p>
              Coverage details can change, so patients are encouraged to call the office before
              their appointment with any insurance or billing questions.
            </p>
          </div>
          <div className="split-section info-layout">
            <article className="info-panel premium-card fade-up">
              <h3>Accepted Coverage</h3>
              <div className="insurance-list">
                {insuranceHighlights.map((item) => (
                  <div className="insurance-item" key={item}>{item}</div>
                ))}
              </div>
            </article>

            <article className="info-panel premium-card fade-up">
              <h3>Before Your Appointment</h3>
              <ul className="bullet-list">
                {insuranceNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="patient-card-note">
                Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
              </p>
            </article>
          </div>
        </div>

        <div className="section section-inner">
          <div className="section-heading compact-heading fade-up">
            <div className="eyebrow">Patient Support</div>
            <h2>Helpful Information</h2>
          </div>
          <div className="card-grid">
            {supportItems.map((item) => (
              <article className="service-card premium-card fade-up" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="resource-banner premium-card fade-up">
          <div>
            <div className="mini-eyebrow">Need Assistance?</div>
            <h2>Questions before your appointment?</h2>
            <p>Call the office for scheduling, insurance, or general visit questions.</p>
          </div>
          <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
