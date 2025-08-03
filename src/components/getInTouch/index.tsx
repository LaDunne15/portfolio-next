import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import GitHub from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Instagram from '@/assets/svg/instagram.svg';

import s from '@/styles/Home.module.scss';
import { Send } from 'lucide-react';

export const GetInTouch = () => {
  return (
    <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
      <div className={s.getInTouch}>
        <div className={s.getInTouch_main}>
          <span className={s.getInTouch_title}>Get in Touch</span>
          <span className={s.getInTouch_text}>
            If you are interested in my work or want to provide feedback about this website, I am
            open to exchanging ideas .
          </span>
        </div>
        <div className={s.getInTouch_actions}>
          <div className={s.getInTouch_followMe}>
            <span className={s.getInTouch_followMe_title}>Follow me on</span>
            <div className={s.getInTouch_followMe_links}>
              <Link href="/" className="link">
                <GitHub className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <LinkedIn className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Instagram className={s.linkIcon} />
              </Link>
            </div>
          </div>
          <div className={s.contactMe}>
            <Link href="/contact" className="link">
              <div className={s.contactMe_content}>
                <span>Contact Me</span>
                <Send />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </GlassElement>
  );
};
