
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LayeredBackground from '../landing/LayeredBackground';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

const wazeUrl = 'https://waze.com/ul?q=אשכול+פיס+בת+ים';

const eventDetails = [
  {
    icon: <Calendar className='w-8 h-8 text-white' />,
    title: 'יום ראשון',
    subtitle: '14/09/2025',
  },
  {
    icon: <Clock className='w-8 h-8 text-white' />,
    title: '18:00-21:00',
    subtitle: 'שלוש שעות של התרגשות',
  },
];

const highlights = [
  'סיפור אישי חשוף ועמוק',
  'צחוק, רגש, אור ואהבה',
  'תובנות נומרולוגיות',
];

function RotatingStar({ direction }: { direction: 'left' | 'right' }) {
  return (
    <motion.div
      animate={{ rotate: direction === 'left' ? 360 : -360 }}
      transition={{ duration: direction === 'left' ? 1.5 : 0.8 }}
    >
      <Star className='w-10 h-10 text-white drop-shadow-md relative z-10' />
    </motion.div>
  );
}

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
      <style jsx>{`
        @keyframes slidebg {
          to {
            background-position: 300% center;
          }#aba395
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

      <div className='absolute top-4 left-4 z-50 '>
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

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex flex-col md:flex-row items-center justify-between gap-8 mt-32 lg:mt-2'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className='text-right flex flex-col gap-4 md:mt-6'
            >
              <SparklesText text='מופע חד פעמי - מסע חיי עם מתי מור ' />
            </motion.div>
          </motion.div>

          <div className='flex flex-col lg:flex-row justify-between w-full gap-12 items-stretch'>
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
                className='bg-gradient-to-br from-[#664c43]/90 to-[#C8A85C]/90 backdrop-blur-lg rounded-3xl p-9 shadow-2xl border border-white/50 hover:shadow-[0_20px_40px_rgba(164,134,79,0.3)] transition-all duration-500'
              >
                <div className='grid md:grid-cols-3 gap-6 text-center'>
                  {eventDetails.map(({ icon, title, subtitle }, index) => (
                    <motion.div
                      key={index}
                      className='flex flex-col items-center space-y-3'
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className='p-3 bg-white/20 rounded-full'>{icon}</div>
                      <div>
                        <p className='font-bold text-white text-lg'>{title}</p>
                        <p className='text-white/90 text-base'>{subtitle}</p>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    className='flex flex-col items-center space-y-3 group'
                    whileHover={{ scale: 1.05 }}
                  >
                    <a
                      href={wazeUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-col items-center space-y-3'
                    >
                      <div className='p-3 bg-white/20 rounded-full transition-all duration-300'>
                        <div className='relative w-8 h-8'>
                          <MapPin className='w-8 h-8 text-white absolute inset-0 group-hover:opacity-0 transition-opacity duration-300' />
                          <img
                            src='/images/waze.png'
                            alt='Waze'
                            className='w-8 h-8 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                          />
                          <div className='absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap right-1/2 translate-x-1/2'>
                            לחצי כאן לניווט
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='font-bold text-white text-lg'>אשכול פיס</p>
                        <p className='font-bold text-white text-lg'> סמטת הדקל 5 בת-ים </p>
                        <p className='text-white/90 text-base'>חניה בשפע</p>
                      </div>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='text-xl md:text-3xl text-neutral-700 leading-relaxed font-light text-balance p-3 rounded-2xl'
              >
                חודש הסליחות, עשרת ימי תשובה הצטרפי אליי לערב נשי מיוחד, עוצמתי ומעורר השראה שיחבר אותך לעצמך דרכי
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='flex items-center lg:justify-start gap-8'
              >
                {highlights.map((label, index) => (
                  <motion.div
                    key={index}
                    className=' bg-white/40 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:bg-white/60 transition-all duration-300'
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <p className='text-neutral-700 text-lg font-medium'>{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className='flex-1 relative min-h-[500px] rounded-2xl overflow-hidden group'
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to from-[#664c43]/50 to-transparent z-10'></div>
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                style={{ backgroundImage: "url('/images/Image5.jpeg')" }}
              ></div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            onClick={onRegisterClick}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={rainbowButtonStyle}
            className='relative w-full max-w-[820px] mx-auto flex items-center justify-center gap-8 rounded-full px-20 py-4 text-3xl font-bold text-white overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-4xl pulse-glow border-2 border-white/30'
          >
            <RotatingStar direction='left' />
            <span className='relative z-10 drop-shadow-lg'>
              <span className='block sm:hidden'>שרייני מקום</span>
              <span className='hidden sm:block'>שמרי את מקומך עכשיו</span>
            </span>
            <RotatingStar direction='right' />
          </motion.button>
        </div>
      </section>
    </>
  );
}
