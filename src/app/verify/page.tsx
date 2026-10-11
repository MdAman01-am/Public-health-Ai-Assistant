'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { VERIFIED_CLAIMS } from '@/data/mockData';
import { HealthClaim } from '@/types';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  MessageCircle,
  PlusCircle,
  Copy,
  Check,
  FileText
} from 'lucide-react';

export default function VerifyPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVerdict, setSelectedVerdict] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedClaim, setSubmittedClaim] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter logic
  const filteredClaims = VERIFIED_CLAIMS.filter((c) => {
    const textToMatch = `${c.claimEn} ${c.claimHi} ${c.summaryEn} ${c.summaryHi}`.toLowerCase();
    const matchesSearch = textToMatch.includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesVerdict = selectedVerdict === 'all' || c.verdict === selectedVerdict;
    return matchesSearch && matchesCategory && matchesVerdict;
  });

  const handleCopyCard = (claim: HealthClaim) => {
    const textToCopy = `[SehatSaathi Fact Check]\nClaim: ${claim.claimEn}\nVerdict: ${claim.verdict.toUpperCase()}\nScientific Truth: ${claim.summaryEn}\nSource: ${claim.source}\nVerify at: https://sehatsaathi.gov.in`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(claim.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShareWhatsApp = (claim: HealthClaim) => {
    const shareText = encodeURIComponent(
      `🚨 *Health Fact Check by SehatSaathi (ICMR / MoHFW)* 🚨\n\n*Claim:* "${claim.claimEn}"\n\n*Verdict:* ${claim.verdict.toUpperCase()}\n\n*Scientific Reality:* ${claim.summaryEn}\n\n*Source:* ${claim.source}\n\nStop the spread of unverified medical rumors!`
    );
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  const handleSubmitNewRumor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submittedClaim.trim()) return;
    setSubmitSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedClaim('');
      setSubmitSuccess(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('Biomedical Misinformation Verification Registry', 'बायोमेडिकल तथ्य सत्यापन एवं अफवाह निवारण पंजी')}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('Health Claim & Rumor Verifier', 'स्वास्थ्य अफवाह व दावा सत्यापन')}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {t(
              'Real-time fact-checking database categorizing viral healthcare claims with official guidelines from ICMR, MoHFW, and WHO.',
              'सोशल मीडिया पर फैलने वाले स्वास्थ्य दावों की वैज्ञानिक पड़ताल — आईसीएमआर और विश्व स्वास्थ्य संगठन के आधिकारिक मानकों के आधार पर।'
            )}
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm self-start md:self-auto transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{t('Submit Rumor for Fact-Check', 'सत्यापन हेतु अफवाह भेजें')}</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(
              'Search rumors by keyword (e.g., Papaya Dengue, Lemon cancer, Antibiotics, ORS)...',
              'अफवाह या कीवर्ड खोजें (उदा. डेंगू पपीता, कैंसर नींबू, एंटीबायोटिक, ओआरएस)...'
            )}
            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-slate-500 mr-1">{t('Category:', 'श्रेणी:')}</span>
            {['all', 'rumor', 'maternal', 'communicable', 'nutrition'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all'
                  ? t('All', 'सभी')
                  : cat === 'rumor'
                  ? t('Viral Rumors', 'वायरल अफवाहें')
                  : cat === 'maternal'
                  ? t('Maternal & Child', 'मातृ एवं शिशु')
                  : cat === 'communicable'
                  ? t('Infections', 'संक्रामक रोग')
                  : t('Nutrition', 'पोषण')}
              </button>
            ))}
          </div>

          {/* Verdict Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-slate-500 mr-1">{t('Verdict:', 'निर्णय:')}</span>
            {['all', 'supported', 'contradicted', 'misleading'].map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVerdict(v)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedVerdict === v
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {v === 'all'
                  ? t('All Verdicts', 'सभी निर्णय')
                  : v === 'supported'
                  ? t('Verified True', 'सत्य')
                  : v === 'contradicted'
                  ? t('Debunked / False', 'असत्य')
                  : t('Misleading', 'भ्रामक')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Claims Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClaims.map((claim) => {
          const isSupported = claim.verdict === 'supported';
          const isContradicted = claim.verdict === 'contradicted';

          return (
            <div
              key={claim.id}
              id={claim.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                {/* Badge & Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      isSupported
                        ? 'bg-emerald-100 text-emerald-800'
                        : isContradicted
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {isSupported ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t('VERIFIED TRUE (Supported by Science)', 'सत्य एवं प्रमाणित')}</span>
                      </>
                    ) : isContradicted ? (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>{t('CONTRADICTED / DEBUNKED (False)', 'असत्य एवं खंडित')}</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>{t('MISLEADING / LACKS EVIDENCE', 'भ्रामक / अपूर्ण साक्ष्य')}</span>
                      </>
                    )}
                  </span>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {claim.dateVerified}
                  </span>
                </div>

                {/* Claim Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                  &ldquo;{t(claim.claimEn, claim.claimHi)}&rdquo;
                </h3>

                {/* Plain English Summary */}
                <div className="bg-slate-50 rounded-xl p-3 mb-3 border border-slate-100">
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {t(claim.summaryEn, claim.summaryHi)}
                  </p>
                </div>

                {/* Detailed Medical Explanation */}
                <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed mb-4">
                  <span className="font-semibold text-slate-800 block">
                    {t('Biomedical Breakdown:', 'वैज्ञानिक विश्लेषण:')}
                  </span>
                  <p>{t(claim.scientificExplanationEn, claim.scientificExplanationHi)}</p>
                </div>
              </div>

              {/* Footer with Source & Share Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-teal-800 bg-teal-50/80 px-2.5 py-1.5 rounded-lg border border-teal-100">
                  <FileText className="w-3.5 h-3.5 shrink-0 text-teal-600" />
                  <span className="font-medium truncate">{claim.source}</span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => handleShareWhatsApp(claim)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t('Share on WhatsApp', 'व्हाट्सएप पर शेयर')}</span>
                  </button>

                  <button
                    onClick={() => handleCopyCard(claim)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2 px-3 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === claim.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">{t('Copied!', 'कॉपी हुआ')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t('Copy', 'कॉपी')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredClaims.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">
            {t('No claims found matching your filter.', 'आपकी खोज के अनुरूप कोई दावा नहीं मिला।')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('Try searching for different keywords or submit this claim for editorial audit.', 'अन्य शब्द खोजें अथवा नया दावा जांच के लिए भेजें।')}
          </p>
        </div>
      )}

      {/* Submit Rumor Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4 animate-scaleUp">
            <h3 className="text-lg font-bold text-slate-900">
              {t('Submit Suspicious Health Rumor', 'संदिग्ध स्वास्थ्य अफवाह भेजें')}
            </h3>
            <p className="text-xs text-slate-600">
              {t(
                'Saw an unverified remedy or viral message on WhatsApp, Facebook, or Telegram? Paste it here for ICMR/MoHFW peer review.',
                'व्हाट्सएप या सोशल मीडिया पर कोई संदिग्ध संदेश देखा? इसे सत्यापन के लिए भेजें।'
              )}
            </p>

            {submitSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-800">
                  {t('Claim Submitted Successfully!', 'दावा सफलतापूर्वक दर्ज किया गया!')}
                </h4>
                <p className="text-xs text-emerald-700">
                  {t('Our medical editorial desk will review and publish a verified fact card.', 'हमारी मेडिकल टीम इसका सत्यापन कर जल्द प्रकाशित करेगी।')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitNewRumor} className="space-y-4">
                <textarea
                  rows={4}
                  value={submittedClaim}
                  onChange={(e) => setSubmittedClaim(e.target.value)}
                  placeholder={t(
                    'Paste the claim or message text here (e.g., "Boiling garlic in milk cures asthma")...',
                    'दावा यहाँ पेस्ट करें (उदा. "दूध में लहसुन उबालने से दमा ठीक होता है")...'
                  )}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-slate-800"
                  required
                />

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    {t('Cancel', 'रद्द करें')}
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 text-xs rounded-xl transition-colors shadow-xs"
                  >
                    {t('Submit for Review', 'समीक्षा हेतु भेजें')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
