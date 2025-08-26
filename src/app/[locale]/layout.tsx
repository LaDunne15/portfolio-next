import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { PhotoModalProvider } from '@/providers/PhotoModalProvider';
import localFont from 'next/font/local';

import '@/styles/global.css';
import '@/styles/global.module.scss';

const oswaldMedium = localFont({
  src: '../../assets/fonts/oswald/Oswald-Medium.ttf',
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }];
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await Promise.resolve(params);

  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={oswaldMedium.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PhotoModalProvider>
            <Header />
            <div className="content">{children}</div>
            <Footer />
          </PhotoModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
