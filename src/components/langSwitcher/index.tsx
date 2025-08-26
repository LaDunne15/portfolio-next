'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = pathname.split('/').filter(Boolean);

  // Визначаємо поточну мову
  const currentLocale = segments[0] === 'ua' ? 'ua' : 'en';

  // Мова, на яку перемикаємося
  const newLocale = currentLocale === 'ua' ? 'en' : 'ua';

  // Новий шлях: замінюємо перший сегмент мовою або додаємо, якщо дефолтна
  const newPathSegments =
    segments.length > 0
      ? [newLocale, ...segments.slice(currentLocale === 'ua' ? 1 : 0)]
      : [newLocale];

  const newPath = '/' + newPathSegments.join('/');

  const handleSwitch = () => {
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button onClick={handleSwitch} disabled={isPending}>
      {newLocale.toUpperCase()}
    </button>
  );
}
