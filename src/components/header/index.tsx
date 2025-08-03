'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlassElement } from '../glassElement/GlassElement';
import { Contact2, Home, Palette } from 'lucide-react';
import { ChAber } from '../chromaticAberration';

import dynamic from 'next/dynamic';
import { Intro } from './_components/intro';

import s from '@/styles/Header.module.scss';

const PaperCanvas2 = dynamic(() => import('@/components/paperCanvas2'), {
  ssr: false,
});

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <div style={{ position: 'sticky' }}>
          <PaperCanvas2>
            <Intro />
          </PaperCanvas2>
        </div>
      )}
      <div style={{ width: '100%', textAlign: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <div
          style={{
            display: 'inline-block',
            padding: 10,
          }}
        >
          <GlassElement
            width="auto"
            height="auto"
            radius={10}
            depth={1}
            chromaticAberration={5}
            styleContainer={s.header}
          >
            <Link href="/" className="link">
              <ChAber active={pathname === '/'} className={s.element}>
                <Home color="#FFF" />
                <span>HOME</span>
              </ChAber>
            </Link>
            <Link href="/about" className="link">
              <ChAber active={pathname === '/about'} className={s.element}>
                <Contact2 color="#FFF" />
                ABOUT
              </ChAber>
            </Link>
            <Link href="/projects" className="link">
              <ChAber active={pathname === '/projects'} className={s.element}>
                <Palette color="#FFF" />
                PROJECTS
              </ChAber>
            </Link>
            <Link href="/contact" className="link">
              <ChAber active={pathname === '/contact'} className={s.element}>
                <Contact2 color="#FFF" />
                CONTACT
              </ChAber>
            </Link>
          </GlassElement>
        </div>
      </div>
    </>
  );
};

export default Header;
