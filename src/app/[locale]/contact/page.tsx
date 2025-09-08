import Contact from '@/components/pages/contact';

type Params = Promise<{
  locale: 'ua' | 'en';
}>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  const i18n = {
    en: {
      title: 'Portfolio | Contact',
    },
    ua: {
      title: 'Портфоліо | Контакт',
    },
  };

  return i18n[locale];
}

export default function ContactPage() {
  return <Contact />;
}
