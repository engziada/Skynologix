"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h1>
          <p className="text-xl text-navy/70">
            {language === 'ar'
              ? 'حلول شاملة مصممة خصيصاً لتلبية احتياجات عملك الرقمية.'
              : 'Comprehensive solutions tailored to meet your business digital needs.'}
          </p>
        </div>

        <div className="space-y-32">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-navy text-white rounded-full">
                  0{index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'ar' ? service.titleAr : service.title}
                </h2>
                <p className="text-xl text-navy/60 mb-8 leading-relaxed">
                  {language === 'ar' ? service.descriptionAr : service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {(language === 'ar' ? service.benefitsAr : service.benefits).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button>
                  {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
                </Button>
              </div>
              <div className="flex-1 w-full aspect-video bg-silver-light rounded-2xl flex items-center justify-center border border-silver-light shadow-inner">
                <span className="text-navy/20 font-bold text-lg uppercase tracking-widest">
                  {service.id} visualization
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
