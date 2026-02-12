"use client";

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { ProcessStep } from '@/components/sections/ProcessStep';
import { ContactForm } from '@/components/sections/ContactForm';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Hero />

      {/* Why Us Section */}
      <section className="py-24 bg-silver-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'لماذا تختار Skynologix؟' : 'Why Choose Skynologix?'}
            </h2>
            <p className="text-navy/60">
              {language === 'ar'
                ? 'نحن نجمع بين الخبرة التقنية العالمية والفهم العميق للسوق المحلي في الرياض.'
                : 'We combine global technical expertise with a deep understanding of the local market in Riyadh.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Local Expertise', titleAr: 'خبرة محلية', desc: 'Based in Riyadh.', descAr: 'مقرنا في الرياض.' },
              { title: 'Integrated Solutions', titleAr: 'حلول متكاملة', desc: 'From domain to support.', descAr: 'من النطاق حتى الدعم.' },
              { title: 'Modern Stack', titleAr: 'تقنيات حديثة', desc: 'Fast and secure.', descAr: 'سريعة وآمنة.' },
              { title: 'Dedicated Support', titleAr: 'دعم مخصص', desc: 'Always here for you.', descAr: 'دائماً هنا لأجلك.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-silver-light">
                <h4 className="font-bold mb-2">{language === 'ar' ? item.titleAr : item.title}</h4>
                <p className="text-sm text-navy/60">{language === 'ar' ? item.descAr : item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Core Services'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-dark text-white" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {language === 'ar' ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-silver/60">
              {language === 'ar' ? 'عملية منظمة تضمن أفضل النتائج لمشروعك.' : 'A structured process ensuring the best results for your project.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {siteConfig.process.map((p, i) => (
              <ProcessStep
                key={p.step}
                {...p}
                isLast={i === siteConfig.process.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                {language === 'ar' ? 'جاهز لبدء رحلتك الرقمية؟' : 'Ready to start your digital journey?'}
              </h2>
              <p className="text-xl text-navy/60 mb-8 leading-relaxed">
                {language === 'ar'
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية حول كيف يمكننا مساعدة عملك على النمو.'
                  : 'Contact us today for a free consultation on how we can help your business grow.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-silver-light rounded-full flex items-center justify-center text-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-semibold">{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-silver-light rounded-full flex items-center justify-center text-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="font-semibold">{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
