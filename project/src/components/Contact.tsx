import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Calendar, MessageSquare, Building, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onConsultationClick?: () => void;
}

export default function Contact({ onConsultationClick }: ContactProps) {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('contactTitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Phone */}
              <div className="parallax-card group bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">Phone</h3>
                    <a href="tel:+306912345678" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      +30 691 234 5678
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="parallax-card group bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">Email</h3>
                    <a href="mailto:info@daidalosagency.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      info@daidalosagency.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="parallax-card group bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">Location</h3>
                    <p className="text-gray-400">Athens, Greece</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onConsultationClick}
                className="magnetic-button flex-1 cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 glow-on-hover"
              >
                <Calendar className="w-5 h-5" />
                {t('bookAppointment')}
              </button>
              <button 
                onClick={onConsultationClick}
                className="magnetic-button flex-1 border-2 border-purple-500/50 hover:border-purple-400 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-purple-500/10"
              >
                <MessageSquare className="w-5 h-5" />
                {t('contactUs')}
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="parallax-card bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6">
              Fill out our detailed consultation form to help us understand your specific needs and goals.
            </p>
            <button
              onClick={onConsultationClick}
              className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto transition-all duration-300 glow-on-hover group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Start Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}