import { Project } from '@/types/project';
import { GlassElement } from '../glassElement/GlassElement';
import Image from 'next/image';

import s from '@/styles/Projects.module.scss';
import { TechItem } from '../techItem';
import React from 'react';
import Link from 'next/link';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project: i }: Props) => {
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  return (
    <Link href={`/projects/${i.slug}`} className="link">
      <div className={s.projectCard} style={{ '--main-color': i.mainColor } as React.CSSProperties}>
        <GlassElement width="100%" height="100%" radius={radius} depth={1}>
          <div className={s.projectCard}>
            <div className={s.projectCard_imageContainer}>
              <Image src={i.mainImage} alt="" className={s.projectCard_image} />
            </div>
            <div className={s.projectCard_info}>
              <h3>{i.title}</h3>
              <h4>{i.devDirection}</h4>
              <h5 className="flex">{i.shortDescription}</h5>
              <div style={{ display: 'flex', gap: '10px', marginTop: 10 }}>
                {i.stack.map((j) => (
                  <TechItem name={j} key={`${i.id}${j}`} size={30} />
                ))}
              </div>
            </div>
          </div>
        </GlassElement>
      </div>
    </Link>
  );
};
