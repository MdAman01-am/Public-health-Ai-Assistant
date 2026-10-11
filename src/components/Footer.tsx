'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle, HeartHandshake, ExternalLink, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      {/* Medical Disclaimer Alert */}
      <div className="bg-amber-950/50 border-b border-amber-800/40 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed">
            <strong>{t('Medical Disclaimer:', 'चिकित्सीय अस्वीकरण:')}</strong>{' '}
            {t(
              'SehatSaathi provides public health awareness, education, and verified reference information only. It is NOT a clinical diagnostic tool, medical advice provider, or prescription substitute. In any medical emergency or acute condition, immediately call 112 / 108 or consult a registered medical practitioner.',
              'सेहत साथी केवल जनस्वास्थ्य जागरूकता, शिक्षा और सत्यापित संदर्भ जानकारी प्रदान करता है। यह नैदानिक उपकरण (Diagnostic Tool) या डॉक्टर की पर्ची का विकल्प नहीं है। किसी भी आपात स्थिति में तुरंत 112 या 108 पर संपर्क करें अथवा पंजीकृत डॉक्टर से मिलें।'
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SehatSaathi (सेहत साथी)
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t(
                'An accessible, bilingual digital public health companion designed to democratize verified healthcare literacy, debunk rampant health misinformation, and empower community health workers (ASHA) across India.',
                'एक सुलभ, द्विभाषी जनस्वास्थ्य मंच जो वैज्ञानिक स्वास्थ्य साक्षरता को बढ़ावा देने, स्वास्थ्य संबंधी भ्रामक अफवाहों का खंडन करने और आशा कार्यकर्ताओं को सशक्त बनाने के लिए समर्पित है।'
              )}
            </p>
            <div className="flex items-center gap-3 text-xs text-teal-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('Strictly Grounded in ICMR, MoHFW & WHO Guidelines', 'ICMR, स्वास्थ्य मंत्रालय व WHO दिशानिर्देशों द्वारा प्रमाणित')}</span>
            </div>
          </div>

          {/* Quick Helplines */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t('National Helplines', 'राष्ट्रीय हेल्पलाइन')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-400">108</span> — {t('Emergency Ambulance', 'एम्बुलेंस')}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-400">112</span> — {t('All-in-One National Emergency', 'राष्ट्रीय आपातकाल')}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-400">1075</span> — {t('National Health Helpline', 'स्वास्थ्य हेल्पलाइन')}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-400">14416</span> — {t('Tele-MANAS Mental Health', 'टेली-मानस मानसिक स्वास्थ्य')}
              </li>
            </ul>
          </div>

          {/* Official Verification Sources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              {t('Official Knowledge Sources', 'सत्यापित स्रोत')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://main.mohfw.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
                >
                  <span>MoHFW India</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.icmr.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
                >
                  <span>Indian Council of Medical Research (ICMR)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int/india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
                >
                  <span>World Health Organization (WHO) India</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-teal-400 hover:underline block pt-1"
                >
                  {t('Accessibility & Voice Assistance', 'सुलभता एवं आवाज सहायता')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SehatSaathi / Bridge Care. Built with Next.js 16, React 19 & Tailwind CSS v4.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Notice</Link>
            <Link href="/accessibility" className="hover:text-slate-300">Accessibility</Link>
            <Link href="/admin" className="hover:text-slate-300">Reviewer Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
