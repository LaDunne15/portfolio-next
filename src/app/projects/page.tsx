'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { ProjectCard } from '@/components/projectCard';
import { getProjects } from '@/helpers/projects/projects';
import Link from 'next/link';

import s from '@/styles/Projects.module.scss';

export default function Projects() {
  return (
    <main>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: 30 }}>
          <span style={{ textAlign: 'center', display: 'block', height: 'auto', fontSize: '30px' }}>
            PROJECTS
          </span>
        </div>
      </GlassElement>
      <div className={s.projectsGrid}>
        {getProjects('ua').map((i) => (
          <ProjectCard project={i} key={i.id} />
        ))}
      </div>
    </main>
  );
}
