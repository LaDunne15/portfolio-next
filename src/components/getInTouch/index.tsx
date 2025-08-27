import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import GitHub from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Instagram from '@/assets/svg/instagram.svg';

import s from '@/styles/Home.module.scss';
import { Send } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

export const GetInTouch = () => {
  const t = useTranslations('main');
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  return (
    <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
      <div className={s.getInTouch}>
        <div className={s.getInTouch_main}>
          <h2>{t('Get in touch')}</h2>
          <h3>{t('Get in touch text')}</h3>
        </div>
        <div className={s.getInTouch_actions}>
          <div className={s.getInTouch_followMe}>
            <span className={s.getInTouch_followMe_title}>{t('Follow me on')}:</span>
            <div className={s.getInTouch_followMe_links}>
              <Link href="/" className="link">
                <Image src={GitHub} alt="github" className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Image src={LinkedIn} alt="linkedin" className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Image src={Instagram} alt="instagram" className={s.linkIcon} />
              </Link>
            </div>
          </div>
          <div className={s.getInTouch_contact}>
            <Link href="/contact" className="link">
              <div className={s.contactMe}>
                <div className={s.contactMe_content}>
                  <span>{t('Contact me')}</span>
                  <Send />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </GlassElement>
  );
};
