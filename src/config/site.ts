export const siteConfig = {
  name: "Skynologix",
  description: "Riyadh's leading tech startup providing corporate websites, hosting, and post-launch support.",
  url: "https://skynologix.com",
  ogImage: "https://skynologix.com/og.jpg",
  contact: {
    email: "info@skynologix.com",
    phone: "+966XXXXXXXXX", // Placeholder
    whatsapp: "+966XXXXXXXXX", // Placeholder
    address: "Riyadh, Saudi Arabia",
  },
  mainNav: [
    { title: "Home", href: "/", titleAr: "الرئيسية" },
    { title: "About", href: "/about", titleAr: "من نحن" },
    { title: "Services", href: "/services", titleAr: "خدماتنا" },
    { title: "Process", href: "/#process", titleAr: "كيف نعمل" },
    { title: "Contact", href: "/contact", titleAr: "اتصل بنا" },
  ],
  services: [
    {
      id: "hosting",
      title: "Domain & Hosting Management",
      titleAr: "إدارة النطاقات والاستضافة",
      description: "Secure, high-performance hosting solutions tailored for Saudi businesses.",
      descriptionAr: "حلول استضافة آمنة وعالية الأداء مصممة خصيصاً للشركات السعودية.",
      icon: "Server",
      benefits: ["99.9% Uptime", "Local Support", "Free SSL"],
      benefitsAr: ["ضمان تشغيل 99.9%", "دعم محلي", "شهادة SSL مجانية"],
    },
    {
      id: "design",
      title: "Website Design & Development",
      titleAr: "تصميم وتطوير المواقع",
      description: "Modern, responsive, and SEO-optimized websites that convert.",
      descriptionAr: "مواقع حديثة، متجاوبة، ومحسنة لمحركات البحث تساهم في نمو عملك.",
      icon: "Code",
      benefits: ["Mobile-first", "SEO Ready", "Modern UI"],
      benefitsAr: ["متوافق مع الجوال", "جاهز للـ SEO", "واجهة مستخدم حديثة"],
    },
    {
      id: "support",
      title: "Launch & Support",
      titleAr: "الإطلاق والدعم الفني",
      description: "Continuous support and maintenance to keep your business running smoothly.",
      descriptionAr: "دعم فني مستمر وصيانة لضمان سير عملك بسلاسة.",
      icon: "Headset",
      benefits: ["24/7 Monitoring", "Content Updates", "Security Audits"],
      benefitsAr: ["مراقبة على مدار الساعة", "تحديث المحتوى", "تدقيق أمني"],
    },
  ],
  process: [
    { step: 1, title: "Discovery", titleAr: "الاكتشاف", description: "Understanding your goals and market.", descriptionAr: "فهم أهدافك وسوقك." },
    { step: 2, title: "Design", titleAr: "التصميم", description: "Crafting a unique visual identity.", descriptionAr: "صياغة هوية بصرية فريدة." },
    { step: 3, title: "Development", titleAr: "التطوير", description: "Building with the latest technologies.", descriptionAr: "البناء بأحدث التقنيات." },
    { step: 4, title: "Launch", titleAr: "الإطلاق", description: "Seamless deployment to your domain.", descriptionAr: "نشر سلس على نطاقك." },
    { step: 5, title: "Support", titleAr: "الدعم", description: "Ongoing maintenance and growth.", descriptionAr: "صيانة مستمرة ونمو." },
  ],
};
