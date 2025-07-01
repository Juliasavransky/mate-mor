import { UiFooter } from '../../../components/ui/footer';
import logo from '../../../../public/images/logoWhite.svg';

const Footer = () => {
  return (
    <div dir="rtl" className='w-full bg-[#664c43]'>
      <UiFooter 
        logo={<img src={logo.src} alt='Logo' className='h-48 w-96 object-scale-down ' />}
               brandName=""

        socialLinks={[
          {
            icon: <img src="/facebook.svg" alt="Facebook" className="h-10 w-10" />,
            href: 'https://facebook.com/mate.mor',
            label: 'Facebook',
          },
          {
            icon: <img src="/instagram.svg" alt="Instagram" className="h-10 w-10" />,
            href: 'https://instagram.com/mate.mor',
            label: 'Instagram',
          },
          {
            icon: <img src="/images/whatsappWhite.svg" alt="Whatsapp" className="h-10 w-10" />,
            href: 'https://wa.me/972544591175',
            label: 'Whatsapp',
          },
             {
            icon: <img src="../../../../public/mail.svg" alt="Whatsapp" className="h-10 w-10" />,
            href: 'https://wa.me/972544591175',
            label: 'Whatsapp',
          },
             {
            icon: <img src="/images/whatsappWhite.svg" alt="Whatsapp" className="h-10 w-10" />,
            href: 'https://wa.me/972544591175',
            label: 'Whatsapp',
          },
        ]}
        mainLinks={[
          { href: '/about', label: 'About' },
          { href: '/eventHighlights', label: 'Event details' },
          { href: '/registrationForm', label: 'Registration Form' },
          { href: '/socialSection', label: 'Contact' },
        ]}
        legalLinks={[
          { href: '/privacy', label: '' },
          { href: '/terms', label: '' },
        ]}
        copyright={{
          text: '© 2025 web-witch מתי מור',
          license: 'All rights reserved',
        }}
      />
    </div>
  );
};

export default Footer;


// <footer className="bg-[#664c43] text-black py-12">
//   <div className="max-w-6xl mx-auto px-6">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//       {/* Event Info */}
//       <div className="text-center md:text-right">
//         <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
//           <Heart className="w-5 h-5 text-yellow-400" />
//           מסע החיים שלי
//         </h3>
//         <p className="text-purple-200 leading-relaxed">
//           ערב חד-פעמי ומרגש עם מזל מתי מור. ערב של השראה, חיבור וצמיחה רוחנית.
//         </p>
//       </div>

//       {/* Contact Info */}
//       <div className="text-center">
//         <h4 className="text-lg font-semibold mb-4 text-yellow-400">
//           פרטי קשר
//         </h4>
//         <div className="space-y-2 text-purple-200">
//           <div className="flex items-center justify-center gap-2">
//             <Phone className="w-4 h-4" />
//             <span>050-123-4567</span>
//           </div>
//           <div className="flex items-center justify-center gap-2">
//             <Mail className="w-4 h-4" />
//             <span>info@mylifesjourney.co.il</span>
//           </div>
//           <div className="flex items-center justify-center gap-2">
//             <MapPin className="w-4 h-4" />
//             <span>אשכול פיס בת ים</span>
//           </div>
//         </div>
//       </div>

//       {/* Event Details */}
//       <div className="text-center md:text-left">
//         <h4 className="text-lg font-semibold mb-4 text-yellow-400">
//           פרטי האירוע
//         </h4>
//         <div className="space-y-2 text-purple-200">
//           <p>יום ראשון, 14 בספטמבר 2025</p>
//           <p>18:00 - 21:00</p>
//           <p className="font-semibold text-yellow-400">כרטיס מוקדם: 93 ₪</p>
//           <p className="text-sm">(עד 12 ביולי 2025)</p>
//         </div>
//       </div>
//     </div>

//     <hr className="border-purple-300/30 mb-6" />

//     <div className="flex justify-center text-purple-300">
//       <p className="mb-2">© 2025 כל הזכויות שמורות - מסע החיים שלי</p>
//       <p className="text-sm">ניתן לבטל עד 48 שעות לפני האירוע לקבלת החזר מלא.</p>

//     </div>
//   </div>
// </footer>
