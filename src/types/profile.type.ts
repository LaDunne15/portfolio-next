import { StaticImageData } from 'next/image';
import { LocaleString } from './locale.type';

export type ProfileRaw = {
  profilePhoto: StaticImageData;
  firstName: LocaleString;
  lastName: LocaleString;
  email: string;
  phone: string;
  about: LocaleString;
  linkedIn: string;
  gitHub: string;
};

export type Profile = {
  profilePhoto: StaticImageData;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  linkedIn: string;
  gitHub: string;
};
