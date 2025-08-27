import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';
import s from '@/styles/Home.module.scss';
import { useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

export const About = () => {
  const t = useTranslations('main');
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  return (
    <GlassElement width="100%" height="100%" radius={radius} depth={1}>
      <div className={s.home_about}>
        <h2 className="center">{t('About')}</h2>
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
