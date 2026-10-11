'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { QUIZ_QUESTIONS } from '@/data/mockData';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Trophy,
  ArrowRight
} from 'lucide-react';

export default function QuizzesPage() {
  const { language, t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('sehatsaathi_quiz_score');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('sehatsaathi_quiz_score', String(newScore));
      }
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>{t('Public Health Literacy Challenge', 'जनस्वास्थ्य साक्षरता चुनौती')}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('Interactive Myth-Buster Quiz', 'मिथक बनाम तथ्य प्रश्नोत्तरी')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          {t(
            'Test your knowledge against rampant biomedical myths. Backed by ICMR & WHO medical evidence.',
            'स्वास्थ्य संबंधी प्रचलित अंधविश्वासों की सच्चाई परखें। आईसीएमआर और डब्ल्यूएचओ द्वारा प्रमाणित।'
          )}
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100">
            <span className="font-semibold text-slate-700">
              {t('Question', 'प्रश्न')} {currentIdx + 1} {t('of', '/')} {QUIZ_QUESTIONS.length}
            </span>
            <div className="flex items-center gap-1.5 text-amber-600 font-bold">
              <Trophy className="w-4 h-4" />
              <span>{t('Score:', 'अंक:')} {score}</span>
            </div>
          </div>

          {/* Progress line */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {t(currentQ.questionEn, currentQ.questionHi)}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {(language === 'hi' ? currentQ.optionsHi : currentQ.optionsEn).map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === currentQ.correctIndex;

              let btnStyle = 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-800';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-semibold';
                } else {
                  btnStyle = 'border-slate-200 opacity-50 bg-slate-50 text-slate-500';
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(i)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Scientific Explanation Box */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5 animate-fadeIn">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {t('Scientific Reality / Explanation:', 'वैज्ञानिक तथ्य / व्याख्या:')}
              </span>
              <p className="text-xs text-amber-950 leading-relaxed">
                {t(currentQ.explanationEn, currentQ.explanationHi)}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>
                  {currentIdx + 1 === QUIZ_QUESTIONS.length
                    ? t('Complete Quiz', 'प्रश्नोत्तरी समाप्त करें')
                    : t('Next Question', 'अगला प्रश्न')}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Card */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-md">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t('Quiz Completed!', 'प्रश्नोत्तरी पूर्ण हुई!')}
            </h2>
            <p className="text-sm text-slate-600">
              {t('You scored', 'आपने प्राप्त किए')}{' '}
              <strong className="text-slate-900 text-lg">
                {score} / {QUIZ_QUESTIONS.length}
              </strong>
            </p>
          </div>

          {/* Badge Display */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm mx-auto space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t('Earned Badge', 'प्राप्त मेडल')}
            </span>
            <div className="text-sm font-extrabold text-emerald-700">
              {score === QUIZ_QUESTIONS.length
                ? '🏅 ' + t('Master Health Fact-Checker', 'स्वास्थ्य तथ्य विशेषज्ञ')
                : score >= 2
                ? '🥈 ' + t('Certified Health Aware Citizen', 'जागरूक स्वास्थ्य नागरिक')
                : '🌱 ' + t('Health Literacy Learner', 'स्वास्थ्य शिक्षार्थी')}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('Retake Quiz', 'पुनः प्रयास करें')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
