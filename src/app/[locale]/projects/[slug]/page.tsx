import getProjectBySlug from '@/helpers/projects/getProjectBySlug';
import ProjectScreen from '@/components/pages/project';

type Params = Promise<{
  locale: 'ua' | 'en';
  slug: string;
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, locale } = await params;

  const project = getProjectBySlug(slug, locale);

  return {
    title: project?.title,
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params;

  const project = getProjectBySlug(slug, locale);

  return <ProjectScreen project={project} />;
}
