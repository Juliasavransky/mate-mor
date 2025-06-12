import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Clock, AlertCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

type PricingSectionProps = {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onRegisterClick: () => void;
};

export default function PricingSection({ timeLeft, onRegisterClick }: PricingSectionProps) {
  const isEarlyBird = timeLeft.days >= 0;

  return (
    <section className="py-20 bg-[#F5E8CD]" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
            השקעה קטנה,
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent"> השפעה גדולה</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            ערב שישנה את נקודת המבט שלך על החיים במחיר מיוחד למרשמות מוקדם
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Early Bird Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-4 border-[#CAAB73] shadow-2xl relative overflow-hidden bg-white">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-[#A4864F] text-white px-6 py-2 rounded-bl-2xl">
                <span className="flex items-center gap-2 font-bold">
                  <Star className="w-4 h-4" />
                  הכי פופולרי
                </span>
              </div>

              <CardContent className="p-8 pt-16 text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#3b3b3b]">מחיר מוקדם</h3>
                  <Badge className="bg-[#F5D9A5] text-[#A4864F] border-none">
                    עד 12 ביולי 2025
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="text-6xl font-bold text-[#CAAB73]">
                    ₪93
                  </div>
                  <div className="text-neutral-500 line-through text-xl">₪129</div>
                  <p className="text-green-600 font-semibold text-lg">חיסכון של ₪36!</p>
                </div>

                {/* Countdown Timer */}
                {isEarlyBird && timeLeft.days !== undefined && (
                  <div className="bg-[#F5E8CD] rounded-xl p-4">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Timer className="w-5 h-5 text-[#A4864F]" />
                      <span className="font-bold text-[#A4864F]">נותר זמן:</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-[#F5D9A5] rounded-lg p-2">
                        <div className="text-2xl font-bold text-[#A4864F]">{timeLeft.days}</div>
                        <div className="text-xs text-neutral-600">ימים</div>
                      </div>
                      <div className="bg-[#F5D9A5] rounded-lg p-2">
                        <div className="text-2xl font-bold text-[#A4864F]">{timeLeft.hours}</div>
                        <div className="text-xs text-neutral-600">שעות</div>
                      </div>
                      <div className="bg-[#F5D9A5] rounded-lg p-2">
                        <div className="text-2xl font-bold text-[#A4864F]">{timeLeft.minutes}</div>
                        <div className="text-xs text-neutral-600">דקות</div>
                      </div>
                      <div className="bg-[#F5D9A5] rounded-lg p-2">
                        <div className="text-2xl font-bold text-[#A4864F]">{timeLeft.seconds}</div>
                        <div className="text-xs text-neutral-600">שניות</div>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={onRegisterClick}
                  className="w-full bg-[#CAAB73] hover:bg-[#A4864F] text-white py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  רישום מהיר במחיר מוקדם
                </Button>

                <div className="text-sm text-neutral-500 space-y-1">
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
            <Card className="shadow-xl border-[#F5D9A5] h-full opacity-75 bg-white">
              <CardContent className="p-8 text-center space-y-6 h-full flex flex-col justify-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-800">מחיר רגיל</h3>
                  <Badge variant="outline" className="border-[#A4864F] text-neutral-600">
                    מ-13 ביולי 2025
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="text-6xl font-bold text-neutral-700">₪129</div>
                  <p className="text-neutral-500">מחיר מלא</p>
                </div>

                <div className="bg-yellow-100/50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 text-yellow-700">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-semibold">אל תפספסי!</span>
                  </div>
                  <p className="text-yellow-600 text-sm mt-1">
                    חסכי ₪36 עם הרישום המוקדם
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-neutral-300 text-neutral-700 py-4 text-lg rounded-xl hover:bg-neutral-50"
                  disabled
                >
                  יהיה זמין בקרוב
                </Button>

                <div className="text-sm text-neutral-400 space-y-1">
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
          className="mt-12 text-center"
        >
          <Card className="bg-[#F5D9A5] border-[#CAAB73] max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 text-[#A4864F]">
                <AlertCircle className="w-6 h-6" />
                <h4 className="text-xl font-bold">רק ₪93 למרשמות עד 12 ביולי!</h4>
              </div>
              <p className="text-[#A4864F] mt-2">
                אל תפספסי את ההזדמנות לחסוך ₪36 ולהבטיח את מקומך בערב המיוחד הזה
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}