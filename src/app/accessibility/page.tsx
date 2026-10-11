'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  SunMoon,
  Globe,
  Mic,
  Volume2,
  Eye,
  CheckCircle2
} from 'lucide-react';

export default function AccessibilityPage() {
  const { language, toggleLanguage, highContrast, toggleHighContrast, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
          <Eye className="w-3.5 h-3.5" />
          <span>{t('Universal Design & Inclusion', 'सार्वभौमिक सुलभता एवं समावेशन')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Accessibility & Assistive Features', 'सुलभता एवं सहायक सुविधाएं')}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {t(
            'SehatSaathi is engineered according to WCAG 2.1 AA standards to ensure every citizen and community health worker, regardless of physical or linguistic barriers, can access verified health truths.',
            'सेहत साथी को WCAG 2.1 AA मानकों के तहत तैयार किया गया है ताकि हर नागरिक बिना किसी भाषाई या दृश्य बाधा के प्रमाणित स्वास्थ्य ज्ञान प्राप्त कर सके।'
          )}
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language Preference Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {t('Bilingual Language Switcher', 'द्विभाषी भाषा चयन')}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {t(
                'Seamless toggle between English and Hindi across all clinical articles, quizzes, and ASHA field scripts.',
                'सभी लेखों, क्विज और आशा संवादों के लिए अंग्रेजी और हिन्दी के बीच तत्काल बदलाव।'
              )}
            </p>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              {t('Active:', 'वर्तमान:')} {language === 'hi' ? 'हिन्दी (Hindi)' : 'English'}
            </span>
            <button
              onClick={toggleLanguage}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-xs"
            >
              {language === 'en' ? 'Switch to हिन्दी' : 'Switch to English'}
            </button>
          </div>
        </div>

        {/* High Contrast Mode Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <SunMoon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {t('High Contrast Visual Mode', 'उच्च कंट्रास्ट दृश्य मोड')}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {t(
                'Increases element contrast ratio for users with low vision or reading in harsh outdoor sunlight.',
                'कम दृष्टि वाले उपयोगकर्ताओं या तेज धूप में पढ़ने वालों के लिए दृश्य स्पष्टता बढ़ाता है।'
              )}
            </p>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              {t('Status:', 'स्थिति:')} {highContrast ? t('Enabled', 'सक्रिय') : t('Standard', 'सामान्य')}
            </span>
            <button
              onClick={toggleHighContrast}
              className={`font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-xs ${
                highContrast
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {highContrast ? t('Disable Contrast', 'कंट्रास्ट बंद करें') : t('Enable High Contrast', 'कंट्रास्ट चालू करें')}
            </button>
          </div>
        </div>
      </div>

      {/* Assistive Technologies Guide */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          {t('Supported Assistive Technologies', 'समर्थित सहायक तकनीकें')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Mic className="w-4 h-4 text-sky-600" />
              <span>{t('Web Speech Voice Input', 'आवाज द्वारा इनपुट')}</span>
            </div>
            <p>
              {t(
                'Speak your symptoms directly in Hindi or English using the microphone icon on the AI Assistant page.',
                'एआई सहायक पेज पर माइक्रोफोन दबाकर हिंदी या अंग्रेजी में बोलकर प्रश्न पूछ सकते हैं।'
              )}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Volume2 className="w-4 h-4 text-teal-600" />
              <span>{t('Screen Reader Friendly', 'स्क्रीन रीडर अनुकूल')}</span>
            </div>
            <p>
              {t(
                'Full ARIA labels and semantic HTML markup tested with NVDA, JAWS, and Android TalkBack.',
                'दृष्टिबाधित नागरिकों के लिए एनवीडीए और टॉकबैक स्क्रीन रीडर्स के साथ पूर्णतः अनुकूलित।'
              )}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t('Keyboard Navigation', 'कीबोर्ड नेविगेशन')}</span>
            </div>
            <p>
              {t(
                'Every interactive element can be navigated smoothly using the Tab, Enter, and Space keys.',
                'माउस के बिना केवल कीबोर्ड (Tab और Enter) से पूरी वेबसाइट का सुगम संचालन।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
