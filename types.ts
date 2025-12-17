export enum EntryCategory {
  ALL = 'All Species',
  SLR = 'Single-Lens Reflex',
  RANGEFINDER = 'Rangefinder',
  TLR = 'Twin-Lens Reflex',
  INSTANT = 'Instant Film'
}

export interface GardenEntry {
  id: string;
  name: string;
  botanicalName: string; // A creative metaphorical name
  category: EntryCategory;
  year: number;
  description: string;
  details: string; // Longer text for the detailed view
  image: string;
  tags: string[];
}

export type ViewState = 'INDEX' | 'ABOUT' | 'ENTRY';