'use client';
import '@/styles/global.css';
import { About } from '@/components/about';
import { GetInTouch } from '@/components/getInTouch';
import { RecentProjects } from '@/components/recentProjects';
import s from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <main className={s.home}>
      <About />
      <RecentProjects />
      <GetInTouch />
    </main>
  );
}
