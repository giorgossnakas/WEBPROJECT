import React from 'react';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onConsultationClick?: () => void;
}

export default function About({ onConsultationClick }: AboutProps) {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Mission',
      titleGr: 'Αποστολή',
      description: 'To democratize AI automation for businesses of all sizes.',
      descriptionGr: 'Να δημοκρατοποιήσουμε την αυτοματοποίηση AI για επιχειρήσεις όλων των μεγεθών.',
    },
    {
      icon: Eye,
      title: 'Vision', 
      titleGr: 'Όραμα',
      description: 'A world where intelligent automation empowers human creativity.',
      descriptionGr: 'Ένας κόσμος όπου η έξυπνη αυτοματοποίηση ενδυναμώνει την ανθρώπινη δημιουργικότητα.',
    },
    {
      icon: Heart,
      title: 'Values',
      titleGr: 'Αξίες',
      description: 'Innovation, transparency, and customer success drive everything we do.',
      descriptionGr: 'Η καινοτομία, η διαφάνεια και η επιτυχία των πελατών οδηγούν όλα όσα κάνουμε.',
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('aboutText')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                <div className="text-gray-400 text-sm">Businesses Automated</div>
              </div>
              <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">2M+</div>
                <div className="text-gray-400 text-sm">Tasks Processed</div>
              </div>
            </div>

            <button 
              onClick={onConsultationClick}
              className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 glow-on-hover group"
            >
              {t('getStarted')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const { language } = useLanguage();
              
              return (
                <div
                  key={index}
                  className="parallax-card group relative bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {language === 'gr' ? value.titleGr : value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {language === 'gr' ? value.descriptionGr : value.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}