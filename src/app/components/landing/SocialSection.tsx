import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import WheatAppWhite from '../../../../public/images/whatsappWhite.svg';
import instagram from '../../../../public/instagram.svg';
import facebook from '../../../../public/facebook.svg';

import Image from 'next/image';

export default function SocialSection() {
  const socialLinks = [
    {
      image: facebook,
      alt: 'Facebook',
      name: 'Facebook',
      handle: 'www.facebook.com/mati.mor',
      color: '#1877F2',
      url: 'https://www.facebook.com/mzmor?locale=he_IL',
      width: 46,
      height: 46,
    },
    {
      image: instagram,
      alt: 'Instagram',
      name: 'Instagram',
      handle: '@mati.mor',
      gradient: 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);',
      url: 'https://www.instagram.com/matimor40/',
      width: 48,
      height: 48,
    },
    {
      image: WheatAppWhite,
      alt: 'WhatsApp',
      name: 'WhatsApp',
      handle: '054-4591175',
      color: '#26d366',
      url: 'https://wa.me/972544591175',
      width: 40,
      height: 44,
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
          <h2 className='text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6'>
            <span className='bg-gradient-to-r from-[#CAAB73] to-[#664c43] bg-clip-text text-transparent'>
              בואי נישאר בקשר
            </span>
          </h2>
          <p className='text-2xl text-neutral-600 max-w-3xl mx-auto'>
            הצטרפי לקהילה שלנו לתכנים מעוררי השראה ועדכונים על אירועים עתידיים
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div
                onClick={() => window.open(social.url, '_blank')}
                className='cursor-pointer'
                role='button'
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') window.open(social.url, '_blank');
                }}
              >
                <Card className='border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-[#F5E8CD]/40 h-full'>
                  <CardContent className='p-8 text-center space-y-6'>
                    <div
                      className='w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4'
                      style={{
                        background: social.gradient || social.color,
                      }}
                    >
                      <Image
                        src={social.image}
                        alt={social.alt}
                        width={social.width}
                        height={social.height}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                    <div className='space-y-3'>
                      <h3 className='text-2xl font-bold text-[#3b3b3b]'>
                        {social.name}
                      </h3>

                      <p className='text-neutral-700 font-medium'>
                        {social.handle}
                      </p>
                    </div>

                    <Button
                      className='w-full text-white font-semibold py-3 rounded-xl transition-all duration-300'
                      style={{
                        background: social.gradient
                          ? social.gradient
                          : social.color,
                      }}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      עקבי עכשיו
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center'
        >
          <Card className='bg-[#F5D9A5] border-none max-w-6xl mx-auto'>
            <CardContent className='p-2'>
              <div className='space-y-2'>
                <Share2 className='w-8 h-8 text-[#664c43] mx-auto' />
                <h3 dir='rtl' className='text-2xl font-bold text-[#3b3b3b]'>
                  מוזמנת לשתף!
                </h3>
                <p dir='rtl' className='text-neutral-600 '>
                  מופע עוצמתי חד פעמי. עם מי בא לך לבוא?{' '}
                </p>
                <Button
                  variant='outline'
                  className='border-[#664c43] text-[#664c43]  hover:bg-[#664c43] hover:text-white'
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'מסע החיים שלי - ערב מיוחד עם מזל מתי מור',
                        text: 'הצטרפי אליי לערב מרגש של גילוי עצמי והשראה!',
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('הקישור הועתק ללוח!');
                    }
                  }}
                >
                  שתפי את האירוע
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
