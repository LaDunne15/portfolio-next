'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { ProjectCard } from '@/components/projectCard';
import { getProjects } from '@/helpers/projects/projects';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

import s from '@/styles/Projects.module.scss';
import { useLocale, useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });
  return (
    <main>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.title}>
          <h2 className="center">{t('PROJECTS')}</h2>
        </div>
      </GlassElement>
      <div className={s.projectsGrid}>
        {getProjects(locale as 'ua' | 'en').map((i) => (
          <ProjectCard project={i} key={i.id} />
        ))}
      </div>
    </main>
  );
}
