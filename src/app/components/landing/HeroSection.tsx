'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [impact, setImpact] = useState(0);

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

    animateToValue(setExperience, 10, 30);
    animateToValue(setClients, 100, 1000);
    animateToValue(setImpact, 15, 100);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
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

      <div className='relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 md:py-16 flex flex-col gap-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='relative'>
            <Image
              src='/images/logo1.png'
              alt='מזל מתי מור'
              width={120}
              height={120}
              className='rounded-full shadow-xl object-cover'
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className='text-right flex flex-col gap-4'
          >
            <h1 className='text-3xl md:text-4xl text-neutral-700 md:text-balance font-light max-w-4xl'>
              הרצאה מרגשת חד פעמית עם מזל מתי מור
            </h1>
            <SparklesText text='מסע החיים שלי' />
          </motion.div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between w-full gap-12 items-stretch'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex-[2] space-y-8 text-center lg:text-right flex flex-col justify-center'
          >
            <div className='bg-[#A4864F]/80 backdrop-blur-sm rounded-2xl p-9 shadow-xl border border-white/40 transform hover:scale-106 transition-all duration-500'>
              <div className='grid md:grid-cols-3 gap-4 text-center'>
                <div className='flex flex-col items-center space-y-2'>
                  <Calendar className='w-10 h-10 text-white' />
                  <div>
                    <p className='font-semibold text-white'>יום ראשון</p>
                    <p className='text-white'>14 בספטמבר 2025</p>
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                  <Clock className='w-10 h-10 text-white' />
                  <div>
                    <p className='font-semibold text-white'>18:00-21:00</p>
                    <p className='text-white'>3 שעות של השראה</p>
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                  <MapPin className='w-10 h-10 text-white' />
                  <div>
                    <p className='font-semibold text-white'>אשכול פייס</p>
                    <p className='text-white'>בת ים</p>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-xl md:text-4xl text-neutral-700 leading-relaxed font-light text-balance'>
              הצטרפי אלינו לערב מיוחד של הכרת תודה לבורא עולם, גילוי עצמי והשראה
              שתלווה אותך זמן רב
            </p>

            <div className='flex justify-center lg:justify-start gap-8 pt-8 text-center'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                  <SlidingNumber value={experience} />
                  <span className='ml-1'>+</span>
                </div>
                <p className='text-neutral-600 text-2xl'>שנות ניסיון</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                  <SlidingNumber value={clients} />
                  <span className='ml-1'>+</span>
                </div>
                <p className='text-neutral-600 text-2xl'>נשים מרוצות</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                  <SlidingNumber value={impact} />
                  <span className='ml-1'>%</span>
                </div>
                <p className='text-neutral-600 text-2xl'>השראה מובטחת</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='flex-1 relative min-h-[400px] rounded-xl overflow-hidden'
          >
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{
                backgroundImage: "url('/images/Image5.jpeg')",
                backgroundBlendMode: 'overlay',
              }}
            ></div>
          </motion.div>
        </div>

 <Button
  onClick={onRegisterClick}
  className="relative w-full max-w-[820px] mx-auto flex items-center justify-center gap-4 mt-12
             rounded-full px-20 py-7 text-3xl font-semibold text-white
             bg-gradient-to-r from-[#FFD700] via-[#FFCC70] to-[#CAAB73]
             shadow-2xl overflow-hidden transition-all duration-500 ease-out
             hover:scale-105 group"
>

  <Star className="w-10 h-10 text-white drop-shadow-md relative z-10" />
  <span className="relative z-10">שמרי את מקומך עכשיו</span>
  <Star className="w-10 h-10 text-white drop-shadow-md relative z-10" />
</Button>

      </div>
    </section>
  );
}
