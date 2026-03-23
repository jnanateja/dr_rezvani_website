import { practiceInfo } from '../App';

const firstVisitItems = [
  'Bring a photo ID and insurance information if applicable.',
  'Have a list of medications and relevant medical history available.',
  'Write down any questions about symptoms, cycles, menopause, or contraception before your visit.',
  'Arrive a few minutes early to allow time for check-in.',
];

const supportItems = [
  {
    title: 'Appointments',
    text: 'Call the office to schedule a visit or ask about availability.',
  },
  {
    title: 'Insurance Questions',
    text: 'The office can help with basic insurance and billing questions before your visit.',
  },
  {
    title: 'What to Bring',
    text: 'Please have your insurance card, medication list, and relevant history ready.',
  },
  {
    title: 'Before Your Visit',
    text: 'Write down your questions ahead of time so they can be discussed during the appointment.',
  },
];

export default function NewPatientsPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">New Patients</div>
          <h1>Welcome to {practiceInfo.practiceName}</h1>
          <p>
            This page gives first-time visitors a simple overview of what to prepare before
            contacting or visiting the office.
          </p>
        </div>

        <div className="split-section info-layout">
          <article className="info-panel premium-card">
            <h2>Your first visit</h2>
            <ul className="bullet-list">
              {firstVisitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel premium-card">
            <h2>Questions before you come in?</h2>
            <p>
              The office can help with appointments, basic insurance questions, and general
              information about services.
            </p>
            <a className="button" href={practiceInfo.phoneHref}>Call {practiceInfo.phoneDisplay}</a>
          </article>
        </div>

        <div className="section section-inner">
          <div className="section-heading compact-heading">
            <div className="eyebrow">Patient Support</div>
            <h2>Information for new patients</h2>
            <p>
              These sections cover a few of the most common questions patients have before their first visit.
            </p>
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
