'use client';

import { GlassElement } from '@/components/glassElement/GlassElement';
import { File } from 'lucide-react';
import Image from 'next/image';

import GitHub from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Instagram from '@/assets/svg/instagram.svg';
import Link from 'next/link';

import s from '@/styles/About.module.scss';
import { TECH_ITEM_NAMES } from '@/types/project';
import { TechItem } from '@/components/techItem';

export default function AboutPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
        <div style={{ padding: 30 }}>
          <span style={{ textAlign: 'center', display: 'block', height: 'auto', fontSize: '30px' }}>
            About
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
              src={require('../../../public/main.jpg')}
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
            <p>
              I'm a Computer Science student at SRM Institute of Science and Technology. My passion
              lies in building user-friendly solutions that enhance overall user experiences. I am
              currently focused on React Native, Expo, Firebase, and React, leveraging these
              technologies to create responsive and functional applications. One of my ongoing
              projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption
              of stray and pet dogs. The app will soon be published on the Play Store and App Store,
              and it incorporates AI-driven features to guide users through the adoption process. In
              addition to app development, I’ve led the design and development of platforms like the
              GitHub Community SRM website, which serves as an all-in-one platform for the
              community. I’ve also organized and managed events such as hackathons and workshops,
              mentoring others in UI/UX and graphic design. I thrive in Agile Scrum environments and
              believe collaboration and teamwork are essential to delivering successful projects.
              I’m always eager to work on impactful projects that challenge me to grow while also
              contributing to meaningful outcomes. So, whether you're looking for a dedicated
              developer, a creative designer, or a collaborative team member, I’m here to help bring
              ideas to life. Let’s connect and create innovative solutions together!
            </p>
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
                  <TechItem name={i} size={30} />
                ))}
              </div>
            </div>
          </GlassElement>
        </div>
        <div>
          <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
            <div style={{ padding: '30px', display: 'flex', gap: '15px' }}>
              <Link href="/" className="link">
                <GitHub className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <LinkedIn className={s.linkIcon} />
              </Link>
              <Link href="/" className="link">
                <Instagram className={s.linkIcon} />
              </Link>
            </div>
          </GlassElement>
        </div>
      </div>
    </main>
  );
}
