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
import { Project } from '@/types/project';

const projectsData: Project[] = [
  {
    id: 3,
    slug: 'quizaida',
    title: 'Quizaida',
    icon: iconQ,
    url: 'https://quizaida.vercel.app',
    devDirection: 'Fullstack',
    stack: ['Next.js', 'MongoDB'],
    gitHub: 'https://github.com/LaDunne15/quizaida',
    mainImage: Q,
    imgs: [Q3, Q4, Q5, Q1, Q2],
    description: 'Website for quiz tests',
    palette: [],
    mainColor: '#90c748',
    mainFeatures: [
      {
        name: 'main feature',
        description: '123',
      },
    ],
  },
  {
    id: 2,
    slug: 'film-check',
    title: 'FilmCHECK',
    icon: iconFC,
    url: 'https://film-check.onrender.com/',
    devDirection: 'Frontend',
    stack: ['React', 'Redux'],
    gitHub: 'https://github.com/LaDunne15/film-check',
    mainImage: FC,
    imgs: [FC1, FC2, FC3, FC4],
    description: 'Information about films, serials and actors',
    palette: [],
    mainColor: '#ffff00',
  },
  {
    id: 1,
    slug: 'yak-tam-vnuzy-pogodka',
    title: 'Як там внизу погодка?',
    icon: iconP,
    url: 'https://pogodka.pp.ua',
    devDirection: 'Frontend',
    stack: ['React', 'Redux'],
    gitHub: 'https://github.com/LaDunne15/weather-forecast',
    mainImage: P,
    imgs: [P1, P2],
    description: 'Weather report website',
    palette: [],
    mainColor: '#741661',
  },
  /*
    {
        title: "Брусницький ЗЗСО І-ІІІ ступенів",
        url: "https://brusnitsa-school-landing.onrender.com",
        stack: [
            "HTML5","CSS3","JS"
        ],
        gitHub: "https://github.com/LaDunne15/school-landing",
        imgs: [
        ],
        description: "School site concept redesign"
    }*/
];

export default projectsData;
