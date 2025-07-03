import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function WazeLocationCard() {
  const wazeUrl =
    'https://waze.com/ul?q=אשכול+פיס+בת+ים';

  return (
    <motion.div
      className='flex flex-col items-center space-y-3 group'
      whileHover={{ scale: 1.05 }}
      whileTap={{scale:1.05}}
    >
      <a
        href={wazeUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center space-y-3'
      >
        <div className='p-3 bg-white/20 rounded-full transition-all duration-300'>
          <div className='relative w-8 h-8'>
            <MapPin className='w-8 h-8 text-white absolute inset-0 group-hover:opacity-0  group-active:opacity-0 group-focus:opacity-0 transition-opacity duration-300' />
            <img
              src='/images/waze.png'
              alt='Waze'
              className='w-8 h-8 absolute inset-0 opacity-0 group-hover:opacity-100  group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300'
            />
            <div className='absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-active:opacity-100 group-focus:opacity-100 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap right-1/2 translate-x-1/2'>
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
  );
}
