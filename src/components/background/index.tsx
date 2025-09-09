'use client';

import { useLayoutEffect } from 'react';

export default function HexGridBackground() {
  useLayoutEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      const hue = Math.round(360 * progress);

      const color1 = `hsl(${hue}, 30%, 85%)`;
      const color2 = `hsl(${(hue + 40) % 360}, 25%, 75%)`;
      const color3 = `hsl(${(hue + 80) % 360}, 20%, 90%)`;

      const gradient = `
        linear-gradient(
          180deg,
          ${color1} 0%,
          ${color2} 70%,
          ${color3} 100%
        )
      `;

      const hexSVG = encodeURIComponent(`
        <svg width="34.64" height="50" viewBox="0 0 34.64 50" xmlns="http://www.w3.org/2000/svg">
          <polygon points="17.32,0 17.32,10 0,20 0,40 17.32,50 34.64,40 34.64,20 17.32,10" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="2"/>
        </svg>
      `);

      const hexGrid = `url("data:image/svg+xml,${hexSVG}")`;

      document.body.style.backgroundImage = `${gradient}, ${hexGrid}`;
      document.body.style.backgroundSize = `100% 100%, 34.64px 50px`;
      document.body.style.backgroundBlendMode = 'overlay';
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
