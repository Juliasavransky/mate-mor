import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, MessageCircle, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialSection() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@mazal_mati_mor",
      description: "עקבי אחרי להשראה יומיומית ותובנות נומרולוגיות",
      color: "#A4864F",
      url: "#"
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "מזל מתי מור - נומרולוגיה קבלית",
      description: "הצטרפי לקהילה של נשים מעוררות השראה",
      color: "#A4864F",
      url: "#"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      handle: "052-1234567",
      description: "צרי קשר ישיר לשאלות ויעוץ אישי",
      color: "#A4864F",
      url: "#"
    }
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
            בואי נישאר 
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent"> בקשר</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            הצטרפי לקהילה שלנו לתכנים מעוררי השראה ועדכונים על אירועים עתידיים
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-[#F5E8CD]/40 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: social.color }}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#3b3b3b]">
                        {social.name}
                      </h3>
                      
                      <p className="text-neutral-700 font-medium">
                        {social.handle}
                      </p>
                      
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        {social.description}
                      </p>
                    </div>

                    <Button
                      className="w-full text-white font-semibold py-3 rounded-xl transition-all duration-300"
                      style={{ backgroundColor: social.color }}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      עקבי עכשיו
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-[#F5D9A5] border-none max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Share2 className="w-8 h-8 text-[#A4864F] mx-auto" />
                <h3 className="text-2xl font-bold text-[#3b3b3b]">ספרי לחברות שלך!</h3>
                <p className="text-neutral-600">
                  ערב כזה מיוחד צריך להיחלק עם האנשים שאוהבים אותך
                </p>
                <Button
                  variant="outline"
                  className="border-[#A4864F] text-[#A4864F] hover:bg-[#F5E8CD]"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'מסע החיים שלי - ערב מיוחד עם מזל מתי מור',
                        text: 'הצטרפי אליי לערב מרגש של גילוי עצמי והשראה!',
                        url: window.location.href
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