import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import GitHub from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Instagram from '@/assets/svg/instagram.svg';

import s from '@/styles/Home.module.scss';
import { Send } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const GetInTouch = () => {
  const t = useTranslations('main');

  return (
    <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
      <div className={s.getInTouch}>
        <div className={s.getInTouch_main}>
          <span className={s.getInTouch_title}>{t('Get in touch')}</span>
          <span className={s.getInTouch_text}>{t('Get in touch text')}</span>
        </div>
        <div className={s.getInTouch_actions}>
          <div className={s.getInTouch_followMe}>
            <span className={s.getInTouch_followMe_title}>{t('Follow me on')}</span>
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
          <div className={s.contactMe}>
            <Link href="/contact" className="link">
              <div className={s.contactMe_content}>
                <span>{t('Contact me')}</span>
                <Send />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </GlassElement>
  );
};
