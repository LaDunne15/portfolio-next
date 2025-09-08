import '@/styles/global.css';
import Home from '@/components/pages/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
};

export default function HomePage() {
  return <Home />;
}
