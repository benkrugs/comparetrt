export interface Provider {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  website: string;
  affiliateLink: string;
  logo?: string;
  
  // Pricing
  monthlyPrice: string;
  consultationFee: string;
  labTestingFee: string;
  
  // Treatment Types
  treatmentTypes: string[];
  injectionsAvailable: boolean;
  oralAvailable: boolean;
  enclomipheneAvailable: boolean;
  
  // Features
  fertilityFriendly: boolean;
  hcgAvailable: boolean;
  aiAvailable: boolean; // Aromatase inhibitor
  telehealth: boolean;
  homeLabTesting: boolean;
  unlimitedConsults: boolean;
  moneyBackGuarantee: boolean;
  
  // Score (0-100)
  totalScore: number;
  scoreBreakdown: {
    pricing: number; // 0-25
    treatment: number; // 0-25
    doctorCare: number; // 0-15
    support: number; // 0-15
    convenience: number; // 0-10
    transparency: number; // 0-10
  };
  
  // Content
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  bottomLine: string;
  
  // Reviews
  trustpilotRating?: number;
  trustpilotReviews?: number;
}

export const providers: Provider[] = [
  {
    id: 'maximus',
    name: 'Maximus Tribe',
    slug: 'maximus',
    tagline: 'Fertility-Focused TRT with Enclomiphene',
    website: 'https://www.maximustribe.com',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$100–$300',
    consultationFee: 'Included',
    labTestingFee: '$99 (at-home kit)',
    
    treatmentTypes: [
      'Enclomiphene (oral)',
      'Testosterone injections',
      'Testosterone gel',
      'Pregnenolone',
      'HCG'
    ],
    injectionsAvailable: true,
    oralAvailable: true,
    enclomipheneAvailable: true,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: true,
    moneyBackGuarantee: true,
    
    totalScore: 92,
    scoreBreakdown: {
      pricing: 20,
      treatment: 24,
      doctorCare: 14,
      support: 15,
      convenience: 10,
      transparency: 9
    },
    
    description: 'Maximus Tribe specializes in fertility-preserving testosterone optimization, offering both traditional TRT and innovative enclomiphene protocols. Their patent-pending approach combines testosterone therapy with HCG to maintain natural production and fertility. Starting at $100/month for enclomiphene or $200/month for full TRT with HCG, Maximus provides at-home lab testing, unlimited doctor consultations, and a 90-day money-back guarantee.',
    
    pros: [
      'Fertility-friendly protocols with HCG included',
      'Enclomiphene option (stimulates natural production)',
      'At-home lab testing kit',
      'Unlimited doctor consultations',
      '90-day money-back guarantee',
      'Pregnenolone and AI options available',
      'Published clinical studies backing protocols'
    ],
    
    cons: [
      'Higher cost than basic TRT clinics',
      'Enclomiphene may not work for everyone',
      'No physical clinic locations',
      'Newer company (less track record)'
    ],
    
    bestFor: 'Men under 40 who want to optimize testosterone while preserving fertility and natural production.',
    
    bottomLine: 'Maximus Tribe offers the most comprehensive fertility-friendly TRT protocols available online. While more expensive than basic testosterone replacement, the inclusion of HCG, enclomiphene options, and unlimited consultations make it the top choice for younger men who want peak performance without sacrificing fertility.',
    
    trustpilotRating: 4.8,
    trustpilotReviews: 850
  },
  
  {
    id: 'hims',
    name: 'Hims',
    slug: 'hims',
    tagline: 'All-in-One Men\'s Health Platform',
    website: 'https://www.hims.com/testosterone',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$99–$199',
    consultationFee: 'Included',
    labTestingFee: '$48 (Quest Diagnostics)',
    
    treatmentTypes: [
      'Enclomiphene (oral)',
      'Oral testosterone (Kyzatrex)',
      'Testosterone gel (coming 2026)',
      'Tadalafil combo available'
    ],
    injectionsAvailable: false,
    oralAvailable: true,
    enclomipheneAvailable: true,
    
    fertilityFriendly: true,
    hcgAvailable: false,
    aiAvailable: false,
    telehealth: true,
    homeLabTesting: false,
    unlimitedConsults: false,
    moneyBackGuarantee: false,
    
    totalScore: 88,
    scoreBreakdown: {
      pricing: 22,
      treatment: 20,
      doctorCare: 13,
      support: 14,
      convenience: 10,
      transparency: 9
    },
    
    description: 'Hims recently launched TRT services in late 2025, bringing their user-friendly platform to testosterone optimization. Currently offering compounded enclomiphene and an exclusive partnership with Marius Pharmaceuticals for branded oral testosterone (Kyzatrex). Injectable testosterone coming in 2026. Starting at $99/month with included doctor consultations and discreet home delivery.',
    
    pros: [
      'Affordable pricing starting at $99/month',
      'No-needle options (oral testosterone)',
      'Established brand with proven platform',
      'Can combine with ED, hair loss, and other treatments',
      'Nationwide Quest Diagnostics lab network',
      'Fast approval and shipping',
      '24/7 customer support'
    ],
    
    cons: [
      'No injections available yet (coming 2026)',
      'Limited treatment options compared to specialists',
      'No HCG or AI options',
      'Newer to TRT space (launched Sept 2025)',
      'No money-back guarantee'
    ],
    
    bestFor: 'Men who want an affordable, needle-free testosterone option from an established telehealth brand.',
    
    bottomLine: 'Hims brings simplicity and affordability to TRT with their oral testosterone and enclomiphene options. While they lack the depth of specialist clinics, their platform is perfect for men seeking a straightforward, no-needle approach at competitive prices.',
    
    trustpilotRating: 4.3,
    trustpilotReviews: 12500
  },
  
  {
    id: 'petermd',
    name: 'PeterMD',
    slug: 'petermd',
    tagline: 'Lowest Cost TRT with Price Match Guarantee',
    website: 'https://getpetermd.com',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$99–$139',
    consultationFee: 'Included',
    labTestingFee: '$75 (at-home or Quest)',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Testosterone enanthate (injection)',
      'HCG',
      'Anastrozole (AI)'
    ],
    injectionsAvailable: true,
    oralAvailable: false,
    enclomipheneAvailable: false,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: false,
    moneyBackGuarantee: false,
    
    totalScore: 85,
    scoreBreakdown: {
      pricing: 25,
      treatment: 22,
      doctorCare: 12,
      support: 12,
      convenience: 9,
      transparency: 5
    },
    
    description: 'PeterMD positions itself as North America\'s largest online TRT clinic with the lowest prices guaranteed. Month-to-month injectable testosterone starts at just $139/month with no annual commitment required. Price match guarantee promises to beat any equivalent offer by 20%. Lab testing, doctor consultations, and free shipping all included.',
    
    pros: [
      'Lowest prices available ($99-139/month)',
      'Price match guarantee (beat competitors by 20%)',
      'No annual commitment required',
      'HCG available for fertility',
      'At-home or Quest lab testing',
      'Free shipping',
      'Fast approval process'
    ],
    
    cons: [
      'Limited treatment customization',
      'Basic support (no unlimited consults)',
      'Less comprehensive testing than premium clinics',
      'No oral testosterone options',
      'Limited educational resources'
    ],
    
    bestFor: 'Budget-conscious men who want traditional injectable TRT at the lowest possible cost.',
    
    bottomLine: 'PeterMD wins on price, making injectable TRT accessible at $99-139/month with no tricks or hidden fees. While support and customization are more basic than premium competitors, the price match guarantee and month-to-month flexibility make it the best value for straightforward testosterone replacement.',
    
    trustpilotRating: 4.6,
    trustpilotReviews: 340
  },
  
  {
    id: 'titan',
    name: 'Titan',
    slug: 'titan',
    tagline: 'Complete TRT Bundle with Expert Clinician Care',
    website: 'https://jointitan.com',
    affiliateLink: 'https://jointitan.com/?toclid=TO-2RbC8WhCGKBLFQ2J90aUB9&utm_source=theoffer&utm_campaign=94',
    
    monthlyPrice: '$159',
    consultationFee: 'Included',
    labTestingFee: 'Included',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Testosterone enanthate (injection)',
      'Comprehensive blood testing',
      'T-test analysis & results review',
      'Ongoing clinician care'
    ],
    injectionsAvailable: true,
    oralAvailable: false,
    enclomipheneAvailable: false,
    
    fertilityFriendly: false,
    hcgAvailable: false,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: true,
    moneyBackGuarantee: false,
    
    totalScore: 94,
    scoreBreakdown: {
      pricing: 25,
      treatment: 23,
      doctorCare: 15,
      support: 15,
      convenience: 10,
      transparency: 6
    },
    
    description: 'Titan offers the best value in TRT with their all-inclusive $159/month bundle. Unlike competitors who charge separately for medication, labs, and consultations, Titan includes everything: TRT meds, comprehensive blood testing, expert T-test analysis, and ongoing clinician care. No hidden fees, no surprises—just complete testosterone optimization at a transparent price.',
    
    pros: [
      'Best value: all-inclusive $159/month',
      'Comprehensive blood testing included',
      'Expert T-test analysis & results review',
      'Unlimited clinician consultations',
      'Transparent pricing (no hidden fees)',
      'Fast approval and shipping',
      'AI available if needed'
    ],
    
    cons: [
      'Injections only (no oral options)',
      'No HCG for fertility preservation',
      'No enclomiphene available',
      'Newer brand (less established)'
    ],
    
    bestFor: 'Men who want comprehensive TRT with labs and clinician care at the best all-in price.',
    
    bottomLine: 'Titan delivers unbeatable value at $159/month all-inclusive. When competitors charge $200-400+ for medication, labs, and consultations separately, Titan bundles everything into one transparent price. The best choice for men who want quality TRT without price games.',
    
    trustpilotRating: 4.7,
    trustpilotReviews: 280
  },
  
  {
    id: 'fridays',
    name: 'Fridays',
    slug: 'fridays',
    tagline: 'Personalized TRT Protocols & Fast Turnaround',
    website: 'https://www.joinFridays.com',
    affiliateLink: 'https://track.revoffers.com/aff_c?offer_id=1284&aff_id=9953&url_id=11752',
    
    monthlyPrice: '$149–$249',
    consultationFee: 'Included',
    labTestingFee: '$99 (at-home kit)',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Enclomiphene (oral)',
      'HCG',
      'Anastrozole (AI)',
      'Gonadorelin'
    ],
    injectionsAvailable: true,
    oralAvailable: true,
    enclomipheneAvailable: true,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: true,
    moneyBackGuarantee: false,
    
    totalScore: 90,
    scoreBreakdown: {
      pricing: 21,
      treatment: 24,
      doctorCare: 14,
      support: 15,
      convenience: 10,
      transparency: 6
    },
    
    description: 'Fridays specializes in personalized TRT protocols with fast turnaround times. Their platform offers both traditional injections and fertility-preserving options like enclomiphene, HCG, and gonadorelin. Monthly doctor check-ins ensure your protocol stays optimized. Starting at $149/month for enclomiphene or $249/month for comprehensive TRT with HCG.',
    
    pros: [
      'Personalized protocols (not one-size-fits-all)',
      'Fast approval and shipping',
      'Enclomiphene and HCG options',
      'Monthly doctor check-ins included',
      'At-home lab testing',
      'Flexible dosing adjustments',
      'Gonadorelin available'
    ],
    
    cons: [
      'Higher cost than basic clinics',
      'Limited brand recognition',
      'No money-back guarantee',
      'Smaller clinic (less track record)'
    ],
    
    bestFor: 'Men who want personalized TRT protocols with fertility preservation options and attentive doctor support.',
    
    bottomLine: 'Fridays delivers personalized TRT with fertility-friendly options at mid-range pricing. While more expensive than budget clinics, the monthly doctor check-ins and protocol customization justify the cost for men who want more than cookie-cutter testosterone replacement.',
    
    trustpilotRating: 4.5,
    trustpilotReviews: 190
  },
  
  {
    id: 'henry-meds',
    name: 'Henry Meds',
    slug: 'henry-meds',
    tagline: 'Affordable TRT with No Subscription Required',
    website: 'https://www.henrymeds.com',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$79–$129',
    consultationFee: 'Included',
    labTestingFee: '$75 (Quest)',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Testosterone gel',
      'HCG available'
    ],
    injectionsAvailable: true,
    oralAvailable: false,
    enclomipheneAvailable: false,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: false,
    telehealth: true,
    homeLabTesting: false,
    unlimitedConsults: false,
    moneyBackGuarantee: false,
    
    totalScore: 84,
    scoreBreakdown: {
      pricing: 24,
      treatment: 21,
      doctorCare: 12,
      support: 12,
      convenience: 9,
      transparency: 6
    },
    
    description: 'Henry Meds offers straightforward, affordable TRT starting at $79/month with no subscription lock-in. Their pay-as-you-go model means you can pause or cancel anytime without penalty. Injectable testosterone and gel options available, with HCG add-on for fertility preservation. Quest Diagnostics labs make testing convenient nationwide.',
    
    pros: [
      'Very affordable ($79-129/month)',
      'No subscription required (pay-as-you-go)',
      'HCG available for fertility',
      'Quest Diagnostics lab network',
      'Cancel anytime without penalty',
      'Fast shipping',
      'Gel option available'
    ],
    
    cons: [
      'Basic support (no unlimited consults)',
      'No AI available',
      'No oral testosterone',
      'Limited customization',
      'Less comprehensive than premium clinics'
    ],
    
    bestFor: 'Budget-conscious men who want flexible, no-commitment TRT at low prices.',
    
    bottomLine: 'Henry Meds wins on flexibility with their pay-as-you-go model and competitive $79-129/month pricing. While support is more basic than premium competitors, the ability to cancel anytime makes it ideal for men testing TRT or those on tight budgets.',
    
    trustpilotRating: 4.4,
    trustpilotReviews: 310
  },
  
  {
    id: 'hone',
    name: 'Hone Health',
    slug: 'hone',
    tagline: 'Premium TRT with Advanced Testing & Optimization',
    website: 'https://www.honehealth.com',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$298–$448',
    consultationFee: '$149 (one-time membership)',
    labTestingFee: 'Included',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Enclomiphene (oral)',
      'HCG',
      'Anastrozole (AI)',
      'DHEA',
      'Pregnenolone'
    ],
    injectionsAvailable: true,
    oralAvailable: true,
    enclomipheneAvailable: true,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: true,
    moneyBackGuarantee: false,
    
    totalScore: 89,
    scoreBreakdown: {
      pricing: 15,
      treatment: 25,
      doctorCare: 15,
      support: 15,
      convenience: 10,
      transparency: 9
    },
    
    description: 'Hone Health delivers premium testosterone optimization with comprehensive at-home testing (10+ biomarkers), board-certified physician care, and advanced protocols. Their $149 membership includes unlimited consultations and quarterly labs. Monthly medication costs $149-299 depending on protocol. Ideal for men who want more than basic TRT—DHEA, pregnenolone, and full hormone optimization available.',
    
    pros: [
      'Comprehensive 10+ biomarker testing',
      'Board-certified physicians',
      'Unlimited consultations included',
      'Quarterly labs included in membership',
      'Enclomiphene and HCG options',
      'Advanced supplements (DHEA, pregnenolone)',
      'Excellent educational resources'
    ],
    
    cons: [
      'Expensive ($298-448/month total)',
      '$149 membership fee required',
      'Overkill for men who just need basic TRT',
      'Higher barrier to entry'
    ],
    
    bestFor: 'Men who want premium, comprehensive hormone optimization with advanced testing and expert physician care.',
    
    bottomLine: 'Hone Health is the premium choice for men who want more than testosterone replacement—full hormone optimization, comprehensive testing, and board-certified physician care. While expensive at $298-448/month total, you get what you pay for: the most thorough TRT experience available online.',
    
    trustpilotRating: 4.6,
    trustpilotReviews: 420
  },
  
  {
    id: 'taurus',
    name: 'Taurus',
    slug: 'taurus',
    tagline: 'Fast TRT Approval & Competitive Pricing',
    website: 'https://www.taurushealth.com',
    affiliateLink: '', // User will provide
    
    monthlyPrice: '$99–$199',
    consultationFee: 'Included',
    labTestingFee: '$95 (Quest)',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'Testosterone enanthate (injection)',
      'HCG'
    ],
    injectionsAvailable: true,
    oralAvailable: false,
    enclomipheneAvailable: false,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: false,
    telehealth: true,
    homeLabTesting: false,
    unlimitedConsults: false,
    moneyBackGuarantee: false,
    
    totalScore: 83,
    scoreBreakdown: {
      pricing: 22,
      treatment: 21,
      doctorCare: 12,
      support: 13,
      convenience: 9,
      transparency: 6
    },
    
    description: 'Taurus delivers fast TRT approval (often same-day) with competitive pricing starting at $99/month. Their streamlined platform makes getting started simple: complete an online assessment, get approved by a physician, and receive your first shipment within days. Injectable testosterone with optional HCG for fertility preservation.',
    
    pros: [
      'Fast approval (often same-day)',
      'Competitive pricing ($99-199/month)',
      'Simple onboarding process',
      'HCG available',
      'Quest Diagnostics labs',
      'Quick shipping',
      'Responsive support team'
    ],
    
    cons: [
      'No oral testosterone options',
      'No AI available',
      'Basic support (not unlimited)',
      'Limited treatment customization',
      'Newer brand (less established)'
    ],
    
    bestFor: 'Men who want fast TRT approval and straightforward treatment at competitive prices.',
    
    bottomLine: 'Taurus excels at speed and simplicity. If you want to get started on TRT quickly without complex protocols or premium pricing, Taurus delivers same-day approval and competitive $99-199/month costs. A solid choice for straightforward testosterone replacement.',
    
    trustpilotRating: 4.3,
    trustpilotReviews: 180
  },
  
  {
    id: 'male-excel',
    name: 'Male Excel',
    slug: 'male-excel',
    tagline: 'Comprehensive Men\'s Health & TRT Optimization',
    website: 'https://www.maleexcel.com',
    affiliateLink: 'https://www.trt3q6ct.com/3QJ6DW/7XDN2/',
    
    monthlyPrice: '$159–$299',
    consultationFee: 'Included',
    labTestingFee: '$125 (comprehensive panel)',
    
    treatmentTypes: [
      'Testosterone cypionate (injection)',
      'HCG',
      'Anastrozole (AI)',
      'Clomiphene',
      'Tadalafil',
      'Vitamin D optimization'
    ],
    injectionsAvailable: true,
    oralAvailable: false,
    enclomipheneAvailable: false,
    
    fertilityFriendly: true,
    hcgAvailable: true,
    aiAvailable: true,
    telehealth: true,
    homeLabTesting: true,
    unlimitedConsults: true,
    moneyBackGuarantee: false,
    
    totalScore: 86,
    scoreBreakdown: {
      pricing: 19,
      treatment: 23,
      doctorCare: 14,
      support: 14,
      convenience: 10,
      transparency: 6
    },
    
    description: 'Male Excel takes a holistic approach to men\'s health, optimizing testosterone alongside ED treatment, vitamin deficiencies, and overall wellness. Their comprehensive lab panels check 20+ biomarkers to identify issues beyond just low testosterone. Starting at $159/month for TRT, with optional add-ons for HCG, tadalafil, and more.',
    
    pros: [
      'Comprehensive 20+ biomarker testing',
      'Holistic men\'s health optimization',
      'HCG and clomiphene available',
      'Tadalafil can be added (ED treatment)',
      'Unlimited consultations',
      'At-home lab testing',
      'Experienced physicians'
    ],
    
    cons: [
      'Higher cost than basic clinics',
      'No enclomiphene (only clomiphene)',
      'More complex onboarding',
      'Can feel overwhelming for simple TRT needs'
    ],
    
    bestFor: 'Men who want comprehensive health optimization beyond just testosterone replacement.',
    
    bottomLine: 'Male Excel delivers comprehensive men\'s health optimization with TRT as the cornerstone. While more expensive and complex than basic testosterone clinics, their holistic approach catches issues other providers miss. Ideal for men who want total health optimization, not just TRT.',
    
    trustpilotRating: 4.5,
    trustpilotReviews: 240
  }
];
