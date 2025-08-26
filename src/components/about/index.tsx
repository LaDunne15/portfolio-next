import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';
import s from '@/styles/Home.module.scss';

export const About = () => {
  return (
    <GlassElement width="100%" height="100%" radius={30} depth={1}>
      <div className={s.home_about}>
        <span className={s.home_about_title}>About</span>
        <p>Bla Bla Bla</p>
        <div className={s.home_about_more}>
          <Link href="/about" className="link">
            <div className={s.home_about_more_button}>More...</div>
          </Link>
        </div>
      </div>
    </GlassElement>
  );
};
