import React from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NewsProps {
  onViewAll?: () => void;
}

export default function News({ onViewAll }: NewsProps) {
  const { language, t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: {
        en: 'The Future of AI Customer Support: Trends for 2025',
        gr: 'Το Μέλλον της Υποστήριξης Πελατών AI: Τάσεις για το 2025'
      },
      description: {
        en: 'Discover how AI is revolutionizing customer support with advanced natural language processing and predictive analytics.',
        gr: 'Ανακαλύψτε πώς η AI επαναστατεί την υποστήριξη πελατών με προηγμένη επεξεργασία φυσικής γλώσσας και προβλεπτικά αναλυτικά στοιχεία.'
      },
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-12-15',
      category: 'AI Technology'
    },
    {
      id: 2,
      title: {
        en: 'Automation ROI: How Small Businesses Save 40% on Operations',
        gr: 'ROI Αυτοματοποίησης: Πώς οι Μικρές Επιχειρήσεις Εξοικονομούν 40% στις Λειτουργίες'
      },
      description: {
        en: 'Real case studies showing dramatic cost reductions and efficiency improvements through strategic AI implementation.',
        gr: 'Πραγματικές μελέτες περιπτώσεων που δείχνουν δραματικές μειώσεις κόστους και βελτιώσεις αποδοτικότητας μέσω στρατηγικής υλοποίησης AI.'
      },
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-12-12',
      category: 'Business Growth'
    },
    {
      id: 3,
      title: {
        en: 'New AI Agent Features: Multi-Language Support & Advanced Analytics',
        gr: 'Νέα Χαρακτηριστικά AI Agent: Υποστήριξη Πολλαπλών Γλωσσών & Προηγμένα Αναλυτικά'
      },
      description: {
        en: 'Our latest update includes enhanced multilingual capabilities and comprehensive performance analytics for all AI agents.',
        gr: 'Η τελευταία μας ενημέρωση περιλαμβάνει βελτιωμένες πολυγλωσσικές δυνατότητες και ολοκληρωμένα αναλυτικά απόδοσης για όλους τους AI agents.'
      },
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-12-10',
      category: 'Product Updates'
    },
    {
      id: 4,
      title: {
        en: 'Integration Spotlight: Seamless CRM Connectivity',
        gr: 'Επίκεντρο Ενοποίησης: Απρόσκοπτη Συνδεσιμότητα CRM'
      },
      description: {
        en: 'Learn how our new CRM integrations work with Salesforce, HubSpot, and other leading platforms.',
        gr: 'Μάθετε πώς οι νέες ενοποιήσεις CRM μας λειτουργούν με Salesforce, HubSpot και άλλες κορυφαίες πλατφόρμες.'
      },
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-12-08',
      category: 'Integrations'
    }
  ];

  return (
    <section id="news" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Newspaper className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Latest Updates</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('whatsNew')}
            </span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="parallax-card group relative bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-purple-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-purple-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString(language === 'gr' ? 'el-GR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {article.title[language]}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {article.description[language]}
                </p>

                {/* Read More Button */}
                <button className="magnetic-button flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all duration-300">
                  {t('readMore')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* SEO Structured Data */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": article.title[language],
                  "description": article.description[language],
                  "image": article.image,
                  "datePublished": article.date,
                  "author": {
                    "@type": "Organization",
                    "name": "Daidalos Agency"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Daidalos Agency"
                  }
                })}
              </script>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={onViewAll}
            className="magnetic-button border-2 border-purple-500/50 hover:border-purple-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500/10"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}