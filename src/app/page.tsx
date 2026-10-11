'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { VERIFIED_CLAIMS } from '@/data/mockData';
import {
  Bot,
  ShieldCheck,
  Megaphone,
  Hospital,
  ArrowRight,
  Search,
  AlertOctagon,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Users
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/assistant?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-teal-50/30 to-slate-50 pt-12 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t('National Public Health Portal & Misinformation Shield', 'राष्ट्रीय जनस्वास्थ्य एवं भ्रामक अफवाह निवारण मंच')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t('Empowering India with', 'प्रमाणित स्वास्थ्य जानकारी से')} <br />
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                {t('Verified Medical Truth', 'सशक्त और स्वस्थ भारत')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t(
                'Instant deterministic AI triage, biomedical claim verification, and grassroots ASHA communication kits — grounded directly in ICMR, MoHFW, and WHO clinical standards.',
                'भारतीय आयुर्विज्ञान अनुसंधान परिषद (ICMR), स्वास्थ्य मंत्रालय एवं WHO दिशानिर्देशों द्वारा सत्यापित एआई परामर्श, भ्रामक स्वास्थ्य दावों की पड़ताल और आशा कार्यकर्ताओं हेतु आसान मार्गदर्शिका।'
              )}
            </p>

            {/* Main Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto pt-2">
              <div className="relative flex items-center shadow-lg rounded-2xl bg-white border border-slate-200 p-2 focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(
                    'Ask any health symptom or check a viral claim (e.g., Dengue platelet myths, Dengue fever)...',
                    'कोई भी लक्षण पूछें या अफवाह जांचें (उदा. डेंगू में पपीते के पत्ते, बुखार के उपचार)...'
                  )}
                  className="w-full px-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
                >
                  <span>{t('Search / Ask', 'पूछें')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">{t('Popular:', 'लोकप्रिय खोजें:')}</span>
              <Link href="/verify" className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors">
                {t('Dengue & Papaya Leaf', 'डेंगू और पपीता')}
              </Link>
              <Link href="/verify" className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors">
                {t('Antibiotics for Flu', 'फ्लू में एंटीबायोटिक')}
              </Link>
              <Link href="/campaigns" className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors">
                {t('ASHA Heatwave Guide', 'लू से बचाव')}
              </Link>
              <Link href="/resources" className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors">
                {t('Ayushman Mandirs', 'आयुष्मान आरोग्य मंदिर')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Red-Flag Triage Quick Alert Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-900">
                  {t('Severe Emergency Danger Signs Triage', 'अति-आपातकालीन खतरे के लक्षण')}
                </h3>
                <p className="text-xs text-red-700">
                  {t(
                    'Chest pain, face drooping, venomous snakebite, or severe burns require IMMEDIATE care. Do not delay with home remedies.',
                    'सीने में दर्द, लकवे के लक्षण, सांप का काटना या गंभीर जलन होने पर बिना देरी किए तुरंत एम्बुलेंस 108 पर कॉल करें।'
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="tel:108"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>{t('Call 108 Ambulance', '108 एम्बुलेंस लगाएं')}</span>
              </a>
              <Link
                href="/assistant"
                className="bg-white hover:bg-red-100 text-red-800 font-semibold px-4 py-2 rounded-xl text-xs border border-red-300 transition-colors"
              >
                {t('Symptom Triage', 'लक्षण जांचें')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {t('Core Platform Pillars', 'मंच के प्रमुख स्तंभ')}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {t(
              'Designed to bridge clinical expertise with community accessibility',
              'चिकित्सीय विश्वसनीयता और जमीनी जनसामान्य के बीच का सेतु'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: AI Assistant */}
          <Link
            href="/assistant"
            className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {t('Grounded AI Assistant', 'प्रमाणित एआई स्वास्थ्य सहायक')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'Deterministic RAG health assistant with red-flag emergency screening and official citation tracking.',
                  'आपातकालीन लक्षणों की पहचान और आधिकारिक चिकित्सीय सलाह देने वाला एआई साथी।'
                )}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
              <span>{t('Launch Assistant', 'सहायक से पूछें')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Pillar 2: Rumor Verifier */}
          <Link
            href="/verify"
            className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                {t('Biomedical Rumor Verifier', 'अफवाह एवं तथ्य सत्यापन')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'Search debunked viral social media claims with direct WhatsApp-shareable fact cards.',
                  'सोशल मीडिया पर वायरल स्वास्थ्य दावों की सच्चाई जानें और व्हाट्सएप पर साझा करें।'
                )}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
              <span>{t('Verify Claims', 'सत्यापन देखें')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Pillar 3: Campaigns & ASHA */}
          <Link
            href="/campaigns"
            className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {t('ASHA & Community Drives', 'आशा व जनस्वास्थ्य अभियान')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'Bilingual door-to-door dialogue scripts for Dengue, Heatwaves, and Maternal Nutrition outreach.',
                  'डेंगू, लू और पोषण अभियानों के लिए आशा कार्यकर्ताओं हेतु द्विभाषी संवाद स्क्रिप्ट।'
                )}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
              <span>{t('View Campaigns', 'अभियान देखें')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Pillar 4: Facility Directory */}
          <Link
            href="/resources"
            className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Hospital className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {t('Verified Facility Index', 'प्रमाणित अस्पताल निर्देशिका')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'Find Ayushman Arogya Mandirs, District Hospitals, and Tele-MANAS Mental Health Centers.',
                  'आयुष्मान आरोग्य मंदिर, जिला अस्पताल और निःशुल्क टेली-मानस केंद्रों की सूची।'
                )}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>{t('Find Hospitals', 'केंद्र खोजें')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Verified Claims Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t('Trending Health Claims Fact-Check', 'हालिया स्वास्थ्य दावों की पड़ताल')}
            </h2>
            <p className="text-xs text-slate-600">
              {t('Verified by biomedical evidence and public health directives', 'वैज्ञानिक साक्ष्यों और स्वास्थ्य मंत्रालय के आधार पर जांची गई अफवाहें')}
            </p>
          </div>
          <Link
            href="/verify"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
          >
            <span>{t('View All Fact Checks', 'सभी तथ्य जांचें')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_CLAIMS.slice(0, 3).map((claim) => {
            const isContradicted = claim.verdict === 'contradicted';
            const isSupported = claim.verdict === 'supported';
            return (
              <div
                key={claim.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        isSupported
                          ? 'bg-emerald-100 text-emerald-800'
                          : isContradicted
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {isSupported ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t('VERIFIED TRUE', 'सत्य एवं प्रमाणित')}</span>
                        </>
                      ) : isContradicted ? (
                        <>
                          <XCircle className="w-3 h-3" />
                          <span>{t('DEBUNKED / FALSE', 'गलत एवं भ्रामक')}</span>
                        </>
                      ) : (
                        <>
                          <HelpCircle className="w-3 h-3" />
                          <span>{t('MISLEADING', 'आंशिक / भ्रामक')}</span>
                        </>
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400">{claim.dateVerified}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    &ldquo;{t(claim.claimEn, claim.claimHi)}&rdquo;
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t(claim.summaryEn, claim.summaryHi)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] truncate max-w-[180px]" title={claim.source}>
                    {claim.source}
                  </span>
                  <Link
                    href={`/verify#${claim.id}`}
                    className="text-sky-600 hover:text-sky-700 font-semibold text-[11px] flex items-center gap-1"
                  >
                    <span>{t('Details', 'विस्तार')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community / ASHA Worker Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 to-sky-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 text-teal-200 text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>{t('Grassroots Empowerment: ASHA & ANM Toolkit', 'आशा व एएनएम बहनों के लिए विशेष सामग्री')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('Ready-to-Use Door-to-Door Counseling Scripts', 'घर-घर परामर्श के लिए प्रमाणित संवाद निर्देशिका')}
            </h2>
            <p className="text-sm text-teal-100 leading-relaxed">
              {t(
                'Equip community health workers with bilingual conversational guides to address vaccine hesitancy, heatwave safety, and maternal nutrition myths directly in their local language.',
                'ग्रामीण व शहरी बस्तियों में अंधविश्वासों व भ्रांतियों को दूर करने के लिए हिंदी व अंग्रेजी में सहज संवाद स्क्रिप्ट्स।'
              )}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/campaigns"
                className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <span>{t('Explore ASHA Scripts', 'आशा संवाद स्क्रिप्ट देखें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quizzes"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors border border-white/20"
              >
                {t('Take Myth-Buster Quiz', 'मिथक-भंजक प्रश्नोत्तरी खेलें')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
