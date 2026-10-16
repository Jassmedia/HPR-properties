/** Homepage content — copy taken from the HPR Properties content brief. */

export const categories = [
  { label: 'Apartments', href: '/properties?type=Apartment', image: '1545324418-cc1a3fa10c00' },
  { label: 'Luxury Villas', href: '/properties?type=Villa', image: '1600596542815-ffad4c1539a9' },
  { label: 'Townhouses', href: '/properties?type=Townhouse', image: '1600047509807-ba8f99d2cdde' },
  { label: 'Penthouses', href: '/properties?type=Penthouse', image: '1600607687939-ce8a6c25118c' },
  { label: 'Off-Plan Projects', href: '/properties?purpose=off-plan', image: '1582407947304-fd86f028f716' },
  { label: 'Rental Properties', href: '/properties?purpose=rent', image: '1586023492125-27b2c045efd7' },
  { label: 'Investment Properties', href: '/invest-in-dubai', image: '1486406146926-c627a92ad1ab' },
];

export const whyChoose = [
  { icon: 'compass', title: 'Personal Guidance', text: 'Explore options based on your needs and budget.' },
  { icon: 'file', title: 'Clear Information', text: 'Property details, pricing, and next steps explained clearly.' },
  { icon: 'grid', title: 'Relevant Choices', text: 'Browse by area, property type, and budget.' },
  { icon: 'chat', title: 'Client-Focused Support', text: 'Contact our team to discuss a property or arrange a viewing.' },
];

export const services = [
  {
    id: 'buying-assistance',
    icon: 'key',
    title: 'Buying Assistance',
    text: 'Explore properties matching your preferred location, budget, property type, and lifestyle.',
    long: 'Explore properties matching your preferred location, budget, property type, and lifestyle. Our team can help coordinate enquiries and discuss next steps.',
    enquiry: 'buy',
  },
  {
    id: 'selling-assistance',
    icon: 'tag',
    title: 'Selling Assistance',
    text: 'Discuss listing your property, sharing details, and understanding the selling process.',
    long: 'Property owners can contact us to discuss listing their property, sharing details, and understanding the selling process.',
    enquiry: 'sell',
  },
  {
    id: 'rental-assistance',
    icon: 'home',
    title: 'Rental Assistance',
    text: 'Browse rental options and discuss requirements, viewings, and leasing information.',
    long: 'Browse available rental options and discuss requirements, viewing arrangements, and relevant leasing information.',
    enquiry: 'rent',
  },
  {
    id: 'off-plan-guidance',
    icon: 'crane',
    title: 'Off-Plan Guidance',
    text: 'Explore selected developments, developer details, stated payment plans, and timelines.',
    long: 'Explore selected developments, developer details, stated payment plans, timelines, and available project information. All project details should be verified before making a decision.',
    enquiry: 'off-plan',
  },
  {
    id: 'investment-consultation',
    icon: 'chart',
    title: 'Investment Consultation',
    text: 'Compare property types, locations, purchase costs, and available rental information.',
    long: 'Compare property types, locations, purchase costs, and available rental information. Returns are not guaranteed and depend on market conditions and costs.',
    enquiry: 'general',
  },
  {
    id: 'property-listing-enquiries',
    icon: 'clipboard',
    title: 'Property Listing Enquiries',
    text: 'Owners and authorised representatives can submit listing enquiries for review.',
    long: 'Owners and authorised representatives can submit listing enquiries. Authority, property details, and advertising requirements are verified before any listing is published.',
    enquiry: 'sell',
  },
];

/** Shown only when the matching feature switch in site.ts is enabled. */
export const optionalServices = {
  holidayHomes: {
    id: 'holiday-homes',
    icon: 'home',
    title: 'Airbnb & Holiday Homes',
    text: 'Support for owners with short-term rental enquiries and operations.',
    long: 'Support for owners with short-term rental enquiries, listing presentation, guest communication, check-in coordination, cleaning coordination, and operational support according to the actual service agreement.',
    enquiry: 'holiday-home',
  },
  propertyManagement: {
    id: 'property-management',
    icon: 'clipboard',
    title: 'Property Management',
    text: 'Management support for property owners.',
    long: '[Exact scope, fees, reporting, maintenance coordination, and responsibilities to be confirmed by HPR Properties.]',
    enquiry: 'general',
  },
};

export const enquiryTypes = [
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
  { value: 'sell', label: 'Sell / List a property' },
  { value: 'off-plan', label: 'Off-Plan' },
  { value: 'holiday-home', label: 'Holiday Home' },
  { value: 'general', label: 'General enquiry' },
];

/**
 * Areas suggested in the brief. Show only where HPR has relevant listings or verified information —
 * set `published: false` for any area the company does not confirm.
 */
export const areas = [
  {
    name: 'Dubai Marina', slug: 'dubai-marina', image: '1597659840241-37e2b9c2f55f', published: true,
    blurb: 'A waterfront community of high-rise residential towers set along a man-made marina.',
    types: ['Apartments', 'Penthouses'],
  },
  {
    name: 'Downtown Dubai', slug: 'downtown-dubai', image: '1580674684081-7617fbf3d745', published: true,
    blurb: 'The central district around Burj Khalifa and The Dubai Mall, with apartments and serviced residences.',
    types: ['Apartments', 'Penthouses'],
  },
  {
    name: 'Palm Jumeirah', slug: 'palm-jumeirah', image: '1489516408517-0c0a15662682', published: true,
    blurb: 'The palm-shaped island known for beachfront villas, apartments and hotel residences.',
    types: ['Villas', 'Apartments', 'Penthouses'],
  },
  {
    name: 'Business Bay', slug: 'business-bay', image: '1526495124232-a04e1849168c', published: true,
    blurb: 'A mixed-use district along Dubai Water Canal, next to Downtown Dubai.',
    types: ['Apartments', 'Off-Plan'],
  },
  {
    name: 'Jumeirah Village Circle', slug: 'jumeirah-village-circle', image: '1574362848149-11496d93a7c7', published: true,
    blurb: 'A residential community with a mix of apartments, townhouses and villas.',
    types: ['Apartments', 'Townhouses', 'Villas'],
  },
];

export const steps = [
  { title: 'Tell us what you need', text: 'Share your preferred area, property type, budget, and timeline.' },
  { title: 'Explore matching properties', text: 'Review relevant options with clear details and pricing.' },
  { title: 'Arrange a viewing or consultation', text: 'Request a time that suits you — our team will confirm it.' },
  { title: 'Discuss next steps', text: 'Talk through the details before making a decision.' },
];

export const faqs = [
  {
    q: 'How can I enquire about a property?',
    a: 'Open the listing and use the enquiry form, the call button, or the WhatsApp button.',
  },
  {
    q: 'Can I search by location and budget?',
    a: 'Yes. Use the search filters for location, property type, price and bedrooms where those listing details are available.',
  },
  {
    q: 'Can I arrange a viewing?',
    a: 'Send an enquiry with the property reference and your preferred time. A viewing is confirmed once our team confirms it with you.',
  },
  {
    q: 'Do you have off-plan properties?',
    a: 'Current off-plan listings appear under Properties → Off-Plan. Contact our team for the latest project and payment-plan information.',
  },
  {
    q: 'Are prices and availability final?',
    a: 'Prices and availability can change. Please reconfirm them with the HPR Properties team before making a decision.',
  },
];

/** Publish only genuine client reviews given with permission. Section is hidden while this is empty. */
export const testimonials: { quote: string; name: string; context?: string }[] = [];

export const founder = {
  /** true while any founder detail is still a placeholder. Never publish placeholders live. */
  placeholder: false,
  name: 'Rishi Keshava',
  role: 'Founder, HPR Properties',
  photo: '/images/founder.webp' as string | null,
  message:
    'At HPR Properties, our goal is to make the property journey clearer and more personal for every client. We believe in listening carefully, sharing accurate information, and helping clients explore options that suit their needs.',
};
