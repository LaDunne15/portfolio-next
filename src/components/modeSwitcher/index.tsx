'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setMode } from '@/store/slices/modeSlice';
import { GlassElement } from '../glassElement/GlassElement';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import s from '@/styles/Switch.module.scss';

export default function ModeSwitcher() {
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();
  const t = useTranslations('mode');

  const [isAtBottom, setIsAtBottom] = useState(false);

  const toggleMode = () => {
    const newMode = mode === 'full' ? 'light' : 'full';
    dispatch(setMode(newMode));
    document.cookie = `mode=${newMode}; path=/; max-age=31536000`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollBottom >= docHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${s.switch} ${isAtBottom ? s.top : ''}`}>
      <GlassElement width="auto" height="auto" radius={10} depth={1}>
        <div className={s.switchContainer}>
          <h5>{mode === 'full' ? t('Full mode') : t('Lite mode')}</h5>
          <button onClick={toggleMode} className={s.button}>
            {mode === 'full' ? t('Switch to Lite') : t('Switch to Full')}
          </button>
        </div>
      </GlassElement>
    </div>
  );
}
