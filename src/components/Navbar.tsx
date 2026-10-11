'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { 
  HeartHandshake, 
  Bot, 
  ShieldCheck, 
  Megaphone, 
  Hospital, 
  HelpCircle, 
  BookOpen, 
  Shield, 
  Globe, 
  Menu, 
  X, 
  PhoneCall,
  SunMoon
} from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, highContrast, toggleHighContrast, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', labelEn: 'Home', labelHi: 'होम', icon: HeartHandshake },
    { href: '/assistant', labelEn: 'AI Assistant', labelHi: 'एआई सहायक', icon: Bot },
    { href: '/verify', labelEn: 'Verify Rumor', labelHi: 'सत्यापन', icon: ShieldCheck },
    { href: '/campaigns', labelEn: 'Campaigns & ASHA', labelHi: 'अभियान व आशा', icon: Megaphone },
    { href: '/resources', labelEn: 'Find Facility', labelHi: 'अस्पताल खोजें', icon: Hospital },
    { href: '/quizzes', labelEn: 'Quiz', labelHi: 'प्रश्नोत्तरी', icon: HelpCircle },
    { href: '/learn', labelEn: 'Learn', labelHi: 'सीखें', icon: BookOpen },
    { href: '/admin', labelEn: 'Portal', labelHi: 'प्रशासन', icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-colors">
      {/* Emergency Helpline Ribbon */}
      <div className="bg-red-600 text-white text-xs py-1.5 px-4 font-medium flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <PhoneCall className="w-3.5 h-3.5 animate-pulse text-red-200" />
          <span>
            {t('Emergency Helplines (India):', 'राष्ट्रीय आपातकालीन हेल्पलाइन:')}{' '}
            <strong className="underline ml-1">Ambulance: 108</strong> |{' '}
            <strong className="underline">National Emergency: 112</strong> |{' '}
            <strong className="underline">Health Line: 1075</strong> |{' '}
            <strong className="underline">Tele-MANAS: 14416</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-red-100 text-[11px]">
            {t('Grounded by ICMR • MoHFW • WHO', 'ICMR • MoHFW • WHO दिशानिर्देशों पर आधारित')}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold bg-gradient-to-r from-sky-700 to-teal-700 bg-clip-text text-transparent">
                  SehatSaathi
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-teal-100 text-teal-800">
                  {t('सेहत साथी', 'Bridge Care')}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 tracking-tight -mt-0.5">
                {t('Public Health Literacy & Fact Verification', 'जनस्वास्थ्य साक्षरता एवं तथ्य सत्यापन मंच')}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold shadow-sm border border-sky-100'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                  <span>{t(item.labelEn, item.labelHi)}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language & Contrast */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <button
              onClick={toggleHighContrast}
              className={`p-2 rounded-lg border text-xs transition-colors ${
                highContrast
                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                  : 'border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
              title={t('Toggle High Contrast', 'उच्च कंट्रास्ट बदलें')}
            >
              <SunMoon className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
                <span>{t(item.labelEn, item.labelHi)}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
