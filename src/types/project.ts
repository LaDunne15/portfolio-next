import { StaticImageData } from 'next/image';

export const TECH_ITEM_NAMES = ['React', 'Redux', 'MongoDB', 'Next.js'] as const;

export type TechItemName = (typeof TECH_ITEM_NAMES)[number];

export type Feature = {
  name: string;
  description?: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  icon: StaticImageData;
  url: string;
  devDirection: string;
  stack: TechItemName[];
  gitHub: string;
  mainImage: StaticImageData;
  imgs: StaticImageData[];
  description: string;
  palette: string[];
  mainColor: string;
  mainFeatures?: Feature[];
};
