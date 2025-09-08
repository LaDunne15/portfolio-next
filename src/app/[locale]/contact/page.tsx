import Contact from '@/components/pages/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Contact',
};

export default function ContactPage() {
  return <Contact />;
}
