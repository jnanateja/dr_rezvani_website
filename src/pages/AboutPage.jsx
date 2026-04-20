import headshot from '../assets/headshot.jpeg';
import { doctorProfile, practiceInfo } from '../siteContent';

export default function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container about-page-stack">
        <div className="section-heading align-left fade-up">
          <div className="eyebrow">About</div>
          <h1>{practiceInfo.doctorName}</h1>
          {/*<p>
            A board-certified obstetrician and gynecologist providing women&apos;s health care in
            Ridgewood, New Jersey.
          </p>*/}
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
      </div>
    </section>
  );
}
