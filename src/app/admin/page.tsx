'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Shield,
  Activity,
  CheckCircle
} from 'lucide-react';

interface PendingSubmission {
  id: string;
  claim: string;
  sourcePlatform: string;
  dateReported: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function AdminPage() {
  const { t } = useLanguage();

  const [submissions, setSubmissions] = useState<PendingSubmission[]>([
    {
      id: 'sub-1',
      claim: 'Boiling cloves and ginger in milk cures asthma permanently within 7 days.',
      sourcePlatform: 'WhatsApp Forward',
      dateReported: '2026-10-10',
      status: 'pending',
    },
    {
      id: 'sub-2',
      claim: 'Applying battery acid or potassium permanganate neutralizes Russell viper snake bite.',
      sourcePlatform: 'Facebook Group',
      dateReported: '2026-10-11',
      status: 'pending',
    },
    {
      id: 'sub-3',
      claim: 'Taking paracetamol along with ORS is safe for fever management during dengue.',
      sourcePlatform: 'Telegram Channel',
      dateReported: '2026-10-11',
      status: 'pending',
    },
  ]);

  const handleAction = (id: string, newStatus: 'approved' | 'rejected') => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold mb-2">
          <Shield className="w-3.5 h-3.5" />
          <span>{t('Editorial & Clinical Review Desk', 'संपादकीय एवं चिकित्सीय समीक्षा डेस्क')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Medical Governance & Verification Portal', 'चिकित्सीय शासन एवं सत्यापन प्रबंधन')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          {t(
            'Editorial audit logs, community rumor verification queues, and guideline synchronization with ICMR / MoHFW repositories.',
            'नागरिकों द्वारा दर्ज की गई अफवाहों की समीक्षा, तथ्य कार्ड अनुमोदन और आधिकारिक स्वास्थ्य दिशानिर्देशों का समन्वय।'
          )}
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('Total Verified Claims', 'कुल सत्यापित दावे')}
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">1,480</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>100% Peer-Reviewed</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('Pending Fact-Check Queue', 'प्रतीक्षारत अफवाहें')}
          </div>
          <div className="text-2xl font-black text-amber-600 mt-1">
            {submissions.filter((s) => s.status === 'pending').length}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Requires Medical Board Signoff</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('ASHA Field Dialogues', 'आशा संवाद डाउनलोड')}
          </div>
          <div className="text-2xl font-black text-teal-600 mt-1">14,290</div>
          <div className="text-[11px] text-teal-600 font-semibold mt-1">Active across 12 States</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('Knowledge Sync Status', 'दिशानिर्देश स्थिति')}
          </div>
          <div className="text-lg font-bold text-emerald-600 mt-1 flex items-center gap-1.5">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Active & Synced</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">ICMR / WHO Guideline Base</div>
        </div>
      </div>

      {/* Review Submissions Queue Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {t('Crowdsourced Rumors Audit Queue', 'नागरिकों द्वारा भेजी गई अफवाहों की समीक्षा सूची')}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('Claims reported by users awaiting biomedical categorization.', 'समीक्षा और वैज्ञानिक वर्गीकरण हेतु लंबित दावे।')}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] uppercase tracking-wider font-bold text-slate-500 border-b border-slate-200">
                <th className="py-3.5 px-6">ID & Reported Claim</th>
                <th className="py-3.5 px-6">Source Platform</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Review Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 max-w-md">
                    <div className="font-bold text-slate-900 leading-snug">{sub.claim}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Reference ID: {sub.id}</div>
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-600">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-[11px]">
                      {sub.sourcePlatform}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{sub.dateReported}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        sub.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : sub.status === 'rejected'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {sub.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {sub.status === 'pending' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleAction(sub.id, 'approved')}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors shadow-xs"
                        >
                          {t('Approve', 'स्वीकृत')}
                        </button>
                        <button
                          onClick={() => handleAction(sub.id, 'rejected')}
                          className="bg-rose-100 hover:bg-rose-200 text-rose-800 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors"
                        >
                          {t('Reject', 'अस्वीकृत')}
                        </button>
                      </div>
                    ) : (
                      <span className="text-slate-400 text-[11px] font-medium">Reviewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
