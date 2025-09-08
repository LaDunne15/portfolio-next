import About from '@/components/pages/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | About',
  description: 'Portfolio',
};

export default function AboutPage() {
  return <About />;
}
