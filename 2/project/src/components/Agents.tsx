import React from 'react';
import { Bot, Headphones, TrendingUp, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AgentsProps {
  onConsultationClick?: () => void;
}

export default function Agents({ onConsultationClick }: AgentsProps) {
  const { t } = useLanguage();

  const agents = [
    {
      icon: Headphones,
      name: t('supportAgent'),
      description: t('supportAgentDesc'),
      color: 'from-purple-500 to-pink-500',
      avatar: '🤖'
    },
    {
      icon: TrendingUp,
      name: t('salesAgent'),
      description: t('salesAgentDesc'),
      color: 'from-purple-500 to-blue-500',
      avatar: '💼'
    },
    {
      icon: Calendar,
      name: t('bookingAgent'),
      description: t('bookingAgentDesc'),
      color: 'from-purple-500 to-green-500',
      avatar: '📅'
    }
  ];

  return (
    <section id="agents" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">AI Agents</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('agentsTitle')}
            </span>
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className="parallax-card group relative bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm text-center"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${agent.color} p-1`}>
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-3xl">
                      {agent.avatar}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${agent.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {agent.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {agent.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Landing Page Builder CTA */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-3xl p-8 md:p-12">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">New Feature</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                {t('buildLandingPage')}
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('buildLandingPageDesc')}
            </p>

            <button 
              onClick={onConsultationClick}
              className="magnetic-button cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto transition-all duration-300 glow-on-hover group"
            >
              {t('getStarted')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"></div>
          <div className="absolute top-0 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}