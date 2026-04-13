import headshot from '../assets/headshot.jpeg';
import { practiceInfo } from '../siteContent';

export default function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container about-page-stack">
        <div className="section-heading align-left">
          <div className="eyebrow">About</div>
          <h1>{practiceInfo.doctorName}</h1>
          <p>
            Fred Rezvani, MD provides comprehensive gynecologic care in Ridgewood, New Jersey,
            with an emphasis on careful evaluation, accurate diagnosis, and individualized
            treatment.
          </p>
        </div>

        <div className="about-hero-grid">
          <div className="portrait-panel premium-card about-portrait-card">
            <img src={headshot} alt={practiceInfo.doctorName} className="portrait-image" />
          </div>

          <div className="about-main-stack">
            <article className="about-copy premium-card">
              <h2>Comprehensive Gynecologic Care for Women of all ages</h2>
              <p>
                The practice provides preventive gynecologic care, menopause management,
                office-based procedures, family planning services, and evaluation of both new and
                ongoing health concerns. Care is provided with attention to clear communication,
                appropriate treatment planning, and follow-up to support ongoing health and
                well-being. Dr. Rezvani is committed to delivering high-quality gynecologic care
                focused on patient safety, clinical accuracy, and long-term health.
              </p>
              <div className="about-details-grid">
                <div className="about-detail-item">
                  <strong>Practice</strong>
                  <span>{practiceInfo.practiceName}</span>
                </div>
                <div className="about-detail-item">
                  <strong>Specialty</strong>
                  <span>{practiceInfo.specialty}</span>
                </div>
                <div className="about-detail-item">
                  <strong>Hospital Affiliation</strong>
                  <span>{practiceInfo.hospital}</span>
                </div>
                <div className="about-detail-item">
                  <strong>Location</strong>
                  <span>{practiceInfo.cityStateZip}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="about-bottom-grid">
          <article className="premium-card office-preview-copy">
            <div className="mini-eyebrow">Approach To Care</div>
            <h3>  </h3>
            <p>
              
            </p>
          </article>
          <article className="premium-card office-preview-copy">
            <h3>Overview</h3>
            <p>
              Dr. Rezvani graduated from the St Georges University School of Medicine in 1983. He
              works in Ridgewood, NJ and 1 other location and specializes in Obstetrics &
              Gynecology. Dr. Rezvani is affiliated with The Valley Hospital.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
