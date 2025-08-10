import { Project } from '@/types/project';
import projectsData from './projects';

const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((i) => i.slug === slug);
};

export default getProjectBySlug;
