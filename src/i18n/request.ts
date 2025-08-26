import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(({ requestLocale }) => {
  // отримуємо мову із запиту
  const locale = hasLocale(routing.locales, requestLocale) ? requestLocale : routing.defaultLocale;

  return {
    locale,
  };
});
