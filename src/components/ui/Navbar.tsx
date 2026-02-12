"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';
import { Button } from './Button';

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-silver-light">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Skynologix Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-bold text-navy-dark tracking-tight">SKYNOLOGIX</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 hover:text-navy transition-colors"
            >
              {language === 'ar' ? item.titleAr : item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="text-sm font-bold text-navy hover:underline"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <Button size="sm" className="hidden sm:flex">
            {language === 'ar' ? 'تحدث معنا' : 'Contact Us'}
          </Button>
        </div>
      </div>
    </nav>
  );
};
