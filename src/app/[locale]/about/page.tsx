import About from '@/pages/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | About',
  description: 'Portfolio',
};

export default function AboutPage() {
  return <About />;
}
