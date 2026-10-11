import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SehatSaathi (सेहत साथी) | Public Health Awareness & Misinformation Verification',
  description: 'Grounded against official guidelines from ICMR, MoHFW, and WHO. AI Health Assistant, Rumor Debunker, ASHA Campaign Playbooks, and Facility Directory.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        <LanguageProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
