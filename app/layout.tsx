import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import '@/app/globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karagianni Stores',
  description: 'placeholder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
