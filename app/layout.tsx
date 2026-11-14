import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Nuktah — Stop entering grades twice.',
  description: 'Photograph a handwritten grade sheet. Nuktah reads it, matches every student, and turns it into organized digital grades.',
  metadataBase: new URL('https://nuktah.app'),
  alternates: { canonical: 'https://nuktah.app' },
  openGraph: {
    title: 'Nuktah — Stop entering grades twice.',
    description: 'From paper grade sheet to organized digital grades.',
    url: 'https://nuktah.app',
    siteName: 'Nuktah',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}