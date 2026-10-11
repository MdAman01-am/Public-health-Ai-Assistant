'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HEALTH_FACILITIES } from '@/data/mockData';
import {
  Hospital,
  Search,
  Phone,
  MapPin,
  Clock,
  PhoneCall
} from 'lucide-react';

export default function ResourcesPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [emergencyOnly, setEmergencyOnly] = useState(false);

  const states = Array.from(new Set(HEALTH_FACILITIES.map((f) => f.state)));
  const facilityTypes = Array.from(new Set(HEALTH_FACILITIES.map((f) => f.type)));

  const filteredFacilities = HEALTH_FACILITIES.filter((f) => {
    const text = `${f.name} ${f.city} ${f.state} ${f.services.join(' ')}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesState = selectedState === 'all' || f.state === selectedState;
    const matchesType = selectedType === 'all' || f.type === selectedType;
    const matchesEmergency = !emergencyOnly || f.hasEmergency24x7;
    return matchesSearch && matchesState && matchesType && matchesEmergency;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-2">
          <Hospital className="w-3.5 h-3.5" />
          <span>{t('Public Healthcare Infrastructure Registry', 'सार्वजनिक स्वास्थ्य अधोसंरचना पंजी')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Verified Health Facilities & Emergency Directory', 'प्रमाणित अस्पताल व स्वास्थ्य केंद्र निर्देशिका')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          {t(
            'Search Ayushman Arogya Mandirs, District Hospitals, Tertiary Medical Colleges, and 24x7 Tele-MANAS mental health centres across India.',
            'पूरे भारत में आयुष्मान आरोग्य मंदिर, जिला अस्पताल, मेडिकल कॉलेज और 24x7 टेली-मानस मानसिक स्वास्थ्य केंद्रों की प्रामाणिक सूची।'
          )}
        </p>
      </div>

      {/* Tele-MANAS Highlight Banner */}
      <div className="bg-gradient-to-r from-indigo-900 to-sky-900 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block mb-1">
            {t('National Mental Health Initiative', 'राष्ट्रीय मानसिक स्वास्थ्य पहल')}
          </span>
          <h3 className="text-lg font-bold">
            {t('Tele-MANAS: 24x7 Toll-Free Mental Health Counselling', 'टेली-मानस: 24x7 निःशुल्क मानसिक स्वास्थ्य हेल्पलाइन')}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {t(
              'Confidential support in 20+ Indian languages managed by NIMHANS and MoHFW.',
              'तनाव, अवसाद या चिंता के लिए 20 से अधिक भारतीय भाषाओं में पूर्णतः गोपनीय व निःशुल्क परामर्श।'
            )}
          </p>
        </div>
        <a
          href="tel:14416"
          className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm shrink-0 transition-colors"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{t('Dial 14416 (Toll-Free)', '14416 पर कॉल करें')}</span>
        </a>
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
              'Search by hospital name, city, state, or service (e.g., AIIMS, Varanasi, Snake Venom, Dialysis)...',
              'अस्पताल का नाम, शहर, राज्य या सुविधा खोजें (उदा. एम्स, वाराणसी, एंटी-स्नेक वेनम)...'
            )}
            className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-800"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* State Filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">{t('State:', 'राज्य:')}</span>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">{t('All States', 'सभी राज्य')}</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">{t('Type:', 'प्रकार:')}</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">{t('All Facility Types', 'सभी केंद्र प्रकार')}</option>
              {facilityTypes.map((ft) => (
                <option key={ft} value={ft}>{ft}</option>
              ))}
            </select>
          </div>

          {/* 24x7 Emergency Toggle */}
          <label className="flex items-center gap-2 cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={emergencyOnly}
              onChange={(e) => setEmergencyOnly(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span className="font-semibold text-slate-700">
              {t('24x7 Emergency Only', 'केवल 24x7 आपातकालीन')}
            </span>
          </label>
        </div>
      </div>

      {/* Facilities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((fac) => (
          <div
            key={fac.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {fac.type}
                </span>

                {fac.hasEmergency24x7 ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-800 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    24x7
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">Day Clinic</span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {fac.name}
              </h3>

              <div className="flex items-start gap-1.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
                <span>{fac.address}</span>
              </div>

              {/* Services List */}
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-600 block mb-1">
                  {t('Available Services:', 'उपलब्ध सेवाएं:')}
                </span>
                <div className="flex flex-wrap gap-1">
                  {fac.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Call Action */}
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500 font-medium">
                {fac.city}, {fac.state}
              </span>

              <a
                href={`tel:${fac.phone}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{fac.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredFacilities.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">
            {t('No health facilities found.', 'कोई स्वास्थ्य केंद्र नहीं मिला।')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('Try adjusting your state or facility filters.', 'कृपया अपने फिल्टर बदलकर पुनः प्रयास करें।')}
          </p>
        </div>
      )}
    </div>
  );
}
