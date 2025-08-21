'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GlassElement } from '@/components/glassElement/GlassElement';
import { X } from 'lucide-react';

import s from '@/styles/PhotoModal.module.scss';
import { getContrastColor } from '@/helpers/color';

type PhotoModalContextType = {
  open: (gallery: StaticImageData[], index: number, color: string) => void;
  close: () => void;
};

const PhotoModalContext = createContext<PhotoModalContextType | undefined>(undefined);

export function PhotoModalProvider({ children }: { children: ReactNode }) {
  const [gallery, setGallery] = useState<StaticImageData[]>([]);
  const [color, setColor] = useState<string>('#000');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const contrastColor = getContrastColor(color);
  const onePhoto = gallery.length === 1;

  const open = (gallery: StaticImageData[], index: number, color: string) => {
    setGallery(gallery);
    setIndex(index);
    setIsOpen(true);
    setColor(color);
  };

  const close = () => {
    setGallery([]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const prevPhoto = () => {
    setIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <PhotoModalContext.Provider value={{ open, close }}>
      {children}
      {gallery.length > 0 && (
        <div
          className={s.modalContainer}
          style={
            {
              '--main-color': color,
              '--contrast-color': contrastColor,
            } as React.CSSProperties
          }
        >
          <GlassElement width="100%" height="100%" radius={0} depth={1} chromaticAberration={5}>
            <div className={s.photoContainer}>
              <Image src={gallery[index]} alt="selected" fill style={{ objectFit: 'contain' }} />
              {!onePhoto && (
                <button className={s.prev} onClick={prevPhoto}>
                  <span className={s.iconContainer}>{'<'}</span>
                </button>
              )}
              {!onePhoto && (
                <button className={s.next} onClick={nextPhoto}>
                  <span className={s.iconContainer}>{'>'}</span>
                </button>
              )}

              <button className={s.close} onClick={close}>
                <span className={s.iconContainer}>
                  <X />
                </span>
              </button>
            </div>
          </GlassElement>
        </div>
      )}
    </PhotoModalContext.Provider>
  );
}

export const usePhotoModal = () => {
  const ctx = useContext(PhotoModalContext);
  if (!ctx) {
    throw new Error('usePhotoModal must be used inside PhotoModalProvider');
  }
  return ctx;
};
