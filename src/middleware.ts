import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // підтримувані мови
  locales: ['en', 'ua'],

  // дефолтна мова без префікса
  defaultLocale: 'en',

  // важливо: англійська буде "as-needed" (тобто без префікса)
  localePrefix: 'as-needed',
});

export const config = {
  // застосовуємо middleware до всіх сторінок, крім _next та статичних файлів
  matcher: ['/((?!_next|.*\\..*).*)'],
};
