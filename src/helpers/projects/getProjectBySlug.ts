import { Project } from '@/types/project';
import { getProjects } from './projects';

const getProjectBySlug = (slug: string, lang: 'en' | 'ua'): Project | undefined => {
  return getProjects(lang).find((i) => i.slug === slug);
};

export default getProjectBySlug;
