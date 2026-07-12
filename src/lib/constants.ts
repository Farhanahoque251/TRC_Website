/**
 * Single source of truth for site content.
 * Editing copy here updates it everywhere.
 */

export const site = {
  name: "The Real Consultation",
  shortName: "TRC",
  domain: "trcbd.net",
  url: "https://www.trcbd.net",
  tagline: "System Trust · Digital Compliance · Fiscal Governance",
  description:
    "TRC (The Real Consultation) is Bangladesh's specialist VAT consultancy — building compliant, leak-proof VAT systems for cement, steel, leather, FMCG and trading businesses.",
  founded: 2019,
  yearsInService: 6,
  phone: "+880 1799-707090",
  phoneHref: "tel:+8801799707090",
  email: "alim@trcbd.net",
  emailHref: "mailto:alim@trcbd.net",
  whatsappHref: "https://wa.me/8801799707090",
  address: {
    line1: "Block-B, Shahara Haven (5th Floor)",
    line2: "Plot-91, Avenue-01, Kalshi Road, Section-12, Mirpur",
    city: "Dhaka 1216, Bangladesh",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Track Record", href: "/results" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "VAT Specialists · Since 2019",
  title: "VAT compliance, engineered to work by default.",
  subtitle:
    "We build resilient VAT systems for Bangladesh's most demanding industries — where compliance is the default state, not an afterthought. Always fighting within the law, never with shortcuts.",
  primaryCta: { label: "Book a consultation", href: "/contact" },
  secondaryCta: { label: "Explore our services", href: "/services" },
  proof: [
    { value: "৳100 Cr+", label: "Saved for clients" },
    { value: "50+", label: "Companies served" },
    { value: "6 yrs", label: "Of VAT specialisation" },
    { value: "28+ yrs", label: "Sector experience" },
  ],
};

/** Credentials strip — trust signals shown under the hero */
export const credentials = [
  "Member, International VAT Association (IVA) · Belgium",
  "Vendor-VAT Consultant, The World Bank Bangladesh",
  "NBR-recognised compliance practice",
  "Managing Partner, VATBONDHU News",
];

export const stats = [
  { value: "৳100 Cr+", label: "VAT saved through lawful planning" },
  { value: "50+", label: "Companies served since 2019" },
  { value: "9.40 Cr", label: "Single-case demand reduced (Greenland)" },
  { value: "360°", label: "Compliance across the value chain" },
];

export const about = {
  eyebrow: "Who we are",
  title: "We reject the flawed binary of \u2018honest vs. dishonest\u2019.",
  lead:
    "TRC favours System Trust — building digital and procedural architectures where compliance is the default state. VAT is not just a tax to us; it is a tool for national development.",
  body: [
    "TRC began its journey in September 2019 with a single mission: to build a results-oriented, ethical VAT consultancy that avoids poor practice and focuses on accountability. From day one, our fees were tied to the value we created — through savings, compliance and effective VAT management.",
    "Six years on, we have delivered measurable results, saving clients close to one hundred crore taka through proper VAT planning. We face every challenge within the framework of the law, giving businesses both savings and peace of mind.",
  ],
  mission: {
    label: "Mission",
    quote: "Always Better, Not Best.",
    text: "We continuously learn, adapt and innovate — turning best practice into solutions unique to each client, resolving even the most complex VAT matters within the law.",
  },
  vision: {
    label: "Vision",
    quote: "Not the Big One \u2014 Become the Only One.",
    text: "To be the most specialised VAT consultancy in Bangladesh, distinguished by expertise, integrity and impact, setting the benchmark for the sector.",
  },
};

export const services = [
  {
    tier: "Short term",
    scope: "Case to case",
    title: "Audit, inspection & dispute defence",
    description:
      "We stand beside your business during audits, inspections and disputes — always fighting within the law, never compromising with shortcuts. We interpret and apply VAT law according to the nature of your business.",
    points: [
      "Representation before VAT authorities and tribunals",
      "Legal interpretation and documentation",
      "Demand reduction and settlement strategy",
    ],
  },
  {
    tier: "Mid term",
    scope: "Zero VAT payable · 6 months",
    title: "Zero-VAT systems for projects",
    description:
      "Tailored Zero-VAT solutions for government and donor-funded projects, with full compliance support for nominated contractors and sub-contractors — then we hand the system to your own team.",
    points: [
      "Zero-VAT compliance setup within six months",
      "VAT system customised to your operations",
      "Training your manpower — cutting service costs by half",
    ],
    featured: true,
  },
  {
    tier: "Long term",
    scope: "One year",
    title: "360° VAT infrastructure",
    description:
      "A one-year programme that establishes a compact VAT system through inter-departmental and value-chain management, so your business builds its own capability for sustainable growth.",
    points: [
      "Inter-departmental and value-chain VAT management",
      "360° compliance across the organisation",
      "In-house capability, reduced external reliance",
    ],
  },
];

export const approach = {
  eyebrow: "How we work",
  title: "Compliance, as clear as one, two, three.",
  subtitle:
    "A disciplined method that turns complex VAT exposure into a system your team can run with confidence.",
  steps: [
    {
      n: "01",
      title: "Assess",
      text: "We map your supply chain and VAT position sector-by-sector, identifying risk, leakage and the exposures hiding in your current process.",
    },
    {
      n: "02",
      title: "Design",
      text: "We build a VAT framework matched to how your business actually operates — documented, defensible and aligned with NBR requirements.",
    },
    {
      n: "03",
      title: "Sustain",
      text: "We train your people and supervise the system until it runs itself — cutting dependency on outside support and locking in compliance.",
    },
  ],
};

export const values = {
  eyebrow: "Why TRC",
  title: "Specialists, not generalists.",
  lead:
    "Team TRC is fully focused on VAT law, compliance and risk management — an approach that is different from every other consultant in Bangladesh.",
  items: [
    {
      title: "Deep VAT specialisation",
      text: "We do one thing and do it completely — permanent VAT solutions for sustainable business, not general accounting.",
    },
    {
      title: "Within the law, always",
      text: "We never compromise with shortcuts or illegal practice. Every recommendation is backed by law and documentation.",
    },
    {
      title: "Sector-specific systems",
      text: "Cement, steel, leather, building materials, importers and trading each get rules matched to their real supply chain.",
    },
    {
      title: "Value-based partnership",
      text: "Our fees are tied to the value we create — savings, compliance and systems your team can own.",
    },
  ],
};

export const milestones = [
  {
    year: "2019 – 2020",
    title: "A transparent, skilled VAT practice",
    text: "Worked with Berger Paints Bangladesh — recognised by NBR as the No. 1 compliance company — demonstrating practical, transparent application of VAT law.",
  },
  {
    year: "2020 – 2021",
    title: "Policy advisory for Bashundhara Bitumen",
    text: "Appointed VAT Policy Advisor to the MD of Bashundhara Group. Saved BDT 78 crore in VAT from BPC through strategic planning and Mushak 4.3 filing.",
  },
  {
    year: "2021 – 2022",
    title: "Building structural VAT systems",
    text: "Designed and implemented the full VAT framework for Bashundhara Bitumen, trained internal manpower, and handed over a self-sufficient annual VAT report.",
  },
  {
    year: "2022 – 2023",
    title: "Resolving major disputes",
    text: "Reduced a BDT 10.34 crore VAT demand against Greenland Bangladesh Ltd. to BDT 94 lakh — saving the company over BDT 9.40 crore.",
  },
  {
    year: "2023 – 2024",
    title: "Exemptions & tribunal wins",
    text: "Secured a 15% VAT exemption on lift imports for BTI via SRO, and won BDT 1.94 crore in demand relief for Jamuna Spacetech JV at the VAT Appellate Tribunal.",
  },
  {
    year: "2024 – 2025",
    title: "Recovering rebates for Metro Cement",
    text: "Applied VAT law to protect an extra rebate against a 7.5% raw-material value increase, recovering BDT 3.53 crore through timely Mushak 4.3 submission.",
  },
];

export const testimonials = [
  {
    quote:
      "I have seen very few people in VAT and tax with such a vast network with regulators, deep knowledge of the law, and — more importantly — creative solutions that add tremendous value.",
    name: "Mr. Masud Khan, FCA, FCMA",
    role: "Chairman, Unilever Consumer Care Ltd.",
  },
  {
    quote:
      "He has a rare quality — finding alternatives at a dead end in the road to move out safely, with his passenger on board.",
    name: "Mr. Shahriar I. Halim, FCA",
    role: "CEO, Akij Business Consulting Ltd.",
  },
  {
    quote:
      "His deep understanding of the VAT framework helped us build a legally robust, cost-effective solution. He also trained our internal team — a mark of real professionalism and integrity.",
    name: "Abu Kamal Mohammod Pasha, FCA",
    role: "Executive Director, Building Technology & Ideas Ltd. (bti)",
  },
  {
    quote:
      "Mr. Alimuzzaman's support exceeded our expectations. We would gladly recommend him to any organisation seeking expert VAT consultancy in Bangladesh.",
    name: "Kazi Jamil Islam",
    role: "Managing Director, Express Leather Products Ltd.",
  },
];

export const clients = [
  "Berger Paints",
  "Bashundhara Group",
  "Unilever",
  "Akij",
  "HATIL",
  "Crown Cement",
  "Metro Cement",
  "BTI",
  "Greenland",
  "Jamuna Spacetech",
];

export const sectors = [
  "Cement",
  "Steel",
  "Leather",
  "Building materials",
  "Commercial import",
  "Trading",
  "FMCG",
  "Telecom",
];

export const consultant = {
  eyebrow: "Lead Consultant",
  name: "Md. Alimuzzaman",
  role: "Founder & CEO · Fiscal Strategist & Value Architect",
  bio: [
    "Md. Alimuzzaman is the Lead Consultant of TRC and a highly respected professional in Bangladesh's VAT and tax sector. With more than 28 years of diversified experience across leading industrial groups, he has spent the last six years as a dedicated VAT consultant guiding businesses on compliance, system development and sector-specific strategy.",
    "Before consultancy, he served at Bashundhara Cement (8 years) and Crown Cement Group (10 years as General Manager, VAT, Tax & Customs). He is known for professional integrity, logical solutions and deep practical knowledge — and for challenging the conventional cost of consultancy in the country.",
  ],
  credentials: [
    "Member, International VAT Association (IVA), Belgium",
    "Vendor-VAT Consultant, The World Bank Bangladesh",
    "Managing Partner, VATBONDHU News",
    "Published VAT guides & public-awareness programmes",
  ],
  linkedin: "https://www.linkedin.com/in/md-alimuzzaman-b075b238",
};

export const insights = {
  eyebrow: "Insights & media",
  title: "Making VAT understandable for everyone.",
  lead:
    "Through VATBONDHU News, seminars and training, TRC has built a community that understands VAT, acts responsibly and follows fair practice.",
  items: [
    {
      title: "Why sector-wise VAT is essential for Bangladesh",
      text: "Every industry has a unique supply chain. Sector-specific VAT matches compliance rules to real operations — expanding the tax base and closing loopholes.",
      tag: "Policy",
    },
    {
      title: "Monthly training for VAT officials",
      text: "TRC runs monthly online training helping company VAT officials sharpen skills, solve real problems and keep pace with modern rules.",
      tag: "Education",
    },
    {
      title: "VATBONDHU News & YouTube",
      text: "An online news platform and channel sharing reliable VAT information and economic news — plus seminars, webinars and awareness campaigns.",
      tag: "Media",
    },
  ],
  portal: {
    label: "Visit our news portal",
    href: "https://www.vatbondhu.com",
  },
};

export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build your VAT system the right way.",
  lead:
    "Tell us about your business and the VAT challenge you're facing. We'll respond with a clear, lawful path forward.",
};

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-alimuzzaman-b075b238" },
  { label: "VATBONDHU News", href: "https://www.vatbondhu.com" },
  { label: "YouTube", href: "https://www.youtube.com/vatbondhunews" },
  { label: "Facebook", href: "https://www.facebook.com/vatbondhunews" },
];

export const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About TRC", href: "/about" },
      { label: "Lead Consultant", href: "/about" },
      { label: "Track Record", href: "/results" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Audit & dispute defence", href: "/services" },
      { label: "Zero-VAT systems", href: "/services" },
      { label: "360° VAT infrastructure", href: "/services" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];
