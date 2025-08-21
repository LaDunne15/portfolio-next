import { StaticImageData } from 'next/image';

export const TECH_ITEM_NAMES = ['React', 'Redux', 'MongoDB', 'Next.js'] as const;

export type TechItemName = (typeof TECH_ITEM_NAMES)[number];

type LocaleString = {
  en: string;
  ua: string;
};

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
