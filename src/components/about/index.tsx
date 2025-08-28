import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';
import s from '@/styles/Home.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';
import { getProfileInfo } from '@/helpers/profileInfo/profileInfo';

export const About = () => {
  const t = useTranslations('main');
  const lang = useLocale();
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  const profile = getProfileInfo(lang as 'ua' | 'en');

  return (
    <GlassElement width="100%" height="100%" radius={radius} depth={1}>
      <div className={s.home_about}>
        <h2 className="center">{t('About')}</h2>
        <p>{profile.about}</p>
        <div className={s.home_about_more}>
          <Link href="/about" className="link">
            <div className={s.home_about_more_button}>{t('More')}</div>
          </Link>
        </div>
      </div>
    </GlassElement>
  );
};
