import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'J K Enterprise | Expert Manpower & Services',
  description: 'Leading provider of manpower solutions, staff management, and corporate services in Gujarat.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
