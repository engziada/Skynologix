"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '../ui/Button';

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 dots-grid opacity-50 -z-10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-navy uppercase bg-silver-light rounded-full">
            {language === 'ar' ? 'مستقبل الرياض الرقمي' : "Riyadh's Digital Future"}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            {language === 'ar'
              ? 'حلول ويب متميزة للشركات السعودية'
              : 'Premium Web Solutions for Saudi Businesses'}
          </h1>
          <p className="text-xl text-navy/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'نبني مواقع مؤسسية متطورة، استضافة آمنة، ودعم فني متكامل لضمان نمو علامتك التجارية في السوق السعودي.'
              : 'We build advanced corporate websites, secure hosting, and integrated support to ensure your brand growth in the Saudi market.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              {language === 'ar' ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
