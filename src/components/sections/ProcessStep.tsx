"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ProcessStepProps {
  step: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step, title, titleAr, description, descriptionAr, isLast
}) => {
  const { language } = useLanguage();

  return (
    <div className="relative flex flex-col items-center text-center group">
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-silver-light -z-10" />
      )}
      <div className="w-20 h-20 rounded-full bg-white border-2 border-silver-light flex items-center justify-center mb-6 group-hover:border-navy group-hover:bg-navy group-hover:text-white transition-all shadow-lg">
        <span className="text-2xl font-bold">{step}</span>
      </div>
      <h4 className="text-xl font-bold mb-3">
        {language === 'ar' ? titleAr : title}
      </h4>
      <p className="text-navy/60 text-sm max-w-[200px]">
        {language === 'ar' ? descriptionAr : description}
      </p>
    </div>
  );
};
