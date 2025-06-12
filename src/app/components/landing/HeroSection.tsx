import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[#F5E8CD] opacity-10'></div>

      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `
      url('/images/bgSmall.jpg'),
      radial-gradient(circle at 20% 80%, rgba(164, 134, 79, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(202, 171, 115, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(245, 217, 165, 0.1) 0%, transparent 50%)
    `,
          backgroundBlendMode: 'overlay',
          filter: 'blur(2px) grayscale(0.1) opacity(0.65)',
        }}
      ></div>

      <div className='relative z-10 max-w-6xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          {/* Badge */}
          <Badge className='bg-[#A4864F] text-white px-6 py-2 text-lg font-medium'>
            <Sparkles className='w-4 h-4 mr-2' />
            אירוע חד פעמי מיוחד
          </Badge>

          {/* Main Headline */}
          <SparklesText
            text="מסע החיים שלי"
          />

          <h2 className='text-2xl md:text-3xl text-neutral-700 font-light max-w-4xl mx-auto'>
            הרצאה מרגשת חד פעמית עם מזל מתי מור
          </h2>
          {/* Event Details */}
    
            <div className='bg-[#A4864F]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 max-w-3xl mx-auto  transform hover:scale-111 transition-all duration-500'>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                <div className='flex flex-col items-center space-y-2'>
                  <Calendar className='w-8 h-8 text-[#F5E8CD]' />
                  <div>
                    <p className='font-semibold text-[#F5E8CD]'>יום ראשון</p>
                    <p className='text-[#F5E8CD]'>14 בספטמבר 2025</p>
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                  <Clock className='w-8 h-8 text-[#F5E8CD]' />
                  <div>
                    <p className='font-semibold text-[#F5E8CD]'>18:00-21:00</p>
                    <p className='text-[#F5E8CD]'>3 שעות של השראה</p>
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                  <MapPin className='w-8 h-8 text-[#F5E8CD]' />
                  <div>
                    <p className='font-semibold text-[#F5E8CD]'>אשכול פייס</p>
                    <p className='text-[#F5E8CD]'>בת ים</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Emotional Teaser */}
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl md:text-2xl text-neutral-700 leading-relaxed font-light'>
              הצטרפי אלינו לערב מיוחד של הכרת תודה לבורא עולם,
              <br className='hidden md:block' />
              גילוי עצמי והשראה שתלווה אותך זמן רב
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              onClick={onRegisterClick}
              size='lg'
              className='bg-[#CAAB73] hover:bg-[#A4864F] text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              שמרי את מקומך עכשיו
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <div className='flex justify-center items-center space-x-8 pt-8'>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#A4864F]'>30+</p>
              <p className='text-neutral-600'>שנות ניסיון</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#A4864F]'>1000+</p>
              <p className='text-neutral-600'>נשים מרוצות</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#A4864F]'>100%</p>
              <p className='text-neutral-600'>השראה מובטחת</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
