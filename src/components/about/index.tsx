import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';
import s from '@/styles/Home.module.scss';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('main');

  return (
    <GlassElement width="100%" height="100%" radius={30} depth={1}>
      <div className={s.home_about}>
        <span className={s.home_about_title}>{t('About')}</span>
        <p>Bla Bla Bla {t('Hello')}</p>
        <div className={s.home_about_more}>
          <Link href="/about" className="link">
            <div className={s.home_about_more_button}>{t('More')}</div>
          </Link>
        </div>
      </div>
    </GlassElement>
  );
};
