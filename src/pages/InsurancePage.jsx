import { insuranceHighlights, practiceInfo } from '../siteContent';

export default function InsurancePage() {
  return (
    <section className="section page-hero">
      <div className="container insurance-page">
        <div className="section-heading align-left">
          <div className="eyebrow">Insurance</div>
          <h1>Insurance Information</h1>
          <p>
            Coverage details can change, so patients are encouraged to call the office before
            their appointment with any insurance or billing questions.
          </p>
        </div>

        <div className="split-section">
          <article className="premium-card info-panel">
            <h2>Accepted Coverage</h2>
            <div className="insurance-list">
              {insuranceHighlights.map((item) => (
                <div className="insurance-item" key={item}>{item}</div>
              ))}
            </div>
          </article>

          <article className="premium-card info-panel">
            <h2>Before Your Appointment</h2>
            <p>
              Please confirm participation, referral requirements, and billing details before your
              visit.
            </p>
            <p>
              Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
            </p>
            <p>{practiceInfo.fullAddress}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
