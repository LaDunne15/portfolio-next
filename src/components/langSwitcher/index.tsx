'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

import s from '@/styles/Header.module.scss';
import classNames from 'classnames';
import { ChAber } from '../chromaticAberration';

type Locale = 'ua' | 'en';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = pathname?.split('/').filter(Boolean) ?? [];

  // Поточна мова
  const currentLocale: Locale = segments[0] === 'ua' ? 'ua' : 'en';

  // Функція для генерації нового шляху під вибрану мову
  const getPathForLocale = (locale: Locale): string => {
    if (segments.length > 0) {
      return '/' + [locale, ...segments.slice(currentLocale === 'ua' ? 1 : 0)].join('/');
    }
    return '/' + locale;
  };

  const handleSwitch = (locale: Locale) => {
    const newPath = getPathForLocale(locale);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className={s.langSwitcher}>
      <button
        onClick={() => handleSwitch('ua')}
        disabled={isPending || currentLocale === 'ua'}
        className={classNames(s.langSwitcher_btn, {
          [s.langSwitcher_btn_active]: currentLocale === 'ua',
        })}
      >
        <ChAber active={currentLocale === 'ua'}>UA</ChAber>
      </button>
      <span className={s.langSwitcher_separator}>|</span>
      <button
        onClick={() => handleSwitch('en')}
        disabled={isPending || currentLocale === 'en'}
        className={classNames(s.langSwitcher_btn, {
          [s.langSwitcher_btn_active]: currentLocale === 'en',
        })}
      >
        <ChAber active={currentLocale === 'en'}>EN</ChAber>
      </button>
    </div>
  );
}
