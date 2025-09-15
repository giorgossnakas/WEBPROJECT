import React from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onNewsClick?: () => void;
  onConsultationClick?: () => void;
}

export default function Header({ onNewsClick, onConsultationClick }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Daidalos Agency Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Daidalos Agency
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link hover:text-purple-400 transition-colors duration-300"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link hover:text-purple-400 transition-colors duration-300"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link hover:text-purple-400 transition-colors duration-300"
            >
              {t('contact')}
            </button>
            <button 
              onClick={() => onNewsClick ? onNewsClick() : scrollToSection('news')}
              className="nav-link hover:text-purple-400 transition-colors duration-300"
            >
              {t('whatsNew')}
            </button>
            
            {/* Language Toggle */}
            <div className="flex items-center bg-purple-500/10 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  language === 'en' ? 'bg-purple-500 text-white' : 'text-purple-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('gr')}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  language === 'gr' ? 'bg-purple-500 text-white' : 'text-purple-400'
                }`}
              >
                GR
              </button>
            </div>

            <button 
              onClick={onConsultationClick}
              className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 glow-on-hover"
            >
              {t('joinNow')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left hover:text-purple-400 transition-colors duration-300"
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-purple-400 transition-colors duration-300"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-purple-400 transition-colors duration-300"
              >
                {t('contact')}
              </button>
              <button 
                onClick={() => onNewsClick ? onNewsClick() : scrollToSection('news')}
                className="text-left hover:text-purple-400 transition-colors duration-300"
              >
                {t('whatsNew')}
              </button>
              
              <div className="flex items-center bg-purple-500/10 rounded-full p-1 w-fit">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    language === 'en' ? 'bg-purple-500 text-white' : 'text-purple-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('gr')}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    language === 'gr' ? 'bg-purple-500 text-white' : 'text-purple-400'
                  }`}
                >
                  GR
                </button>
              </div>

              <button 
                onClick={onConsultationClick}
                className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-left w-fit"
              >
                {t('joinNow')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}