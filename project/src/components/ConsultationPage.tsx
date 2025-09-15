import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Send, Calendar, MessageSquare, Building, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitConsultation, type ConsultationFormData } from '../lib/supabase';

interface ConsultationPageProps {
  onBack: () => void;
}

export default function ConsultationPage({ onBack }: ConsultationPageProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedService: '',
    problems: '',
    additionalInfo: '',
    message: '',
    type: 'contact' as 'contact' | 'appointment'
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    { value: '', label: { en: 'Select a service', gr: 'Επιλέξτε υπηρεσία' } },
    { value: 'ai-agent', label: { en: 'AI Agent', gr: 'AI Agent' } },
    { value: 'lead-generation', label: { en: 'Lead Generation', gr: 'Δημιουργία Leads' } },
    { value: 'crm-sync', label: { en: 'CRM Sync', gr: 'Συγχρονισμός CRM' } },
    { value: 'landing-page', label: { en: 'Landing Page Building', gr: 'Κατασκευή Landing Pages' } }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }
    
    if (!formData.problems.trim()) {
      newErrors.problems = 'Please describe the problems you\'re looking to solve';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const consultationData: ConsultationFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        selected_service: formData.selectedService,
        problems: formData.problems,
        additional_info: formData.additionalInfo,
        message: formData.message,
        form_type: formData.type
      };

      await submitConsultation(consultationData);
      
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your submission! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        selectedService: '',
        problems: '',
        additionalInfo: '',
        message: '',
        type: 'contact'
      });
      setErrors({});
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

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

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {t('contactTitle')}
            </span>
          </h1>
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
                onClick={() => setFormData({...formData, type: 'appointment'})}
                className={`magnetic-button flex-1 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  formData.type === 'appointment' 
                    ? 'cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 glow-on-hover' 
                    : 'border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
              >
                <Calendar className="w-5 h-5" />
                {t('bookAppointment')}
              </button>
              <button 
                onClick={() => setFormData({...formData, type: 'contact'})}
                className={`magnetic-button flex-1 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  formData.type === 'contact' 
                    ? 'cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 glow-on-hover' 
                    : 'border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                {t('contactUs')}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="parallax-card bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400">{submitMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Type Indicator */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
                  {formData.type === 'appointment' ? <Calendar className="w-4 h-4 text-purple-400" /> : <MessageSquare className="w-4 h-4 text-purple-400" />}
                  <span className="text-purple-400 text-sm font-medium">
                    {formData.type === 'appointment' ? t('bookAppointment') : t('contactUs')}
                  </span>
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white disabled:opacity-50 ${
                    errors.name ? 'border-red-500' : 'border-purple-500/30'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white disabled:opacity-50 ${
                    errors.email ? 'border-red-500' : 'border-purple-500/30'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Company Name Input */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white disabled:opacity-50 ${
                      errors.company ? 'border-red-500' : 'border-purple-500/30'
                    }`}
                    placeholder="Your company name"
                  />
                </div>
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
              </div>

              {/* Selected Services Dropdown */}
              <div>
                <label htmlFor="selectedService" className="block text-sm font-medium text-gray-300 mb-2">
                  Selected Services *
                </label>
                <div className="relative">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <select
                    id="selectedService"
                    name="selectedService"
                    value={formData.selectedService}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full pl-12 pr-4 py-3 bg-black/50 border rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white appearance-none cursor-pointer disabled:opacity-50 ${
                      errors.selectedService ? 'border-red-500' : 'border-purple-500/30'
                    }`}
                  >
                    {services.map((service) => (
                      <option 
                        key={service.value} 
                        value={service.value}
                        className="bg-black text-white"
                      >
                        {service.label[language]}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.selectedService && <p className="text-red-400 text-sm mt-1">{errors.selectedService}</p>}
              </div>

              {/* Problems Text Area */}
              <div>
                <label htmlFor="problems" className="block text-sm font-medium text-gray-300 mb-2">
                  What problems are you looking to solve? *
                </label>
                <textarea
                  id="problems"
                  name="problems"
                  value={formData.problems}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white resize-none disabled:opacity-50 ${
                    errors.problems ? 'border-red-500' : 'border-purple-500/30'
                  }`}
                  placeholder="Describe the specific challenges your business is facing and how our AI solutions can help..."
                />
                <p className="text-gray-500 text-xs mt-1">Please be specific about your current pain points and desired outcomes.</p>
                {errors.problems && <p className="text-red-400 text-sm mt-1">{errors.problems}</p>}
              </div>

              {/* Additional Information Text Area */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={3}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white resize-none disabled:opacity-50"
                  placeholder="Any additional details about your project, timeline, budget, or specific requirements..."
                />
                <p className="text-gray-500 text-xs mt-1">Share any other relevant information that might help us better understand your needs.</p>
              </div>

              {/* Legacy Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('message')} <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white resize-none disabled:opacity-50"
                  placeholder={formData.type === 'appointment' ? 
                    "Tell us about your business and preferred meeting time..." : 
                    "How can we help you with AI automation?"
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-button w-full cta-button bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 glow-on-hover group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    {t('send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}