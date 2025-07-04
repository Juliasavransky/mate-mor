'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LayeredBackground from '../landing/LayeredBackground';
import WazeLocationCard from '../landing/WazeLocationCard';
import CalendarCard from '../landing/CalendarCard';
import ClockCard from '../landing/ClockCard';
import Gold from '../../../../public/images/gold.svg';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

const highlights = [
  'סיפור אישי חשוף ועמוק',
  'צחוק, רגש, אור ואהבה',
  'תובנות נומרולוגיות',
];

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const rainbowButtonStyle = {
    backgroundImage:
      'linear-gradient(to right, #FFD382, #F5D9A5, #C8A85C, #E6CBB5, #FFD382)',
    backgroundSize: '300% auto',
    animation: 'slidebg 8s linear infinite',
  };

  return (
    <>
      {/* לוגו בדסקטופ */}
      <div className='hidden lg:block absolute top-4 left-4 z-50'>
        <Image
          src='/images/logo1.png'
          alt='מזל מתי מור'
          width={100}
          height={100}
          className='rounded-full shadow-2xl object-cover border-2 border-white/50'
        />
      </div>

      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <LayeredBackground />

        <div className='relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 md:py-16 flex flex-col gap-12'>
          {/* לוגו למובייל */}
          <div className='lg:hidden mx-auto mt-3'>
            <Image
              src='/images/logo1.png'
              alt='מזל מתי מור'
              width={140}
              height={140}
              className='rounded-full shadow-2xl object-cover border-2 border-white/50'
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full flex justify-center md:justify-end'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className='text-center md:text-right'
            >
              <SparklesText
                text='"מזל שיש אותך"
מופע מסע חיי
עם מתי מור '
              />
            </motion.div>
          </motion.div>

          {/* תמונה של מתי - רק למובייל */}
          <div className='lg:hidden'>
            <div className='relative min-h-[420px]   rounded-2xl overflow-hidden'>
              <div
                className='absolute inset-0 bg-cover  object-[center_70%]'
                style={{ backgroundImage: "url('/images/MatiWhiteT.jpg')" }}
              ></div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between w-full gap-12 items-stretch z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex-[2] space-y-8 text-center lg:text-right flex flex-col justify-center items-center'
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='bg-gradient-to-br from-[#664c43]/90 to-[#C8A85C]/90 backdrop-blur-lg 
             rounded-3xl pl-20 pr-20 pt-9 pb-9  shadow-2xl border border-white/50 
             hover:shadow-[0_20px_40px_rgba(164,134,79,0.3)] active:shadow-[0_20px_40px_rgba(164,134,79,0.3)] focus:shadow-[0_20px_40px_rgba(164,134,79,0.3)]transition-all duration-500 
             max-w-[400px] lg:max-w-none mx-auto'
              >
                <div className='grid md:grid-cols-3 gap-6 text-center'>
                  <CalendarCard />
                  <ClockCard />
                  <WazeLocationCard />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='text-2xl md:text-3xl text-neutral-900 leading-relaxed font-light text-balance  rounded-2xl'
              >
                חודש הסליחות, עשרת ימי תשובה
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='text-2xl md:text-3xl text-neutral-900 leading-relaxed font-light text-balance  rounded-2xl'
              >
                הצטרפי אליי לערב עוצמתי מיוחד ומעורר השראה
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='text-2xl md:text-3xl text-neutral-900 leading-relaxed font-light text-balance  rounded-2xl'
              >
                שיחבר אותך לקול הפנימי ולעצמך - דרכי
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-8 bg-white/30 rounded-2xl sm:bg-transparent sm:rounded-none'
              >
                {highlights.map((label, index) => (
                  <motion.div
                    key={index}
                    className='p-8 rounded-xl hover:bg-white/60 active:bg-white/60 focus:bg-white/60 transition-all duration-300'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 1.1, y: -2 }}
                  >
                    <p className='text-neutral-700 text-xl text-center font-medium'>
                      {label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* תמונה של מתי במסך גדול */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className='hidden lg:block flex-1 relative min-h-[500px] rounded-2xl overflow-hidden group'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to from-[#664c43]/50 to-transparent z-10'></div>
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-110 group-focus:scale-110'
                style={{ backgroundImage: "url('/images/MatiWhiteT.jpg')" }}
              ></div>
            </motion.div>
          </div>
          <Image
            src={Gold}
            alt='gold line'
            width={900}
            height={90}
            className='rotate-[238deg] absolute bottom-[-200px] left-[-33px] '
          />

          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            onClick={onRegisterClick}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={rainbowButtonStyle}
            className='relative w-full max-w-[820px] 
            mx-auto flex items-center justify-center gap-8 mb-10 
            rounded-full  py-4 text-3xl font-bold text-white
             overflow-hidden transition-all duration-500 
             ease-out hover:scale-105 hover:shadow-4xl 
             focus:scale-105 focus:shadow-4xl active:scale-105
              active:shadow-4xl pulse-glow border-2 border-white/60'
          >
            <Star className='w-8 h-8 text-white' />
            <span className='relative z-10 drop-shadow-lg mb-4 sm:mb-4'>
              {' '}
              <span className='block sm:hidden'>שרייני מקום</span>
              <span className='hidden sm:block'>שמרי את מקומך עכשיו</span>
            </span>
            <Star className='w-8 h-8 text-white' />
          </motion.button>
        </div>
      </section>
    </>
  );
}
