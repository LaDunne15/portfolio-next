import { StaticImageData } from 'next/image';
import { LocaleString } from './locale.type';

export const TECH_ITEM_NAMES = [
  'React',
  'Redux',
  'MongoDB',
  'Next.js',
  'Node.js',
  'Nest',
  'Prisma',
] as const;

export type TechItemName = (typeof TECH_ITEM_NAMES)[number];

export type FeatureRaw = {
  name: LocaleString;
  description?: LocaleString;
};

export type ProjectRaw = {
  id: number;
  slug: string;
  title: LocaleString;
  icon: StaticImageData;
  url: string;
  devDirection: string;
  stack: TechItemName[];
  gitHub: string;
  mainImage: StaticImageData;
  imgs: StaticImageData[];
  shortDescription: LocaleString;
  description: LocaleString;
  palette: string[];
  mainColor: string;
  mainFeatures?: FeatureRaw[];
};

type Feature = {
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
  shortDescription: string;
  description: string;
  palette: string[];
  mainColor: string;
  mainFeatures?: Feature[];
};
