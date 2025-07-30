'use client';
import { About } from '@/components/about';
import { RecentProjects } from '@/components/recentProjects';
import s from '@/styles/Home.module.scss';

export default function HomePage() {
  return (
    <main className={s.home}>
      <About />
      <RecentProjects />
    </main>
  );
}
