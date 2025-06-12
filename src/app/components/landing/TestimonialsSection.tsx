
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "רחל כהן",
      location: "תל אביב",
      text: "ערב מדהים שהשאיר אותי עם כל כך הרבה השראה וחיבור למשמעות החיים. מתי יודעת לגעת בנשמה בדיוק במקום הנכון.",
      rating: 5,
      highlight: "השראה אמיתית"
    },
    {
      name: "שרה לוי",
      location: "ירושלים",
      text: "לא ציפיתי שערב אחד יכול לשנות את כל נקודת המבט שלי על החיים. התובנות שקיבלתי מהנומרולוגיה פשוט מדהימות!",
      rating: 5,
      highlight: "שינוי נקודת מבט"
    },
    {
      name: "מרים אברהם",
      location: "חיפה",
      text: "האווירה הייתה כל כך חמה ומקבלת, והתוכן עמוק ומשמעותי. בהחלט אחד הערבים הכי מיוחדים שהייתי בהם!",
      rating: 5,
      highlight: "ערב מיוחד ביותר"
    },
    {
      name: "דבורה גולד",
      location: "בני ברק",
      text: "מתי הצליחה להסביר דברים מורכבים בצורה כל כך פשוטה וברורה. יצאתי מהערב עם הבנה חדשה על עצמי ועל הייעוד שלי.",
      rating: 5,
      highlight: "הבנה חדשה על עצמי"
    }
  ];

  return (
    <section className="py-20 bg-[#F5E8CD]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
            מה אומרות הנשים 
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent"> על מתי?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            עשרות נשים כבר חוו את הכוח המשנה חיים של הערבים של מתי
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white">
                <CardContent className="p-8 space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-[#F5D9A5]" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#CAAB73] text-[#CAAB73]" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-neutral-700 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Highlight Badge */}
                  <div className="bg-[#F5D9A5] rounded-full px-4 py-2 w-fit">
                    <span className="text-[#A4864F] font-medium text-sm">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#F5E8CD]">
                    <div className="w-12 h-12 bg-[#CAAB73] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3b3b3b]">{testimonial.name}</h4>
                      <p className="text-neutral-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="bg-[#A4864F] border-none text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">דירוג ממוצע</h3>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-[#CAAB73] text-[#CAAB73]" />
                  ))}
                </div>
                <p className="text-xl font-semibold">5.0 מתוך 5</p>
                <p className="text-[#F5E8CD]">מבוסס על 50+ ביקורות מנשים מרוצות</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
