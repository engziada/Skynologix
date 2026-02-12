"use client";

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};
