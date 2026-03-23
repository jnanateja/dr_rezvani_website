import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NewPatientsPage from './pages/NewPatientsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

export const practiceInfo = {
  siteName: 'Fred Rezvani GYN LLC',
  practiceName: 'Fred Rezvani GYN LLC',
  doctorName: 'Fred Rezvani, MD',
  displayBrand: 'Fred Rezvani, MD',
  phoneDisplay: '201-444-1600',
  phoneHref: 'tel:2014441600',
  addressLine1: '119 Prospect Street Ste 1',
  cityStateZip: 'Ridgewood, NJ 07450',
  fullAddress: '119 Prospect Street Ste 1, Ridgewood, NJ 07450',
  insurance: 'Aetna and Out of Network',
  specialty: 'Gynecology',
  featuredProcedure: 'Labiaplasty',
  hospital: 'The Valley Hospital',
  hours: [
    ['Monday', 'By Appointment'],
    ['Tuesday', 'By Appointment'],
    ['Wednesday', 'By Appointment'],
    ['Thursday', 'By Appointment'],
    ['Friday', 'By Appointment'],
  ],
};

export const services = [
  {
    title: 'Annual Preventive GYN Exams',
    description:
      'Routine wellness visits focused on screening, prevention, and long-term gynecologic health.',
  },
  {
    title: 'Abnormal Bleeding',
    description:
      'Evaluation and treatment planning for heavy bleeding, spotting, or changes in menstrual flow.',
  },
  {
    title: 'Abnormal Pap Smears',
    description:
      'Careful follow-up and guidance after an abnormal Pap result with attention to next steps.',
  },
  {
    title: 'Contraception Counseling',
    description:
      'Personalized discussions to help patients choose birth control options that fit their goals and lifestyle.',
  },
  {
    title: 'Irregular Cycles',
    description:
      'Thoughtful care for irregular periods, cycle changes, and hormone-related gynecologic concerns.',
  },
  {
    title: 'Post-Menopause Bleeding',
    description:
      'Prompt evaluation for post-menopausal bleeding and related symptoms.',
  },
  {
    title: 'Fibroids',
    description:
      'Assessment and management options for fibroids and symptoms affecting daily comfort.',
  },
  {
    title: 'Ovarian Cysts',
    description:
      'Diagnosis, monitoring, and treatment guidance for ovarian cyst concerns.',
  },
  {
    title: 'STD Testing & Care',
    description:
      'Confidential screening, diagnosis, treatment, and preventive guidance.',
  },
  {
    title: 'UTI Evaluation',
    description:
      'Evaluation and treatment for urinary symptoms and recurrent urinary tract infections.',
  },
  {
    title: 'Yeast & Bacterial Infections',
    description:
      'Compassionate care for common vaginal infections with a focus on effective treatment and comfort.',
  },
  {
    title: 'Labiaplasty',
    description:
      'Private consultation and individualized discussion for patients considering labiaplasty.',
  },
];

export const faqs = [
  {
    q: 'How often should I schedule a gynecology exam?',
    a: 'For many women, annual gynecologic exams are an important part of preventive care and long-term wellness.',
  },
  {
    q: 'When should I see a gynecologist?',
    a: 'A visit may be helpful for routine care, pelvic pain, irregular bleeding, unusual discharge, menopause concerns, or contraception questions.',
  },
  {
    q: 'What happens during a first visit?',
    a: 'A first visit often includes a discussion of medical history, symptoms, medications, and questions, followed by an examination when appropriate.',
  },
  {
    q: 'Do you offer labiaplasty consultations?',
    a: 'Yes. The practice offers private consultation and individualized discussion for patients who want to learn more about labiaplasty.',
  },
];

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/new-patients" element={<NewPatientsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
