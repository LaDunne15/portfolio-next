import Projects from '@/pages/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Projects',
};

export default function ProjectsPage() {
  return <Projects />;
}
