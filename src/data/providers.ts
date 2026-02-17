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
  }
];
