import { Profile, ProfileRaw } from '@/types/profile.type';

import P from '@/helpers/projects/images/pogodka/main.png';

const profileInfo: ProfileRaw = {
  profilePhoto: P,
  firstName: {
    en: 'Vladyslav',
    ua: 'Владислав',
  },
  lastName: {
    en: 'Koshelnyi',
    ua: 'Кошельний',
  },
  email: 'VYHtP@example.com',
  phone: '+380 50 466 32 12',
  about: {
    en: 'I am a front-end developer. I am learning React, Next.js, TypeScript and other technologies. I am also learning Node.js, Express.js and MongoDB.',
    ua: 'Я front-end розробник. Я вивчаю React, Next.js, TypeScript та інші технології. Я також вивчаю Node.js, Express.js та MongoDB.',
  },
};

const getProfileInfo = (lang: 'en' | 'ua'): Profile => {
  return {
    ...profileInfo,
    firstName: profileInfo.firstName[lang],
    lastName: profileInfo.lastName[lang],
    email: profileInfo.email,
    phone: profileInfo.phone,
    about: profileInfo.about[lang],
  };
};

export { getProfileInfo };
