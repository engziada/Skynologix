"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceCardProps {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  benefits: string[];
  benefitsAr: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title, titleAr, description, descriptionAr, benefits, benefitsAr
}) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white p-8 rounded-2xl border border-silver-light hover:border-navy/20 transition-all hover:shadow-xl group">
      <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-4">
        {language === 'ar' ? titleAr : title}
      </h3>
      <p className="text-navy/60 mb-6 leading-relaxed">
        {language === 'ar' ? descriptionAr : description}
      </p>
      <ul className="space-y-3">
        {(language === 'ar' ? benefitsAr : benefits).map((benefit, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy/80">
            <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};
