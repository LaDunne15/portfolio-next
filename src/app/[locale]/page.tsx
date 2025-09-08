import '@/styles/global.css';
import Home from '@/components/pages/home';

type Params = Promise<{
  locale: 'ua' | 'en';
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  const i18n = {
    en: {
      title: 'Portfolio',
    },
    ua: {
      title: 'Портфоліо',
    },
  };

  return i18n[locale];
}

export default function HomePage() {
  return <Home />;
}
