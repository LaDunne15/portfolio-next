import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'en' | 'ua')) {
    locale = routing.defaultLocale;
  }

  const messages = await (locale === 'en'
    ? import('../../locales/en.json')
    : import(`../../locales/${locale}.json`));

  return {
    locale,
    messages: messages.default,
  };
});
