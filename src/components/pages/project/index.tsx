'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { TechItem } from '@/components/techItem';
import { usePhotoModal } from '@/providers/PhotoModalProvider';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import s from '@/styles/Project.module.scss';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';
import { Project } from '@/types/project';

interface Props {
  project: Project | undefined;
}

export default function ProjectScreen({ project }: Props) {
  const t = useTranslations('project');

  const { open } = usePhotoModal();

  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  if (!project) return null;

  return (
    <main
      className={s.projectContainer}
      style={{ '--main-color': project.mainColor } as React.CSSProperties}
    >
      <Link href="/projects" className="link">
        <div>
          <GlassElement width="100%" height="100%" radius={radius} depth={0}>
            <div className={s.back}>
              <ArrowLeft />
              <span>{t('Back')}</span>
            </div>
          </GlassElement>
        </div>
      </Link>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.project}>
          <div className={s.project_content}>
            <div
              className={s.project_content_imageContainer}
              onClick={() => open([project.mainImage], 0, project.mainColor)}
            >
              <Image src={project.mainImage} alt="" className={s.image} />
            </div>
            <div className={s.project_content_info}>
              <div className={s.project_content_info_text}>
                <h1>{project.title}</h1>
                <h3>{project.devDirection}</h3>
                <h4>{project.description}</h4>
                <div className={s.project_content_info_text_stackContainer}>
                  <h4>{t('Tech Stack')}</h4>
                  <div className={s.project_content_info_text_stack}>
                    {project.stack.map((i) => (
                      <TechItem name={i} key={i} size={40} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={s.project_content_info_links}>
                <Link href="/" className="link">
                  <div className={s.project_content_info_links_item}>{t('Demo')}</div>
                </Link>
                <Link href="/" className="link">
                  <div className={s.project_content_info_links_item}>{t('GitHub')}</div>
                </Link>
              </div>
            </div>
          </div>
          {project.mainFeatures && (
            <div className={s.project_mainFeatures}>
              <h2>{t('Main Features')}</h2>
              <ul>
                {project.mainFeatures.map((i) => (
                  <li key={i.name}>
                    <div>
                      <h3>{i.name}</h3>
                      <h4>{i.description}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.imgs && (
            <div className={s.project_gallery}>
              <h2>{t('Gallery')}</h2>
              <div className={s.project_gallery_images}>
                {project.imgs.map((i, index) => (
                  <div
                    key={i.src}
                    className={s.project_gallery_images_item}
                    onClick={() => open(project.imgs, index, project.mainColor)}
                  >
                    <Image src={i} alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </GlassElement>
    </main>
  );
}
