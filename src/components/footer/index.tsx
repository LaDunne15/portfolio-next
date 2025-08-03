'use client';
import { GlassElement } from '../glassElement/GlassElement';

export const Footer = () => {
  return (
    <GlassElement width="100%" height="auto" radius={0} depth={1}>
      <div style={{ padding: '30px' }}>
        <div></div>
        <div>
          <span>Small steps today lead to a great journey tomorrow</span>
          <div>Portfolio v3.0 © 2025 Osh</div>
        </div>
      </div>
    </GlassElement>
  );
};
