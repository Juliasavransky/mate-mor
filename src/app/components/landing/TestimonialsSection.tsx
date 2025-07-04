'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Quote, Star } from 'lucide-react';
import LayeredBackground from '../landing/LayeredBackground';

const testimonials = [
  {
    id: 1,
    name: 'רחל כהן',
    location: 'תל אביב',
    text: 'ערב מדהים שהשאיר אותי עם כל כך הרבה השראה וחיבור למשמעות החיים. מתי יודעת לגעת בנשמה בדיוק במקום הנכון.',
    rating: 5,
    highlight: 'השראה אמיתית',
  },
  {
    id: 2,
    name: 'שרה לוי',
    location: 'ירושלים',
    text: 'לא ציפיתי שערב אחד יכול לשנות את כל נקודת המבט שלי על החיים. התובנות שקיבלתי מהנומרולוגיה פשוט מדהימות!',
    rating: 5,
    highlight: 'שינוי נקודת מבט',
  },
  {
    id: 3,
    name: 'מרים אברהם',
    location: 'חיפה',
    text: 'האווירה הייתה כל כך חמה ומקבלת, והתוכן עמוק ומשמעותי. בהחלט אחד הערבים הכי מיוחדים שהייתי בהם!',
    rating: 5,
    highlight: 'ערב מיוחד ביותר',
  },
  {
    id: 4,
    name: 'דבורה גולד',
    location: 'בני ברק',
    text: 'מתי הצליחה להסביר דברים מורכבים בצורה כל כך פשוטה וברורה. יצאתי מהערב עם הבנה חדשה על עצמי ועל הייעוד שלי.',
    rating: 5,
    highlight: 'הבנה חדשה על עצמי',
  },
  {
    id: 5,
    name: 'רוברטו',
    location: 'רמת גן ',
    text: '  תודה על הרצאה סוחפת בה גילינו את משמעותם והשפעתם על חיינו, מרגש מסקרן ומדוייק',
    rating: 5,
    highlight: 'השראה אמיתית',
  },
  {
    id: 6,
    name: 'שרה ',
    location: 'בת ים',
    text: ' הפגישה האישית איתך גרמה לי לתחושת בהירות, תודה על ההקשבה ועל הכלים לחיים חדשים שאני יוצאת אליהם ',
    rating: 5,
    highlight: 'שינוי נקודת מבט',
  },
  {
    id: 7,
    name: 'אנונימית ',
    location: 'בת ים ',
    text: ' זמן רב שחששתי להיפגש ובסוף זה קרה והצטערתי שלא עשיתי זאת לפני. תודה על האמון והפתיחות, יצאתי מחוזקת ורצון לפעול מתוך מודעות',
    rating: 5,
    highlight: '',
  },
  {
    id: 8,
    name: ' אביב',
    location: 'בת ים ',
    text: ` הרשי לי לצתת את הרצאתך "אור גדול מאיר הכל ויותר כבר לא צריך לשאול"...  `,
    rating: 5,
    highlight: 'הבנה חדשה על עצמי',
  },
  {
    id: 9,
    name: 'רחל כהן',
    location: 'תל אביב',
    text: 'ערב מדהים שהשאיר אותי עם כל כך הרבה השראה וחיבור למשמעות החיים. מתי יודעת לגעת בנשמה בדיוק במקום הנכון.',
    rating: 5,
    highlight: 'השראה אמיתית',
  },
  {
    id: 10,
    name: 'שרה לוי',
    location: 'ירושלים',
    text: 'לא ציפיתי שערב אחד יכול לשנות את כל נקודת המבט שלי על החיים. התובנות שקיבלתי מהנומרולוגיה פשוט מדהימות!',
    rating: 5,
    highlight: 'שינוי נקודת מבט',
  },
  {
    id: 11,
    name: 'מרים אברהם',
    location: 'חיפה',
    text: 'האווירה הייתה כל כך חמה ומקבלת, והתוכן עמוק ומשמעותי. בהחלט אחד הערבים הכי מיוחדים שהייתי בהם!',
    rating: 5,
    highlight: 'ערב מיוחד ביותר',
  },
  {
    id: 12,
    name: 'דבורה גולד',
    location: 'בני ברק',
    text: 'מתי הצליחה להסביר דברים מורכבים בצורה כל כך פשוטה וברורה. יצאתי מהערב עם הבנה חדשה על עצמי ועל הייעוד שלי.',
    rating: 5,
    highlight: 'הבנה חדשה על עצמי',
  },
  {
    id: 13,
    name: 'רוברטו',
    location: 'רמת גן',
    text: 'תודה על הרצאה סוחפת בה גילינו את משמעותם והשפעתם על חיינו, מרגש מסקרן ומדויק',
    rating: 5,
    highlight: 'השראה אמיתית',
  },
  {
    id: 14,
    name: 'שרה',
    location: 'בת ים',
    text: 'הפגישה האישית איתך גרמה לי לתחושת בהירות, תודה על ההקשבה ועל הכלים לחיים חדשים שאני יוצאת אליהם',
    rating: 5,
    highlight: 'שינוי נקודת מבט',
  },
  {
    id: 15,
    name: 'אנונימית',
    location: 'בת ים',
    text: 'זמן רב שחששתי להיפגש ובסוף זה קרה והצטערתי שלא עשיתי זאת לפני. תודה על האמון והפתיחות, יצאתי מחוזקת ורצון לפעול מתוך מודעות',
    rating: 5,
    highlight: '',
  },
  {
    id: 16,
    name: 'אביב',
    location: 'בת ים',
    text: `הרשי לי לצטט את הרצאתך "אור גדול מאיר הכל ויותר כבר לא צריך לשאול"...`,
    rating: 5,
    highlight: 'הבנה חדשה על עצמי',
  },
];

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  highlight: string;
}

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 2;
  if (width >= 768) return 1;
  return 1;
};

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      const visibleCount = getVisibleCount(windowWidth);
      const maxIndex = testimonials.length - visibleCount;
      if (currentIndex >= maxIndex) {
        setDirection(-1);
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (currentIndex <= 0) {
        setDirection(1);
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      } else {
        setCurrentIndex((prev) => prev + direction);
      }
    }, 5000);
    return () => {
      if (autoPlayRef.current !== undefined) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, windowWidth, direction, isAutoPlaying]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <>
      <div className='px-4 py-12  bg-[#F5E8CD] relative overflow-hidden'>
        <LayeredBackground />
        <div className='max-w-6xl mx-auto relative'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-4'>
              <span className='bg-gradient-to-r from-[#CAAB73] to-[#664c43] bg-clip-text text-transparent'>
                {' '}
                משוב ופירגון מלב אל לב
              </span>
            </h2>
            <p className='text-lg md:text-xl text-neutral-700'>
              חוויית המפגשים איתי ממלאים באנרגיה ועוצמה
            </p>
          </motion.div>

          <div className='relative'>
            <motion.div
              className='flex transition-transform'
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 2 ? 'lg:w-1/2' : 'w-full'
                  } p-2`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className='bg-white rounded-xl shadow-lg p-6 space-y-4 h-full'>
                    <div className='flex justify-between items-start'>
                      <Quote className='w-8 h-8 text-[#F5D9A5]' />
                      <div className='flex gap-1'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='w-5 h-5 fill-[#CAAB73] text-[#CAAB73]'
                          />
                        ))}
                      </div>
                    </div>

                    <p
                      dir='rtl'
                      className='text-neutral-700 text-base leading-relaxed italic'
                    >
                      "{testimonial.text}"
                    </p>

                    <div className='bg-[#F5D9A5] rounded-full px-4 py-1 w-fit'>
                      <span className='text-[#664c43] font-medium text-sm'>
                        {testimonial.highlight}
                      </span>
                    </div>

                    <div className='flex items-center gap-4 pt-4 border-t border-[#F5E8CD]'>
                      <div className='w-10 h-10 bg-[#CAAB73] rounded-full flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3b3b3b]'>
                          {testimonial.name}
                        </h4>
                        <p className='text-neutral-500 text-sm'>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className='flex justify-center gap-4 mt-8'>
              <button
                onClick={goPrev}
                disabled={!canGoPrev}
                className='p-2 rounded-full bg-white text-[#664c43] shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg disabled:opacity-40'
              >
                <ChevronRight className='rotate-180' />
              </button>
              <button
                onClick={goNext}
                disabled={!canGoNext}
                className='p-2 rounded-full bg-white text-[#664c43] shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg disabled:opacity-40'
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
  className="w-full h-[600px] relative  overflow-hidden"
  style={{
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #664c43 20%, #664c43 80%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, transparent 0%, #664c43 20%, #664c43 80%, transparent 100%)',
  }}
>
  <img
    src="/images/matiPart.jpg"
    alt="..."
    className="w-full h-full object-cover object-[center]"
  />
</div>

    </>
  );
}
