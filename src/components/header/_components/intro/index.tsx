import LinkedIn from '@/assets/svg/linkedin.svg';
import Github from '@/assets/svg/github.svg';
import { ChAber } from '@/components/chromaticAberration';
import Link from 'next/link';

import s from '@/styles/Header.module.scss';

export const Intro = () => {
  return (
    <div className={s.intro}>
      <span style={{ fontSize: 32 }}>Welcome. My name is</span>
      <ChAber strength={1} active>
        <span style={{ fontSize: 100, lineHeight: '100px', color: 'white' }}>Vlad</span>
      </ChAber>
      <span style={{ fontSize: 24 }}>a fullstack developer</span>
      <span style={{ fontSize: 16 }}>with passion to do various interesting things</span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
        }}
      >
        <Link href="/">
          <LinkedIn style={{ width: '50px', height: '50px', color: '#FFF' }} />
        </Link>
        <Link href="/">
          <Github style={{ width: '50px', height: '50px', color: '#FFF' }} />
        </Link>
      </div>
    </div>
  );
};
