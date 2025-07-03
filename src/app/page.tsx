'use client';
import React, { useState, useEffect } from 'react';
import HeroSection from '../app/components/landing/HeroSection';
import SpeakerSection from '../app/components/landing/SpeakerSection';
import EventHighlights from '../app/components/landing/EventHighlights';
import PricingSection from '../app/components/landing/PricingSection';
import RegistrationForm from '../app/components/landing/RegistrationForm';
import TestimonialsSection from '../app/components/landing/TestimonialsSection';
import SocialSection from '../app/components/landing/SocialSection';
import Footer from '../app/components/landing/Footer';
import FloatingButtons from '../app/components/landing/FloatingButtons';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showForm, setShowForm] = useState(false);

  // Calculate time until early bird deadline
  useEffect(() => {
    const calculateTimeLeft = () => {
const earlyBirdDeadline = new Date('2025-07-22T23:59:59');
      const now = new Date();
      const difference = earlyBirdDeadline.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const registrationElement = document.getElementById('registration');
    if (registrationElement) {
      registrationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50'>
      <section id='about'>
        {/* Hero Section */}
        <HeroSection onRegisterClick={scrollToRegistration} />
      </section>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Speaker Section */}
      <SpeakerSection />
      <section id='eventHighlights'>
        {/* Event Highlights */}
        <EventHighlights />
      </section>

      {/* Pricing Section */}
      <PricingSection
        timeLeft={timeLeft}
        onRegisterClick={scrollToRegistration}
      />
      <section id='registrationForm'>
        {/* Registration Form */}
        <RegistrationForm />
      </section>
      <section id='socialSection'>
        {/* Social Media */}
        <SocialSection />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
