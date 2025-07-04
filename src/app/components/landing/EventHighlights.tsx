import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Gift,
  Heart,
  Camera,
  Clock,
  Star,
  Wand,
  Gem,
  BookOpenText,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventHighlights() {
  const highlights = [
    {
      icon: Gift,
      title: 'הפתעות  ',
      description: ' ומתנות מפנקות כולל כיבוד טעים ועשיר',
    },
    { icon: Gem, title: '  אווירה חמה ', description: 'בעוצמה נשית ייחודית ' },
    {
      icon: BookOpenText,
      title: ' סיפור חיים',
      description: 'מעורר השראה מתוך אמונה, הודיה, מזל ותקווה 🙏',
    },
    {
      icon: Camera,
      title: ' אנרגיות שמחות ',
      description: ' וזכרונות יפים שיתעודו על ידי צלמים מקצועיים ',
    },
    {
      icon: Wand,
      title: ' בערב זה בכל רגע יתרחש קסם ',
      description: '  מתחילתו ועד סיומו - אור גדול ',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2
            dir='rtl'
            className='text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6'
          >
            מה מחכה לך
            <span className='bg-gradient-to-r from-[#CAAB73] to-[#664c43] bg-clip-text text-transparent'>
              {' '}
              בערב מיוחד זה?
            </span>
          </h2>
          <p className='text-2xl text-neutral-600 max-w-3xl mx-auto'>
            ערב מלא באור, משמעות והפתעות שיעשו את הלב שמח
          </p>
        </motion.div>

        <div className='grid gap-8 lg:flex lg:flex-col'>
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.7, delay: index * 0.1 }}
              >
                <Card
                  className='border-none  hover:shadow-2xl focus:shadow-2xl active:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 
bg-gradient-to-br from-[#664c43]/90 to-[#C8A85C]/90
 backdrop-blur-lg 
 h-full  rounded-3xl  shadow-2xl   '
                >
                  <CardContent className='p-6 lg:p-8 text-center lg:text-right space-y-4 lg:space-y-0 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-6 lg:justify-items-end'>
                    {/* תוכן – כותרת מודגשת ואחריה תיאור */}
                    <div className='lg:flex lg:flex-row-reverse lg:items-center lg:gap-4 text-center lg:text-right'>
                      <h3 className='text-2xl font-bold text-white mb-2 lg:mb-0'>
                        {highlight.title}
                      </h3>
                      <p className='text-white text-2xl leading-relaxed'>
                        {highlight.description}
                      </p>
                    </div>
                    {/* אייקון – עובר לצד שמאל במסכים גדולים */}
                    <div className='w-16 h-16 mx-auto  lg:mr-[12rem] lg:ml-[4rem] rounded-full bg-[#f5e8cd] flex items-center justify-center mb-4 lg:mb-0 lg:row-span-1'>
                      <IconComponent className='w-8 h-8 text-[#664c43]' />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-16 text-center'
        >
          <Card className='bg-[#664c43] border-none text-white max-w-6xl mx-auto'>
            <CardContent className='p-8'>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                <div className='space-y-2'>
                  <Clock className='w-8 h-8 mx-auto' />
                  <h4 className='text-2xl font-bold'> שלוש שעות </h4>
                  <p className='text-[#F5E8CD]'>של השראה והעשרה</p>
                </div>
                <div className='space-y-2'>
                  <Star className='w-8 h-8 mx-auto' />
                  <h4 className='text-2xl font-bold'>אירוע חד פעמי</h4>
                  <p className='text-[#F5E8CD]'> שלא כדאי לפספס </p>
                </div>
                <div className='space-y-2'>
                  <Heart className='w-8 h-8 mx-auto' />
                  <h4 className='text-2xl font-bold'>מהלב אל הלב</h4>
                  <p className='text-[#F5E8CD]'>חוויה אותנטית ומרגשת</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
