/**
 * SAMPLE LISTINGS — for layout review only.
 * Every entry is flagged `sample: true` and displays a "Sample listing" label.
 * Replace with verified HPR listings (photos, prices, availability, permissions) before launch.
 */

export type Purpose = 'buy' | 'rent' | 'off-plan';
export type PropertyType = 'Apartment' | 'Villa' | 'Townhouse' | 'Penthouse';

export interface Property {
  slug: string;
  ref: string;
  title: string;
  area: string;
  purpose: Purpose;
  type: PropertyType;
  /** AED. null => "Price on Request" */
  price: number | null;
  pricePrefix?: string;
  priceSuffix?: string;
  beds: number; // 0 = studio
  baths: number;
  sizeSqft: number;
  featured: boolean;
  sample: boolean;
  image: string; // Unsplash id
  gallery: string[];
  summary: string;
}

export const properties: Property[] = [
  {
    slug: 'sample-2-bed-apartment-dubai-marina',
    ref: 'HPR-S-001',
    title: '2 Bedroom Apartment with Marina View',
    area: 'Dubai Marina',
    purpose: 'buy',
    type: 'Apartment',
    price: 2450000,
    beds: 2,
    baths: 2,
    sizeSqft: 1280,
    featured: true,
    sample: true,
    image: '1560448204-e02f11c3d0e2',
    gallery: ['1560448204-e02f11c3d0e2', '1502672260266-1c1ef2d93688', '1597659840241-37e2b9c2f55f'],
    summary: 'Sample listing used to preview the card layout.',
  },
  {
    slug: 'sample-5-bed-villa-palm-jumeirah',
    ref: 'HPR-S-002',
    title: '5 Bedroom Signature Villa',
    area: 'Palm Jumeirah',
    purpose: 'buy',
    type: 'Villa',
    price: null,
    beds: 5,
    baths: 6,
    sizeSqft: 7400,
    featured: true,
    sample: true,
    image: '1613977257363-707ba9348227',
    gallery: ['1613977257363-707ba9348227', '1600607687939-ce8a6c25118c', '1489516408517-0c0a15662682'],
    summary: 'Sample listing used to preview the card layout.',
  },
  {
    slug: 'sample-1-bed-apartment-downtown-dubai',
    ref: 'HPR-S-003',
    title: '1 Bedroom Apartment near Boulevard',
    area: 'Downtown Dubai',
    purpose: 'rent',
    type: 'Apartment',
    price: 120000,
    priceSuffix: '/ year',
    beds: 1,
    baths: 1,
    sizeSqft: 780,
    featured: true,
    sample: true,
    image: '1502672260266-1c1ef2d93688',
    gallery: ['1502672260266-1c1ef2d93688', '1580674684081-7617fbf3d745'],
    summary: 'Sample listing used to preview the card layout.',
  },
  {
    slug: 'sample-3-bed-off-plan-business-bay',
    ref: 'HPR-S-004',
    title: '3 Bedroom Residence — Off-Plan',
    area: 'Business Bay',
    purpose: 'off-plan',
    type: 'Apartment',
    price: 1850000,
    pricePrefix: 'From',
    beds: 3,
    baths: 3,
    sizeSqft: 1650,
    featured: true,
    sample: true,
    image: '1522708323590-d24dbb6b0267',
    gallery: ['1522708323590-d24dbb6b0267', '1526495124232-a04e1849168c'],
    summary: 'Sample listing used to preview the card layout.',
  },
  {
    slug: 'sample-3-bed-townhouse-jvc',
    ref: 'HPR-S-005',
    title: '3 Bedroom Family Townhouse',
    area: 'Jumeirah Village Circle',
    purpose: 'rent',
    type: 'Townhouse',
    price: 165000,
    priceSuffix: '/ year',
    beds: 3,
    baths: 4,
    sizeSqft: 2100,
    featured: true,
    sample: true,
    image: '1600566753190-17f0baa2a6c3',
    gallery: ['1600566753190-17f0baa2a6c3', '1600585154340-be6161a56a0c'],
    summary: 'Sample listing used to preview the card layout.',
  },
  {
    slug: 'sample-4-bed-penthouse-downtown-dubai',
    ref: 'HPR-S-006',
    title: '4 Bedroom Penthouse with Skyline View',
    area: 'Downtown Dubai',
    purpose: 'buy',
    type: 'Penthouse',
    price: null,
    beds: 4,
    baths: 5,
    sizeSqft: 4300,
    featured: true,
    sample: true,
    image: '1616594039964-ae9021a400a0',
    gallery: ['1616594039964-ae9021a400a0', '1512453979798-5ea266f8880c'],
    summary: 'Sample listing used to preview the card layout.',
  },
];

export const purposeLabel: Record<Purpose, string> = {
  buy: 'For Sale',
  rent: 'For Rent',
  'off-plan': 'Off-Plan',
};

export function formatPrice(p: Property) {
  if (p.price === null) return 'Price on Request';
  const n = new Intl.NumberFormat('en-AE').format(p.price);
  return [p.pricePrefix, `AED ${n}`, p.priceSuffix].filter(Boolean).join(' ');
}

/** Sample amenities by property type — replace with each verified listing's actual amenities. */
const sampleAmenities: Record<PropertyType, string[]> = {
  Apartment: ['Swimming pool', 'Gym', 'Covered parking', '24/7 security', 'Balcony', 'Built-in wardrobes'],
  Penthouse: ['Private terrace', 'Skyline views', 'Swimming pool', 'Gym', 'Covered parking', '24/7 security'],
  Villa: ['Private pool', 'Private garden', "Maid's room", 'Covered parking', 'Built-in wardrobes', 'Community access'],
  Townhouse: ['Private garden', 'Community pool', 'Covered parking', "Children's play area", 'Built-in wardrobes', 'Storage room'],
};

export function amenitiesFor(p: Property) {
  return sampleAmenities[p.type];
}

export function descriptionFor(p: Property) {
  return [
    `This is a sample listing used to preview the property page layout. It describes a ${bedsLabel(p.beds).toLowerCase()} ${p.type.toLowerCase()} in ${p.area} and will be replaced with a verified HPR Properties listing.`,
    'A verified listing will include the full property description, key features, floor plan details where available, and current pricing and availability confirmed by the HPR Properties team.',
  ];
}

export const statusFor = (p: Property) => (p.purpose === 'off-plan' ? 'Off-Plan' : p.purpose === 'rent' ? 'Available to rent' : 'Ready');

export function bedsLabel(beds: number) {
  return beds === 0 ? 'Studio' : `${beds} Bed${beds > 1 ? 's' : ''}`;
}
