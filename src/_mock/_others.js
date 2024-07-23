import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

const generateDynamicAnswerAccess = (index) => {
  const _faqsAccess_answer = [
    'Use cloud identity providers like Google Workspace and Microsoft Entra ID to verify end-user login credentials.',
    'Using a customized login background can improve the login experience and strengthen brand identity.',
    'Run personalized scripts automatically upon user login',
  ];

  return _faqsAccess_answer[index];
};
export const _faqsAccess = [
  'Cloud-based login',
  'Login window appearance',
  'Custom login scripts',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerAccess(index),
}));


const generateDynamicAnswerCrux = (index) => {
  const _faqsCrux_answer = [
    'MDM is a technology that companies use to secure, manage, and keep an eye on mobile devices including laptops, tablets, and smartphones. In order to guarantee data security and adherence to company regulations, it entails deploying, safeguarding, monitoring, and controlling mobile devices.',
    'MDM is crucial because it facilitates safe access to corporate resources, protects confidential company information, guarantees regulatory compliance, boosts productivity by facilitating secure access, and makes managing numerous devices easier.',
    'By implementing security measures like data encryption, password requirements, and remote wipe capabilities, MDM improves security. Additionally, it makes it possible to monitor device status and possible security risks in real time.',
    ' Yes, by enforcing security regulations, keeping audit logs, and guaranteeing data privacy, MDM solutions can assist firms in adhering to a variety of legal obligations.',
    'Enrolling and provisioning devices, enforcing policies, managing applications, encrypting data, wiping remotely, tracking locations, and live monitoring are typical features.',
    ' Indeed, a lot of MDM systems facilitate Bring Your Own Device (BYOD) rules, which let you manage both personal and business-owned devices while maintaining data security and privacy.',
    ' The complexity and scale of the organization affect how tough it is to implement. To make the deployment process simpler, the majority of contemporary MDM solutions provide support services and user-friendly interfaces.',
    'By facilitating easy and safe access to company resources, MDM can improve user experience. To prevent interfering with user productivity, security measures and usability must be balanced.',
  ];

  return _faqsCrux_answer[index];
};
export const _faqsCrux = [
  'What is Mobile Device Management (MDM)?',
  'What makes Crux MDM crucial for companies?',
  'How does mobile device security get improved with Crux MDM?',
  'Is Crux MDM able to support regulatory compliance?',
  'What characteristics do Crux MDM solutions usually have?',
  'Can personal and company-owned devices be managed using Crux MDM?',
  'How challenging is it to put an MDM system into practice?',
  'How is the user experience impacted by Crux MDM?',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerCrux(index),
}));



const generateDynamicAnswerTru = (index) => {
  const _faqsTru_answer = [
    'Using an OCR tool called TrueRead, correct billing can be achieved without the need for manual data entry by using photos of electric meters to automatically read the meter values.',
    'Users use the TrueRead app to snap a picture of their energy meter. The program extracts the meter reading from the picture and prepares it for invoicing using OCR technology.',
    'You can use TrueRead on iOS and Android smartphones. For desktop users, a web application is another way to access it.',
    ' Yes, compared to manual readings, TrueRead  very accurate readings are produced by utilizing cutting-edge OCR technology to reduce errors.',
    'Make sure the photo captures the entire display clearly and that the meter is well-lit. For the best accuracy, stay away from reflections and shadows.',
    ' Yes, a wide range of electric meter models and kinds are intended to be recognized and read by TrueRead.',
    ' Assuring that all taken pictures and readings are processed and stored safely, TrueRead uses strong security protocols to safeguard user data.',
  ];

  return _faqsTru_answer[index];
};
export const _faqsTru = [
  'What is TrueRead?',
  'How does TrueRead work?',
  'What devices are compatible with TrueRead?',
  'Is TrueRead accurate?',
  'How do I ensure the best results when taking meter images?',
  'Can TrueRead handle different types of electric meters?',
  'How does TrueRead handle data privacy?',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerTru(index),
}));
const generateDynamicAnswerGate = (index) => {
  const _faqsGate_answer = [
    'Onboarding made simple. Configure the Crux Gateway app, deploy it to macOS devices, and start your transition.',
    'Ensure that the onboarding process is safe by requiring user authentication and using encrypted configuration files.',
    'Every macOS device that is enrolled using Automated Device Enrollment will continue to be under supervision and will keep all of its features.',
  ];

  return _faqsGate_answer[index];
};
export const _faqsGate = ['3-Step Onboarding', 'Safe and secure', 'macOS as is'].map(
  (question, index) => ({
    id: _mock.id(index),
    question,
    answer: generateDynamicAnswerGate(index),
  })
);

const generateDynamicAnswerAndroidPlatform = (index) => {
  const _faqsAndroidPlatform_answer = [
    'Crux Device Owner mode is an Android Enterprise enrollment setup that grants IT administrators a great deal of control over Corporate Owned devices. This mode gives administrators full control over devices, letting them set up kiosk settings, manage networks, impose app limits, and design lock screens.',
    'In Android Enterprise, Crux Profile Owner mode allows personal devices to be enrolled with minimal administrative control. In order to improve security and management, this mode creates a different work profile on the device and keeps personal and corporate information distinct.',
    'To establish distinct work and personal profiles on corporate-owned devices, Crux Work Profile on Company-Owned (WP-C) mode leverages containerization. Because the employee personal profile is kept private within the secured container, this solution allows for both personal use and corporate data protection and privacy.',
  ];

  return _faqsAndroidPlatform_answer[index];
};
export const _faqsAndroidPlatform = [
  'Primary device administrator',
  'Profile administrator',
  'Work Profile on Company-Owned Devices (WP-C)',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerAndroidPlatform(index),
}));

const generateDynamicAnswerSecurity = (index) => {
  const _faqsSecurity_answer = [
    'With expertise in e-commerce, healthcare, banking, education, and other sectors, our CodeIgniter developers can provide specialized solutions to fulfill a range of business requirements.',
    'Yes, we provide remote working capabilities for our CodeIgniter engineers, so collaboration and communication are always smooth, no matter where they are in the world.',
    'It just takes a few days on average for the onboarding process to match you with qualified engineers. We put the timeliness of your project first and make sure everything moves smoothly so that development can begin right away.',
    'Yes, our CodeIgniter experts are skilled at incorporating libraries, APIs, and third-party services to improve the functionality and scalability of your apps.',
  ];

  return _faqsSecurity_answer[index];
};
export const _faqsSecurity = [
  'Real-time location reports',
  'Instantaneous device lockdown',
  'Lost mode and custom message',
  'Selectively wipe corporate data',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerSecurity(index),
}));

const generateDynamicAnswerEnroll = (index) => {
  const _faqsEnroll_answer = [
    'With Apple Automated Device Enrollment (ADE), Crux makes the large deployment of Apple devices easier. From the moment of initial power-on, devices are monitored and controlled. Users can utilize their current Google, Okta, or Azure AD login credentials to authenticate during enrollment.',
    'Corporate-owned Android devices may be deployed effortlessly and securely thanks to Crux connection with Android ZTE. On the first boot, enterprise configurations, constraints, and managed settings are deployed automatically, removing the need for manual intervention.',
    'For Samsung devices owned by the company, the Knox platform offers an easy-to-use enrolling process. Even if a device is factory reset, it will automatically re-enroll in Crux if it was enrolled through KME.',
    'Crux UEM software ensures total control over an Android device by being inserted as a system or privileged program during ROM-based enrollment. Enjoy functions like automatic enrollment, stealth app installations, and remote activities that dones not need user input.',
    'You may pre-register Windows devices with your company, configure them beforehand, and have them operational for business use in a matter of minutes when they are unboxed thanks to Crux Windows Autopilot integration.',
  ];

  return _faqsEnroll_answer[index];
};
export const _faqsEnroll = [
  'Apple’s Automated Device Enrollment',
  'Android Zero-touch enrollment',
  'Samsung Knox Mobile Enrollment',
  'ROM based enrollment',
  'Windows Autopilot',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: generateDynamicAnswerEnroll(index),
}));
export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
