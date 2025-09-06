'use client';

import LinkedIn from '@/assets/svg/linkedin.svg';
import Github from '@/assets/svg/github.svg';
import { ChAber } from '@/components/chromaticAberration';
import Link from 'next/link';

import s from '@/styles/Header.module.scss';
import Image from 'next/image';
import { GlassElement } from '@/components/glassElement/GlassElement';

export const Intro = () => {
  const getSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return Math.min(width, height);
  };

  const size1 = getSize() * 0.7;
  const size2 = size1 * 0.8;
  const size3 = size1 * 0.7;

  return (
    <div className={s.intro}>
      <div className={s.intro_text}>
        <h2>Welcome. My name is</h2>
        <ChAber strength={1} active>
          <h1>Vladyslav Koshelnyi</h1>
        </ChAber>
        <h2>a fullstack developer</h2>
        <h3>with passion to do various interesting things</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
        }}
      >
        <Link href="/">
          <Image src={LinkedIn} alt="linkedin" width={50} height={50} />
        </Link>
        <Link href="/">
          <Image src={Github} alt="github" width={50} height={50} />
        </Link>
      </div>
      <GlassElement
        width={size2}
        height={size2}
        depth={1}
        chromaticAberration={10}
        strength={0.5}
        styleContainer={s.intro_glass}
        radius={size2}
      />
      <GlassElement
        width={size1}
        height={size1}
        depth={1}
        chromaticAberration={5}
        styleContainer={s.intro_glass_2}
        radius={size1}
      />
      <GlassElement
        width={size3}
        height={size3}
        depth={1}
        chromaticAberration={5}
        styleContainer={s.intro_glass_3}
        radius={size3}
      />
    </div>
  );
};
