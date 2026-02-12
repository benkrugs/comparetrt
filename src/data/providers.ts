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
  membershipFee: string;
  labWork: string;
  
  // Medications
  medications: string[];
  brandName: boolean;
  compounded: boolean;
  
  // Features
  insurance: boolean;
  insuranceConcierge: boolean;
  telehealth: boolean;
  coaching: boolean;
  support247: boolean;
  moneyBackGuarantee: boolean;
  
  // Score (0-100)
  totalScore: number;
  scoreBreakdown: {
    pricing: number; // 0-25
    medication: number; // 0-25
    doctorCare: number; // 0-15
    support: number; // 0-15
    delivery: number; // 0-10
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
    id: 'medvi',
    name: 'MEDVi',
    slug: 'medvi',
    tagline: 'Best Overall for Compounded GLP-1s',
    website: 'https://medvi.org',
    affiliateLink: 'https://medvi.org/?page=multi&uid=5&oid=2&affid=2&pol=5&sub1=1350&sub1=1350&oid2=4412&affid2=1350',
    
    monthlyPrice: '$179–$369',
    consultationFee: 'Included',
    membershipFee: 'None',
    labWork: 'Included if needed',
    
    medications: [
      'Compounded semaglutide (injectable)',
      'Compounded tirzepatide (injectable)',
      'Oral compounded semaglutide',
      'Oral compounded tirzepatide',
      'Ozempic (starts at $1,999)'
    ],
    brandName: true,
    compounded: true,
    
    insurance: false,
    insuranceConcierge: false,
    telehealth: true,
    coaching: false,
    support247: true,
    moneyBackGuarantee: true,
    
    totalScore: 92,
    scoreBreakdown: {
      pricing: 24, // $179 first month is excellent
      medication: 22, // Compounded focus, limited brand names
      doctorCare: 14, // Licensed providers, 24/7 messaging
      support: 15, // 24/7 unlimited messaging
      delivery: 9, // Fast shipping (8-9 days)
      transparency: 8 // Clear pricing, but refund policy has conditions
    },
    
    description: 'MEDVi stands out as a top choice for compounded GLP-1 medications, starting at just $179 for the first month with no contracts or hidden membership fees. Everything is included: physician review, unlimited messaging with the care team, and 24/7 support. For a budget-friendly program, it feels surprisingly personal and straightforward.',
    
    pros: [
      'All-inclusive pricing with no hidden fees',
      'Month-to-month flexibility; no long-term contracts',
      '24/7 unlimited messaging with licensed providers',
      'Money-back guarantee if no weight loss after 5 months',
      'Fast approval and medication delivery (8-9 days)',
      'Both injectable and oral options available'
    ],
    
    cons: [
      'Primarily compounded medications (Ozempic available but at $1,999/month)',
      'No lifestyle coaching, metabolic tracking, or personalized weight loss support beyond basic telehealth consultations',
      'Inconsistent customer service based on reviews',
      'Price increases after first month ($179 → $299 for semaglutide)'
    ],
    
    bestFor: 'Budget-conscious patients who want affordable access to compounded GLP-1s without long-term commitments or lifestyle coaching',
    
    bottomLine: 'If you are looking for a budget-friendly, no-insurance-needed GLP-1 program, MEDVi is worth considering. With both oral and injectable options, low monthly costs, and month-to-month flexibility, it is an accessible entry point for GLP-1 therapy. The trade-off? Affordability over extras.',
    
    trustpilotRating: 4.7,
    trustpilotReviews: 10000
  },
  
  {
    id: 'ro',
    name: 'Ro Body Program',
    slug: 'ro',
    tagline: 'Best for Brand-Name Medications',
    website: 'https://ro.co',
    affiliateLink: 'https://track.revoffers.com/aff_c?offer_id=959&aff_id=9953&url_id=11818',
    
    monthlyPrice: '$349–$499',
    consultationFee: '$45',
    membershipFee: '$145/month',
    labWork: 'Included',
    
    medications: [
      'Wegovy',
      'Zepbound',
      'Ozempic',
      'Saxenda',
      'Compounded options (if brand denied)'
    ],
    brandName: true,
    compounded: false,
    
    insurance: true,
    insuranceConcierge: true,
    telehealth: true,
    coaching: true,
    support247: false,
    moneyBackGuarantee: false,
    
    totalScore: 88,
    scoreBreakdown: {
      pricing: 18, // $145/mo membership + meds is pricey
      medication: 25, // Full brand-name options, insurance support
      doctorCare: 14, // Licensed providers, labs included
      support: 12, // Support via app messaging, not 24/7
      delivery: 9, // Reliable delivery, some refill delays reported
      transparency: 10 // Clear pricing, structured program
    },
    
    description: 'Ro Body offers a fully integrated telehealth experience for GLP-1 weight-loss treatment, blending medical care, insurance navigation, and lifestyle support. It is a strong choice if you want access to Zepbound and personalized coaching all through one platform.',
    
    pros: [
      'All-inclusive pricing with membership fee',
      'Insurance-friendly with live eligibility checks',
      'Low-price Zepbound ($349–$499)',
      'Includes labs, physician oversight, and nurse coaching',
      'Insurance concierge helps navigate coverage',
      'Comprehensive behavior and nutrition tracking tools'
    ],
    
    cons: [
      'Monthly membership required ($145/month)',
      '$145/month membership fee adds to total cost',
      'Labs required before starting treatment',
      'Some users report delays with refills and support response times'
    ],
    
    bestFor: 'Patients who want brand-name medications with insurance support and comprehensive lifestyle coaching',
    
    bottomLine: 'Ro stands out for its insurance navigation tools, telehealth access, and a care model that includes physician oversight, dose titration, and habit-tracking tools. While Ro provides a comprehensive, sustainable approach, it is not the cheapest option.',
    
    trustpilotRating: 4.4,
    trustpilotReviews: 8500
  },
  
  {
    id: 'skinnyrx',
    name: 'SkinnyRX',
    slug: 'skinnyrx',
    tagline: 'Fast Shipping with Aggressive Discounts',
    website: 'https://skinnyrx.com',
    affiliateLink: 'https://track.revoffers.com/aff_c?offer_id=1464&aff_id=9953',
    
    monthlyPrice: '$249–$299',
    consultationFee: 'Included',
    membershipFee: 'None',
    labWork: 'Not included',
    
    medications: [
      'Compounded semaglutide (injectable)',
      'Compounded tirzepatide (injectable)',
      'Compounded semaglutide (tablets)',
      'Compounded tirzepatide (tablets)'
    ],
    brandName: false,
    compounded: true,
    
    insurance: false,
    insuranceConcierge: false,
    telehealth: true,
    coaching: false,
    support247: false,
    moneyBackGuarantee: false,
    
    totalScore: 85,
    scoreBreakdown: {
      pricing: 22, // Competitive pricing, aggressive intro discounts
      medication: 20, // Compounded only, both injectable and oral
      doctorCare: 13, // Licensed oversight, limited follow-up
      support: 11, // Email support, some complaints about responsiveness
      delivery: 10, // Free overnight shipping (major plus)
      transparency: 9 // Clear pricing, but cancellation issues reported
    },
    
    description: 'SkinnyRx is a weight management program that combines personalized consultations and medical-grade treatments. It aims to deliver results in a safe and sustainable way with fast shipping and aggressive introductory discounts.',
    
    pros: [
      'Fast shipping with free overnight delivery',
      'Aggressive introductory discounts',
      'Medical oversight from licensed providers',
      'Both injectable and oral options available',
      'Good customer feedback on medication effectiveness',
      'Simple online process'
    ],
    
    cons: [
      'Some users have complained about billing or delivery issues',
      'Difficulty canceling auto-shipments',
      'Limited lifestyle change guidelines',
      'No structured coaching or support program',
      'Support primarily email-based'
    ],
    
    bestFor: 'Patients who prioritize fast delivery and are comfortable with auto-shipments',
    
    bottomLine: 'SkinnyRx offers a convenient way to access weight loss medications quickly, but customers might need to be cautious about their cancellation policies. While some customer feedback is positive, praising their fast service, others get frustrated by their auto shipments and the difficulty of canceling.',
    
    trustpilotRating: 4.2,
    trustpilotReviews: 3200
  },
  
  {
    id: 'shed',
    name: 'Shed',
    slug: 'shed',
    tagline: 'Quick Approval with 10% Weight Loss Guarantee',
    website: 'https://shed.com',
    affiliateLink: '', // User does not have this yet
    
    monthlyPrice: '$199–$499',
    consultationFee: 'Included',
    membershipFee: '$99/mo for brand-name (included for compounded)',
    labWork: 'Not included',
    
    medications: [
      'Wegovy',
      'Zepbound',
      'Compounded semaglutide (lozenges)',
      'Compounded semaglutide (liquid drops)',
      'Compounded tirzepatide (liquid drops)'
    ],
    brandName: true,
    compounded: true,
    
    insurance: false,
    insuranceConcierge: false,
    telehealth: true,
    coaching: true,
    support247: false,
    moneyBackGuarantee: true,
    
    totalScore: 90,
    scoreBreakdown: {
      pricing: 21, // Competitive, but costs climb with higher doses
      medication: 24, // Both brand and compounded, multiple formats
      doctorCare: 13, // Licensed providers, limited real-time support
      support: 12, // Text/email support, slow response times reported
      delivery: 10, // Fast delivery, prepayment required
      transparency: 10 // Clear pricing, 10% weight loss guarantee
    },
    
    description: 'Shed offers low-cost GLP-1s in injectable and lozenge forms, including Wegovy and Zepbound, along with optional coaching and a 10% weight-loss guarantee. Fast sign-up process with both brand-name and compounded options.',
    
    pros: [
      'Fast and easy sign-up process (less than 10 minutes)',
      'Offers lozenges, drops, and injectables',
      '10% weight-loss guarantee',
      '$100 discount with affiliate link',
      'Both brand-name and compounded options',
      'Optional premium coaching ($49.99/month)'
    ],
    
    cons: [
      'Support is text-based and can be slow',
      'No insurance accepted',
      'Prepayment and two-month commitment',
      'Pricing increases with higher doses',
      'Some users report delays in support and confusion around billing'
    ],
    
    bestFor: 'Patients who want flexibility in medication format (lozenges, drops, injections) with a weight loss guarantee',
    
    bottomLine: 'Shed offers one of the easiest and most flexible ways to start GLP-1 treatment online, with fast access, multiple formats, and fair pricing at lower doses. Support is limited and costs increase with stronger prescriptions, but it remains a solid pick for price-conscious beginners.',
    
    trustpilotRating: 4.7,
    trustpilotReviews: 6800
  },
  
  {
    id: 'hims',
    name: 'Hims & Hers',
    slug: 'hims',
    tagline: 'Best for Wegovy at $599',
    website: 'https://hims.com',
    affiliateLink: '', // User does not have this yet
    
    monthlyPrice: '$199–$599',
    consultationFee: 'Included',
    membershipFee: 'None',
    labWork: 'Not included',
    
    medications: [
      'Wegovy ($599 for 6-month plan)',
      'Ozempic ($1,799)',
      'Mounjaro ($1,899)',
      'Zepbound ($1,899)',
      'Compounded semaglutide ($199 for 12-month plan)',
      'Generic liraglutide ($299 for 12-month plan)',
      'Oral compounded kits ($69 for 10-month plan)'
    ],
    brandName: true,
    compounded: true,
    
    insurance: false,
    insuranceConcierge: false,
    telehealth: true,
    coaching: false,
    support247: false,
    moneyBackGuarantee: false,
    
    totalScore: 87,
    scoreBreakdown: {
      pricing: 20, // Lowest Wegovy price, but 6-month prepay
      medication: 24, // Full brand and compounded options
      doctorCare: 13, // Licensed clinicians, limited real-time support
      support: 12, // App-based messaging, slower response on refills
      delivery: 9, // Monthly shipments, some delays reported
      transparency: 9 // Clear pricing, prepayment limitations
    },
    
    description: 'Hims & Hers is a national telehealth provider now offering Wegovy through a direct partnership with Novo Nordisk, giving patients easier access to FDA-approved GLP-1 treatment without insurance. With flexible online care and brand-name medications, it is a strong option for those seeking reliable weight-loss support.',
    
    pros: [
      'All-inclusive pricing',
      'Comprehensive gender-based wellness in addition to GLP-1',
      'Lowest Wegovy price ($599 vs. $1,349 retail)',
      'Licensed clinician oversight',
      'Access to lifestyle content and meal plans',
      'Multiple medication options'
    ],
    
    cons: [
      '6-month Wegovy plan must be prepaid ($3,594)',
      'Insurance not accepted',
      'Labs and video consults may cost extra',
      'All plans are prepaid and nonrefundable after purchase'
    ],
    
    bestFor: 'Patients who want brand-name Wegovy at the lowest price and can prepay for 6 months',
    
    bottomLine: 'Hims and Hers both offer convenient access to brand-name and compounded GLP-1 medications without requiring insurance. With transparent pricing and flexible subscriptions, they are designed to fit a range of budgets.',
    
    trustpilotRating: 4.5,
    trustpilotReviews: 15000
  }
];
