'use client';

import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const googleCalendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=מסע+החיים+שלי+-+מתי+מור&dates=20250914T150000Z/20250914T180000Z&details=ערב+השראה+וחיבור+רוחני&location=אשכול+פיס+בת+ים';

export default function CalendarCard() {
  return (
    <motion.div
      className="flex flex-col items-center space-y-3"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 bg-white/20 rounded-full">
        <Calendar className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="font-bold text-white text-lg">יום ראשון</p>
        <p className="text-white/90 text-base">14/09/2025</p>
      </div>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed p-4 shadow-lg transition-all"
      >
        <div className="absolute whitespace-nowrap bottom-full right-1/2 translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          להוספה ליומן לחצי
        </div>
      </a>
    </motion.div>
  );
}