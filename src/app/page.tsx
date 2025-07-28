'use client';
import dynamic from 'next/dynamic';

// Динамічний імпорт — вимикає SSR
const PaperCanvas = dynamic(() => import('@/components/paperCanvas'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main
      style={{
        background: 'red',
      }}
    >
      {/* <PaperCanvas /> */}
    </main>
  );
}
