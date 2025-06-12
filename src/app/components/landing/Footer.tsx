import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
              <Heart className="w-5 h-5 text-yellow-400" />
              מסע החיים שלי
            </h3>
            <p className="text-purple-200 leading-relaxed">
              ערב חד-פעמי ומרגש עם מזל מתי מור. ערב של השראה, חיבור וצמיחה רוחנית.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              פרטי קשר
            </h4>
            <div className="space-y-2 text-purple-200">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>050-123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mylifesjourney.co.il</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>אשכול פיס בת ים</span>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              פרטי האירוע
            </h4>
            <div className="space-y-2 text-purple-200">
              <p>יום ראשון, 14 בספטמבר 2025</p>
              <p>18:00 - 21:00</p>
              <p className="font-semibold text-yellow-400">כרטיס מוקדם: 93 ₪</p>
              <p className="text-sm">(עד 12 ביולי 2025)</p>
            </div>
          </div>
        </div>

        <hr className="border-purple-300/30 mb-6" />

        <div className="flex justify-center text-purple-300">
          <p className="mb-2">© 2025 כל הזכויות שמורות - מסע החיים שלי</p>
          <p className="text-sm">ניתן לבטל עד 48 שעות לפני האירוע לקבלת החזר מלא.</p>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
