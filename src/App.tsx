import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiAdvantageSection } from './components/AiAdvantageSection';
import { KozEngineDemo } from './components/KozEngineDemo';
import { PortfolioSection } from './components/PortfolioSection';
import { MicroServicesSection } from './components/MicroServicesSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { BlogSection } from './components/BlogSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    scrollToSection('calculator');
  };

  const handleAuditRequest = () => {
    setPrefilledMessage('Hi Kozmak Team, I would like to request the Free 12-Point AI Prototype & Production Readiness Audit for our codebase.');
    scrollToSection('contact');
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setPrefilledMessage(`Hi Kozmak Team, I was impressed by your work on ${projectName} and would like to build a similar production solution.`);
    scrollToSection('contact');
  };

  const handleSelectMicroService = (serviceTitle: string) => {
    setPrefilledMessage(`Hi Kozmak Team, I would like to book the rapid micro-sprint: "${serviceTitle}". Please send onboarding details and timeline.`);
    scrollToSection('contact');
  };

  const handleApplySpecToContact = (specSummary: string) => {
    setPrefilledMessage(specSummary);
    scrollToSection('contact');
  };

  const handleContactFromArticle = (articleTitle: string) => {
    setPrefilledMessage(`Hi Kozmak Team, I read your blueprint "${articleTitle}" and would like to consult on engineering a similar architecture for our product.`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation with Theme Toggle */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCalculator={handleOpenCalculator} 
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenCalculator={handleOpenCalculator} />

        {/* The AI Disruption Reality & Advantage */}
        <AiAdvantageSection onAuditRequest={handleAuditRequest} />

        {/* Interactive 3D WebGL / KozEngine Demo */}
        <KozEngineDemo />

        {/* Core Services: Desktop, Web, Mobile, Games & AI */}
        <ServicesSection />

        {/* Featured Case Studies: SmartRename AI, Zinter, KozEngine, NexaFi, VaultStream, Nuvral */}
        <PortfolioSection onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* Rapid Micro-Services & Fixed Turnaround Engagements */}
        <MicroServicesSection onSelectMicroService={handleSelectMicroService} />

        {/* Interactive Project Scope & Budget Calculator */}
        <ProjectCalculator onApplySpecToContact={handleApplySpecToContact} />

        {/* Engineering Blog & Playbook with Upload Studio */}
        <BlogSection onContactAuthor={handleContactFromArticle} />

        {/* 4-Sprint Engineering Process */}
        <ProcessSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* High-Conversion Contact Form (Submits to info@kozmaktechnologies.com) */}
        <ContactSection prefilledMessage={prefilledMessage} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
