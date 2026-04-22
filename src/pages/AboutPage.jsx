import headshot from '../assets/headshot.jpeg';
import officeSign from '../assets/office-sign.jpeg';
import officeHallway from '../assets/office-hallway.jpeg';
import officeExamRoom from '../assets/office-exam-room.jpeg';
import { doctorProfile, practiceInfo } from '../siteContent';

export default function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container about-page-stack">
        <div className="section-heading align-left fade-up">
          <div className="eyebrow">About</div>
          <h1>{practiceInfo.doctorName}</h1>
        </div>

        <div className="about-hero-grid">
          <div className="portrait-panel premium-card about-portrait-card fade-up">
            <img src={headshot} alt={practiceInfo.doctorName} className="portrait-image" />
          </div>

          <div className="about-main-stack">
            <article className="about-copy premium-card fade-up">
              <h2>About Dr. Fred F. Rezvani</h2>
              <p>
                Dr. Fred F. Rezvani is an obstetrician and gynecologist based in Ridgewood, New
                Jersey. His professional background includes medical school in 1983, residency
                training in Obstetrics &amp; Gynecology from 1984 to 1988, and board certification
                in Obstetrics &amp; Gynecology.
              </p>
              <p>
                His listed clinical focus includes gynecology-only care, minimally invasive
                surgery, high-risk pregnancy, and congenital gynecologic anomalies. The practice
                provides care with an emphasis on clear communication, careful evaluation, and
                individualized treatment planning.
              </p>
              <div className="about-details-grid">
                <div className="about-detail-item">
                  <strong>Specialty</strong>
                  <span>Obstetrics &amp; Gynecology</span>
                </div>
                <div className="about-detail-item">
                  <strong>Board Certification</strong>
                  <span>{doctorProfile.boardCertification}</span>
                </div>
                <div className="about-detail-item">
                  <strong>Practice Location</strong>
                  <span>{practiceInfo.cityStateZip}</span>
                </div>
                <div className="about-detail-item">
                  <strong>Castle Connolly Top Doctor Since</strong>
                  <span>{doctorProfile.topDoctorSince}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="about-card-grid">
          <article className="premium-card about-info-card fade-up">
            <div className="mini-eyebrow">Profile</div>
            <h3>Professional background</h3>
            <p>
              Dr. Rezvani provides obstetrics and gynecology care for patients in Ridgewood and
              the surrounding northern New Jersey area.
            </p>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Specialty</strong>
                <span>Obstetrics &amp; Gynecology</span>
              </div>
              <div className="feature-item">
                <strong>Board Certification</strong>
                <span>{doctorProfile.boardCertification}</span>
              </div>
            </div>
          </article>

          <article className="premium-card about-info-card fade-up">
            <div className="mini-eyebrow">Training</div>
            <h3>Education and residency training</h3>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Medical School</strong>
                <span>{doctorProfile.medicalSchool}</span>
              </div>
              <div className="feature-item">
                <strong>Residency</strong>
                <span>{doctorProfile.residency}</span>
              </div>
            </div>
          </article>

          <article className="premium-card about-info-card fade-up">
            <div className="mini-eyebrow">Clinical Focus</div>
            <h3>Areas of expertise</h3>
            <ul className="compact-list compact-list-spacious">
              {doctorProfile.expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="premium-card about-info-card fade-up">
            <div className="mini-eyebrow">Recognition</div>
            <h3>Selected professional recognition</h3>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Castle Connolly Top Doctor Since</strong>
                <span>{doctorProfile.topDoctorSince}</span>
              </div>
              <div className="feature-item">
                <ul className="compact-list">
                  {doctorProfile.recognitions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        <section className="premium-card publication-card fade-up">
          <div className="mini-eyebrow">Publications</div>
          <h2>The Perfect Living Womb</h2>
          <p className="publication-subtitle">
            <em>A Prenatal Guide for Preparing for Pregnancy and What to Expect</em>
          </p>
          <p>
            Dr. Rezvani is the author of <em>The Perfect Living Womb: Conversations with a Virtual
            Pregnant Patient</em>, a prenatal guide developed to help patients prepare for
            pregnancy and better understand what to expect throughout each stage.
          </p>
          <p>
            Published in 2020, the book is available in paperback and e-book formats on Amazon.
          </p>
          <a
            className="button button-small"
            href="https://www.amazon.com/perfect-Conversations-virtual-pregnant-patient-ebook/dp/B08KPRKSPP/"
            target="_blank"
            rel="noreferrer"
          >
            View on Amazon
          </a>
        </section>

        <section className="section section-inner office-gallery-section">
          <div className="section-heading compact-heading align-left fade-up">
            <div className="eyebrow">Our Office</div>
            <h2>Inside the practice</h2>
            <p>
              A quick look at the office environment patients can expect when visiting the
              practice.
            </p>
          </div>
          <div className="office-gallery-grid">
            <article className="premium-card office-gallery-card fade-up">
              <img src={officeHallway} alt="Hallway seating area inside the office" className="office-photo" />
              <div className="office-photo-copy">
                <h3>Reception and Waiting Area</h3>
              </div>
            </article>
            <article className="premium-card office-gallery-card fade-up">
              <img src={officeExamRoom} alt="Exam room in the office" className="office-photo" />
              <div className="office-photo-copy">
                <h3>Exam Room</h3>
              </div>
            </article>
            <article className="premium-card office-gallery-card fade-up">
              <img src={officeSign} alt="Office suite sign for Dr. Fred F. Rezvani" className="office-photo" />
              <div className="office-photo-copy">
                <h3>Office Entrance</h3>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
