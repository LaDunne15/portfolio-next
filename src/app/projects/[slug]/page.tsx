'use client';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { TechItem } from '@/components/techItem';
import getProjectBySlug from '@/helpers/projects/getProjectBySlug';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { features } from 'process';

export default function Project() {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug);

  if (!project) return null;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Link href="/projects" className="link">
        <div>
          <GlassElement width="100%" height="100%" radius={20} depth={0}>
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>
              <ArrowLeft />
              <span>Back</span>
            </div>
          </GlassElement>
        </div>
      </Link>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <div
              style={{
                flex: 1,
                maxWidth: '50%',
                maxHeight: '80vh',
              }}
            >
              <Image
                src={project.mainImage}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '30px' }}>{project.title}</span>
                <span>{project.devDirection}</span>
                <span>{project.description}</span>
                <div>
                  <span>Tech Stack</span>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '10px',
                    }}
                  >
                    {project.stack.map((i) => (
                      <TechItem name={i} key={i} size={40} />
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                }}
              >
                <Link href="/" className="link">
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      padding: '5px 10px',
                      borderRadius: '10px',
                    }}
                  >
                    Demo
                  </div>
                </Link>
                <Link href="/" className="link">
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      padding: '5px 10px',
                      borderRadius: '10px',
                    }}
                  >
                    Github
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {project.mainFeatures && (
            <div style={{ paddingTop: '30px' }}>
              <span style={{ fontSize: '30px' }}>Main Features</span>
              <ul>
                {project.mainFeatures.map((i) => (
                  <li key={i.name} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '20px' }}>{i.name}</span>
                      <span>{i.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.imgs && (
            <div style={{ paddingTop: '30px' }}>
              <span style={{ fontSize: '30px' }}>Gallery</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {project.imgs.map((i) => (
                  <div
                    key={i.src}
                    style={{ display: 'flex', flexDirection: 'column', aspectRatio: 1 }}
                  >
                    <Image
                      src={i}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
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
