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
import {
  FloatingButton,
  FloatingButtonItem,
} from '../components/ui/floating-button';
import { cn } from '../lib/utils';
import { PersonStanding, ArrowUp, PlusIcon, Key } from 'lucide-react';
import WheatAppWhite from '../../public/images/whatsappWhite.svg';
import Image from 'next/image';

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
  const items = [
    {
      icon: (
        <Image
          src={WheatAppWhite}
          alt='WhatsApp'
          width={32}
          height={32}
          style={{ objectFit: 'contain' }}
        />
      ),
      title: 'WhatsApp',
      bgColor: 'bg-[#26d366]',
      id: 333,
      link: 'https://wa.me/972544591175',
    },
    {
      icon: <PersonStanding />,
      bgColor: 'bg-[#ea4c89]',
      title: 'Accessibility',
      id: 222,
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      icon: <ArrowUp />,
      bgColor: 'bg-[#0a66c2]',
      title: 'Back to Top',
      id: 111,
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50'>
      {/* Hero Section */}
      <HeroSection onRegisterClick={scrollToRegistration} />

      {/* Floating Menu */}

      <div className='fixed bottom-6 right-6 z-50'>
        <FloatingButton
          triggerContent={
            <button className='flex items-center justify-center h-12 w-12 rounded-full bg-[#a4864f] dark:bg-slate-800 text-white/80 z-10'>
              <PlusIcon />
            </button>
          }
        >
          {items.map((item) => (
            <FloatingButtonItem key={item.id}>
              {item.link ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    'flex items-center justify-center h-12 w-12 rounded-full text-white/80',
                    item.bgColor
                  )}
                >
                  {item.icon}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className={cn(
                    'h-12 w-12 rounded-full flex items-center justify-center text-white/80',
                    item.bgColor
                  )}
                >
                  {item.icon}
                </button>
              )}
            </FloatingButtonItem>
          ))}
        </FloatingButton>
      </div>
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
      <Footer />
    </div>
  );
}
