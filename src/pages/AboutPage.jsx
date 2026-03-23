import headshot from '../assets/headshot.jpeg';
import { practiceInfo } from '../App';

export default function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container split-section about-grid">
        <div>
          <div className="eyebrow">About</div>
          <h1>{practiceInfo.doctorName}</h1>
          <p>
            Dr. Rezvani graduated from St. George’s University School of Medicine in 1983. He
            practices in Ridgewood, New Jersey, and is affiliated with {practiceInfo.hospital}.
          </p>
          <p>
            His practice focuses on gynecology care, including routine visits, preventive care,
            and treatment for common gynecologic concerns.
          </p>
          <p>
            The office also offers labiaplasty consultation and provides clear information for
            patients preparing for a visit.
          </p>

          <div className="stats-grid">
            <div className="stat-card premium-card">
              <strong>Practice</strong>
              <span>{practiceInfo.practiceName}</span>
            </div>
            <div className="stat-card premium-card">
              <strong>Specialty</strong>
              <span>Gynecology</span>
            </div>
            <div className="stat-card premium-card">
              <strong>Services</strong>
              <span>Gynecology and Labiaplasty</span>
            </div>
            <div className="stat-card premium-card">
              <strong>Location</strong>
              <span>{practiceInfo.cityStateZip}</span>
            </div>
          </div>
        </div>

        <div className="portrait-panel premium-card">
          <img src={headshot} alt={practiceInfo.doctorName} className="portrait-image" />
        </div>
      </div>
    </section>
  );
}
