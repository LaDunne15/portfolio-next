import { Project } from '@/types/project';
import { GlassElement } from '../glassElement/GlassElement';
import Image from 'next/image';

import s from '@/styles/Projects.module.scss';
import { TechItem } from '../techItem';
import { palette } from '@/constants/color';
import React from 'react';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project: i }: Props) => {
  return (
    <GlassElement width="100%" height="100%" radius={30} depth={1}>
      <div className={s.projectCard} style={{ '--main-color': i.mainColor } as React.CSSProperties}>
        <div className={s.projectCard_imageContainer}>
          <Image src={i.mainImage} alt="" className={s.projectCard_image} />
        </div>
        <div className={s.projectCard_info}>
          <span className={s.projectCard_info_title}>{i.title}</span>
          <span className={s.projectCard_info_devDirection}>{i.devDirection}</span>
          <span className={s.projectCard_info_description}>{i.description}</span>
          <div style={{ display: 'flex', gap: '10px', marginTop: 10 }}>
            {i.stack.map((j) => (
              <TechItem name={j} key={`${i.id}${j}`} size={30} />
            ))}
          </div>
        </div>
      </div>
    </GlassElement>
  );
};
