import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { PhotoModalProvider } from '@/providers/PhotoModalProvider';
import localFont from 'next/font/local';

import '@/styles/global.css';
import '@/styles/global.module.scss';
import { BreakpointProvider } from '@/providers/BreakpointProvider';
import { ToastContainer } from 'react-toastify';
import Providers from '@/store/providers';
import ModeSwitcher from '@/components/modeSwitcher';
import GradientBodyBackground from '@/components/background';

const oswaldMedium = localFont({
  src: '../../assets/fonts/oswald/Oswald-Medium.ttf',
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }];
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={oswaldMedium.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <PhotoModalProvider>
              <BreakpointProvider>
                <GradientBodyBackground />
                <Header />
                <div className="content">{children}</div>
                <Footer />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnHover
                  draggable
                  theme="dark"
                />
                <ModeSwitcher />
              </BreakpointProvider>
            </PhotoModalProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
