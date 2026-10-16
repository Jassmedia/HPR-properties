/**
 * Central company details and feature switches.
 * Only details supplied in the HPR Properties content brief are used here.
 * Anything marked VERIFY must be confirmed by the company before launch.
 */

export const site = {
  name: 'HPR Properties',
  tagline: 'Your Trusted Real Estate Partner in Dubai',
  description:
    'HPR Properties is a Dubai real estate brokerage helping individuals, families and investors explore apartments, villas, off-plan developments and rental homes with clear information and personal guidance.',

  /** Shows the "draft preview" ribbon and placeholder notes. Set to false only when all content is verified. */
  isDraft: true,

  contact: {
    phoneDisplay: '+971 58 558 3567',
    phoneHref: 'tel:+971585583567',
    whatsappNumber: '971585583567',
    email: 'hyderabadproperty@gmail.com', // VERIFY spelling before launch
    office: {
      title: 'Corporate Office — Dubai',
      lines: ['19th Floor, Conrad Hotel, Office Tower', 'Sheikh Zayed Road, Dubai', 'United Arab Emirates'],
    }, // VERIFY exact address before launch
  },

  /** Official social profiles. Leave url empty until the company supplies the verified link — empty entries are not rendered. */
  socials: [
    { name: 'Instagram', icon: 'instagram', url: '' },
    { name: 'Facebook', icon: 'facebook', url: '' },
    { name: 'LinkedIn', icon: 'linkedin', url: '' },
    { name: 'YouTube', icon: 'youtube', url: '' },
    { name: 'TikTok', icon: 'tiktok', url: '' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/971585583567' },
  ],

  features: {
    /** Publish Airbnb / Holiday Homes only once the company confirms the service and applicable approvals. */
    holidayHomes: false,
    /** Publish Property Management only once confirmed. */
    propertyManagement: false,
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Who We Are', href: '/about#who-we-are' },
      { label: 'Mission & Vision', href: '/about#mission-vision' },
      { label: 'Our Values', href: '/about#values' },
      { label: 'Founder & Team', href: '/founder' },
    ],
  },
  {
    label: 'Properties',
    href: '/properties',
    children: [
      { label: 'Buy', href: '/properties?purpose=buy' },
      { label: 'Rent', href: '/properties?purpose=rent' },
      { label: 'Off-Plan', href: '/properties?purpose=off-plan' },
      { label: 'Featured Properties', href: '/properties?featured=1' },
      { label: 'List Your Property', href: '/contact?enquiry=sell' },
    ],
  },
  {
    label: 'Our Services',
    href: '/services',
    children: [
      { label: 'Buying Assistance', href: '/services#buying-assistance' },
      { label: 'Selling Assistance', href: '/services#selling-assistance' },
      { label: 'Rental Assistance', href: '/services#rental-assistance' },
      { label: 'Off-Plan Guidance', href: '/services#off-plan-guidance' },
      { label: 'Investment Consultation', href: '/services#investment-consultation' },
      { label: 'Property Listing Enquiries', href: '/services#property-listing-enquiries' },
    ],
  },
  ...(site.features.holidayHomes ? [{ label: 'Holiday Homes', href: '/holiday-homes' }] : []),
  { label: 'Invest in Dubai', href: '/invest-in-dubai' },
  { label: 'Areas', href: '/areas' },
  { label: 'Contact Us', href: '/contact' },
];

/** Unsplash placeholder photography (free licence). Replace with HPR's own listing photos when supplied. */
export function photo(id: string, width = 1200, height?: number) {
  const h = height ? `&h=${height}` : '';
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${h}&q=75`;
}

export function photoSrcset(id: string, widths: number[], ratio?: number) {
  return widths
    .map((w) => `${photo(id, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`)
    .join(', ');
}
