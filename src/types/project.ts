import { StaticImageData } from 'next/image';

export type TechItemName = 'React' | 'Redux' | 'MongoDB' | 'Next.js';

export type Project = {
  id: number;
  title: string;
  icon: StaticImageData;
  url: string;
  devDirection: string;
  stack: TechItemName[];
  gitHub: string;
  imgs: StaticImageData[];
  description: string;
  palette: string[];
  mainColor: string;
};
