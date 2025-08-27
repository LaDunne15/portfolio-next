import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import s from '@/styles/Projects.module.scss';
import { getProjects } from '@/helpers/projects/projects';
import { ProjectCard } from '../projectCard';
import { useLocale, useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

export const RecentProjects = () => {
  const t = useTranslations('main');
  const locale = useLocale();
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  return (
    <section>
      <GlassElement width="100%" height="100%" radius={radius} depth={1}>
        <div className={s.recentProjects}>
          <h2 className="flex">{t('Recent projects')}</h2>
          <Link href="/projects" className="link">
            <div className={s.recentProjects_seeAll}>
              <h4>{t('See all')}</h4>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </GlassElement>
      <div className={s.projectsGrid}>
        {getProjects(locale as 'ua' | 'en')
          .slice(0, 3)
          .map((i) => (
            <ProjectCard project={i} key={i.id} />
          ))}
      </div>
    </section>
  );
};
