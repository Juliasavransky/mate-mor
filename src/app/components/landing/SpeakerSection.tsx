import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SpeakerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
            הכירי את 
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent"> מזל מתי מור</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            נומרולוגית קבלית מובילה, החיה בעולם המספרים מעל 30 שנה
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Speaker Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-[#F5D9A5] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for speaker photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-[#CAAB73] rounded-full flex items-center justify-center">
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `
      url('/images/Image3.jpeg')`,
    backgroundBlendMode: 'overlay',
  }}
></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#CAAB73] rounded-full opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#A4864F] rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* Speaker Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#3b3b3b]">נומרולוגית קבלית מוכרת</h3>
              
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  מזל מתי מור היא נומרולוגית קבלית מובילה, החיה ונושמת את עולם המספרים מעל 30 שנה. 
                  בעלת יכולת מיוחדת לחבר בין חכמת הקבלה לחיי היומיום.
                </p>
                
                <p>
                  דרך הרצאותיה המרגשות והמעמיקות, מתי מובילה נשים במסע של גילוי עצמי, 
                  הבנת המשמעות הפנימית של המספרים בחייהן, ויצירת חיבור עמוק יותר לבורא עולם.
                </p>

                <p>
                  "כל מספר מספר סיפור, וכל סיפור חושף את הייעוד הייחודי שלך" - מזל מתי מור
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}