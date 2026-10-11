'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ChatMessage } from '@/types';
import {
  Bot,
  Send,
  Mic,
  MicOff,
  AlertTriangle,
  PhoneCall,
  Trash2,
  ShieldCheck,
  User
} from 'lucide-react';

function AssistantContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q');

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize initial greeting or query
  useEffect(() => {
    const greetingText =
      language === 'hi'
        ? 'नमस्ते! मैं सेहत साथी (SehatSaathi) हूं — आपका साक्ष्य-आधारित स्वास्थ्य साथी। आप मुझसे किसी भी स्वास्थ्य लक्षण, वायरल स्वास्थ्य अफवाह या आपातकालीन प्राथमिक चिकित्सा के बारे में पूछ सकते हैं।'
        : 'Hello! I am SehatSaathi, your evidence-based health companion grounded in ICMR, MoHFW, and WHO clinical standards. How can I assist you with your health query or symptom triage today?';

    setMessages([
      {
        id: 'msg-init',
        sender: 'assistant',
        text: greetingText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: ['ICMR Clinical Guidelines', 'MoHFW Standard Operating Procedures'],
      },
    ]);

    if (initialQuery) {
      sendMessage(initialQuery);
    }
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          language,
        }),
      });

      const data = await res.json();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Could not fetch guidance. Please retry.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isEmergency: data.isEmergency,
        helpline: data.helpline,
        sources: data.sources,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: 'assistant',
          text: t(
            'Unable to connect to health knowledge server. If this is an emergency, please dial 108 or 112 immediately.',
            'स्वास्थ्य सर्वर से संपर्क नहीं हो सका। यदि यह आपात स्थिति है, तो कृपया तुरंत 108 या 112 डायल करें।'
          ),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isEmergency: true,
          helpline: '108',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  // Web Speech API Voice Recognition
  const handleVoiceInput = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        t(
          'Web Speech API is not supported in this browser. Please type your query.',
          'इस ब्राउज़र में स्पीच रिकॉग्निशन समर्थित नहीं है। कृपया लिखकर प्रश्न पूछें।'
        )
      );
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error('Speech recognition error:', err);
      setIsListening(false);
    }
  };

  const quickPrompts = [
    { en: 'Does papaya leaf juice cure Dengue?', hi: 'क्या पपीते के पत्ते डेंगू को ठीक करते हैं?' },
    { en: 'What should I do for severe chest pain?', hi: 'सीने में तेज दर्द होने पर क्या करें?' },
    { en: 'Can I take antibiotics for viral flu?', hi: 'क्या वायरल बुखार में एंटीबायोटिक ले सकते हैं?' },
    { en: 'What is the first aid for snakebite?', hi: 'सांप के काटने पर प्राथमिक उपचार क्या है?' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
              {t('Grounded AI Health Assistant', 'प्रमाणित एआई स्वास्थ्य सहायक')}
            </h1>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              ICMR / WHO RAG
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {t(
              'Real-time red-flag emergency screening & deterministic biomedical answers.',
              'आपातकालीन लक्षणों की त्वरित पहचान और प्रमाणित चिकित्सीय उत्तर।'
            )}
          </p>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: 'msg-init-reset',
                sender: 'assistant',
                text: t(
                  'Chat history cleared. How can I assist you with your health query today?',
                  'संवाद इतिहास रीसेट किया गया। आज आपकी स्वास्थ्य संबंधी क्या सहायता कर सकता हूँ?'
                ),
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              },
            ])
          }
          className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{t('Clear Chat', 'चैट साफ़ करें')}</span>
        </button>
      </div>

      {/* Chat Window */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[600px] overflow-hidden">
        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                      msg.isEmergency
                        ? 'bg-red-600 text-white animate-bounce'
                        : 'bg-gradient-to-tr from-sky-600 to-teal-600 text-white'
                    }`}
                  >
                    {msg.isEmergency ? <AlertTriangle className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-sky-600 text-white rounded-tr-none'
                      : msg.isEmergency
                      ? 'bg-red-50 border-2 border-red-400 text-red-950 rounded-tl-none'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                  }`}
                >
                  {/* Emergency Alert Header inside message */}
                  {msg.isEmergency && (
                    <div className="mb-3 pb-2 border-b border-red-200 flex items-center justify-between gap-2">
                      <span className="font-bold text-red-700 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        {t('RED FLAG MEDICAL EMERGENCY', 'अति-आपातकालीन स्थिति')}
                      </span>
                      {msg.helpline && (
                        <a
                          href={`tel:${msg.helpline}`}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 rounded-lg text-xs flex items-center gap-1"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>{t('Call', 'डायल')} {msg.helpline}</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div className="whitespace-pre-wrap">{msg.text}</div>

                  {/* Sources / Citations */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-1">
                      <div className="font-semibold flex items-center gap-1 text-teal-700">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{t('Grounded Sources:', 'प्रमाणित स्रोत:')}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.sources.map((src, i) => (
                          <span
                            key={i}
                            className="bg-white/80 px-2 py-0.5 rounded text-[10px] border border-slate-200 text-slate-700"
                          >
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`text-[10px] mt-2 text-right ${isUser ? 'text-sky-100' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 items-center text-slate-500 text-xs py-2">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Bot className="w-5 h-5 animate-spin" />
              </div>
              <div className="bg-slate-100 rounded-2xl px-4 py-2.5 text-slate-600 border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
                <span>{t('Synthesizing verified medical guidance...', 'प्रमाणित दिशानिर्देशों का मिलान हो रहा है...')}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[11px] font-semibold text-slate-500 shrink-0">
            {t('Try Asking:', 'सुझाव:')}
          </span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(t(p.en, p.hi))}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-600 transition-colors text-[11px]"
            >
              {t(p.en, p.hi)}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleFormSubmit} className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`p-3 rounded-xl border transition-all ${
              isListening
                ? 'bg-red-500 text-white border-red-500 animate-pulse'
                : 'border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title={t('Voice input via Web Speech API', 'आवाज द्वारा बोलकर पूछें')}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t(
              'Describe your symptom or health question...',
              'अपने लक्षण या स्वास्थ्य संबंधी प्रश्न लिखें...'
            )}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-slate-800"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || loading}
            className="bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white p-3 rounded-xl font-medium transition-colors shadow-xs flex items-center justify-center shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AssistantPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading AI Health Assistant...</div>}>
      <AssistantContent />
    </Suspense>
  );
}
