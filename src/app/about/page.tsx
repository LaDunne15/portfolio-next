'use client';
import dynamic from 'next/dynamic';

// Динамічний імпорт — вимикає SSR
const PaperCanvas2 = dynamic(() => import('@/components/paperCanvas2'), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <main
      style={{
        background: 'white',
      }}
    >
      <h1>Paper.js у Next.js</h1>
      <PaperCanvas2 />
    </main>
  );
}
