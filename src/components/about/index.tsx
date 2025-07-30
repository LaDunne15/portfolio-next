import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';
import s from '@/styles/Home.module.scss';

export const About = () => {
  return (
    <GlassElement width="100%" height="100%" radius={30} depth={1}>
      <div className={s.home_about}>
        <h2>About</h2>
        <p>
          Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion
          for crafting user-centric experiences. I specialize in UI/UX design, front-end
          development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js,
          Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum
          methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music.
          Let's connect and bring your digital visions to life
        </p>
        <Link href="/about">More...</Link>
      </div>
    </GlassElement>
  );
};
