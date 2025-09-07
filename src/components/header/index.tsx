'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlassElement } from '../glassElement/GlassElement';
import { Contact2, Home, Palette } from 'lucide-react';
import { ChAber } from '../chromaticAberration';

import s from '@/styles/Header.module.scss';
import LanguageSwitcher from '../langSwitcher';
import { useTranslations } from 'next-intl';
import { Intro } from './_components/intro';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

export const Header = () => {
  const t = useTranslations('header');
  const pathname = usePathname();

  const cleanPathname = pathname?.replace(/^\/(ua|en)/, '') || '/';

  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  return (
    <>
      {cleanPathname === '/' && <Intro />}
      <div className={s.container}>
        <div className={s.headerContainer}>
          <GlassElement
            width="auto"
            height="auto"
            radius={radius}
            depth={1}
            chromaticAberration={5}
            styleContainer={s.header}
          >
            <Link href="/" className="link full-w">
              <ChAber active={cleanPathname === '/'} className={s.element}>
                <Home color="#FFF" />
                <span>{t('HOME')}</span>
              </ChAber>
            </Link>
            <Link href="/about" className="link full-w">
              <ChAber active={cleanPathname === '/about'} className={s.element}>
                <Contact2 color="#FFF" />
                {t('ABOUT')}
              </ChAber>
            </Link>
            <Link href="/projects" className="link full-w">
              <ChAber active={cleanPathname === '/projects'} className={s.element}>
                <Palette color="#FFF" />
                {t('PROJECTS')}
              </ChAber>
            </Link>
            <Link href="/contact" className="link full-w">
              <ChAber active={cleanPathname === '/contact'} className={s.element}>
                <Contact2 color="#FFF" />
                {t('CONTACT')}
              </ChAber>
            </Link>
            <LanguageSwitcher />
          </GlassElement>
        </div>
      </div>
    </>
  );
};

export default Header;
