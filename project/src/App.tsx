import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Agents from './components/Agents';
import News from './components/News';
import NewsPage from './components/NewsPage';
import ConsultationPage from './components/ConsultationPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseEffects from './components/MouseEffects';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'news' | 'consultation'>('home');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
      if (mobile) setEffectsEnabled(false);
    };

    const checkReducedMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) setEffectsEnabled(false);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (currentPage === 'consultation') {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {effectsEnabled && !isMobile && <MouseEffects />}
          <ConsultationPage onBack={() => setCurrentPage('home')} />
        </div>
      </LanguageProvider>
    );
  }

  if (currentPage === 'news') {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {effectsEnabled && !isMobile && <MouseEffects />}
          <NewsPage onBack={() => setCurrentPage('home')} />
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {effectsEnabled && !isMobile && <MouseEffects />}
        
        <Header 
          onNewsClick={() => setCurrentPage('news')}
          onConsultationClick={() => setCurrentPage('consultation')}
        />
        <main>
          <Hero onConsultationClick={() => setCurrentPage('consultation')} />
          <Services />
          <Agents onConsultationClick={() => setCurrentPage('consultation')} />
          <News onViewAll={() => setCurrentPage('news')} />
          <About onConsultationClick={() => setCurrentPage('consultation')} />
          <Contact onConsultationClick={() => setCurrentPage('consultation')} />
        </main>
        <Footer 
          effectsEnabled={effectsEnabled} 
          setEffectsEnabled={setEffectsEnabled}
          isMobile={isMobile}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;