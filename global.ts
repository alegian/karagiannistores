import {routing} from '@/i18n/routing';
import enMessages from '@/messages/en.json';
import elMessages from '@/messages/el.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof enMessages | typeof elMessages;
  }
}
