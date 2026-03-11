import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Geist} from 'next/font/google';
import {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';

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

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang={locale}>
      <body className={`${geistSans.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
