import { insuranceHighlights, practiceInfo } from '../siteContent';

const firstVisitItems = [
  'Bring a photo ID and insurance information if applicable.',
  'Have a list of medications and relevant medical history available.',
  'Write down any concerns about symptoms, cycles, menopause, or contraception before your visit.',
  'Arrive a few minutes early to allow time for check-in.',
];

const supportItems = [
  {
    title: 'Appointments',
    text: 'Call the office directly to schedule a visit or ask about availability.',
  },
  {
    title: 'Insurance Questions',
    text: 'Coverage and billing questions can be reviewed before your appointment.',
  },
  {
    title: 'What To Bring',
    text: 'Please have your insurance card, medication list, and relevant history ready.',
  },
  {
    title: 'Before Your Visit',
    text: 'A written list of questions can help make your visit more productive.',
  },
];

export default function NewPatientsPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading align-left">
          <div className="eyebrow">Patient Information</div>
          <h1>New Patients &amp; Insurance Information</h1>
          <p>
            Find key information for your first visit, including what to bring, insurance details,
            and how to contact the office before your appointment.
          </p>
        </div>

        <div className="split-section info-layout">
          <article className="info-panel premium-card">
            <h2>What To Bring</h2>
            <ul className="bullet-list">
              {firstVisitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel premium-card">
            <h2>Need Help Before You Come In?</h2>
            <p>
              The office can assist with scheduling, general service questions, and insurance
              details before your appointment.
            </p>
            <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
          </article>
        </div>

        <div className="section section-inner">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Insurance</div>
            <h2>Coverage Information</h2>
            <p>
              Coverage details can change, so patients are encouraged to call the office before
              their appointment with any insurance or billing questions.
            </p>
          </div>
          <div className="split-section info-layout">
            <article className="info-panel premium-card">
              <h3>Accepted Coverage</h3>
              <div className="insurance-list">
                {insuranceHighlights.map((item) => (
                  <div className="insurance-item" key={item}>{item}</div>
                ))}
              </div>
            </article>

            <article className="info-panel premium-card">
              <h3>Before Your Appointment</h3>
              <p>
                Please confirm participation, referral requirements, and billing details before
                your visit.
              </p>
              <p>
                Phone: <a href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
              </p>
              <p>{practiceInfo.fullAddress}</p>
            </article>
          </div>
        </div>

        <div className="section section-inner">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Patient Support</div>
            <h2>Helpful Information</h2>
          </div>
          <div className="card-grid">
            {supportItems.map((item) => (
              <article className="service-card premium-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
