// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || '';
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  const res = NextResponse.next();

  if (!req.cookies.get('mode')) {
    res.cookies.set('mode', isMobile ? 'light' : 'full');
  }

  return res;
}
