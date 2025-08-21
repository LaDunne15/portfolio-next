import iconQ from '@/helpers/projects/images/quizaida/favicon.ico';
import iconFC from '@/helpers/projects/images/filmCheck/favicon.png';
import iconP from '@/helpers/projects/images/pogodka/favicon.png';

import Q from '@/helpers/projects/images/quizaida/main.png';
import Q1 from '@/helpers/projects/images/quizaida/images/photo_2024-05-25_16-01-09.jpg';
import Q2 from '@/helpers/projects/images/quizaida/images/photo_2024-05-25_16-01-15.jpg';
import Q3 from '@/helpers/projects/images/quizaida/images/photo_2024-05-25_16-01-21.jpg';
import Q4 from '@/helpers/projects/images/quizaida/images/photo_2024-05-25_16-01-25.jpg';
import Q5 from '@/helpers/projects/images/quizaida/images/photo_2024-05-25_16-01-29.jpg';

import FC from '@/helpers/projects/images/filmCheck/main.png';
import FC1 from '@/helpers/projects/images/filmCheck/images/Actor.png';
import FC2 from '@/helpers/projects/images/filmCheck/images/SearchResult.png';
import FC3 from '@/helpers/projects/images/filmCheck/images/titleDesktop.png';
import FC4 from '@/helpers/projects/images/filmCheck/images/titleMobile.png';

import P from '@/helpers/projects/images/pogodka/main.png';
import P1 from '@/helpers/projects/images/pogodka/images/Desktop.jpg';
import P2 from '@/helpers/projects/images/pogodka/images//Mobile.jpg';
import { Project, ProjectRaw } from '@/types/project';

const projectsData: ProjectRaw[] = [
  {
    id: 3,
    slug: 'quizaida',
    title: { en: 'Quizaida', ua: 'Квізайда' },
    icon: iconQ,
    url: 'https://quizaida.vercel.app',
    devDirection: 'Fullstack',
    stack: ['Next.js', 'MongoDB'],
    gitHub: 'https://github.com/LaDunne15/quizaida',
    mainImage: Q,
    imgs: [Q3, Q4, Q5, Q1, Q2],
    shortDescription: {
      en: 'Website for quiz tests',
      ua: 'Сайт для проходження вікторин',
    },
    description: {
      en: 'Website for quiz tests',
      ua: 'Вебсайт для тестів-вікторин',
    },
    palette: [],
    mainColor: '#90c748',
    mainFeatures: [
      {
        name: { en: 'Email sending', ua: 'Надсилання email' },
        description: {
          en: 'Using real users email for registration & update password',
          ua: 'Використання email користувачів для реєстрації та відновлення паролю',
        },
      },
    ],
  },
  {
    id: 2,
    slug: 'film-check',
    title: { en: 'FilmCHECK', ua: 'ФільмЧЕК' },
    icon: iconFC,
    url: 'https://film-check.onrender.com/',
    devDirection: 'Frontend',
    stack: ['React', 'Redux'],
    gitHub: 'https://github.com/LaDunne15/film-check',
    mainImage: FC,
    imgs: [FC1, FC2, FC3, FC4],
    shortDescription: {
      en: 'Information about films, serials and actors',
      ua: 'Інформація про фільми, серіали та акторів',
    },
    description: {
      en: 'Information about films, serials and actors',
      ua: 'Вебсайт з інформацією про фільми, серіали та акторів',
    },
    palette: [],
    mainColor: '#ffff00',
    mainFeatures: [
      {
        name: { en: 'API', ua: 'API' },
        description: {
          en: 'Working with API',
          ua: 'Робота з API',
        },
      },
      {
        name: { en: 'SCSS', ua: 'SCSS' },
      },
    ],
  },
  {
    id: 1,
    slug: 'yak-tam-vnuzy-pogodka',
    title: { en: 'How’s the weather down there?', ua: 'Як там внизу погодка?' },
    icon: iconP,
    url: 'https://pogodka.pp.ua',
    devDirection: 'Frontend',
    stack: ['React', 'Redux'],
    gitHub: 'https://github.com/LaDunne15/weather-forecast',
    mainImage: P,
    imgs: [P1, P2],
    shortDescription: {
      en: 'Weather report website',
      ua: 'Сайт з прогнозом погоди',
    },
    description: {
      en: 'Weather report website',
      ua: 'Вебсайт для перегляду прогнозу погоди',
    },
    palette: [],
    mainColor: '#741661',
    mainFeatures: [
      {
        name: { en: 'API', ua: 'API' },
        description: {
          en: 'Working with API',
          ua: 'Робота з API',
        },
      },
      {
        name: { en: 'User location', ua: 'Локація користувача' },
        description: {
          en: 'Using user location for working API',
          ua: 'Використання геолокації користувача для роботи з API',
        },
      },
    ],
  },
];

const getProjects = (lang: 'en' | 'ua'): Project[] => {
  return projectsData.map((project) => ({
    ...project,
    title: project.title[lang],
    shortDescription: project.shortDescription[lang],
    description: project.description[lang],
    mainFeatures: project.mainFeatures
      ? [
          ...project.mainFeatures.map((f) => ({
            name: f.name[lang],
            description: f.description ? f.description[lang] : undefined,
          })),
        ]
      : [],
  }));
};

export { projectsData, getProjects };
