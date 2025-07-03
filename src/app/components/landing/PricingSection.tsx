import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Timer, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LayeredBackground from '../landing/LayeredBackground';

type PricingSectionProps = {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onRegisterClick: () => void;
};

export default function PricingSection({
  timeLeft,
  onRegisterClick,
}: PricingSectionProps) {
  const isEarlyBird = timeLeft.days >= 0;

  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden '
      id='pricing'
    >
      {/* Background Layered Effect */}
      <LayeredBackground />
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl text-normalize font-bold text-[#3b3b3b] mb-6 mt-12'>
            השקעה קטנה,
            <span className='text-normalize bg-gradient-to-r from-[#CAAB73] to-[#664c43] bg-clip-text text-transparent'>
              {' '}
              השפעה גדולה
            </span>
          </h2>
          <p className='text-2xl text-neutral-600 max-w-3xl mx-auto'>
            ערב שישנה את נקודת המבט שלך על החיים במחיר מיוחד לנרשמות מוקדם
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 lg:[direction:rtl] gap-8 max-w-4xl mx-auto'>
          {/* Early Bird Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className='border-4 border-[#CAAB73] shadow-2xl relative overflow-hidden bg-white'>
              {/* Popular Badge */}
              <div className='absolute top-0 right-0 bg-[#664c43] text-white px-8 py-4 rounded-bl-2xl'>
                <span className='flex items-center gap-2 font-bold'>
                  <Star className='w-5 h-5' />
                  הכי פופולרי
                </span>
              </div>

              <CardContent className='p-8 pt-16 text-center space-y-6'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold text-[#3b3b3b]'>
                    {' '}
                    עלות בהרשמה מוקדמת
                  </h3>
                  <Badge className='bg-[#F5D9A5] text-[#664c43] border-none py-2'>
                    עד 21 ביולי 2025
                  </Badge>
                </div>

                <div className='space-y-4'>
                  <div className='text-6xl font-bold text-[#CAAB73]'>₪99</div>
                  <span className='text-6xl font-bold text-[#CAAB73]'>
                    בלבד{' '}
                  </span>

                  <div className='text-neutral-500 line-through text-2xl'>
                    ₪129
                  </div>
                </div>

                {isEarlyBird && timeLeft.days !== undefined && (
                  <div className='bg-[#F5E8CD] rounded-xl p-4 rtl'>
                    <div className='flex items-center justify-center gap-2 mb-3'>
                      <Timer className='w-6 h-6 text-[#664c43]' />
                      <span className='font-bold text-[#664c43]'>
                        נותר זמן:
                      </span>
                    </div>
                    <div className='grid grid-cols-4 gap-2 text-center'>
                      <div className='bg-[#F5D9A5] rounded-lg p-2'>
                        <div className='text-2xl font-bold text-[#664c43]'>
                          {timeLeft.days}
                        </div>
                        <div className='text-xs text-neutral-600'>ימים</div>
                      </div>
                      <div className='bg-[#F5D9A5] rounded-lg p-2'>
                        <div className='text-2xl font-bold text-[#664c43]'>
                          {timeLeft.hours}
                        </div>
                        <div className='text-xs text-neutral-600'>שעות</div>
                      </div>
                      <div className='bg-[#F5D9A5] rounded-lg p-2'>
                        <div className='text-2xl font-bold text-[#664c43]'>
                          {timeLeft.minutes}
                        </div>
                        <div className='text-xs text-neutral-600'>דקות</div>
                      </div>
                      <div className='bg-[#F5D9A5] rounded-lg p-2'>
                        <div className='text-2xl font-bold text-[#664c43]'>
                          {timeLeft.seconds}
                        </div>
                        <div className='text-xs text-neutral-600'>שניות</div>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={onRegisterClick}
                  dir='rtl'
                  className='w-full  bg-[#CAAB73] hover:bg-[#664c43] text-white py-8 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl'
                >
                  מספר המקומות מוגבל – הזמיני עכשיו!{' '}
                </Button>

                <div dir='rtl' className='text-sm text-neutral-500 space-y-1'>
                  <p>✓ כל מה שכלול בערב</p>
                  <p>✓ מתנות מיוחדות</p>
                  <p>✓ חוויית צילום</p>
                  <p>✓ אוכל ומשקאות</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Regular Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className='shadow-xl border-[#F5D9A5] h-full opacity-75 bg-white'>
              <CardContent className='p-8 text-center space-y-6 h-full flex flex-col justify-center'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold text-neutral-800'>
                    מחיר רגיל
                  </h3>
                  <Badge
                    variant='outline'
                    className='border-[#664c43] text-neutral-600'
                  >
                    מ-22 ביולי 2025
                  </Badge>
                </div>

                <div className='space-y-4'>
                  <div className='text-6xl font-bold text-neutral-700'>
                    ₪129
                  </div>
                  <p className='text-neutral-500'>מחיר מלא</p>
                </div>

                <Button
                  variant='outline'
                  className='w-full border-neutral-300 text-neutral-700 py-4 text-lg rounded-xl hover:bg-neutral-50'
                  disabled
                >
                  יהיה זמין אחרי ה- 21 ביולי 2025
                </Button>

                <div className='text-sm text-neutral-400 space-y-1'>
                  <p>✓ כל מה שכלול בערב</p>
                  <p>✓ מתנות מיוחדות</p>
                  <p>✓ חוויית צילום</p>
                  <p>✓ אוכל ומשקאות</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-12 text-center'
        ></motion.div>
      </div>
    </section>
  );
}
