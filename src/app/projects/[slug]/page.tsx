'use client';
import { useParams } from 'next/navigation';

export default function Project() {
  const { slug } = useParams();

  return <div>Project page - slug: {slug}</div>;
}
