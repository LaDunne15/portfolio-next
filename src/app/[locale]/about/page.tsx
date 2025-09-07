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
import { useLocale, useTranslations } from 'next-intl';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';
import { getProfileInfo } from '@/helpers/profileInfo/profileInfo';

export default function AboutPage() {
  const t = useTranslations('about');
  const radius = useBreakpointValue({ base: 10, md: 20, lg: 40 });

  const locale = useLocale();

  const profile = getProfileInfo(locale as 'ua' | 'en');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV_Koshelnyi.pdf';
    link.download = 'CV_Koshelnyi.pdf';
    link.click();
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.title}>
          <h2 className="center">{t('ABOUT')}</h2>
        </div>
      </GlassElement>
      <GlassElement width="100%" height="100%" radius={radius} depth={0} chromaticAberration={5}>
        <div className={s.aboutContainer}>
          <div className={s.aboutContainer_imageContainer}>
            <Image src={mainImage} alt="" />
          </div>
          <div className={s.aboutContainer_content}>
            <p>{profile.about}</p>
            <div className={s.aboutContainer_downloadContainer}>
              <button className={s.aboutContainer_download} onClick={handleDownload}>
                <File />
                <span>{t('Download CV')}</span>
              </button>
            </div>
          </div>
        </div>
      </GlassElement>
      <div className={s.additionalInfo}>
        <div className={s.additionalInfo_skills}>
          <GlassElement
            width="100%"
            height="100%"
            radius={radius}
            depth={0}
            chromaticAberration={5}
          >
            <div className={s.additionalInfo_skills_content}>
              <h3>{t('Skills')}</h3>
              <div className={s.additionalInfo_skills_content_list}>
                {TECH_ITEM_NAMES.map((i) => (
                  <TechItem key={i} name={i} size={30} />
                ))}
              </div>
            </div>
          </GlassElement>
        </div>
        <div>
          <GlassElement
            width="auto"
            height="100%"
            radius={radius}
            depth={0}
            chromaticAberration={5}
          >
            <div className={s.additionalInfo_links}>
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
