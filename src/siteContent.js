export const practiceInfo = {
  siteName: 'Fred Rezvani GYN LLC',
  practiceName: 'Fred Rezvani GYN LLC',
  doctorName: 'Fred Rezvani, MD',
  displayBrand: 'Fred Rezvani, MD',
  phoneDisplay: '201-444-1600',
  phoneHref: 'tel:2014441600',
  addressLine1: '119 Prospect Street, Suite 1',
  cityStateZip: 'Ridgewood, NJ 07450',
  fullAddress: '119 Prospect Street, Suite 1, Ridgewood, NJ 07450',
  specialty: 'Gynecology',
  insuranceLine: 'Aetna and out-of-network benefits',
  hospital: 'The Valley Hospital',
  intro:
    'Comprehensive gynecology care focused on clear communication, respectful treatment, and continuity of care.',
  hours: [
    ['Monday', '9:00 AM - 5:00 PM'],
    ['Tuesday', '9:00 AM - 5:00 PM'],
    ['Wednesday', '9:00 AM - 5:00 PM'],
    ['Thursday', '9:00 AM - 5:00 PM'],
    ['Friday', '9:00 AM - 5:00 PM'],
    ['Saturday', 'Closed'],
    ['Sunday', 'Closed'],
  ],
};

export const heroHighlights = [
  'Routine and preventive gynecology',
  'Menopause and hormone support',
  'In-office evaluation and procedures',
];

export const serviceCategories = [
  {
    title: 'Gynecological Care',
    description:
      'Preventive and problem-focused care for women at every stage of life.',
    items: [
      'Treatment for gynecological issues for all ages',
      'Menstrual cycle irregularities',
      'Birth control management',
      'IUD insertion and removal',
      'HPV treatment',
      'STD testing and treatment',
      'Breast exams',
      'Family planning',
    ],
  },
  {
    title: 'Office Procedures',
    description:
      'Selected evaluations and procedures performed in the office for timely care.',
    items: [
      'Abnormal Pap smear evaluation',
      'LEEP procedure',
      'Cryotherapy',
      'Office D&C',
      'Endometrial biopsy',
      'Colposcopy',
      'Polypectomy',
    ],
  },
  {
    title: 'Hormone and Menopause Care',
    description:
      'Individualized support for hormonal changes, menopause symptoms, and quality of life concerns.',
    items: [
      'Hormone replacement therapy',
      'Libido support',
      'Menopausal treatment options',
    ],
  },
  {
    title: 'Cosmetic Gynecology',
    description:
      'Consultation for patients exploring cosmetic gynecologic procedures.',
    items: ['Cosmetic labiaplasty', 'Vulvoplasty'],
  },
  {
    title: 'Primary Care Support',
    description:
      'Convenient in-office testing and health review when additional evaluation is needed.',
    items: ['Full history and physical exam', 'Full laboratory testing on premises'],
  },
];

export const serviceTiles = serviceCategories.map((category) => ({
  title: category.title,
  description: category.description,
}));

export const insuranceHighlights = [
  'Aetna',
  'Out-of-network patients are welcome',
  'Please call before your visit to confirm current participation and billing details',
];

export const faqs = [
  {
    q: 'What types of concerns does the practice treat?',
    a: 'The office provides gynecological care, office procedures, menopause support, family planning, and selected cosmetic gynecology services.',
  },
  {
    q: 'Can I call about insurance before scheduling?',
    a: 'Yes. The office can review coverage questions and help you understand next steps before your appointment.',
  },
  {
    q: 'Are procedures performed in the office?',
    a: 'Several gynecologic evaluations and procedures are available on site, depending on the reason for your visit.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'Please call the office directly to schedule a visit or ask about appointment availability.',
  },
];
