import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import s from '@/styles/Home.module.scss';
import sP from '@/styles/Projects.module.scss';
import projectsData from '@/helpers/projects/projects';
import { ProjectCard } from '../projectCard';

export const RecentProjects = () => {
  return (
    <section>
      <GlassElement width="100%" height="100%" radius={30} depth={1}>
        <div className={sP.recentProjects}>
          <h2>Recent Projects</h2>
          <Link href="/projects" className={s.recentProjects_seeAll}>
            <span>See all</span>
            <ArrowRight />
          </Link>
        </div>
      </GlassElement>
      <div className={sP.projectsGrid}>
        {projectsData.slice(0, 3).map((i) => (
          <ProjectCard project={i} key={i.id} />
        ))}
      </div>
    </section>
  );
};
