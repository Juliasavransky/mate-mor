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
      const earlyBirdDeadline = new Date('2025-07-12T23:59:59');
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
      {/* Hero Section */}
      <HeroSection onRegisterClick={scrollToRegistration} />

      {/* Speaker Section */}
      <SpeakerSection />

      {/* Event Highlights */}
      <EventHighlights />

      {/* Pricing Section */}
      <PricingSection
        timeLeft={timeLeft}
        onRegisterClick={scrollToRegistration}
      />

      {/* Registration Form */}
      <RegistrationForm />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Social Media */}
      <SocialSection />

      {/* Footer */}
      <Footer/>
     
    </div>
  );
}
