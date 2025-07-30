import { Project } from '@/types/project';
import { GlassElement } from '../glassElement/GlassElement';
import Image from 'next/image';

import s from '@/styles/Projects.module.scss';
import { TechItem } from '../techItem';
import { palette } from '@/constants/color';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project: i }: Props) => {
  return (
    <div className={s.projectCard} key={i.title}>
      <GlassElement width="100%" height="100%" radius={30} depth={1}>
        <div style={{ width: '100%', aspectRatio: 1 }}>
          <Image
            src={i.imgs[0]}
            alt=""
            style={{
              aspectRatio: 1 / 1,
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div style={{ padding: '0 30px 30px 30px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 20 }}>{i.title}</span>
          <span style={{ fontSize: 15, color: palette.dark }}>{i.devDirection}</span>
          <span style={{ fontSize: 12 }}>{i.description}</span>
          <div style={{ display: 'flex', gap: '10px', marginTop: 10 }}>
            {i.stack.map((j) => (
              <TechItem name={j} key={`${i.id}${j}`} size={30} />
            ))}
          </div>
        </div>
      </GlassElement>
    </div>
  );
};
