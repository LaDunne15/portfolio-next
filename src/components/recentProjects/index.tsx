import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import sP from '@/styles/Projects.module.scss';
import { getProjects } from '@/helpers/projects/projects';
import { ProjectCard } from '../projectCard';

export const RecentProjects = () => {
  return (
    <section>
      <GlassElement width="100%" height="100%" radius={30} depth={1}>
        <div className={sP.recentProjects}>
          <span className={sP.recentProjects_title}>Recent Projects</span>
          <Link href="/projects" className="link">
            <div className={sP.recentProjects_seeAll}>
              <span>See all</span>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </GlassElement>
      <div className={sP.projectsGrid}>
        {getProjects('ua')
          .slice(0, 3)
          .map((i) => (
            <ProjectCard project={i} key={i.id} />
          ))}
      </div>
    </section>
  );
};
