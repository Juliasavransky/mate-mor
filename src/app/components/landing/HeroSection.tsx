'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface HeroSectionProps {
  onRegisterClick: () => void;
}
const wazeUrl = 'https://waze.com/ul?q=אשכול+פיס+בת+ים';

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [impact, setImpact] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const animateToValue = (
      setter: (val: number) => void,
      startValue: number,
      targetValue: number
    ) => {
      let current = startValue;
      const interval = setInterval(() => {
        {
          const step = Math.ceil((targetValue - current) / 5);
          current += step;
        }

        setter(current);
      }, 50);
    };

    // עיכוב קטן כדי שהאנימציה תתחיל אחרי שהדף נטען
    const timeout = setTimeout(() => {
      animateToValue(setExperience, 10, 30);
      animateToValue(setClients, 100, 1000);
      animateToValue(setImpact, 15, 100);
    }, 1700);

    return () => clearTimeout(timeout);
  }, []);

  // סגנון הכפתור עם אותה פלטת צבעים תמיד
  const rainbowButtonStyle = {
    backgroundImage:
      'linear-gradient(to right, #FFD382, #F5D9A5, #C8A85C, #E6CBB5, #FFD382)',
    backgroundSize: '300% auto',
    animation: 'slidebg 8s linear infinite', // האנימציה פועלת תמיד
  };

  return (
    <>
      {/* הוספת CSS לאנימציה */}
      <style jsx>{`
        @keyframes slidebg {
          to {
            background-position: 300% center;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(164, 134, 79, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(164, 134, 79, 0.6);
          }
        }

        .pulse-glow {
          animation: pulse-glow 7s ease-in-out infinite;
        }
      `}</style>

      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* רקע משופר עם שכבות נוספות */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `
              url('/images/bgSmall.jpg'),
              radial-gradient(circle at 20% 80%, rgba(164, 134, 79, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(202, 171, 115, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 40% 40%, rgba(245, 217, 165, 0.12) 0%, transparent 60%),
              linear-gradient(135deg, rgba(164, 134, 79, 0.05) 0%, rgba(245, 217, 165, 0.08) 100%)
            `,
            backgroundBlendMode: 'overlay, normal, normal, normal, normal',
            filter: 'blur(1.5px) brightness(1.1) contrast(1.05)',
          }}
        ></div>

        <div className='relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 md:py-16 flex flex-col gap-12'>
          {/* כותרת עליונה משופרת */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex flex-col md:flex-row items-center justify-between gap-8'
          >
            <motion.div
              className='relative'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#A4864F]/30 to-[#F5D9A5]/30 rounded-full blur-xl'></div>
              <Image
                src='/images/logo1.png'
                alt='מזל מתי מור'
                width={120}
                height={120}
                className='relative rounded-full shadow-2xl object-cover border-4 border-white/50'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className='text-right flex flex-col gap-4'
            >
              <h1 className='text-3xl md:text-4xl text-neutral-700 md:text-balance font-light max-w-4xl leading-tight'>
                הרצאה מרגשת חד פעמית עם
                <span className='text-[#A4864F] font-medium'> מזל מתי מור</span>
              </h1>
              <SparklesText text='מסע החיים שלי' />
            </motion.div>
          </motion.div>

          <div className='flex flex-col lg:flex-row justify-between w-full gap-12 items-stretch'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex-[2] space-y-8 text-center lg:text-right flex flex-col justify-center'
            >
              {/* כרטיס פרטי האירוע משופר */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='bg-gradient-to-br from-[#A4864F]/90 to-[#C8A85C]/90 backdrop-blur-lg rounded-3xl p-9 shadow-2xl border border-white/50 hover:shadow-[0_20px_40px_rgba(164,134,79,0.3)] transition-all duration-500'
              >
                <div className='grid md:grid-cols-3 gap-6 text-center'>
                  <motion.div
                    className='flex flex-col items-center space-y-3'
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className='p-3 bg-white/20 rounded-full'>
                      <Calendar className='w-8 h-8 text-white' />
                    </div>
                    <div>
                      <p className='font-bold text-white text-lg'>יום ראשון</p>
                      <p className='text-white/90 text-base'>14 בספטמבר 2025</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex flex-col items-center space-y-3'
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className='p-3 bg-white/20 rounded-full'>
                      <Clock className='w-8 h-8 text-white' />
                    </div>
                    <div>
                      <p className='font-bold text-white text-lg'>
                        18:00-21:00
                      </p>
                      <p className='text-white/90 text-base'>3 שעות של השראה</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex flex-col items-center space-y-3 group'
                    whileHover={{ scale: 1.05 }}
                  >
                    <a
                      href='https://waze.com/ul?q=אשכול+פיס+בת+ים'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-col items-center space-y-3'
                    >
                      <div className='p-3 bg-white/20 rounded-full transition-all duration-300'>
                        {/* בהובר מחליפים אייקון */}
                        <div className='relative w-8 h-8'>
                          {/* אייקון מיקום רגיל */}
                          <MapPin className='w-8 h-8 text-white absolute inset-0 group-hover:opacity-0 transition-opacity duration-300' />
                          {/* לוגו Waze */}
                          <img
                            src='/images/waze.png'
                            alt='Waze'
                            className='w-8 h-8 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                          />
                        </div>
                      </div>
                      <div>
                        <p className='font-bold text-white text-lg underline'>
                          אשכול פיס
                        </p>
                        <p className='text-white/90 text-base'>בת ים</p>
                      </div>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* טקסט תיאור משופר */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='text-xl md:text-3xl text-neutral-700 leading-relaxed font-light text-balance  p-3 rounded-2xl '
              >
                הצטרפי אלינו לערב מיוחד של
                <span className='text-[#A4864F] font-medium'>
                  {' '}
                  הכרת תודה לבורא עולם
                </span>
                , גילוי עצמי והשראה שתלווה אותך זמן רב
              </motion.p>

              {/* סטטיסטיקות משופרות */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='flex justify-center lg:justify-start gap-8 '
              >
                {[
                  { value: experience, label: 'שנות ניסיון', suffix: '+' },
                  { value: clients, label: 'נשים מרוצות', suffix: '+' },
                  { value: impact, label: 'השראה מובטחת', suffix: '%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className='text-center bg-white/40 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:bg-white/60 transition-all duration-300'
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className='text-3xl font-bold text-[#A4864F] flex items-center justify-center'>
                      <SlidingNumber value={stat.value} />
                      <span className='ml-1'>{stat.suffix}</span>
                    </div>
                    <p className='text-neutral-700 text-lg font-medium'>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* תמונה משופרת */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className='flex-1 relative min-h-[500px] rounded-2xl overflow-hidden group'
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to from-[#A4864F]/50 to-transparent z-10'></div>
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                style={{
                  backgroundImage: "url('/images/Image5.jpeg')",
                }}
              ></div>
            </motion.div>
          </div>

          {/* כפתור הרשמה  */}
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            onClick={onRegisterClick}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={rainbowButtonStyle}
            className='relative w-full max-w-[820px] mx-auto flex items-center justify-center gap-8 
                       rounded-full px-20 py-4 text-3xl font-bold text-white
                       overflow-hidden transition-all duration-500 ease-out
                       hover:scale-105 hover:shadow-4xl
                       pulse-glow border-2 border-white/30'
          >
            <motion.div
              animate={{ rotate: isButtonHovered ? 360 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <Star className='w-10 h-10 text-white drop-shadow-md relative z-10' />
            </motion.div>
            <span className='relative z-10 drop-shadow-lg'>
              שמרי את מקומך עכשיו
            </span>
            <motion.div
              animate={{ rotate: isButtonHovered ? -360 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Star className='w-10 h-10 text-white drop-shadow-md relative z-10' />
            </motion.div>
          </motion.button>
        </div>
      </section>
    </>
  );
}
