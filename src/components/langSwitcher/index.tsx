'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = pathname.split('/').filter(Boolean);

  // Поточна мова
  const currentLocale = segments[0] === 'ua' ? 'ua' : 'en';

  // Функція для генерації нового шляху під вибрану мову
  const getPathForLocale = (locale: 'ua' | 'en') => {
    if (segments.length > 0) {
      return '/' + [locale, ...segments.slice(currentLocale === 'ua' ? 1 : 0)].join('/');
    }
    return '/' + locale;
  };

  const handleSwitch = (locale: 'ua' | 'en') => {
    const newPath = getPathForLocale(locale);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {(['ua', 'en'] as const).map((locale) => (
        <button
          key={locale}
          onClick={() => handleSwitch(locale)}
          disabled={isPending || currentLocale === locale}
          style={{
            fontWeight: currentLocale === locale ? 'bold' : 'normal',
            textDecoration: currentLocale === locale ? 'underline' : 'none',
            opacity: isPending && currentLocale !== locale ? 0.6 : 1,
          }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
