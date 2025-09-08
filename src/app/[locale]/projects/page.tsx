import Projects from '@/components/pages/projects';

type Params = Promise<{
  locale: 'ua' | 'en';
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  const i18n = {
    en: {
      title: 'Portfolio | Projects',
    },
    ua: {
      title: 'Портфоліо | Проекти',
    },
  };

  return i18n[locale];
}

export default function ProjectsPage() {
  return <Projects />;
}
