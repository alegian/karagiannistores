import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {DM_Sans, Cormorant_Garamond} from 'next/font/google';
import {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';

const fontSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-next',
});

const fontSerif = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif-next',
  weight: ['400', '500', '600'],
});

export async function generateMetadata({
  params,
}: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className={`${fontSans.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
