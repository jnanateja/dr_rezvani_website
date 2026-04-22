export const practiceInfo = {
  siteName: 'Fred Rezvani GYN LLC',
  practiceName: 'Fred Rezvani GYN LLC',
  doctorName: 'Fred Rezvani, MD',
  displayBrand: 'Fred Rezvani, MD',
  phoneDisplay: '201-444-1600',
  phoneHref: 'tel:2014441600',
  faxDisplay: '201-444-8774',
  email: 'healthcare2000fr2@gmail.com',
  emailHref: 'mailto:healthcare2000fr2@gmail.com',
  addressLine1: '119 Prospect Street, Suite 1',
  cityStateZip: 'Ridgewood, NJ 07450',
  fullAddress: '119 Prospect Street, Suite 1, Ridgewood, NJ 07450',
  specialty: 'Gynecology',
  insuranceLine: 'Aetna, Cigna, and Blue Cross Blue Shield accepted',
  intro:
    'Care is centered on clear evaluation, appropriate treatment, and continuity of care in an established office setting.',
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

export const doctorProfile = {
  topDoctorSince: '2009',
  medicalSchool: 'Grenada, 1983',
  residency: 'Lincoln Med & Mental Hlth Ctr, Obstetrics & Gynecology, 1983 - 1988',
  chiefResident: '1987 - 1988',
  boardCertification: 'Obstetrics & Gynecology',
  expertise: [
    'High-Risk Pregnancy',
    'Minimally Invasive Surgery',
    'Congenital Anomalies-Gynecologic',
    'Gynecology Only',
  ],
  recognitions: [
    'New York Magazine: Top Doctors, 2014-2025',
    "Jersey's Best Magazine Top Doctors, 2010-2025",
    "Jersey's Best - Top Doctors for Women's Health, 2011-2025",
    'Top Doctors New York Metro Area digital guide, 2016-2023',
  ],
};

export const heroHighlights = [
  'Routine and preventive gynecology',
  'Menopause and hormone support',
  'In-office evaluation and procedures',
];

export const serviceCategories = [
  {
    title: 'Gynecologic Care',
    description:
      'Routine, preventive, and problem-focused gynecologic care for adolescents, adults, and older women.',
    intro:
      'This area of care includes routine visits, evaluation of common gynecologic concerns, contraceptive counseling, and treatment planning based on symptoms, medical history, and long-term health goals.',
    services: [
      {
        title: 'Menstrual cycle irregularities',
        summary:
          'Evaluation for changes in cycle timing, heavy bleeding, prolonged bleeding, skipped periods, or painful periods.',
        whyNeed: [
          'Periods have become heavier, more painful, or less predictable',
          'Bleeding is lasting longer than usual',
          'Cycles are being missed or coming too frequently',
        ],
        whenToSee:
          'Schedule a visit when bleeding patterns change, pain is worsening, or symptoms are affecting daily life.',
        faqs: [
          {
            q: 'What kinds of period changes should be checked?',
            a: 'Heavy bleeding, skipped periods, very frequent cycles, bleeding between periods, or increasing pain are all reasonable reasons to schedule an evaluation.',
          },
          {
            q: 'Does one abnormal cycle always mean something serious?',
            a: 'Not necessarily. Some changes can be temporary, but persistent or disruptive symptoms should still be reviewed.',
          },
        ],
      },
      {
        title: 'Birth control management',
        summary:
          'Counseling and follow-up for contraception options based on health history, preferences, and treatment goals.',
        whyNeed: [
          'You want to start, change, or stop birth control',
          'Your current method is causing side effects or concerns',
          'You want guidance on which option may fit you best',
        ],
        whenToSee:
          'Schedule a visit when you want to review options, discuss side effects, or make a change in your current method.',
        faqs: [
          {
            q: 'Can I switch birth control if my current method is not working well for me?',
            a: 'Yes. A visit can help review symptoms, goals, and medical history so another option can be discussed appropriately.',
          },
          {
            q: 'Is birth control used only for pregnancy prevention?',
            a: 'No. It may also be discussed for cycle regulation, bleeding concerns, or other gynecologic symptoms depending on the situation.',
          },
        ],
      },
      {
        title: 'IUD insertion and removal',
        summary:
          'In-office placement or removal of an intrauterine device with guidance before and after the procedure.',
        whyNeed: [
          'You are considering a long-acting birth control option',
          'Your current IUD is due for removal or replacement',
          'You have questions about comfort, timing, or follow-up',
        ],
        whenToSee:
          'Schedule a visit when you want to discuss IUD placement, removal, replacement, or concerns related to an existing device.',
        faqs: [
          {
            q: 'Is IUD care done in the office?',
            a: 'Yes. Placement and removal are typically handled in the office setting.',
          },
          {
            q: 'Should I be seen if I have concerns with my current IUD?',
            a: 'Yes. If you are having discomfort, unexpected bleeding, or questions about timing, it is appropriate to schedule an evaluation.',
          },
        ],
      },
      {
        title: 'HPV treatment',
        summary:
          'Evaluation and follow-up for HPV-related concerns with guidance on next steps and office-based management when needed.',
        whyNeed: [
          'You have questions after an HPV-related result',
          'You were told further evaluation is needed',
          'You want follow-up for cervical changes or treatment planning',
        ],
        whenToSee:
          'Schedule a visit after an abnormal result, when follow-up is recommended, or when you have questions about treatment or monitoring.',
        faqs: [
          {
            q: 'Does an HPV-related result always mean a procedure is needed?',
            a: 'Not always. The next step depends on the result and your history, which is why follow-up is important.',
          },
          {
            q: 'Why is follow-up important with HPV concerns?',
            a: 'Timely follow-up helps determine whether monitoring, further evaluation, or treatment is appropriate.',
          },
        ],
      },
      {
        title: 'STD testing and treatment',
        summary:
          'Evaluation, testing, and treatment planning for sexually transmitted infections and related concerns.',
        whyNeed: [
          'You have symptoms such as irritation, discharge, or discomfort',
          'You need screening after a new exposure or concern',
          'You want prompt evaluation and guidance on treatment',
        ],
        whenToSee:
          'Schedule a visit when you have symptoms, possible exposure, or want routine screening for peace of mind.',
        faqs: [
          {
            q: 'Should I be seen even if symptoms seem mild?',
            a: 'Yes. Mild symptoms can still deserve evaluation, especially when they are new or persistent.',
          },
          {
            q: 'Can testing and treatment planning be discussed in the same visit?',
            a: 'In many cases, yes. The visit can be used to review symptoms, testing needs, and the next steps clearly.',
          },
        ],
      },
      {
        title: 'Breast exams',
        summary:
          'Clinical breast evaluation as part of preventive care or follow-up when a patient has a concern.',
        whyNeed: [
          'You are due for routine preventive care',
          'You have noticed a change that you want evaluated',
          'You want breast health concerns reviewed in office',
        ],
        whenToSee:
          'Schedule a visit for routine preventive care or sooner if you notice a new change, discomfort, or concern.',
        faqs: [
          {
            q: 'Are breast exams only part of annual visits?',
            a: 'No. They can also be addressed when there is a specific concern that needs review.',
          },
          {
            q: 'Should I wait for my next routine appointment if I notice a change?',
            a: 'If you notice something new or concerning, it is reasonable to schedule sooner rather than waiting.',
          },
        ],
      },
      {
        title: 'Family planning',
        summary:
          'Guidance for reproductive health decisions, contraceptive planning, and discussions around timing and care goals.',
        whyNeed: [
          'You want to discuss reproductive planning or contraception',
          'You need guidance on the next steps for your goals',
          'You want care organized around your health history and preferences',
        ],
        whenToSee:
          'Schedule a visit when you want to review options, ask questions, or plan care around your reproductive goals.',
        faqs: [
          {
            q: 'Is family planning only about contraception?',
            a: 'No. It can also include broader reproductive health planning and discussion based on your goals and timing.',
          },
          {
            q: 'Can this be discussed during a routine gynecologic visit?',
            a: 'Often, yes. Depending on the concern, it may be addressed within a routine visit or with more focused follow-up.',
          },
        ],
      },
    ],
  },
  {
    title: 'Office Procedures',
    description:
      'Selected gynecologic evaluations and procedures performed in the office for timely care and follow-up.',
    intro:
      'These visits are designed to make evaluation and treatment more efficient. Tap any procedure below to see what it is used for, why a patient may need it, and common questions about when to schedule.',
    services: [
      {
        title: 'Abnormal Pap smear evaluation',
        summary:
          'Follow-up care after an abnormal Pap result to determine the appropriate next step and whether further evaluation is needed.',
        whyNeed: [
          'A recent Pap smear result was abnormal',
          'You were told to schedule follow-up testing or examination',
          'You want the result explained clearly and the next steps reviewed',
        ],
        whenToSee:
          'Schedule promptly when follow-up is recommended after a Pap result so evaluation is not delayed.',
        faqs: [
          {
            q: 'Does an abnormal Pap smear always mean something serious?',
            a: 'Not always. Many abnormal results simply mean that further evaluation is needed to understand the cause and decide on the right follow-up.',
          },
          {
            q: 'Why should follow-up not be delayed?',
            a: 'Timely follow-up helps determine whether the result only needs monitoring or whether a procedure or closer evaluation is appropriate.',
          },
        ],
      },
      {
        title: 'LEEP procedure',
        summary:
          'An office-based procedure used when cervical tissue changes need treatment or closer management after evaluation.',
        whyNeed: [
          'Cervical changes require treatment after follow-up testing',
          'A provider recommended removal of abnormal tissue',
          'You need further care after colposcopy or Pap follow-up',
        ],
        whenToSee:
          'Schedule when the procedure has been recommended after cervical evaluation or when you are reviewing treatment options.',
        faqs: [
          {
            q: 'Why would a LEEP be recommended?',
            a: 'It may be recommended when follow-up shows cervical tissue changes that should be treated rather than simply observed.',
          },
          {
            q: 'Is LEEP typically handled in the office?',
            a: 'Yes. It is commonly performed in the office setting with instructions provided before and after the procedure.',
          },
        ],
      },
      {
        title: 'Cryotherapy',
        summary:
          'Office treatment that may be used for selected cervical changes or other findings when freezing therapy is appropriate.',
        whyNeed: [
          'Treatment has been recommended for an area of abnormal tissue',
          'You need a conservative office-based treatment option',
          'You are following up after abnormal cervical findings',
        ],
        whenToSee:
          'Schedule when cryotherapy has been recommended or when you need to review whether it is the right next step.',
        faqs: [
          {
            q: 'What is cryotherapy used for in gynecology?',
            a: 'It is used in selected cases when a provider recommends freezing treatment for abnormal tissue that can be managed in the office.',
          },
          {
            q: 'Can cryotherapy be discussed before deciding on treatment?',
            a: 'Yes. The visit can be used to review why it was recommended and what to expect afterward.',
          },
        ],
      },
      {
        title: 'Office D&C',
        summary:
          'A focused in-office procedure that may be used as part of evaluation or treatment for certain bleeding-related concerns.',
        whyNeed: [
          'Abnormal bleeding needs further evaluation or treatment',
          'A provider recommended a procedure after review of symptoms',
          'You want to understand why this option is being considered',
        ],
        whenToSee:
          'Schedule when abnormal bleeding is persistent or when the procedure has been recommended as part of your care plan.',
        faqs: [
          {
            q: 'Why might an office D&C be recommended?',
            a: 'It may be recommended when bleeding symptoms need more direct evaluation or treatment based on your history and examination.',
          },
          {
            q: 'Will I receive guidance after the procedure?',
            a: 'Yes. Recovery instructions and follow-up expectations are typically reviewed clearly after the visit.',
          },
        ],
      },
      {
        title: 'Endometrial biopsy',
        summary:
          'A tissue sample of the uterine lining taken in the office when additional evaluation of bleeding or related symptoms is needed.',
        whyNeed: [
          'Abnormal uterine bleeding needs further evaluation',
          'A sample of the uterine lining has been recommended',
          'Symptoms or history suggest more direct testing is needed',
        ],
        whenToSee:
          'Schedule when a biopsy has been recommended or when bleeding changes need a more complete workup.',
        faqs: [
          {
            q: 'Why is an endometrial biopsy done?',
            a: 'It is done when the uterine lining needs closer evaluation, often in the setting of abnormal bleeding or other related concerns.',
          },
          {
            q: 'Is it normal to have questions before this procedure?',
            a: 'Yes. A visit is a good time to review why the biopsy is being recommended and what to expect from the process.',
          },
        ],
      },
      {
        title: 'Colposcopy',
        summary:
          'A closer examination of the cervix, often recommended after abnormal screening results or HPV-related follow-up.',
        whyNeed: [
          'You were told you need follow-up after an abnormal Pap smear',
          'Further examination of the cervix has been recommended',
          'You need evaluation after HPV-related findings',
        ],
        whenToSee:
          'Schedule when follow-up screening results indicate that a closer cervical examination is needed.',
        faqs: [
          {
            q: 'Why is colposcopy recommended?',
            a: 'It is recommended when screening results suggest that the cervix should be examined more closely before deciding on the next step.',
          },
          {
            q: 'Does colposcopy mean I will definitely need treatment?',
            a: 'Not necessarily. It is primarily an evaluation step used to guide whether monitoring, biopsy, or treatment is appropriate.',
          },
        ],
      },
      {
        title: 'Polypectomy',
        summary:
          'Removal of a polyp in the office when a polyp is contributing to symptoms or needs pathologic evaluation.',
        whyNeed: [
          'A polyp has been identified during evaluation',
          'Bleeding or symptoms may be related to a polyp',
          'Removal has been recommended for treatment or further review',
        ],
        whenToSee:
          'Schedule when a polyp has been identified, symptoms are ongoing, or removal has been recommended after examination.',
        faqs: [
          {
            q: 'Why would a polyp need to be removed?',
            a: 'Removal may be recommended when a polyp is linked to bleeding, symptoms, or needs further evaluation.',
          },
          {
            q: 'Is polypectomy commonly done in the office?',
            a: 'In selected cases, yes. The office visit allows the provider to review whether it can be handled comfortably in that setting.',
          },
        ],
      },
    ],
  },
  {
    title: 'Hormone and Menopause Care',
    description:
      'Evaluation and treatment support for menopause symptoms, hormonal changes, and related concerns.',
    intro:
      'Hormonal changes can affect comfort, sleep, mood, energy, and overall quality of life. Tap each topic below for details on when a visit may help.',
    services: [
      {
        title: 'Hormone replacement therapy',
        summary:
          'Discussion of hormone treatment options for patients with symptoms related to menopause or hormonal changes.',
        whyNeed: [
          'Hot flashes or night sweats are affecting comfort',
          'Sleep, energy, or daily well-being has changed',
          'You want to know whether hormone treatment is appropriate for you',
        ],
        whenToSee:
          'Schedule when symptoms are persistent, disruptive, or you want a careful discussion of available treatment options.',
        faqs: [
          {
            q: 'Is hormone therapy right for everyone?',
            a: 'No. Whether it is appropriate depends on symptoms, health history, and treatment goals, which is why an individual review is important.',
          },
          {
            q: 'Can I schedule a visit just to review options?',
            a: 'Yes. Many patients schedule specifically to discuss symptoms and whether hormone therapy or other treatment approaches may help.',
          },
        ],
      },
      {
        title: 'Libido support',
        summary:
          'Evaluation of hormonal and gynecologic factors that may be contributing to changes in libido or intimacy-related concerns.',
        whyNeed: [
          'Changes in desire are affecting quality of life or relationships',
          'Symptoms may be connected to menopause or hormonal shifts',
          'You want these concerns addressed in a professional setting',
        ],
        whenToSee:
          'Schedule when changes feel persistent, bothersome, or connected to other hormonal or menopausal symptoms.',
        faqs: [
          {
            q: 'Can libido concerns be discussed as part of menopause care?',
            a: 'Yes. These concerns are often reviewed within the larger context of hormonal symptoms and overall well-being.',
          },
          {
            q: 'Is it reasonable to schedule even if I am unsure what is causing the issue?',
            a: 'Yes. A visit can help determine whether hormonal changes or other gynecologic factors may be contributing.',
          },
        ],
      },
      {
        title: 'Menopausal treatment options',
        summary:
          'A broader review of symptom relief options for menopause-related concerns, with care tailored to each patient’s history and goals.',
        whyNeed: [
          'Hot flashes, sleep changes, or mood changes are worsening',
          'You want to review treatment options beyond waiting it out',
          'You need guidance on what kinds of relief may be available',
        ],
        whenToSee:
          'Schedule when menopausal symptoms are interfering with comfort, sleep, work, or daily routine.',
        faqs: [
          {
            q: 'Are there options besides hormone therapy?',
            a: 'Yes. Depending on the patient and the symptoms involved, different treatment approaches may be discussed.',
          },
          {
            q: 'When should menopause symptoms stop being managed on my own?',
            a: 'If symptoms are persistent, disruptive, or affecting daily life, it is reasonable to schedule a visit for guidance.',
          },
        ],
      },
    ],
  },
  {
    title: 'Cosmetic Gynecology',
    description:
      'Consultation and care for patients considering cosmetic or comfort-related gynecologic procedures.',
    intro:
      'Some patients seek consultation because of discomfort, tissue changes, or personal concerns. Tap a service below to see when consultation may be helpful.',
    services: [
      {
        title: 'Cosmetic labiaplasty',
        summary:
          'Consultation for patients considering labiaplasty because of physical discomfort, tissue concerns, or aesthetic preference.',
        whyNeed: [
          'Discomfort with exercise, clothing, or daily activity',
          'Tissue-related concerns are affecting comfort or confidence',
          'You want to understand whether a procedure is appropriate',
        ],
        whenToSee:
          'Schedule a consultation when discomfort is ongoing or when you want a private discussion about whether this procedure may help.',
        faqs: [
          {
            q: 'Is consultation required before cosmetic labiaplasty?',
            a: 'Yes. A consultation is important to review symptoms, goals, expectations, and whether the procedure is appropriate.',
          },
          {
            q: 'Can labiaplasty be considered for discomfort, not just appearance?',
            a: 'Yes. Some patients seek consultation because tissue-related discomfort affects exercise, clothing, or daily activities.',
          },
        ],
      },
      {
        title: 'Vulvoplasty',
        summary:
          'Consultation and procedure planning for selected vulvar concerns when structural or comfort-related changes need review.',
        whyNeed: [
          'You have functional or comfort-related tissue concerns',
          'Changes are affecting daily activity or confidence',
          'You want a professional review of available options',
        ],
        whenToSee:
          'Schedule a consultation when symptoms or concerns are ongoing and you want to review whether treatment may be appropriate.',
        faqs: [
          {
            q: 'Are these consultations handled discreetly?',
            a: 'Yes. These visits should feel professional, private, and focused on the patient’s concerns and goals.',
          },
          {
            q: 'Do I need to know exactly what procedure I want before scheduling?',
            a: 'No. The consultation can help clarify the concern and review whether a procedure is appropriate.',
          },
        ],
      },
    ],
  },
  {
    title: 'Primary Care Support',
    description:
      'In-office health evaluation and laboratory support when additional assessment is needed.',
    intro:
      'In some situations, a broader health review or laboratory assessment may be part of care. Tap below to see when these services may be useful.',
    services: [
      {
        title: 'Full history and physical exam',
        summary:
          'A broader in-office medical review when additional evaluation is needed to support diagnosis, treatment planning, or clearance.',
        whyNeed: [
          'Symptoms need a more complete overall health review',
          'Pre-procedure evaluation is needed',
          'Additional medical context may help guide treatment decisions',
        ],
        whenToSee:
          'Schedule when advised before a procedure or when a more complete review of your health history is appropriate.',
        faqs: [
          {
            q: 'Why would a gynecologic visit include a broader physical evaluation?',
            a: 'Sometimes a more complete medical picture helps guide treatment planning, safety, and follow-up decisions.',
          },
          {
            q: 'Can this help before a procedure?',
            a: 'Yes. In some cases, a broader review is useful before office-based care or treatment is scheduled.',
          },
        ],
      },
      {
        title: 'Full laboratory testing on premises',
        summary:
          'On-site laboratory support that can make evaluation and follow-up more convenient when testing is part of the care plan.',
        whyNeed: [
          'Testing is needed as part of evaluation or follow-up',
          'You prefer convenient coordination in one office setting',
          'Results may help guide treatment planning more efficiently',
        ],
        whenToSee:
          'Schedule when laboratory work has been recommended or when your care plan includes testing as part of evaluation.',
        faqs: [
          {
            q: 'Can testing be coordinated with the visit?',
            a: 'In many cases, yes. On-site laboratory support can make the process simpler and more efficient.',
          },
          {
            q: 'Is laboratory testing only for complex cases?',
            a: 'No. It may be used whenever testing is helpful for evaluation, monitoring, or treatment planning.',
          },
        ],
      },
    ],
  },
];

export const createServiceSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const serviceDirectory = serviceCategories.flatMap((category, categoryIndex) =>
  category.services.map((service, serviceIndex) => ({
    ...service,
    slug: createServiceSlug(service.title),
    categoryTitle: category.title,
    categoryDescription: category.description,
    categoryIntro: category.intro,
    categoryIndex,
    serviceIndex,
  }))
);

export const findServiceBySlug = (slug) =>
  serviceDirectory.find((service) => service.slug === slug);

export const visitReasons = [
  'Irregular, heavy, or painful periods',
  'Abnormal bleeding or pelvic discomfort',
  'Abnormal Pap smear follow-up',
  'Birth control questions or IUD care',
  'Menopause symptoms or hormone concerns',
  'HPV-related concerns or STD testing',
  'Breast exam or preventive gynecologic care',
  'Family planning and reproductive health questions',
];

export const serviceTiles = serviceCategories.map((category) => ({
  title: category.title,
  description: category.description,
}));

export const insuranceHighlights = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
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
