import React from 'react';
import { MessageSquare, Users, Calendar, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onConsultationClick?: () => void;
}

export default function Services({ onConsultationClick }: ServicesProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: MessageSquare,
      title: t('customerSupport'),
      description: t('customerSupportDesc'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: t('leadCapture'),
      description: t('leadCaptureDesc'),
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Calendar,
      title: t('appointmentBooking'),
      description: t('appointmentBookingDesc'),
      gradient: 'from-purple-500 to-green-500'
    },
    {
      icon: Globe,
      title: t('landingPages'),
      description: t('landingPagesDesc'),
      gradient: 'from-purple-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('servicesTitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations and drive unprecedented growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="parallax-card group relative bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <button 
                  onClick={onConsultationClick}
                  className="magnetic-button flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {t('learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={onConsultationClick}
            className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 glow-on-hover"
          >
            {t('getStarted')}
          </button>
        </div>
      </div>
    </section>
  );
}