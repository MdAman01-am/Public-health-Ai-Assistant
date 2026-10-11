'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  BookOpen,
  Pill,
  Heart,
  Bug,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function LearnPage() {
  const { language, t } = useLanguage();

  const modules = [
    {
      id: 'amr',
      titleEn: 'Antimicrobial Resistance (AMR) & Antibiotic Stewardship',
      titleHi: 'दवा प्रतिरोधकता (AMR) और एंटीबायोटिक का सही उपयोग',
      icon: Pill,
      badgeEn: 'ICMR Priority',
      badgeHi: 'ICMR प्राथमिकता',
      summaryEn: 'Why taking antibiotics for cold and flu creates drug-resistant superbugs, destroying future treatment options.',
      summaryHi: 'सर्दी और फ्लू में एंटीबायोटिक खाने से सुपरबग्स कैसे बनते हैं और यह क्यों भविष्य के इलाजों को बेअसर करता है।',
      pointsEn: [
        'Antibiotics kill bacteria, not viruses (colds, cough, dengue are viral).',
        'Never take leftover antibiotics or buy scheduled drugs without a valid doctor prescription.',
        'Always complete the exact prescribed course if clinically initiated for bacterial infections.'
      ],
      pointsHi: [
        'एंटीबायोटिक केवल बैक्टीरिया को मारते हैं, वायरस (सर्दी, खांसी, डेंगू) पर इनका कोई असर नहीं होता।',
        'पुरानी बची हुई दवाइयां न खाएं और बिना डॉक्टर के पर्चे के मेडिकल स्टोर से एंटीबायोटिक न खरीदें।',
        'डॉक्टर द्वारा शुरू किए गए एंटीबायोटिक कोर्स को बीच में अधूरा न छोड़ें।'
      ]
    },
    {
      id: 'nutrition',
      titleEn: 'The Golden 1,000 Days: Maternal & Infant Nutrition',
      titleHi: 'पहले 1000 सुनहरे दिन: मातृ एवं शिशु पोषण',
      icon: Heart,
      badgeEn: 'POSHAN Abhiyaan',
      badgeHi: 'पोषण अभियान',
      summaryEn: 'From conception to a child’s 2nd birthday, nutrition shapes 80% of brain development and life-long immunity.',
      summaryHi: 'गर्भधारण से बच्चे के 2 साल तक का समय उसके 80% मानसिक विकास और आजीवन रोग प्रतिरोधक क्षमता की नींव रखता है।',
      pointsEn: [
        'Daily Iron Folic Acid (IFA) tablets after lunch with citrus/water, never tea/milk.',
        'Exclusive breastfeeding for the first 6 months — not even water is required.',
        'Timely introduction of soft, mashed diverse foods at 6 months alongside continued breastfeeding.'
      ],
      pointsHi: [
        'दोपहर के भोजन के बाद 1 लाल गोली (आयरन) नींबू पानी या सादे पानी से लें, चाय या दूध के साथ न लें।',
        'पहले 6 महीने केवल मां का दूध — पानी या घुट्टी भी न दें।',
        '6 महीने पूरे होने पर स्तनपान के साथ-साथ नरम, मसला हुआ पौष्टिक ऊपरी आहार शुरू करें।'
      ]
    },
    {
      id: 'vector',
      titleEn: 'Vector-Borne Diseases: Dengue, Malaria & Chikungunya',
      titleHi: 'मच्छर जनित रोग: डेंगू, मलेरिया और चिकनगुनिया',
      icon: Bug,
      badgeEn: 'National Health Mission',
      badgeHi: 'राष्ट्रीय स्वास्थ्य मिशन',
      summaryEn: 'How to break the mosquito breeding cycle and identify critical warning signs of severe dehydration or internal bleeding.',
      summaryHi: 'मच्छरों के प्रजनन चक्र को कैसे तोड़ें और खतरनाक लक्षणों (जैसे आंतरिक रक्तस्राव या डिहाइड्रेशन) को पहचानें।',
      pointsEn: [
        'Clean, stagnant water in coolers and pots is where Aedes mosquitoes breed.',
        'High fever, retro-orbital eye pain, and extreme fatigue require NS1 antigen testing on days 1-3.',
        'Avoid NSAIDs like Ibuprofen/Aspirin; only Paracetamol and oral hydration should be used.'
      ],
      pointsHi: [
        'कूलर, गमलों और छतों के साफ पानी में एडिस मच्छर पनपते हैं — हर रविवार ड्राई डे मनाएं।',
        'तेज बुखार और आंखों के पीछे दर्द होने पर 1-3 दिन के भीतर NS1 एंटीजन टेस्ट करवाएं।',
        'बुखार में ब्रूफेन या एस्पिरिन न लें; केवल पैरासिटामोल और ओआरएस घोल का सेवन करें।'
      ]
    },
    {
      id: 'ncd',
      titleEn: 'Silent Killers: Hypertension & Diabetes Screening',
      titleHi: 'मूक रोग: उच्च रक्तचाप (BP) और मधुमेह (शुगर) जांच',
      icon: Activity,
      badgeEn: 'Ayushman Bharat',
      badgeHi: 'आयुष्मान भारत',
      summaryEn: 'Free annual non-communicable disease (NCD) screening available at every Ayushman Arogya Mandir for all adults above 30.',
      summaryHi: '30 वर्ष से अधिक उम्र के सभी नागरिकों के लिए प्रत्येक आयुष्मान आरोग्य मंदिर में मुफ्त वार्षिक बीपी और शुगर जांच।',
      pointsEn: [
        'High blood pressure often has no symptoms until it causes a stroke or heart attack.',
        'Reduce dietary sodium: consume less than 5 grams of salt per day.',
        '30 minutes of brisk walking 5 days a week substantially lowers cardiovascular risk.'
      ],
      pointsHi: [
        'हाई बीपी के अक्सर कोई लक्षण नहीं दिखते, इसलिए 30 की उम्र के बाद साल में एक बार जांच जरूर कराएं।',
        'भोजन में नमक की मात्रा सीमित करें (प्रतिदिन 5 ग्राम से कम)।',
        'सप्ताह में 5 दिन कम से कम 30 मिनट तेज गति से टहलें।'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t('Public Health Literacy Modules', 'जनस्वास्थ्य साक्षरता पाठ')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Evidence-Based Health Learning Modules', 'वैज्ञानिक स्वास्थ्य शिक्षा व जागरूकता')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {t(
            'Bite-sized, clinically audited learning modules summarizing national health guidelines into actionable daily practices for families and caregivers.',
            'राष्ट्रीय स्वास्थ्य दिशानिर्देशों पर आधारित छोटे और व्यावहारिक पाठ जो हर परिवार को स्वस्थ रहने में मदद करते हैं।'
          )}
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {t(m.badgeEn, m.badgeHi)}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 leading-snug">
                  {t(m.titleEn, m.titleHi)}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(m.summaryEn, m.summaryHi)}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-800 block mb-2">
                    {t('Key Clinical Guidelines:', 'मुख्य चिकित्सीय बिंदु:')}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {(language === 'hi' ? m.pointsHi : m.pointsEn).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/quizzes"
                  className="text-sky-600 hover:text-sky-700 font-semibold text-xs flex items-center gap-1.5"
                >
                  <span>{t('Test your understanding with Quiz', 'प्रश्नोत्तरी में ज्ञान परखें')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
