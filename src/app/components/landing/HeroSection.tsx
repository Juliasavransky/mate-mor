'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [experience, setExperience] = useState(6);
  const [clients, setClients] = useState(150);
  const [impact, setImpact] = useState(15);

  useEffect(() => {
    const animateToValue = (
      setter: (val: number) => void,
      startValue: number,
      targetValue: number,
      overshoot: number = 3
    ) => {
      let current = startValue;
      const finalTarget = targetValue + overshoot;
      let phase: 'up' | 'down' = 'up';

      const interval = setInterval(() => {
        if (phase === 'up') {
          const step = Math.ceil((finalTarget - current) / 5);
          current += step;
          if (current >= finalTarget) {
            phase = 'down';
          }
        } else if (phase === 'down') {
          const step = Math.max(1, Math.ceil((current - targetValue) / 8));
          current -= step;
          if (current <= targetValue) {
            current = targetValue;
            clearInterval(interval);
          }
        }

        setter(current);
      }, 30);
    };

    animateToValue(setExperience, 6, 30);
    animateToValue(setClients, 150, 1000);
    animateToValue(setImpact, 15, 100);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden '>
      <div className='absolute inset-0 bg-[#F5E8CD] opacity-10'></div>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat '
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
        <Image
          src='/images/logo1.png'
          alt='מזל מתי מור'
          width={140}
          height={140}
          className='mx-auto m-6 rounded-full shadow-xl object-cover'
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          <h1 className='text-3xl md:text-5xl text-neutral-700 font-normal max-w-4xl mx-auto p-2'>
            הרצאה מרגשת חד פעמית עם מזל מתי מור
          </h1>

          <SparklesText text='מסע החיים שלי' />

          <div className='bg-[#CAAB73] backdrop-blur-sm rounded-2xl p-9 mt-16 shadow-xl border border-white/40 max-w-3xl mx-auto  transform hover:scale-106 hover:bg-[#A4864F] transition-all duration-500'>
            <div className='grid md:grid-cols-3 gap-4 text-center'>
              <div className='flex flex-col items-center space-y-2'>
                <Calendar className='w-10 h-10 text-white' />
                <div>
                  <p className='font-semibold  text-white'>יום ראשון</p>
                  <p className=' text-white'>14 בספטמבר 2025</p>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Clock className='w-10 h-10  text-white' />
                <div>
                  <p className='font-semibold  text-white'>18:00-21:00</p>
                  <p className=' text-white'>3 שעות של השראה</p>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <MapPin className='w-10 h-10  text-white' />
                <div>
                  <p className='font-semibold  text-white'>אשכול פייס</p>
                  <p className=' text-white'>בת ים</p>
                </div>
              </div>
            </div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <p className='text-xl md:text-4xl text-neutral-700 leading-relaxed font-light'>
              הצטרפי אלינו לערב מיוחד של הכרת תודה לבורא עולם,
              <br className='hidden md:block' />
              גילוי עצמי והשראה שתלווה אותך זמן רב
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Button
              onClick={onRegisterClick}
              size='lg'
              className='bg-[#CAAB73] hover:bg-[#A4864F] text-white px-12 py-8 text-3xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              שמרי את מקומך עכשיו
            </Button>
          </motion.div>

          <div className='flex justify-center items-center space-x-8 pt-8 mb-10'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                <SlidingNumber value={experience} />
                <span className='ml-1'>+</span>
              </div>
              <p className='text-neutral-600'>שנות ניסיון</p>
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                <SlidingNumber value={clients} />
                <span className='ml-1'>+</span>
              </div>
              <p className='text-neutral-600'>נשים מרוצות</p>
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                <SlidingNumber value={impact} />
                <span className='ml-1'>%</span>
              </div>
              <p className='text-neutral-600'>השראה מובטחת</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
