import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import VideoBackground from './VideoBackground';

interface HeroProps {
  onConsultationClick?: () => void;
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent z-10"></div>
      
      {/* Hero Spotlight Target */}
      <div id="hero-spotlight" className="absolute inset-0 pointer-events-none z-20"></div>

      <div className="relative z-30 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 text-sm font-medium">AI-Powered Automation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {t('heroTitle')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onConsultationClick}
            className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 glow-on-hover group"
          >
            {t('joinNow')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={onConsultationClick}
            className="magnetic-button border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10"
          >
            {t('learnMore')}
          </button>
        </div>

        {/* Stats or Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-purple-500/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400 mt-2">AI Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              99%
            </div>
            <div className="text-gray-400 mt-2">Automation Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              &lt;5min
            </div>
            <div className="text-gray-400 mt-2">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}