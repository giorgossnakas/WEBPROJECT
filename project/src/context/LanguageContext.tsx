import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    en: string;
    gr: string;
  };
}

const translations: Translations = {
  // Navigation
  services: { en: 'Services', gr: 'Υπηρεσίες' },
  about: { en: 'About Us', gr: 'Σχετικά με εμάς' },
  contact: { en: 'Contact Us', gr: 'Επικοινωνία' },
  whatsNew: { en: "What's New", gr: 'Τι νέο υπάρχει' },
  joinNow: { en: 'Join Now', gr: 'Εγγραφείτε Τώρα' },

  // Hero Section
  heroTitle: { 
    en: 'Automate Appointments, Sales & Customer Support with the power of AI.', 
    gr: 'Αυτοματοποιήστε ραντεβού, πωλήσεις και υποστήριξη πελατών με τη δύναμη της Τεχνητής Νοημοσύνης.' 
  },
  heroSubtitle: { 
    en: 'Transform your business operations with cutting-edge AI automation that scales with your growth.', 
    gr: 'Μεταμορφώστε τις επιχειρηματικές σας δραστηριότητες με προηγμένη αυτοματοποίηση AI που προσαρμόζεται στην ανάπτυξή σας.' 
  },

  // Services
  servicesTitle: { en: 'Our AI-Powered Services', gr: 'Οι Υπηρεσίες μας με AI' },
  customerSupport: { en: 'Customer Support', gr: 'Υποστήριξη Πελατών' },
  customerSupportDesc: { 
    en: 'Advanced ticket management system with AI-powered responses and 24/7 availability.', 
    gr: 'Προηγμένο σύστημα διαχείρισης αιτημάτων με απαντήσεις AI και 24ωρη διαθεσιμότητα.' 
  },
  leadCapture: { en: 'Lead Capture & CRM', gr: 'Συλλογή Leads & CRM' },
  leadCaptureDesc: { 
    en: 'Intelligent lead generation and seamless CRM integration for maximum conversion rates.', 
    gr: 'Έξυπνη δημιουργία leads και απρόσκοπτη ενσωμάτωση CRM για μέγιστα ποσοστά μετατροπής.' 
  },
  appointmentBooking: { en: 'Appointment Booking', gr: 'Κράτηση Ραντεβού' },
  appointmentBookingDesc: { 
    en: 'Automated scheduling system that syncs with your calendar and sends smart reminders.', 
    gr: 'Αυτοματοποιημένο σύστημα προγραμματισμού που συγχρονίζεται με το ημερολόγιό σας.' 
  },
  landingPages: { en: 'Landing Page Building', gr: 'Κατασκευή Landing Pages' },
  landingPagesDesc: { 
    en: 'High-converting landing pages optimized for your specific audience and goals.', 
    gr: 'Landing pages υψηλής μετατροπής βελτιστοποιημένες για το κοινό και τους στόχους σας.' 
  },

  // Agents
  agentsTitle: { en: 'Meet Our AI Agents', gr: 'Γνωρίστε τους AI Agents μας' },
  supportAgent: { en: 'Support Agent', gr: 'Agent Υποστήριξης' },
  supportAgentDesc: { 
    en: 'Handles customer inquiries with human-like understanding and instant responses.', 
    gr: 'Διαχειρίζεται ερωτήματα πελατών με ανθρώπινη κατανόηση και άμεσες απαντήσεις.' 
  },
  salesAgent: { en: 'Sales Agent', gr: 'Agent Πωλήσεων' },
  salesAgentDesc: { 
    en: 'Qualifies leads, books appointments, and nurtures prospects automatically.', 
    gr: 'Αξιολογεί leads, κλείνει ραντεβού και καλλιεργεί προοπτικές αυτόματα.' 
  },
  bookingAgent: { en: 'Booking Agent', gr: 'Agent Κρατήσεων' },
  bookingAgentDesc: { 
    en: 'Manages your calendar, schedules appointments, and sends automated reminders.', 
    gr: 'Διαχειρίζεται το ημερολόγιό σας, προγραμματίζει ραντεβού και στέλνει υπενθυμίσεις.' 
  },
  buildLandingPage: { en: 'Build Your Landing Page', gr: 'Χτίστε τη δική σας Landing Page' },
  buildLandingPageDesc: { 
    en: 'Create professional, high-converting landing pages in minutes with our AI-powered builder.', 
    gr: 'Δημιουργήστε επαγγελματικές landing pages υψηλής μετατροπής σε λεπτά με τον AI builder μας.' 
  },

  // About
  aboutTitle: { en: 'About Daidalos Agency', gr: 'Σχετικά με τη Daidalos Agency' },
  aboutText: { 
    en: 'We are pioneers in AI automation, helping businesses transform their operations through intelligent solutions. Our mission is to make advanced AI accessible to every business, regardless of size or industry.', 
    gr: 'Είμαστε πρωτοπόροι στην αυτοματοποίηση AI, βοηθώντας επιχειρήσεις να μεταμορφώσουν τις δραστηριότητές τους μέσω έξυπνων λύσεων. Η αποστολή μας είναι να κάνουμε την προηγμένη AI προσβάσιμη σε κάθε επιχείρηση.' 
  },

  // Contact
  contactTitle: { en: 'Get Started Today', gr: 'Ξεκινήστε Σήμερα' },
  bookAppointment: { en: 'Book Appointment', gr: 'Κλείστε Ραντεβού' },
  contactUs: { en: 'Contact Us', gr: 'Επικοινωνήστε' },
  name: { en: 'Name', gr: 'Όνομα' },
  email: { en: 'Email', gr: 'Email' },
  message: { en: 'Message', gr: 'Μήνυμα' },
  send: { en: 'Send Message', gr: 'Στείλτε Μήνυμα' },

  // Common
  learnMore: { en: 'Learn More', gr: 'Μάθετε Περισσότερα' },
  readMore: { en: 'Read More', gr: 'Διαβάστε Περισσότερα' },
  getStarted: { en: 'Get Started', gr: 'Ξεκινήστε' },
  effectsToggle: { en: 'Effects', gr: 'Εφέ' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}