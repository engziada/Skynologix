"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {language === 'ar' ? 'عن Skynologix' : 'About Skynologix'}
          </h1>
          <p className="text-xl text-navy/70 mb-12 leading-relaxed">
            {language === 'ar'
              ? 'نحن شركة تقنية ناشئة مقرها الرياض، نسعى لتمكين الشركات الصغيرة والمتوسطة في المملكة العربية السعودية من خلال تقديم حلول رقمية مبتكرة وعالية الجودة.'
              : 'We are a Riyadh-based tech startup dedicated to empowering SMEs in Saudi Arabia by providing innovative and high-quality digital solutions.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-navy">
                {language === 'ar' ? 'رسالتنا' : 'Mission'}
              </h3>
              <p className="text-navy/60">
                {language === 'ar'
                  ? 'تقديم تقنيات ويب متطورة تساعد الشركات المحلية على النمو والمنافسة عالمياً.'
                  : 'Providing cutting-edge web technologies that help local businesses grow and compete globally.'}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-navy">
                {language === 'ar' ? 'رؤيتنا' : 'Vision'}
              </h3>
              <p className="text-navy/60">
                {language === 'ar'
                  ? 'أن نكون الشريك التقني الأول والموثوق للشركات في التحول الرقمي بالمملكة.'
                  : 'To be the premier and trusted tech partner for businesses in the Kingdom’s digital transformation.'}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-navy">
                {language === 'ar' ? 'قيمنا' : 'Values'}
              </h3>
              <p className="text-navy/60">
                {language === 'ar'
                  ? 'الابتكار، الجودة، والموثوقية في كل ما نقدمه.'
                  : 'Innovation, quality, and reliability in everything we deliver.'}
              </p>
            </div>
          </div>

          <div className="bg-silver-light/30 p-12 rounded-2xl border border-silver-light">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' ? 'لماذا الرياض؟' : 'Why Riyadh?'}
            </h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              {language === 'ar'
                ? 'الرياض هي قلب التحول الرقمي في المنطقة. بصفتنا شركة ناشئة محلية، نفهم تماماً احتياجات وتطلعات الشركات في سوقنا المتنامي ونواكب رؤية 2030.'
                : 'Riyadh is the heart of digital transformation in the region. As a local startup, we fully understand the needs and aspirations of businesses in our growing market, aligned with Vision 2030.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
