'use client';
import { useTranslations } from 'next-intl';
import { GlassElement } from '../glassElement/GlassElement';

import s from '@/styles/Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <GlassElement width="100%" height="auto" radius={0} depth={1}>
      <div className={s.footerContainer}>
        <div></div>
        <div>
          <span>{t('Credo')}</span>
          <div>{t('Portfolio', { year: new Date().getFullYear() })}</div>
        </div>
      </div>
    </GlassElement>
  );
};
