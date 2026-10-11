'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PUBLIC_CAMPAIGNS } from '@/data/mockData';
import {
  Megaphone,
  Users,
  CheckCircle,
  Copy,
  Check,
  Download
} from 'lucide-react';

export default function CampaignsPage() {
  const { language, t } = useLanguage();
  const [selectedCampaignId, setSelectedCampaignId] = useState(PUBLIC_CAMPAIGNS[0].id);
  const [scriptLang, setScriptLang] = useState<'en' | 'hi'>('hi');
  const [copiedScript, setCopiedScript] = useState(false);

  const activeCampaign =
    PUBLIC_CAMPAIGNS.find((c) => c.id === selectedCampaignId) || PUBLIC_CAMPAIGNS[0];

  const handleCopyScript = () => {
    const scripts = scriptLang === 'hi' ? activeCampaign.ashaScriptHi : activeCampaign.ashaScriptEn;
    navigator.clipboard.writeText(scripts.join('\n\n'));
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
          <Users className="w-3.5 h-3.5" />
          <span>{t('Grassroots Public Health & Field Worker Toolkit', 'आशा एवं एएनएम बहनों के लिए जनस्वास्थ्य टूलकिट')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Health Awareness Campaigns & ASHA Playbooks', 'जनस्वास्थ्य अभियान एवं आशा संवाद निर्देशिका')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          {t(
            'Bilingual door-to-door community dialogue guides, preventive action checklists, and evidence-based field communication materials for accredited social health activists (ASHA) and outreach teams.',
            'आशा कार्यकर्ताओं और स्वास्थ्य कार्यकर्ताओं के लिए घर-घर जाकर समझाने हेतु आसान, सम्मानजनक और वैज्ञानिक संवाद गाइड।'
          )}
        </p>
      </div>

      {/* Campaign Selector Tabs */}
      <div className="flex flex-wrap gap-3">
        {PUBLIC_CAMPAIGNS.map((camp) => {
          const isActive = camp.id === selectedCampaignId;
          return (
            <button
              key={camp.id}
              onClick={() => setSelectedCampaignId(camp.id)}
              className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{t(camp.badgeEn, camp.badgeHi)}</span>
                <span className="opacity-70">•</span>
                <span>{t(camp.titleEn, camp.titleHi)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Campaign Details Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Overview & Prevention Checklist */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold inline-block">
              {t(activeCampaign.badgeEn, activeCampaign.badgeHi)}
            </span>

            <h2 className="text-xl font-bold text-slate-900">
              {t(activeCampaign.titleEn, activeCampaign.titleHi)}
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              {t(activeCampaign.descriptionEn, activeCampaign.descriptionHi)}
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 block">{t('Target Demographic:', 'लक्षित समूह:')}</span>
              <span>{activeCampaign.targetAudience}</span>
            </div>

            <div className="pt-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 block">{t('Standard Protocol:', 'मानक प्रोटोकॉल:')}</span>
              <span>{activeCampaign.guidelineSource}</span>
            </div>
          </div>

          {/* Action Points Checklist */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {t('Core Preventive Actions', 'अनिवार्य रोकथाम कदम')}
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed">
              {(language === 'hi' ? activeCampaign.keyActionsHi : activeCampaign.keyActionsEn).map(
                (act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Right Column: ASHA Door-to-Door Conversational Playbook */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-emerald-600" />
                  <span>{t('ASHA Door-to-Door Counseling Script', 'आशा गृह-भेंट (डोर-टू-डोर) संवाद स्क्रिप्ट')}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t(
                    'Conversational talking points crafted for respectful, persuasive household engagement.',
                    'परिवारों को समझाने और भ्रांतियों को दूर करने हेतु तैयार संवाद बिंदु।'
                  )}
                </p>
              </div>

              {/* Language Toggle for Script */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-semibold">
                <button
                  onClick={() => setScriptLang('hi')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    scriptLang === 'hi' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => setScriptLang('en')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    scriptLang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Script Dialogue Lines */}
            <div className="py-6 space-y-4">
              {(scriptLang === 'hi' ? activeCampaign.ashaScriptHi : activeCampaign.ashaScriptEn).map(
                (line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/80"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {line}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              {t('Official ICMR & MoHFW Behavioral Change Communication (BCC)', 'ICMR एवं स्वास्थ्य मंत्रालय अनुमोदित संचार गाइड')}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyScript}
                className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">{t('Copied!', 'कॉपी हुआ')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t('Copy Script', 'स्क्रिप्ट कॉपी करें')}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  window.print();
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t('Print / Save PDF', 'प्रिंट या पीडीएफ')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
