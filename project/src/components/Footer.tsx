import React from 'react';
import { Bot, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  effectsEnabled: boolean;
  setEffectsEnabled: (enabled: boolean) => void;
  isMobile: boolean;
}

export default function Footer({ effectsEnabled, setEffectsEnabled, isMobile }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-transparent to-purple-900/20 border-t border-purple-500/20 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Daidalos Agency Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Daidalos Agency
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering businesses with intelligent AI automation solutions for the modern world.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="magnetic-button w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4 text-purple-400" />
              </a>
              <a href="#" className="magnetic-button w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-purple-400" />
              </a>
              <a href="mailto:info@daidalosagency.com" className="magnetic-button w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-full flex items-center justify-center transition-colors duration-300">
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">{t('customerSupport')}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">{t('leadCapture')}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">{t('appointmentBooking')}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">{t('landingPages')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300">{t('about')}</a></li>
              <li><a href="#news" className="hover:text-purple-400 transition-colors duration-300">{t('whatsNew')}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+306912345678" className="hover:text-purple-400 transition-colors duration-300">
                  +30 691 234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:info@daidalosagency.com" className="hover:text-purple-400 transition-colors duration-300">
                  info@daidalosagency.com
                </a>
              </li>
              <li>Athens, Greece</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Daidalos Agency. All rights reserved.
          </p>
          
          {/* Effects Toggle */}
          {!isMobile && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">{t('effectsToggle')}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={effectsEnabled}
                  onChange={(e) => setEffectsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}