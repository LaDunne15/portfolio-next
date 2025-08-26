'use client';

import { GlassElement } from '@/components/glassElement/GlassElement';
import { File } from 'lucide-react';
import Image from 'next/image';

import GitHubIcon from '@/assets/svg/github.svg';
import LinkedInIcon from '@/assets/svg/linkedin.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';
import Link from 'next/link';

import s from '@/styles/About.module.scss';
import { TECH_ITEM_NAMES } from '@/types/project';
import { TechItem } from '@/components/techItem';

import mainImage from '../../../../public/main.jpg';

export default function AboutPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: 30 }}>
          <span style={{ textAlign: 'center', display: 'block', height: 'auto', fontSize: '30px' }}>
            ABOUT
          </span>
        </div>
      </GlassElement>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div
          style={{
            padding: 30,
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            justifyContent: 'stretch',
          }}
        >
          <div
            style={{
              aspectRatio: 1,
              height: '100%',
              width: '100%',
              maxWidth: '40%',
            }}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: 1,
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              src={mainImage}
              alt=""
            />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <p>Bla bla bla</p>
            <div>
              <button
                style={{
                  background: 'none',
                  borderRadius: '10px',
                  padding: '10px 20px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  border: '1px solid black',
                }}
              >
                <File />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </GlassElement>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
        <div style={{ flex: 1 }}>
          <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
            <div style={{ padding: '30px' }}>
              <span style={{ fontSize: 25 }}>Skills</span>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                {TECH_ITEM_NAMES.map((i) => (
                  <TechItem key={i} name={i} size={30} />
                ))}
              </div>
            </div>
          </GlassElement>
        </div>
        <div>
          <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
            <div style={{ padding: '30px', display: 'flex', gap: '15px' }}>
              <Link href="/" className="link">
                <Image src={GitHubIcon} alt="" className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Image src={LinkedInIcon} alt="" className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Image src={InstagramIcon} alt="" className={s.linkIcon} />
              </Link>
            </div>
          </GlassElement>
        </div>
      </div>
    </main>
  );
}
