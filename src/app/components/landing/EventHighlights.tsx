import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Heart, Camera, Utensils, Sparkles, Users, Clock, Star,HandHeart,Wand ,Zap,Gem,BookOpenText} from "lucide-react";
import { motion } from "framer-motion";
export default function EventHighlights() {
  const highlights = [
    { icon: Gift, title: "הפתעות  ", description: " ומתנות מפנקות כולל כיבוד טעים ועשיר" },
    { icon: Gem, title: "  אווירה חמה ", description: "בעוצמה נשית ייחודית " },
    { icon: BookOpenText, title: " סיפור חיים", description: "מעורר השראה מתוך אמונה, הודיה, מזל ותקווה 🙏" },
    { icon: Utensils, title: "אוכל עשיר ומפנק", description: "מבחר מטעמים מיוחדים ומשקאות חמים" },
    { icon: Camera, title: " אנרגיות שמחות ", description: " וזכרונות יפים שיתעודו על ידי צלמים מקצועיים " },
    { icon: Wand, title: " בערב זה בכל רגע יתרחש קסם ", description: "  מתחילתו ועד סיומו - אור גדול " }
  ];

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
            מה מחכה לך 
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent"> בערב מיוחד זה?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            ערב מלא באור, במשמעות ובהפתעות שיעשו את הלב שמח
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-[#F5E8CD]/30 h-full">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#A4864F] flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#3b3b3b] mb-3">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {highlight.description}
                    </p>
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
          className="mt-16 text-center"
        >
          <Card className="bg-[#CAAB73] border-none text-white max-w-6xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Clock className="w-8 h-8 mx-auto" />
                  <h4 className="text-xl font-bold"> שלוש שעות </h4>
                  <p className="text-[#F5E8CD]">של השראה והעשרה</p>
                </div>
                <div className="space-y-2">
                  <Star className="w-8 h-8 mx-auto" />
                  <h4 className="text-xl font-bold">אירוע חד פעמי</h4>
                  <p className="text-[#F5E8CD]">שלא יחזור שוב</p>
                </div>
                <div className="space-y-2">
                  <Heart className="w-8 h-8 mx-auto" />
                  <h4 className="text-xl font-bold">מהלב אל הלב</h4>
                  <p className="text-[#F5E8CD]">חוויה אותנטית ומרגשת</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}