"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '../ui/Button';

export const ContactForm = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl border border-silver-light text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {language === 'ar' ? 'شكراً لتواصلك معنا' : 'Thank you for contacting us'}
        </h3>
        <p className="text-navy/60">
          {language === 'ar' ? 'سنقوم بالرد عليك في أقرب وقت ممكن.' : "We'll get back to you as soon as possible."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-silver-light space-y-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold">{language === 'ar' ? 'الاسم' : 'Name'}</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-silver-light focus:outline-none focus:ring-2 focus:ring-navy/20"
            placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-silver-light focus:outline-none focus:ring-2 focus:ring-navy/20"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold">{language === 'ar' ? 'الشركة' : 'Company'}</label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-silver-light focus:outline-none focus:ring-2 focus:ring-navy/20"
          placeholder={language === 'ar' ? 'اسم شركتك' : 'Company name'}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold">{language === 'ar' ? 'الرسالة' : 'Message'}</label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-silver-light focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
          placeholder={language === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
        ></textarea>
      </div>
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading'
          ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
          : (language === 'ar' ? 'إرسال الرسالة' : 'Send Message')}
      </Button>
    </form>
  );
};
