import { Project } from '@/types/project';
import { getProjects } from './projects';

const getProjectBySlug = (slug: string): Project | undefined => {
  return getProjects('ua').find((i) => i.slug === slug);
};

export default getProjectBySlug;
