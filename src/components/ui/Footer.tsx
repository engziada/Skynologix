"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Skynologix" width={40} height={40} className="brightness-0 invert" />
              <span className="text-2xl font-bold tracking-tight">SKYNOLOGIX</span>
            </Link>
            <p className="text-silver/70 max-w-sm mb-6">
              {language === 'ar'
                ? 'حلول تقنية رائدة للشركات الناشئة والمتوسطة في الرياض. نبني مستقبلك الرقمي بمعايير عالمية.'
                : "Riyadh's leading tech solutions for SMEs. Building your digital future with global standards."}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-4 text-silver/70 text-sm">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {language === 'ar' ? item.titleAr : item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{language === 'ar' ? 'تواصل معنا' : 'Contact'}</h4>
            <ul className="space-y-4 text-silver/70 text-sm">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.whatsapp}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-silver/40">
          <p>© {new Date().getFullYear()} Skynologix. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};
