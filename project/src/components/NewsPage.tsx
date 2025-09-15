import React from 'react';
import { Calendar, ArrowRight, Newspaper, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NewsPageProps {
  onBack: () => void;
}

export default function NewsPage({ onBack }: NewsPageProps) {
  const { language, t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: {
        en: 'The Future of AI Customer Support: Trends for 2025',
        gr: 'Το Μέλλον της Υποστήριξης Πελατών AI: Τάσεις για το 2025'
      },
      description: {
        en: 'Discover how AI is revolutionizing customer support with advanced natural language processing and predictive analytics. Learn about the latest trends that will shape customer service in 2025.',
        gr: 'Ανακαλύψτε πώς η AI επαναστατεί την υποστήριξη πελατών με προηγμένη επεξεργασία φυσικής γλώσσας και προβλεπτικά αναλυτικά στοιχεία. Μάθετε για τις τελευταίες τάσεις που θα διαμορφώσουν την εξυπηρέτηση πελατών το 2025.'
      },
      content: {
        en: 'The landscape of customer support is undergoing a dramatic transformation. AI-powered solutions are no longer just chatbots—they\'re sophisticated systems capable of understanding context, emotion, and intent. In 2025, we expect to see even more advanced capabilities including real-time sentiment analysis, predictive issue resolution, and seamless handoffs between AI and human agents.',
        gr: 'Το τοπίο της υποστήριξης πελατών υφίσταται δραματική μεταμόρφωση. Οι λύσεις που τροφοδοτούνται από AI δεν είναι πλέον απλά chatbots—είναι εξελιγμένα συστήματα ικανά να κατανοούν το πλαίσιο, τη συναισθηματική κατάσταση και την πρόθεση. Το 2025, αναμένουμε να δούμε ακόμη πιο προηγμένες δυνατότητες συμπεριλαμβανομένης της ανάλυσης συναισθημάτων σε πραγματικό χρόνο, της προβλεπτικής επίλυσης προβλημάτων και των απρόσκοπτων μεταβιβάσεων μεταξύ AI και ανθρώπινων agents.'
      },
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-15',
      category: 'AI Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: {
        en: 'Automation ROI: How Small Businesses Save 40% on Operations',
        gr: 'ROI Αυτοματοποίησης: Πώς οι Μικρές Επιχειρήσεις Εξοικονομούν 40% στις Λειτουργίες'
      },
      description: {
        en: 'Real case studies showing dramatic cost reductions and efficiency improvements through strategic AI implementation in small to medium businesses.',
        gr: 'Πραγματικές μελέτες περιπτώσεων που δείχνουν δραματικές μειώσεις κόστους και βελτιώσεις αποδοτικότητας μέσω στρατηγικής υλοποίησης AI σε μικρές και μεσαίες επιχειρήσεις.'
      },
      content: {
        en: 'Small businesses are discovering that AI automation isn\'t just for large corporations. Our recent study of 200+ SMBs shows average operational cost savings of 40% within the first year of implementation. Key areas of improvement include customer service response times (reduced by 75%), lead qualification accuracy (improved by 60%), and appointment scheduling efficiency (increased by 85%).',
        gr: 'Οι μικρές επιχειρήσεις ανακαλύπτουν ότι η αυτοματοποίηση AI δεν είναι μόνο για μεγάλες εταιρείες. Η πρόσφατη μελέτη μας σε 200+ ΜΜΕ δείχνει μέση εξοικονόμηση λειτουργικού κόστους 40% μέσα στον πρώτο χρόνο υλοποίησης. Βασικοί τομείς βελτίωσης περιλαμβάνουν τους χρόνους απόκρισης εξυπηρέτησης πελατών (μείωση κατά 75%), την ακρίβεια αξιολόγησης leads (βελτίωση κατά 60%) και την αποδοτικότητα προγραμματισμού ραντεβού (αύξηση κατά 85%).'
      },
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-12',
      category: 'Business Growth',
      readTime: '7 min read'
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
      content: {
        en: 'We\'re excited to announce major updates to our AI agent platform. The new multi-language support now covers 25+ languages with native-level fluency, while our advanced analytics dashboard provides real-time insights into conversation quality, customer satisfaction scores, and conversion metrics. These improvements help businesses serve global audiences more effectively.',
        gr: 'Είμαστε ενθουσιασμένοι να ανακοινώσουμε σημαντικές ενημερώσεις στην πλατφόρμα AI agent μας. Η νέα υποστήριξη πολλαπλών γλωσσών καλύπτει τώρα 25+ γλώσσες με επίπεδο άνεσης μητρικής γλώσσας, ενώ το προηγμένο dashboard αναλυτικών παρέχει πληροφορίες σε πραγματικό χρόνο για την ποιότητα συνομιλιών, τα σκορ ικανοποίησης πελατών και τις μετρικές μετατροπής. Αυτές οι βελτιώσεις βοηθούν τις επιχειρήσεις να εξυπηρετούν παγκόσμια κοινά πιο αποτελεσματικά.'
      },
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-10',
      category: 'Product Updates',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: {
        en: 'Integration Spotlight: Seamless CRM Connectivity',
        gr: 'Επίκεντρο Ενοποίησης: Απρόσκοπτη Συνδεσιμότητα CRM'
      },
      description: {
        en: 'Learn how our new CRM integrations work with Salesforce, HubSpot, and other leading platforms to streamline your sales process.',
        gr: 'Μάθετε πώς οι νέες ενοποιήσεις CRM μας λειτουργούν με Salesforce, HubSpot και άλλες κορυφαίες πλατφόρμες για να βελτιστοποιήσουν τη διαδικασία πωλήσεων σας.'
      },
      content: {
        en: 'Our latest CRM integrations represent a major leap forward in sales automation. Now supporting direct connections with Salesforce, HubSpot, Pipedrive, and 15+ other platforms, our AI agents can automatically update lead information, schedule follow-ups, and trigger personalized email sequences. This seamless integration eliminates manual data entry and ensures no lead falls through the cracks.',
        gr: 'Οι τελευταίες ενοποιήσεις CRM μας αντιπροσωπεύουν ένα σημαντικό άλμα προς τα εμπρός στην αυτοματοποίηση πωλήσεων. Υποστηρίζοντας τώρα άμεσες συνδέσεις με Salesforce, HubSpot, Pipedrive και 15+ άλλες πλατφόρμες, οι AI agents μας μπορούν να ενημερώνουν αυτόματα τις πληροφορίες leads, να προγραμματίζουν follow-ups και να ενεργοποιούν εξατομικευμένες ακολουθίες email. Αυτή η απρόσκοπτη ενοποίηση εξαλείφει τη χειροκίνητη εισαγωγή δεδομένων και διασφαλίζει ότι κανένα lead δεν χάνεται.'
      },
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-08',
      category: 'Integrations',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: {
        en: 'AI Ethics in Business Automation: Best Practices Guide',
        gr: 'Ηθική AI στην Επιχειρηματική Αυτοματοποίηση: Οδηγός Βέλτιστων Πρακτικών'
      },
      description: {
        en: 'A comprehensive guide to implementing AI automation while maintaining ethical standards and customer trust.',
        gr: 'Ένας ολοκληρωμένος οδηγός για την υλοποίηση αυτοματοποίησης AI διατηρώντας παράλληλα ηθικά πρότυπα και την εμπιστοσύνη των πελατών.'
      },
      content: {
        en: 'As AI becomes more prevalent in business operations, maintaining ethical standards is crucial. This guide covers transparency in AI interactions, data privacy protection, bias prevention, and ensuring human oversight. We explore how businesses can leverage AI power while maintaining customer trust and regulatory compliance.',
        gr: 'Καθώς η AI γίνεται πιο διαδεδομένη στις επιχειρηματικές δραστηριότητες, η διατήρηση ηθικών προτύπων είναι κρίσιμη. Αυτός ο οδηγός καλύπτει τη διαφάνεια στις αλληλεπιδράσεις AI, την προστασία προσωπικών δεδομένων, την πρόληψη προκαταλήψεων και τη διασφάλιση ανθρώπινης εποπτείας. Εξερευνούμε πώς οι επιχειρήσεις μπορούν να αξιοποιήσουν τη δύναμη της AI διατηρώντας την εμπιστοσύνη των πελατών και τη συμμόρφωση με τους κανονισμούς.'
      },
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-05',
      category: 'Ethics & Compliance',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: {
        en: 'Voice AI Revolution: The Next Frontier in Customer Interaction',
        gr: 'Επανάσταση Voice AI: Το Επόμενο Σύνορο στην Αλληλεπίδραση με Πελάτες'
      },
      description: {
        en: 'Exploring how voice-enabled AI agents are transforming phone-based customer service and sales processes.',
        gr: 'Εξερευνώντας πώς οι voice-enabled AI agents μεταμορφώνουν την τηλεφωνική εξυπηρέτηση πελατών και τις διαδικασίες πωλήσεων.'
      },
      content: {
        en: 'Voice AI technology has reached a tipping point. Modern voice agents can handle complex conversations with natural speech patterns, emotional intelligence, and contextual understanding. This article explores real-world implementations, success metrics, and the future of voice-first customer experiences.',
        gr: 'Η τεχνολογία Voice AI έχει φτάσει σε ένα κρίσιμο σημείο. Οι σύγχρονοι voice agents μπορούν να χειριστούν πολύπλοκες συνομιλίες με φυσικά μοτίβα ομιλίας, συναισθηματική νοημοσύνη και κατανόηση πλαισίου. Αυτό το άρθρο εξερευνά υλοποιήσεις στον πραγματικό κόσμο, μετρικές επιτυχίας και το μέλλον των voice-first εμπειριών πελατών.'
      },
      image: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-03',
      category: 'Voice Technology',
      readTime: '6 min read'
    }
  ];

  const [selectedArticle, setSelectedArticle] = React.useState<typeof articles[0] | null>(null);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="magnetic-button flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                {selectedArticle.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {new Date(selectedArticle.date).toLocaleDateString(language === 'gr' ? 'el-GR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <span className="text-gray-400 text-sm">{selectedArticle.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {selectedArticle.title[language]}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {selectedArticle.description[language]}
            </p>
          </div>

          {/* Article Image */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title[language]}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {selectedArticle.content[language]}
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Discover how our AI solutions can help you achieve similar results.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setSelectedArticle(null);
                onBack();
              }}
              className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 glow-on-hover"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <button
            onClick={onBack}
            className="magnetic-button flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 mx-auto transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Newspaper className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">AI News & Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('whatsNew')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest developments in AI automation, industry insights, and product updates.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="parallax-card group relative bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedArticle(article)}
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

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                  {article.readTime}
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
                <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {article.title[language]}
                </h2>

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
      </div>
    </div>
  );
}