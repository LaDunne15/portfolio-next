import getProjectBySlug from '@/helpers/projects/getProjectBySlug';
import ProjectScreen from '@/pages/project';

type Params = {
  locale: 'ua' | 'en';
  slug: string;
};

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;

  const project = getProjectBySlug(slug, locale);

  return <ProjectScreen project={project} />;
}
