import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'מסע חיי עם מתי מור',
  description: 'מופע חד פעמי מרגש ועוצמתי',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='he' dir='rtl' className='h-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script src='https://cdn.jsdelivr.net/gh/yortem/yAccessibility@latest/yaccessibility.js'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      yAccessibility({
        language: 'he',
        statement: '/accessibility-statement.html',
        verticalPosition: 'bottom',
        verticalOffset: 20
      });
    `,
          }}
        ></script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
