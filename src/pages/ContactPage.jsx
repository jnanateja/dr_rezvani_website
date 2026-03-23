import { practiceInfo } from '../App';

export default function ContactPage() {
  return (
    <section className="section page-hero">
      <div className="container split-section contact-layout">
        <div>
          <div className="eyebrow">Contact</div>
          <h1>Contact {practiceInfo.practiceName}</h1>
          <p>
            Patients can contact the office for appointments, service questions, insurance inquiries,
            and general information.
          </p>

          <div className="contact-block premium-card">
            <h3>Office Details</h3>
            <p>{practiceInfo.doctorName}</p>
            <p>{practiceInfo.addressLine1}</p>
            <p>{practiceInfo.cityStateZip}</p>
            <p>
              Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
            </p>
            <p>Insurance: {practiceInfo.insurance}</p>
            <p>Affiliation: {practiceInfo.hospital}</p>
          </div>
        </div>

        <div className="contact-form premium-card">
          <h3>Office Hours</h3>
          <div className="hours-list">
            {practiceInfo.hours.map(([day, hours]) => (
              <div key={day} className="hours-row">
                <span>{day}</span>
                <strong>{hours}</strong>
              </div>
            ))}
          </div>

          <a className="button contact-cta" href={practiceInfo.phoneHref}>
            Call {practiceInfo.phoneDisplay}
          </a>

          <div className="mini-note">
            <strong>Location</strong>
            <span>{practiceInfo.fullAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
