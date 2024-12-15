import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'User Login',
  description: 'Interview Task'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interSans.className} antialiased`}>{children}</body>
    </html>
  );
}
