'use client';

import LinkedIn from '@/assets/svg/linkedin.svg';
import Github from '@/assets/svg/github.svg';
import { ChAber } from '@/components/chromaticAberration';
import Link from 'next/link';

import s from '@/styles/Header.module.scss';
import Image from 'next/image';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { getProfileInfo } from '@/helpers/profileInfo/profileInfo';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export const Intro = () => {
  const [sizes, setSizes] = useState({ size1: 300, size2: 240, size3: 210 });

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const base = Math.min(width, height) * 0.7;
      setSizes({
        size1: base,
        size2: base * 0.8,
        size3: base * 0.7,
      });
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const locale = useLocale();
  const t = useTranslations('intro');
  const profile = getProfileInfo(locale as 'ua' | 'en');

  return (
    <div className={s.intro}>
      <div className={s.intro_text}>
        <h2>{t('Welcome')}</h2>
        <ChAber strength={1} active>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
        </ChAber>
        <h2>{t('FS-dev')}</h2>
        <h3>{t('passion')}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10 }}>
        <Link href={profile.linkedIn} target="_blank">
          <Image src={LinkedIn} alt="linkedin" width={50} height={50} />
        </Link>
        <Link href={profile.gitHub} target="_blank">
          <Image src={Github} alt="github" width={50} height={50} />
        </Link>
      </div>

      <GlassElement
        width={sizes.size2}
        height={sizes.size2}
        depth={1}
        chromaticAberration={10}
        strength={0.5}
        styleContainer={s.intro_glass}
        radius={sizes.size2}
      />
      <GlassElement
        width={sizes.size1}
        height={sizes.size1}
        depth={1}
        chromaticAberration={5}
        styleContainer={s.intro_glass_2}
        radius={sizes.size1}
      />
      <GlassElement
        width={sizes.size3}
        height={sizes.size3}
        depth={1}
        chromaticAberration={5}
        styleContainer={s.intro_glass_3}
        radius={sizes.size3}
      />
    </div>
  );
};
