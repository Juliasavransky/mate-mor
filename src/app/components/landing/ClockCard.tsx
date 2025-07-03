'use client';

import { useEffect, useState } from 'react';
import { Clock, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClockCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-14T18:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className='flex flex-col items-center space-y-3 group'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale:1.05}}
    >
      <div className='p-3 bg-white/20 rounded-full'>
        <Clock className='w-8 h-8 text-white animate-pulse' />
      </div>
      <div>
        <p className='font-bold text-white text-lg'>18:00-21:00</p>
        <p className='text-white/90 text-base'>שלוש שעות של התרגשות</p>
      </div>

      <div className="absolute top text-xs bg-[#F5E8CD] p-4 rtl text-white rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 whitespace-nowrap"
  dir="rtl"
>
  <div className="flex items-center justify-center gap-3 mb-3">
    <Timer className="w-4 h-4 text-[#664c43]" />
    <span className="font-medium text-[#664c43] text-sm">נותר זמן:</span>
  </div>

  <div className="grid grid-cols-4 gap-2 text-center">
    <div className="bg-[#F5D9A5] rounded-md p-3 px-4 flex flex-col items-center justify-center">
      <div className="text-sm font-bold  text-[#664c43]">{timeLeft.days}</div>
      <div className="text-xs text-neutral-600 ">ימים</div>
    </div>

    <div className="bg-[#F5D9A5] rounded-md p-3 px-4  flex flex-col items-center justify-center">
      <div className="text-sm font-bold text-[#664c43]">{timeLeft.hours}</div>
      <div className="text-xs  text-neutral-600">שעות</div>
    </div>

    <div className="bg-[#F5D9A5] rounded-md p-3 px-4 flex flex-col items-center justify-center">
      <div className="text-sm font-bold text-[#664c43]">{timeLeft.minutes}</div>
      <div className="text-xs text-neutral-600">דקות</div>
    </div>

    <div className="bg-[#F5D9A5] rounded-md p-3 px-4 flex flex-col items-center justify-center">
      <div className="text-sm font-bold text-[#664c43]">{timeLeft.seconds}</div>
      <div className="text-xs text-neutral-600">שניות</div>
    </div>
  </div>
</div>

    </motion.div>
  );
}
