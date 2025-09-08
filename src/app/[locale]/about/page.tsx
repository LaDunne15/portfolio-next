import About from '@/components/pages/about';

type Params = Promise<{
  locale: 'ua' | 'en';
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  const i18n = {
    en: {
      title: 'Portfolio | About',
    },
    ua: {
      title: 'Портфоліо | Про мене',
    },
  };

  return i18n[locale];
}

export default function AboutPage() {
  return <About />;
}
