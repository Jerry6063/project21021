import { GardenEntry, EntryCategory } from './types';

export const GARDEN_ENTRIES: GardenEntry[] = [
  {
    id: 'leica-m3',
    name: 'Leica M3',
    botanicalName: 'Precisionis Germanicus',
    category: EntryCategory.RANGEFINDER,
    year: 1954,
    description: 'The legendary perennial that set the standard for all rangefinders to follow.',
    details: 'The Leica M3 is widely considered one of the greatest film cameras ever made. Introduced in 1954, it features a 0.91x magnification viewfinder that has never been surpassed in clarity. Like a hardy perennial, it is built entirely of brass and glass, designed to last lifetimes. Its "growth cycle" involves manual winding and purely mechanical operation—no batteries required.',
    image: 'https://picsum.photos/id/250/800/600',
    tags: ['Mechanical', 'Brass', 'Legendary']
  },
  {
    id: 'polaroid-sx70',
    name: 'Polaroid SX-70',
    botanicalName: 'Instantaneous Bloomus',
    category: EntryCategory.INSTANT,
    year: 1972,
    description: 'A folding marvel that produces a fully developed bloom in minutes.',
    details: 'Edwin Land’s masterpiece. The SX-70 is a single-lens reflex camera that folds flat into a chrome and leather brick. When opened, it reveals a complex system of mirrors. Its output is unique: a square, instant photo that develops before your eyes, mimicking the rapid blooming of a flower. Each "petal" (photo) is unique and chemically complex.',
    image: 'https://picsum.photos/id/338/800/600',
    tags: ['Folding', 'Instant', 'Chrome']
  },
  {
    id: 'canon-ae1',
    name: 'Canon AE-1',
    botanicalName: 'Electronica Popularis',
    category: EntryCategory.SLR,
    year: 1976,
    description: 'The common wildflower of the 70s, bringing automation to the masses.',
    details: 'The Canon AE-1 was the first camera with a microprocessor, bringing the ease of auto-exposure to the general public. Like a common wildflower, it proliferated wildly, selling millions of units. Its plastic composite shell was a departure from heavy brass, marking a new era of lighter, more adaptable species in the camera kingdom.',
    image: 'https://picsum.photos/id/435/800/600',
    tags: ['Microprocessor', 'Popular', 'Shutter-Priority']
  },
  {
    id: 'hasselblad-500cm',
    name: 'Hasselblad 500C/M',
    botanicalName: 'Modularis Lunaris',
    category: EntryCategory.SLR,
    year: 1970,
    description: 'A modular shrub known for its journey to the moon and square format.',
    details: 'This medium format beast is completely modular—you can swap the lens, the film back, and the viewfinder like grafting branches onto a tree. Famous for being the primary camera used by NASA during the Apollo missions. It captures light on a massive 6x6cm negative, providing incredible detail and depth.',
    image: 'https://picsum.photos/id/405/800/600',
    tags: ['Medium Format', 'Modular', 'Square']
  },
  {
    id: 'rolleiflex-28f',
    name: 'Rolleiflex 2.8F',
    botanicalName: 'Geminus Oculus',
    category: EntryCategory.TLR,
    year: 1960,
    description: 'The twin-lens creeper, looking down to see the world ahead.',
    details: 'The Twin Lens Reflex (TLR) design features two "eyes": one for viewing and one for taking the picture. This creates a unique shooting experience where the photographer looks down into a waist-level finder, often making subjects feel more at ease. It is quiet, discreet, and produces stunningly sharp images.',
    image: 'https://picsum.photos/id/64/800/600',
    tags: ['Twin Lens', 'Waist Level', 'Quiet']
  }
];