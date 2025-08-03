import Link from 'next/link';
import { GlassElement } from '../glassElement/GlassElement';

import GitHub from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Instagram from '@/assets/svg/instagram.svg';

export const GetInTouch = () => {
  return (
    <GlassElement width="100%" height="100%" radius={30} depth={0} chromaticAberration={5}>
      <div
        style={{
          borderRadius: '30px',
          padding: '30px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <span>Get in Touch</span>
          <span>
            If you are interested in my work or want to provide feedback about this website, I am
            open to exchanging ideas .
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          <div>
            <span>Follow me on</span>
            <div>
              <Link href="/">
                <GitHub />
              </Link>
              <Link href="/">
                <LinkedIn />
              </Link>
              <Link href="/">
                <Instagram />
              </Link>
            </div>
          </div>
          <Link href="/contact">
            <div>
              <span>Contact Me</span>
            </div>
          </Link>
        </div>
      </div>
    </GlassElement>
  );
};
